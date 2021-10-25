import { useState, useContext, useMemo } from 'react'
import { Trans } from '@lingui/macro'
import styled, { ThemeContext } from 'styled-components/macro'
import { AutoColumn, ColumnCenter } from 'components/Column'

import BannerBg from 'assets/img/banner.png'
import { darken, transparentize } from 'polished'
import { ExploreButton } from 'components/Button'

const IVOWrapper = styled(AutoColumn)`
  width: 100%;
`

const IvoOption = styled(IVOWrapper)`
  max-width: 900px;
  margin: auto;
  padding: 30px 16px 0px;
`
const BannerWrapper = styled(ColumnCenter)`
  position: relative;
  height: 700px;
  background: url(${BannerBg}) center center / cover;
`
const BannerWrapperText = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.text1};
  font-weight: 600;
  text-align: center;
  margin: 12.6875rem 0 0 0;
`
const PoolWrapper = styled(IvoOption)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 26px 16px;
  margin-top: 2.625rem;
`

const PoolItemWrapper = styled.div`
  display: flex;
  padding: 1.25rem 0.8125rem 1.25rem 1.5rem;
  background: ${({ theme }) => transparentize(0.9, theme.text1)};
`
const PoolItem = styled.div`
  &:first-child {
    ${({ theme }) => theme.flexColumnNoWrap}
    flex: 1.1;
    & > div:first-child {
      & > span {
        margin-left: 1.125rem;
      }
    }
  }
  &:last-child {
    ${({ theme }) => theme.flexRowNoWrap}
    flex: 0.9;
    margin-left: 2.125rem;
    display: flex;
    align-items: flex-end;
    & > div {
      &:first-child {
        flex: 1;
      }
    }
  }
`
const ItemTitle = styled(ColumnCenter)`
  display: flex;
  flex-direction: row;
`
const TitleIcon = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  background: ${({ theme }) => theme.primary8};
`
const GoalWrapper = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap}
  padding: .5rem 0px .9375rem;
  border-bottom: 1px solid ${({ theme }) => darken(0.8, theme.text1)};
  & > span:not(:first-child) {
    padding-top: 0.375rem;
  }
`
const CountdownWrapper = styled(GoalWrapper)`
  padding: 0.75rem 0px 1.875rem;
  border-bottom: unset;
`
const IvoButton = styled(ExploreButton)`
  height: 3.3125rem;
  background: rgba(255, 200, 215, 0.15);
  &:focus {
    box-shadow: unset;
    background-color: ${darken(0.05, 'rgba(255, 200, 215, 0.15)')};
  }
  &:hover {
    background-color: ${darken(0.05, 'rgba(255, 200, 215, 0.15)')};
  }
  &:active {
    box-shadow: unset;
    background-color: ${darken(0.1, 'rgba(255, 200, 215, 0.15)')};
  }
`
const IvoButtonText = styled.span`
  font-size: 1.3125rem;
  font-weight: 800;
  background: -webkit-linear-gradient(top, #de12ec, #f31336);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const ProgressWrapper = styled.div`
  position: relative;
  height: 100%;
  background: ${transparentize(0.9, '#fccdb9')};
  ${({ theme }) => theme.flexColumnNoWrap}
`
const ProgressTextWrapper = styled.div<{ height: number }>`
  display: flex;
  align-items: flex-start;
  height: ${({ height }) => (height ? height : 50) + '%'};
  & > span {
    margin-left: 0.125rem;
  }
`

const Max = styled.div`
  flex: 1;
`
const Min = styled.div<{ height: number }>`
  border-top: 1px solid #1a1a1a;
  height: ${({ height }) => (height ? height : 50) + '%'};
`

const VoteText = styled.span<{ size?: number; weight?: number; color?: any }>`
  font-size: ${({ size }) => (size ? size : 16) + 'px'};
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  color: ${({ theme, color }) => (color ? color : theme.text1)};
`

/*Svg-Func*/
const WaveHead = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" viewBox="0 0 560 20">
    <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
    <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
    <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
    <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
  </svg>
)
const DividedLine = styled.div.attrs((props: { label: string; height: number }) => ({
  label: props.label,
  height: props.height <= 100 && props.height >= 0 ? props.height : 50,
}))`
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: ${({ height }) => `${height}%`};
  right: 0;
  background: #000000;
  color: #ffffff;
  font-size: 12px;
  z-index: 5;
  &::after {
    content: ${({ label }) => `"${label || ''}"`};
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(120%, -50%);
  }
`
//WaterWaves
const WaveBox = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
`
const Waves = styled.div.attrs((props: { per: number; isActive: boolean }) => ({
  per: props.per <= 100 && props.per >= 0 ? props.per : 50,
  isActive: props.isActive || false,
}))`
  position: absolute;
  background: ${({ isActive }) => (isActive ? 'linear-gradient(to top, #dd3447, #cc31e0, #d442b7)' : '#666')};
  bottom: 0;
  height: ${({ per }) => `${per}%`};
  width: 100%;

  svg {
    position: absolute;
    top: 1px;
    right: 0;
    width: 200%;
    color: #666666;
    transform: translate(0, -100%);
    &:nth-child(1) {
      color: ${({ isActive }) => (isActive ? '#d442b7' : '#666')};
      z-index: 2;
      animation: wave-back 0.7s infinite linear;
    }
    &:nth-child(2) {
      color: ${({ isActive }) => (isActive ? '#cc31e0' : '#666')};
      z-index: 1;
      opacity: 0.8;
      animation: wave-back 1.4s infinite linear;
    }
  }

  @keyframes wave-back {
    100% {
      transform: translate(50%, -100%);
    }
  }
`

export default function IVO() {
  const theme = useContext(ThemeContext)
  return (
    <IVOWrapper>
      <BannerWrapper>
        <IvoOption>
          <BannerWrapperText>
            <Trans>COLLECT UNIQUE INTERESTING DIGITAL COLLECTIBLES</Trans>
          </BannerWrapperText>
        </IvoOption>
      </BannerWrapper>
      <PoolWrapper>
        <PoolItemWrapper>
          <PoolItem>
            <ItemTitle>
              <TitleIcon />
              <VoteText size={16} weight={600}>
                <Trans>Pool Name</Trans>
              </VoteText>
            </ItemTitle>
            <GoalWrapper>
              <VoteText size={12} color={darken(0.64, theme.text1)}>
                <Trans>Funding Goal</Trans>
              </VoteText>
              <VoteText size={14}>
                <Trans>Min: 100,000 PNFT</Trans>
              </VoteText>
              <VoteText size={14}>
                <Trans>Max: 100,000,000 PNFT</Trans>
              </VoteText>
            </GoalWrapper>
            <CountdownWrapper>
              <VoteText size={12} color={darken(0.64, theme.text1)}>
                <Trans>Ends in</Trans>
              </VoteText>
              <VoteText size={14}>
                <Trans>99 days 12 hours 12 mins</Trans>
              </VoteText>
            </CountdownWrapper>
            <IvoButton>
              <IvoButtonText>
                <Trans>IVO NOW</Trans>
              </IvoButtonText>
            </IvoButton>
          </PoolItem>
          <PoolItem>
            <ProgressWrapper>
              <WaveBox>
                <Waves per={20}>
                  <WaveHead />
                  <WaveHead />
                </Waves>
                <VoteText size={14} color={theme.text6} style={{ position: 'absolute', top: 14, textAlign: 'center' }}>
                  100,000,000 PNFT FUNDED
                </VoteText>
              </WaveBox>
              <DividedLine label="Min" height={50} />
              <VoteText size={14} color={theme.text6} style={{ position: 'absolute', top: 14, textAlign: 'center' }}>
                100,000,000 PNFT FUNDED
              </VoteText>
              <Max></Max>
              <Min height={40}></Min>
              <VoteText size={14} style={{ position: 'absolute', bottom: 14, textAlign: 'center' }}>
                200,000 PNFT FUNDED
              </VoteText>
            </ProgressWrapper>
            <ProgressTextWrapper height={40 + 3}>
              <VoteText size={10}>
                <Trans>min</Trans>
              </VoteText>
            </ProgressTextWrapper>
          </PoolItem>
        </PoolItemWrapper>
        <PoolItemWrapper>
          <PoolItem>
            <ItemTitle>
              <TitleIcon />
              <VoteText size={16} weight={600}>
                <Trans>Pool Name</Trans>
              </VoteText>
            </ItemTitle>
            <GoalWrapper>
              <VoteText size={12} color={darken(0.64, theme.text1)}>
                <Trans>Funding Goal</Trans>
              </VoteText>
              <VoteText size={14}>
                <Trans>Min: 100,000 PNFT</Trans>
              </VoteText>
              <VoteText size={14}>
                <Trans>Max: 100,000,000 PNFT</Trans>
              </VoteText>
            </GoalWrapper>
            <CountdownWrapper>
              <VoteText size={12} color={darken(0.64, theme.text1)}>
                <Trans>Ends in</Trans>
              </VoteText>
              <VoteText size={14}>
                <Trans>99 days 12 hours 12 mins</Trans>
              </VoteText>
            </CountdownWrapper>
            <IvoButton>
              <IvoButtonText>
                <Trans>IVO NOW</Trans>
              </IvoButtonText>
            </IvoButton>
          </PoolItem>
          <PoolItem>
            <ProgressWrapper>
              <WaveBox>
                <Waves per={60} isActive>
                  <WaveHead />
                  <WaveHead />
                </Waves>
                <VoteText size={14} color={theme.text6} style={{ position: 'absolute', top: 14, textAlign: 'center' }}>
                  100,000,000 PNFT FUNDED
                </VoteText>
              </WaveBox>
              <DividedLine label="Min" height={50} />
              <VoteText size={14} color={theme.text6} style={{ position: 'absolute', top: 14, textAlign: 'center' }}>
                100,000,000 PNFT FUNDED
              </VoteText>
              <Max></Max>
              <Min height={40}></Min>
              <VoteText size={14} style={{ position: 'absolute', bottom: 14, textAlign: 'center' }}>
                200,000 PNFT FUNDED
              </VoteText>
            </ProgressWrapper>
            <ProgressTextWrapper height={40 + 3}>
              <VoteText size={10}>
                <Trans>min</Trans>
              </VoteText>
            </ProgressTextWrapper>
          </PoolItem>
        </PoolItemWrapper>
        <PoolItemWrapper>
          <PoolItem>
            <ItemTitle>
              <TitleIcon />
              <VoteText size={16} weight={600}>
                <Trans>Pool Name</Trans>
              </VoteText>
            </ItemTitle>
            <GoalWrapper>
              <VoteText size={12} color={darken(0.64, theme.text1)}>
                <Trans>Funding Goal</Trans>
              </VoteText>
              <VoteText size={14}>
                <Trans>Min: 100,000 PNFT</Trans>
              </VoteText>
              <VoteText size={14}>
                <Trans>Max: 100,000,000 PNFT</Trans>
              </VoteText>
            </GoalWrapper>
            <CountdownWrapper>
              <VoteText size={12} color={darken(0.64, theme.text1)}>
                <Trans>Ends in</Trans>
              </VoteText>
              <VoteText size={14}>
                <Trans>99 days 12 hours 12 mins</Trans>
              </VoteText>
            </CountdownWrapper>
            <IvoButton>
              <IvoButtonText>
                <Trans>IVO NOW</Trans>
              </IvoButtonText>
            </IvoButton>
          </PoolItem>
          <PoolItem>
            <ProgressWrapper>
              <VoteText size={14} color={theme.text6} style={{ position: 'absolute', top: 14, textAlign: 'center' }}>
                100,000,000 PNFT FUNDED
              </VoteText>
              <Max></Max>
              <Min height={10}></Min>
              <VoteText size={14} style={{ position: 'absolute', bottom: 14, textAlign: 'center' }}>
                200,000 PNFT FUNDED
              </VoteText>
            </ProgressWrapper>
            <ProgressTextWrapper height={10 + 3}>
              <VoteText size={10}>
                <Trans>min</Trans>
              </VoteText>
            </ProgressTextWrapper>
          </PoolItem>
        </PoolItemWrapper>
        <PoolItemWrapper>
          <PoolItem>
            <ItemTitle>
              <TitleIcon />
              <VoteText size={16} weight={600}>
                <Trans>Pool Name</Trans>
              </VoteText>
            </ItemTitle>
            <GoalWrapper>
              <VoteText size={12} color={darken(0.64, theme.text1)}>
                <Trans>Funding Goal</Trans>
              </VoteText>
              <VoteText size={14}>
                <Trans>Min: 100,000 PNFT</Trans>
              </VoteText>
              <VoteText size={14}>
                <Trans>Max: 100,000,000 PNFT</Trans>
              </VoteText>
            </GoalWrapper>
            <CountdownWrapper>
              <VoteText size={12} color={darken(0.64, theme.text1)}>
                <Trans>Ends in</Trans>
              </VoteText>
              <VoteText size={14}>
                <Trans>99 days 12 hours 12 mins</Trans>
              </VoteText>
            </CountdownWrapper>
            <IvoButton>
              <IvoButtonText>
                <Trans>IVO NOW</Trans>
              </IvoButtonText>
            </IvoButton>
          </PoolItem>
          <PoolItem>
            <ProgressWrapper>
              <VoteText size={14} color={theme.text6} style={{ position: 'absolute', top: 14, textAlign: 'center' }}>
                100,000,000 PNFT FUNDED
              </VoteText>
              <Max></Max>
              <Min height={40}></Min>
              <VoteText size={14} style={{ position: 'absolute', bottom: 14, textAlign: 'center' }}>
                200,000 PNFT FUNDED
              </VoteText>
            </ProgressWrapper>
            <ProgressTextWrapper height={40 + 3}>
              <VoteText size={10}>
                <Trans>min</Trans>
              </VoteText>
            </ProgressTextWrapper>
          </PoolItem>
        </PoolItemWrapper>
      </PoolWrapper>
    </IVOWrapper>
  )
}
