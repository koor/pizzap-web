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
