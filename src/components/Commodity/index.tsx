import { ColumnCenter } from 'components/Column'
import { ReactNode } from 'react'
import styled, { DefaultTheme } from 'styled-components/macro'
import Play_bg from '../../assets/img/play_bg.svg'
import Play from '../../assets/img/play.svg'
// import Pause from 'assets/img/pause.svg'
import PictureBg from 'assets/img/picture_bg.svg'

const CommodityWrapper = styled(ColumnCenter)`
  background-color: ${({ theme }) => theme.bg7};
  border-radius: 4px;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.16);
  :hover,
  :focus {
    cursor: pointer;
    outline: none;
  }
`
const AudioOption = styled.div`
  width: 100%;
  padding: 16px 13px 10px 13px;
`
const AudioItem = styled.div`
  position: relative;
  width: 100%;
  height: 262px;
  & > img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 96%;
  }
`
const PlayWrapper = styled.div`
  width: 161px;
  height: 161px;
  position: absolute;
  background: url(${Play_bg}) center center / cover;
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
export function CommItem({
  children,
  bg,
  audio,
  music,
  onClick,
}: {
  children?: ReactNode
  bg?: string | undefined
  audio?: string | undefined
  music?: string | undefined
  onClick: () => void
}) {
  return (
    <>
      <CommodityWrapper onClick={onClick}>
        <AudioOption>
          <AudioItem style={{ background: `url(${bg}) center center / cover` }}>
            <img src={music} alt={'Music'} />
            <PlayWrapper>
              <img src={Play} alt={'Play'} />
              {/* <img src={Pause} alt={'Pause'} /> */}
            </PlayWrapper>
          </AudioItem>
        </AudioOption>
        {children}
      </CommodityWrapper>
    </>
  )
}

const PictureWrapper = styled.div`
  background: url(${PictureBg}) center center / cover;
`
const PictureOption = styled.div`
  width: 100%;
  padding: 16px 13px 10px 13px;
`
const PictureImgWrapper = styled.div`
  background: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
`
const PictureImg = styled.img`
  height: 407px;
`
export function PictureItem({
  children,
  url,
  onClick,
}: {
  children?: ReactNode
  url?: string | undefined
  onClick: () => void
}) {
  return (
    <>
      <PictureWrapper onClick={onClick}>
        <PictureOption>
          <PictureImgWrapper>
            <PictureImg src={url} alt={'Photo'} />
          </PictureImgWrapper>
        </PictureOption>
        {children}
      </PictureWrapper>
    </>
  )
}

const PictureSaleImg = styled.img`
  height: 260px;
`
export function PictureSaleItem({
  children,
  url,
  onClick,
  style,
}: {
  children?: ReactNode
  url?: string | undefined
  onClick: () => void
  style?: any
}) {
  return (
    <>
      <CommodityWrapper onClick={onClick} style={style}>
        <PictureOption>
          <PictureImgWrapper>
            <PictureSaleImg src={url} alt={'Photo'} />
          </PictureImgWrapper>
        </PictureOption>
        {children}
      </CommodityWrapper>
    </>
  )
}
