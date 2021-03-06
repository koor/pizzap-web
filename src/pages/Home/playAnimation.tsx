import { useCallback, useState } from 'react'
import styled, { keyframes } from 'styled-components/macro'
import { Audio } from 'components/AudioPlay'

import lastBg from '../../assets/img/animation.svg'
import play_bg from '../../assets/img/play_bg.svg'
import play from '../../assets/img/play.svg'
import gesture from '../../assets/img/gesture.svg'
import firstBg from '../../assets/img/audition.svg'
const AnimationWrapper = styled.div`
  position: relative;
  margin: 50px 0;
`
const rotate360 = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`
const LastImgWrapper = styled.img<{ sports: boolean }>`
  animation: ${rotate360} 10s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  animation-play-state: ${({ sports }) => (sports ? 'running' : 'paused')};
`
const PlayWrapper = styled.div`
  width: 173px;
  height: 173px;
  position: absolute;
  background: url(${play_bg}) center center / cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  & > img {
    width: 98px;
    height: 99px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`
const HandImg = styled.img`
  position: absolute;
  bottom: 36px;
  right: 0;
`

const First = styled.img`
  position: absolute;
  bottom: -15px;
  right: -26px;
`
export default function PlayAnimation() {
  const [audioStatus, setAudioStatus] = useState(false)
  const changeAudio = useCallback(() => {
    console.log('changeAudio')

    setAudioStatus(!audioStatus)
  }, [audioStatus])

  return (
    <AnimationWrapper>
      <LastImgWrapper src={lastBg} sports={audioStatus} />
      <PlayWrapper onClick={changeAudio}>
        <img src={play} alt={'Play'} />
      </PlayWrapper>
      {/* https://music.163.com/song/media/outer/url?id=411214279.mp3 */}
      <Audio
        src={'https://service.pp-voice.com/media/documents/2021/10/14/output.wav'}
        status={audioStatus}
        setStatus={changeAudio}
      />
      <HandImg src={gesture} alt={'Tap gesture'} />
      <First src={firstBg} alt={'Audition'} />
    </AnimationWrapper>
  )
}
