import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components/macro'
import { Play, Pause } from 'react-feather'

interface Props {
  src: string
}

const AudioWapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.bg0};
  color: ${({ theme }) => theme.text1};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column-reverse;
  `}
`
const SliderWapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
  `};
`

const SliderInput = styled.input`
  &[type='range'] {
    flex: 1;
    -webkit-appearance: none; /*去除默认样式*/
    background-color: #ebeff4;
    -webkit-appearance: none;
    height: 4px;
    padding: 0;
    border: none;
    &::-webkit-slider-thumb {
      cursor: pointer;
      -webkit-appearance: none; /*去除默认样式*/
      cursor: default;
      top: 0;
      height: 10px;
      width: 10px;
      background: ${({ theme }) => theme.text1};
      cursor: pointer;
      border-radius: 15px;
    }
  }
`
const SliderTime = styled.div`
  font-size: 12px;
  padding: 0px 10px;
  color: ${({ theme }) => theme.text1};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: flex;
    justify-content: space-between;
  `}
`
const Time = styled.span`
  min-width: 50px;
  text-align: center;
  &:last-child {
    padding-left: 0.3125rem;
  }
`
const PlayIcon = styled(Play)`
  padding: 2px 2px 2px 3px;
  cursor: pointer;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg0};
  :hover,
  :active,
  :focus {
    text-decoration: none;
    color: ${({ theme }) => theme.text2};
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 30px;
    height: 30px;
  `}
`
const PauseIcon = styled(Pause)`
  padding: 2px;
  cursor: pointer;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg0};
  :hover,
  :active,
  :focus {
    text-decoration: none;
    color: ${({ theme }) => theme.text2};
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 30px;
    height: 30px;
  `}
`
export function Audio({ src, status, setStatus }: { src: string; status: boolean; setStatus: () => void }) {
  const audioDomRef = useRef<{ current: HTMLAudioElement } | any>(null)
  useEffect(() => {
    if (status) {
      audioDomRef.current.play()
    } else {
      audioDomRef.current.pause()
    }
  }, [status])

  useEffect(() => {
    audioDomRef.current.addEventListener('ended', setStatus)
  }, [audioDomRef.current])
  return (
    <audio src={src} ref={audioDomRef} preload={'auto'} controlsList="nodownload">
      <track src={src} kind="captions" />
    </audio>
  )
}
export default function AudioPlay({ src }: Props) {
  const [isPlay, setIsPlay] = useState(false)
  // const [isMuted, setIsMuted] = useState(false)
  // const [volume, setVolume] = useState(100)
  const [allTime, setAllTime] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioDomRef = useRef<{ current: HTMLAudioElement } | any>(null)

  const formatSecond = (time: number) => {
    const second = Math.floor(time % 60)
    const minite = Math.floor(time / 60)
    return `${minite}:${second >= 10 ? second : `0${second}`}`
  }
  // 该视频已准备好开始播放
  const onCanPlay = () => {
    setAllTime(audioDomRef.current.duration)
  }

  const playAudio = () => {
    audioDomRef.current.play()
    setIsPlay(true)
  }

  const pauseAudio = () => {
    audioDomRef.current.pause()
    setIsPlay(false)
  }

  // const onMuteAudio = () => {
  //   setIsMuted(!audioDomRef.current.muted)
  //   audioDomRef.current.muted = !audioDomRef.current.muted
  // }

  const changeTime = (e: { target: { value: any } }) => {
    const { value } = e.target
    setCurrentTime(value)
    audioDomRef.current.currentTime = value
    if (value === audioDomRef.current.duration) {
      setIsPlay(false)
    }
  }

  // 当前播放位置改变时执行
  const onTimeUpdate = () => {
    setCurrentTime(audioDomRef.current.currentTime)
    if (audioDomRef.current.currentTime === audioDomRef.current.duration) {
      setIsPlay(false)
    }
  }

  // const changeVolume = (e: { target: { value: any } }) => {
  //   const { value } = e.target
  //   console.log(value, audioDomRef.current.volume)

  //   audioDomRef.current.volume = value / 100
  //   console.log(audioDomRef.current.volume)
  //   setVolume(value)
  //   setIsMuted(!value)
  // }

  // // 倍速播放
  // const changePlayRate = (num: number) => {
  //   audioDomRef.current.playbackRate = num
  //   setPlayRate(num)
  // }
  return (
    <AudioWapper>
      <audio
        src={src}
        ref={audioDomRef}
        preload={'auto'}
        controlsList="nodownload"
        onCanPlay={onCanPlay}
        onTimeUpdate={onTimeUpdate}
      >
        <track src={src} kind="captions" />
      </audio>
      {isPlay ? <PauseIcon size={20} onClick={pauseAudio} /> : <PlayIcon size={20} onClick={playAudio} />}

      <SliderWapper>
        <SliderInput type="range" step="0.01" max={allTime} value={currentTime} onChange={changeTime} />
        {/* <SliderInput sx={{ bg: 'primary' }} /> */}
        <SliderTime>
          <Time>{formatSecond(currentTime)}</Time>
          <Time>{formatSecond(allTime)}</Time>
        </SliderTime>
      </SliderWapper>
    </AudioWapper>
  )
}
