import { ReactNode } from 'react'
import styled from 'styled-components/macro'
import { PlayCircle } from 'react-feather'

const CommodityWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg0};
  border-radius: 4px;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.16);
  :hover,
  :focus {
    cursor: pointer;
    outline: none;
  }
`

const AudioItem = styled.div`
  position: relative;
  align-items: center;
  padding: 40px 10px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 90%;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `}
`

const ItemImg = styled.img`
  position: relative;
  /* height: 200px; */
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`
const PlayIcon = styled(PlayCircle)`
  color: #ffffff;
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`
const ItemBg = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  filter: blur(2px);
`

export function CommItem({
  children,
  bg,
  audio,
  onClick,
}: {
  children?: ReactNode
  bg: string | undefined
  audio: string | undefined
  onClick: () => void
}) {
  return (
    <>
      <CommodityWrapper onClick={onClick}>
        <AudioItem>
          <ItemImg src={audio} />
          <PlayIcon size={'100'} />
          <ItemBg style={{ background: `url(${bg}) center center / cover` }} />
        </AudioItem>
        {children}
      </CommodityWrapper>
    </>
  )
}
