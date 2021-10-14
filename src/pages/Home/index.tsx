import { useState } from 'react'
import { Trans } from '@lingui/macro'
import { Link } from 'react-router-dom'
import { Link as Links } from 'react-feather'
import styled from 'styled-components/macro'
import { AutoColumn, ColumnCenter } from 'components/Column'
import { CommItem } from 'components/Commodity/CommItem'
import AudioPlay from 'components/AudioPlay'
import PlayAnimation from './playAnimation'

import Audio from 'assets/img/audio.png'
import Bg from 'assets/img/bg.png'
import BannerBg from 'assets/img/banner.png'
import ModelNftBg from 'assets/img/model_nft.png'
import Down from 'assets/img/down.svg'
import modelSubTitle from 'assets/img/model_subtitle.svg'
import { PrimaryButton } from 'components/Button'

const IconWrapper = styled.div<{ width?: number; height?: number }>`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  & > * {
    height: ${({ height }) => (height ? height + 'px' : '32px')};
    width: ${({ width }) => (width ? width + 'px' : '32px')};
  }
`

const Text = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0.5rem 0 0.25rem;
  width: fit-content;
  font-weight: bold;
`

const HomeWrapper = styled(ColumnCenter)`
  width: 100%;
`
const BannerWrapper = styled(ColumnCenter)`
  position: relative;
  height: 700px;
  background: url(${BannerBg}) center center / cover;
`
const BannerWrapperOption = styled(ColumnCenter)`
  width: 70%;
  text-align: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`
const BannerWrapperTitle = styled.span`
  font-size: 3rem;
  color: ${({ theme }) => theme.text1};
  font-weight: 600;
`
const BannerWrapperDesc = styled.span`
  margin-top: 48px;
  font-size: 2rem;
  color: ${({ theme }) => theme.text1};
  font-weight: 400;
`
const BannerWrapperDown = styled(IconWrapper)`
  position: absolute;
  bottom: -1.875rem;
`
const ModelWrapper = styled(ColumnCenter)`
  background: url(${ModelNftBg}) center center / cover;
`

const AudioColumn = styled(ColumnCenter)`
  font-size: 2.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text1};
`
const ModelOption = styled(ColumnCenter)`
  width: auto;
  padding: 45px 0px 34px 0px;
  text-align: center;
`
const ModelOptionSub = styled.div`
  margin-top: 50px;
`
const SubText = styled.span`
  font-size: 34px;
  font-weight: bold;
  color: ${({ theme }) => theme.text1};
`
const ModelFooterOption = styled(ColumnCenter)``
const FooterOptionTitle = styled.span`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text1};
`
const FooterOptionButton = styled(PrimaryButton)`
  margin-top: 30px;
  border: unset;
`
const OptionButtonText = styled(Text)`
  font-size: 1.5rem;
`
const ExclusiveWrapper = styled(ColumnCenter)``
const ExclusiveOption = styled.div`
  padding: 35px 0;
  width: 100%;
`
const VoiceWrapper = styled.div`
  width: 100%;
`

const AudioListWrapper = styled(AutoColumn)`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 3.125rem;
  padding: 50px;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    overflow-x: hidden;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    overflow-x: auto;
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
        <BannerWrapper>
          <BannerWrapperOption>
            <BannerWrapperTitle>
              <Trans>COLLECT UNIQUE INTERESTING DIGITAL COLLECTIBLES</Trans>
            </BannerWrapperTitle>
            <BannerWrapperDesc>
              <Trans>Create Buy Sell Limited Edition Digital Collectibles</Trans>
            </BannerWrapperDesc>
          </BannerWrapperOption>
          <BannerWrapperDown width={290} height={250}>
            <img src={Down} alt={'Down'} />
          </BannerWrapperDown>
        </BannerWrapper>
        <ModelWrapper>
          <ModelOption>
            <AudioColumn>
              <Trans>Model NFT</Trans>
            </AudioColumn>
            <ModelOptionSub>
              <IconWrapper width={347} height={25}>
                <img src={modelSubTitle} alt={'Explore Collection Production'} />
              </IconWrapper>
              <SubText>
                <Trans>Valuable VOICE NFT</Trans>
              </SubText>
            </ModelOptionSub>
            <PlayAnimation />
            <ModelFooterOption>
              <FooterOptionTitle>
                <Trans>It’s inevitable</Trans>
              </FooterOptionTitle>
              <FooterOptionButton>
                <OptionButtonText>
                  <Trans>STARTING CREATING</Trans>
                </OptionButtonText>
              </FooterOptionButton>
            </ModelFooterOption>
          </ModelOption>
        </ModelWrapper>
        <ExclusiveWrapper>
          <ExclusiveOption>
            <AudioColumn>
              <Trans>Exclusive Offer</Trans>
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
          </ExclusiveOption>
        </ExclusiveWrapper>
        <VoiceWrapper>
          <AudioColumn>
            <Trans>Voice NFT</Trans>
          </AudioColumn>
          <AudioListWrapper justify="center">
            <div style={{ marginLeft: 200 }}>
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
            </div>
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
