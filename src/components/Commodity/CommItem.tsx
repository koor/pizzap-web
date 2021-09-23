import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'

const CommodityWrapper = styled.div`
  background: hsl(0deg 2% 93%);
  margin: 20px;
  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    box-shadow: 5px 9px 10px 4px rgba(0, 0, 0, 0.16);
  }
`

const AudioItem = styled.div`
  position: relative;
  align-items: center;
  padding: 30px 10px 50px 10px;
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
  ${({ theme }) => theme.mediaWidth.upToMedium`
    // width: 200px;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 200px;
  `}
`
const ItemBg = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  /* filter: blur(10px); */
`

const DescWarpper = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  & > div:nth-child(1n + 1) {
    padding-top: 5px;
  }
`
const DescTitle = styled.span`
  color: hsla(0, 0%, 44%, 1);
`
const DescInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
const InfoBold = styled.span`
  color: hsla(0, 0%, 0%, 1);
`
const InfoLighter = styled.span`
  color: hsla(0, 0%, 44%, 1);
`

export function CommItem({
  name,
  audioName,
  usdt,
  author,
  bg,
  audio,
}: {
  name: string | undefined
  audioName: string | undefined
  usdt: string | undefined
  author: string | undefined
  bg: string | undefined
  audio: string | undefined
}) {
  return (
    <CommodityWrapper>
      <AudioItem>
        <ItemImg src={audio} />
        <ItemBg style={{ background: `url(${bg}) center center / cover` }} />
      </AudioItem>
      <DescWarpper>
        <DescTitle>{name}</DescTitle>
        <DescInfo>
          <InfoBold>{audioName}</InfoBold>
          <InfoBold>
            <Trans>Fixed Price</Trans>
          </InfoBold>
        </DescInfo>
        <DescInfo>
          <InfoLighter>
            <Trans> Author </Trans>
            {author}
          </InfoLighter>
          <InfoBold>{usdt}</InfoBold>
        </DescInfo>
      </DescWarpper>
    </CommodityWrapper>
  )
}
