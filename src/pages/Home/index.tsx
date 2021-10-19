import { useState, useContext } from 'react'
import { Trans } from '@lingui/macro'
import { darken } from 'polished'
// import { Link } from 'react-router-dom'
// import { Link as Links } from 'react-feather'
import styled, { ThemeContext } from 'styled-components/macro'
import { ColumnCenter, AutoColumn } from 'components/Column'
import { CommItem, PictureItem, PictureSaleItem } from 'components/Commodity'
import PlayAnimation from './playAnimation'
import { PrimaryButton, ButtonExplore } from 'components/Button'
import { ModeCarousel, PaginationCarousel, SwiperSlide } from 'components/Banner'

import Music from 'assets/img/music.svg'
import Music_white from 'assets/img/music_white.svg'
import Down from 'assets/img/down.svg'
import ModelSubTitle from 'assets/img/model_subtitle.svg'
import icon_1 from 'assets/img/icon-1.svg'
import icon_2 from 'assets/img/icon-2.svg'
import icon_3 from 'assets/img/icon-3.svg'

import OfferProduct from 'assets/img/item.png'
import VoiceProduct from 'assets/img/voice.png'
import BannerBg from 'assets/img/banner.png'
import ModelNftBg from 'assets/img/model_nft.png'
import Usdt from 'assets/img/token/usdt.png'
import OfferOne from 'assets/img/offerOne.png'
import OfferTwo from 'assets/img/offerTwo.png'
import OfferingBg from 'assets/img/offering_bg.png'

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
const VoiceWrapper = styled(ColumnCenter)``
const VoiceOption = styled.div`
  padding: 25px 0;
  width: 100%;
`

const AudioListWrapper = styled.div`
  padding: 50px 0;
`
// const Mores = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   /* width: 100%; */
//   padding: 40px 0;
// `
// const OnLink = styled.a`
//   padding-right: 5px;
//   color: ${({ theme }) => theme.yellow1};
// `
// const LinkIcon = styled(Links)`
//   color: ${({ theme }) => theme.yellow1};
// `

const DescWarpper = styled.div`
  padding: 0px 13px 13px 13px;
  display: flex;
  flex-direction: column;
  width: 100%;
`
const DescTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text1};
`
const DescInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`
const DescFooter = styled.div`
  width: 100%;
  padding: 10px 13px;
  display: flex;
  justify-content: space-between;
  background: #483b3e;
`
const DescFooterText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => darken(0.5, theme.primaryText2)};
`
const InfoBold = styled.span<{ color?: string | null }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, color }) => (color ? color : theme.text1)};
`
const InfoLighter = styled.div`
  display: flex;
  align-items: center;
`
const LighterText = styled.span`
  font-size: 16px;
  font-weight: bold;
  padding-left: 4px;
  color: ${({ theme }) => theme.text1};
`
const Img = styled.img`
  width: 16px;
  height: 16px;
`

const ExclusiveFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 62%;
  margin: auto;
`

const ExclusiveFooterAdvertise = styled.div`
  position: relative;
  height: 227px;
  &:last-child {
    margin-left: 23px;
  }
`
const AdvertiseWarpper = styled.div`
  margin: 74px 50px 43px 50px;
  text-align: center;
`
const AdvertiseText = styled.span`
  font-size: 21px;
  color: ${({ theme }) => theme.text7};
`
const AdvertiseButton = styled(ButtonExplore)`
  width: 38.36%;
  height: 36px;
  border: unset;
  margin: auto;
`

const PresentWrapper = styled(ColumnCenter)`
  background: ${({ theme }) => theme.bg7};
`
const PresentOption = styled.div`
  padding: 4.375rem 0;
  display: flex;
  justify-content: center;
`
const PresentOptionListWrapper = styled(AutoColumn)`
  width: 62%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.25rem;
`
const OptionItem = styled(ColumnCenter)`
  background: ${({ theme }) => theme.bg8};
  padding: 50px 20px;
  text-align: center;
`
const OptionItemIcon = styled.img`
  width: 3.75rem;
  height: 3.75rem;
`
const OptionItemTitle = styled.span`
  width: 11.875rem;
  margin-top: 1.4375rem;
  font-size: 1.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text6}; ;
`
const OptionItemDesc = styled.span`
  margin-top: 2.0625rem;
  margin-bottom: 0.625rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text1}; ;
`
const ArtsWrapper = styled(ColumnCenter)``
const ArtOption = styled.div`
  width: 62%;
  padding: 70px 0;
`
const FeaturedWrapper = styled(ColumnCenter)``
const ArtItems = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.75rem;
  background: ${({ theme }) => theme.bg9};
`
const ArtItemsWrapper = styled.div`
  margin: 40px 0;
  &:first-child {
    flex: 0.9;
    margin-left: 20px;
    margin-right: 5px;
  }
  &:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1.1;
    margin: 0 40px;
  }
`
const ArtItemsFooterWrapper = styled.div`
  display: flex;
  padding: 0 13px 10px 13px;
  justify-content: space-between;
`
const ArtItemsFooterText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => darken(0.03, theme.text1)};
`
const ItemsWrapperTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => darken(0.03, theme.text1)};
`
const ItemsWrapperDesc = styled.p`
  margin-top: 28px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => darken(0.03, theme.text1)};
  text-align: center;
`
const ItemsWrapperButton = styled(PrimaryButton)`
  margin-top: 55px;
  width: 90%;
  border: unset;
`

const ArtWrapper = styled(ColumnCenter)`
  margin-top: 4.375rem;
`
const ArtNftWrapper = styled(ColumnCenter)`
  margin-top: 3.4375rem;
  display: flex;
  justify-content: center;
`
const ArtNftListWrapper = styled(AutoColumn)`
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.25rem;
`
const ArtNftFooterWrapper = styled.div`
  margin-top: 35px;
`
const ArtNftButton = styled(AdvertiseButton)`
  width: auto;
`

const OfferingWrapper = styled.div`
  margin-top: 4.375rem;
`

const OfferingItems = styled(ArtItems)`
  margin-top: 3.125rem;
  background: unset;
  flex: 1;
`

const OfferingItemsLeft = styled.div`
  flex: 0.9;
  margin-left: 20px;
  margin-right: 5px;
  border-left: 2px dashed ${({ theme }) => theme.bg4};
  position: relative;
`

const OfferingItemsRight = styled.div`
  display: flex;
  margin: 0 40px;
  flex: 1.1;
  width: 482px;
`
const OfferingItemsRow = styled.div<{ active: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; //（希望显示N行-webkit-line-clamp的变为N）
  -webkit-box-orient: vertical;
  height: 99px;
  margin-left: 1.125rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: ${({ theme, active }) => (active ? darken(0.03, theme.text1) : darken(0.46, theme.text1))};
  & > span {
    margin-top: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${({ theme }) => theme.text6};
    position: absolute;
    left: -0.40625rem;
  }
`

const OfferingItemsImg = styled.img`
  width: 482px;
  height: 302px;
`
export default function Home() {
  const theme = useContext(ThemeContext)
  const [state, setstate] = useState(false)
  const exclusive = [
    {
      name: 'After a sold-out Art Blocks drop, Reben is back with an exclusive series',
      audioName: 'Audio Name1',
      author: 'Rowen',
    },
    {
      name: 'After a sold-out Art Blocks drop, Reben is back with an exclusive series',
      audioName: 'Audio Name2',
      author: 'Rowen',
    },
    {
      name: 'After a sold-out Art Blocks drop, Reben is back with an exclusive series',
      audioName: 'Audio Name3',
      author: 'Rowen',
    },
    {
      name: 'After a sold-out Art Blocks drop, Reben is back with an exclusive series',
      audioName: 'Audio Name4',
      author: 'Rowen',
    },
  ]
  const exclusiveAD = [
    {
      title: '4 Stages of Pizzap Pave The Way to Blockchain 3.0',
      background: OfferOne,
    },
    {
      title: 'We’re Launching The Pizzap Ambassador Plan',
      background: OfferTwo,
    },
  ]
  const Voice = [
    {
      name: 'Project Name1',
      audioName: 'Audio Name1',
      usdt: '99.99',
      author: 'Rowen',
    },
    {
      name: 'Project Name2',
      audioName: 'Audio Name2',
      usdt: '99.99',
      author: 'Rowen',
    },
    {
      name: 'Project Name3',
      audioName: 'Audio Name3',
      usdt: '99.99',
      author: 'Rowen',
    },
    {
      name: 'Project Name4',
      audioName: 'Audio Name4',
      usdt: '99.99',
      author: 'Rowen',
    },
    {
      name: 'Project Name4',
      audioName: 'Audio Name4',
      usdt: '99.99',
      author: 'Rowen',
    },
    {
      name: 'Project Name4',
      audioName: 'Audio Name4',
      usdt: '99.99',
      author: 'Rowen',
    },
  ]

  const artNftList = [
    {
      name: 'Project Name1',
      price: '0.8Ξ ($2,696)',
      email: 'Currentofferby@jells888',
      audioName: 'Audio Name1',
    },
    {
      name: 'Project Name2',
      price: '0.8Ξ ($2,696)',
      email: 'Currentofferby@jells888',
      audioName: 'Audio Name2',
    },
    {
      name: 'Project Name3',
      price: '0.8Ξ ($2,696)',
      email: 'Currentofferby@jells888',
      audioName: 'Audio Name3',
    },
  ]
  const presentList = [
    {
      icon: icon_1,
      title: 'Collect',
      desc: 'Ensure collectors only have a limited number of authenticated digital artworks, thereby ensuring the scarcity and uniqueness of digital art.',
    },
    {
      icon: icon_2,
      title: 'Transparency',
      desc: 'Ensure collectors only have a limited number of authenticated digital artworks, thereby ensuring the scarcity and uniqueness of digital art.',
    },
    {
      icon: icon_3,
      title: 'Collect',
      desc: 'Ensure collectors only have a limited number of authenticated digital artworks, thereby ensuring the scarcity and uniqueness of digital art.',
    },
  ]

  const [offeringIndex, setOfferingIndex] = useState(0)
  const offeringList = [
    {
      title: 'Initial Voice Offering (IVO) must be proposed by the community and voted upon within the DAO',
      img: OfferingBg,
    },
    {
      title: 'The community stakes PNFT to vote on the proposal.',
      img: OfferingBg,
    },
    {
      title:
        'Once the mNFT is minted, users can purchase rights to use the mNFT to generate a new Voice NFT (vNFT) with the text of their choosing through the NFT marketplace.',
      img: OfferingBg,
    },
    {
      title:
        'purchasing and trading profits, will also be distributed to the target person, community and the proposer.',
      img: OfferingBg,
    },
  ]

  // function groupObject(data: [] | any): Array<Array<any>> {
  //   const result = []
  //   for (let i = 0; i < data.length; i += 3) {
  //     result.push(data.slice(i, i + 3))
  //   }
  //   return result
  // }
  return (
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
              <img src={ModelSubTitle} alt={'Explore Collection Production'} />
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
          <AudioListWrapper>
            <ModeCarousel>
              {exclusive.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CommItem
                      bg={OfferProduct}
                      music={Music}
                      onClick={() => {
                        setstate(!state)
                      }}
                    >
                      <OfferInfo item={item} />
                    </CommItem>
                  </SwiperSlide>
                )
              })}
            </ModeCarousel>
          </AudioListWrapper>
          <ExclusiveFooterWrapper>
            {exclusiveAD.map((v) => (
              <ExclusiveFooterAdvertise
                key={v.title}
                style={{ background: `url(${v.background}) center center / cover` }}
              >
                <AdvertiseWarpper>
                  <AdvertiseText>
                    <Trans>{v.title}</Trans>
                  </AdvertiseText>
                </AdvertiseWarpper>
                <AdvertiseButton>
                  <DescTitle>
                    <Trans>Explore</Trans>
                  </DescTitle>
                </AdvertiseButton>
              </ExclusiveFooterAdvertise>
            ))}
          </ExclusiveFooterWrapper>
        </ExclusiveOption>
      </ExclusiveWrapper>
      <VoiceWrapper>
        <VoiceOption>
          <AudioColumn>
            <Trans>Voice NFT</Trans>
          </AudioColumn>
          <AudioListWrapper>
            <ModeCarousel>
              {Voice.map((item, index) => {
                return (
                  <SwiperSlide key={item.audioName + index}>
                    <CommItem
                      bg={VoiceProduct}
                      music={Music_white}
                      onClick={() => {
                        setstate(!state)
                      }}
                    >
                      <VoiceInfo item={item} />
                    </CommItem>
                  </SwiperSlide>
                )
              })}
            </ModeCarousel>
          </AudioListWrapper>
        </VoiceOption>
      </VoiceWrapper>
      <PresentWrapper>
        <PresentOption>
          <PresentOptionListWrapper justify="center">
            {presentList.map((item, index) => (
              <PresentItem item={item} key={item.title + index} />
            ))}
          </PresentOptionListWrapper>
        </PresentOption>
      </PresentWrapper>
      <ArtsWrapper>
        <ArtOption>
          {/*  FEATURED ART */}
          <FeaturedWrapper>
            <AudioColumn>
              <Trans>FEATURED ART</Trans>
            </AudioColumn>
            <ArtItems>
              <ArtItemsWrapper>
                <PictureItem
                  url={'https://img0.baidu.com/it/u=1843009576,4102358877&fm=26&fmt=auto'}
                  onClick={() => {
                    setstate(!state)
                  }}
                >
                  <ArtItemsFooterWrapper>
                    <ArtItemsFooterText>
                      <Trans>ARTIST</Trans>
                    </ArtItemsFooterText>
                    <ArtItemsFooterText>
                      <Trans>@Antoni Gaudí</Trans>
                    </ArtItemsFooterText>
                  </ArtItemsFooterWrapper>
                </PictureItem>
              </ArtItemsWrapper>
              <ArtItemsWrapper>
                <ItemsWrapperTitle>
                  <Trans>Collect digital art</Trans>
                </ItemsWrapperTitle>

                <ItemsWrapperDesc>
                  <Trans>
                    Gaudí’s work enjoys global popularity and continuing admiration and study by architects. His
                    masterpiece, the still-incomplete Sagrada Família, is the most-visited monument in Spain.
                  </Trans>
                </ItemsWrapperDesc>
                <ItemsWrapperButton>
                  <OptionButtonText>
                    <Trans>START COLLECTING</Trans>
                  </OptionButtonText>
                </ItemsWrapperButton>
              </ArtItemsWrapper>
            </ArtItems>
          </FeaturedWrapper>

          {/*  ART NFT */}
          <ArtWrapper>
            <AudioColumn>
              <Trans>ART NFT</Trans>
            </AudioColumn>

            <ArtNftWrapper>
              <ArtNftListWrapper justify="center">
                {artNftList.map((item, index) => (
                  <PictureSaleItem
                    key={item.name + index}
                    url={'https://img0.baidu.com/it/u=1843009576,4102358877&fm=26&fmt=auto'}
                    onClick={() => {
                      setstate(!state)
                    }}
                  >
                    <ArtNftInfo item={item} color={theme.text6} />
                  </PictureSaleItem>
                ))}
              </ArtNftListWrapper>
              <ArtNftFooterWrapper>
                <ArtNftButton>
                  <DescTitle>
                    <Trans>Go Explore</Trans>
                  </DescTitle>
                </ArtNftButton>
              </ArtNftFooterWrapper>
            </ArtNftWrapper>
          </ArtWrapper>

          {/*  Initial Voice Offering */}
          <OfferingWrapper>
            <AudioColumn>
              <Trans>Initial Voice Offering</Trans>
            </AudioColumn>
            <OfferingItems>
              <OfferingItemsLeft>
                {offeringList.map((item, index) => (
                  <OfferingItemsRow key={item.title} active={index === offeringIndex}>
                    <span />
                    {item.title}
                  </OfferingItemsRow>
                ))}
              </OfferingItemsLeft>
              <OfferingItemsRight>
                <PaginationCarousel index={offeringIndex} changeIndex={setOfferingIndex}>
                  {offeringList.map((item, index) => {
                    return (
                      <SwiperSlide key={item.title}>
                        <OfferingItemsImg src={item.img} alt={item.title} />
                      </SwiperSlide>
                    )
                  })}
                </PaginationCarousel>
              </OfferingItemsRight>
            </OfferingItems>
          </OfferingWrapper>
        </ArtOption>
      </ArtsWrapper>
    </HomeWrapper>
  )
}

const ArtNftInfo = ({ item, color }: { item: any; color: string }) => {
  return (
    <>
      <DescWarpper>
        <DescTitle>{item.name}</DescTitle>
        <DescInfo>
          <InfoBold>-</InfoBold>
          <InfoBold color={color}>{item.price}</InfoBold>
        </DescInfo>
        <DescInfo>
          <InfoBold>List price</InfoBold>
          <InfoBold color={color}>Currentofferby@jells888</InfoBold>
        </DescInfo>
      </DescWarpper>
      <DescFooter>
        <DescFooterText>
          <Trans>ARTIST</Trans>
        </DescFooterText>
        <DescFooterText>
          <Trans>Audio Name</Trans>
        </DescFooterText>
      </DescFooter>
    </>
  )
}
const OfferInfo = ({ item }: any) => {
  return (
    <DescWarpper>
      <DescTitle>{item.name}</DescTitle>
      <DescInfo>
        <InfoBold>{item.audioName}</InfoBold>
        <InfoBold>
          <Trans>Creator: {item.author}</Trans>
        </InfoBold>
      </DescInfo>
    </DescWarpper>
  )
}

const VoiceInfo = ({ item }: any) => {
  return (
    <DescWarpper>
      <DescTitle>{item.name}</DescTitle>
      <DescInfo>
        <InfoBold>{item.audioName}</InfoBold>
        <InfoBold>
          <Trans>Unit price</Trans>
        </InfoBold>
      </DescInfo>
      <DescInfo>
        <InfoBold>
          <Trans>Creator: {item.author}</Trans>
        </InfoBold>
        <InfoLighter>
          <Img src={Usdt} alt={'USDT'} />
          <LighterText>{item.usdt}</LighterText>
        </InfoLighter>
      </DescInfo>
    </DescWarpper>
  )
}
const PresentItem = ({ item }: any) => {
  return (
    <OptionItem>
      <OptionItemIcon src={item.icon} alt={item.title} />
      <OptionItemTitle>{item.title}</OptionItemTitle>
      <OptionItemDesc>{item.desc}</OptionItemDesc>
    </OptionItem>
  )
}
