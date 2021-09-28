import { useState } from 'react'
import { Trans } from '@lingui/macro'
import styled, { ThemeContext } from 'styled-components/macro'
import { AutoColumn, ColumnCenter } from 'components/Column'
import { CommItem } from 'components/Commodity/CommItem'
import AudioPlay from 'components/AudioPlay'
import BannerRotation from 'components/Banner'
import { Link } from 'react-router-dom'
import { Link as Links } from 'react-feather'

import Audio from 'assets/img/audio.png'
import Bg from 'assets/img/bg.png'

const HomeWrapper = styled(ColumnCenter)`
  width: 100%;
`
const CarouselOption = styled(AutoColumn)`
  width: 100%;
  height: 22.5rem;
  display: flex;
`
const ModelWrapper = styled.div`
  width: 100%;
`
const VoiceWrapper = styled.div`
  width: 100%;
`
const AudioColumn = styled(ColumnCenter)`
  /* width: 100%; */
  padding: 43px 0px;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text1};
`

const AudioListWrapper = styled(AutoColumn)`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 3.125rem;
  padding-bottom: 30px;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    overflow-x: hidden;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    overflow-x: scroll;
    grid-column-gap: 1.25rem;
  `}
`
const Mores = styled.div`
  display: flex;
  justify-content: flex-end;
  /* width: 100%; */
  padding: 40px 0;
`
const OnLink = styled.a`
  padding-right: 5px;
  color: ${({ theme }) => theme.yellow1};
`
const LinkIcon = styled(Links)`
  color: ${({ theme }) => theme.yellow1};
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
  color: ${({ theme }) => theme.text1};
`
const DescInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
const InfoBold = styled.span`
  color: ${({ theme }) => theme.text2};
`
const InfoLighter = styled.span`
  color: ${({ theme }) => theme.text3};
`

const DescSc = ({ item }: any) => {
  return (
    <DescWarpper>
      <DescTitle>{item.name}</DescTitle>
      <DescInfo>
        <InfoBold>{item.audioName}</InfoBold>
        <InfoBold>
          <Trans>Fixed Price</Trans>
        </InfoBold>
      </DescInfo>
      <DescInfo>
        <InfoLighter>
          <Trans> Author </Trans>
          {item.author}
        </InfoLighter>
        <InfoBold>{item.usdt}</InfoBold>
      </DescInfo>
    </DescWarpper>
  )
}
export default function Home() {
  const obj = [
    {
      name: 'Project Name1',
      audioName: 'Audio Name1',
      usdt: '99.99',
      author: 'Rowen',
      bg: Bg,
      audio: Audio,
    },
    {
      name: 'Project Name2',
      audioName: 'Audio Name2',
      usdt: '99.99',
      author: 'Rowen',
      bg: Bg,
      audio: Audio,
    },
    {
      name: 'Project Name3',
      audioName: 'Audio Name3',
      usdt: '99.99',
      author: 'Rowen',
      bg: Bg,
      audio: Audio,
    },
    {
      name: 'Project Name4',
      audioName: 'Audio Name4',
      usdt: '99.99',
      author: 'Rowen',
      bg: Bg,
      audio: Audio,
    },
  ]
  const [state, setstate] = useState(false)
  return (
    <>
      <HomeWrapper>
        <BannerRotation>
          <CarouselOption>
            <img
              src="https://img2.baidu.com/it/u=2371927661,1630248753&fm=253&fmt=auto&app=120&f=JPEG?w=906&h=500"
              alt=""
            />
          </CarouselOption>
          <CarouselOption>
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2F0088S5QUly4gtvh83gqmzj30zk0k0n1l.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634978594&t=41fbf477171da8d60c1741bc627b233b"
              alt=""
            />
          </CarouselOption>
          <CarouselOption>
            <img
              src="https://img1.baidu.com/it/u=882223627,3636612971&fm=253&fmt=auto&app=120&f=JPEG?w=899&h=500"
              alt=""
            />
          </CarouselOption>
          <CarouselOption>
            <img
              src="https://img2.baidu.com/it/u=2420616170,1211416176&fm=253&fmt=auto&app=120&f=PNG?w=513&h=316"
              alt=""
            />
            <img
              src="https://img1.baidu.com/it/u=2448931957,2683350737&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=303"
              alt=""
            />
          </CarouselOption>
        </BannerRotation>
        <ModelWrapper>
          <AudioColumn>
            <Trans>Model NFT</Trans>
          </AudioColumn>
          <AudioListWrapper></AudioListWrapper>
        </ModelWrapper>
        <VoiceWrapper>
          <AudioColumn>
            <Trans>Voice NFT</Trans>
          </AudioColumn>
          <AudioListWrapper justify="center">
            {obj.map((item) => {
              return (
                <CommItem
                  key={item.audioName}
                  audio={item.audio}
                  bg={item.bg}
                  onClick={() => {
                    setstate(!state)
                    console.log(state)
                  }}
                >
                  <DescSc item={item} />
                </CommItem>
              )
            })}
          </AudioListWrapper>
          <Mores>
            <OnLink as={Link} to="/market">
              <Trans>More</Trans>
            </OnLink>
            <LinkIcon size={'24'} />
          </Mores>
        </VoiceWrapper>
      </HomeWrapper>
      <AudioPlay src="http://111.231.94.173:80/files//201909261419/16b2d43c3312469c84c08684b552b3ff.m4a?productPk=1177105366291316736&productType=2" />
    </>
  )
}
