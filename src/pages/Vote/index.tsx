import { useState, useContext, useMemo, useCallback, useEffect } from 'react'
import { formatEther, parseEther } from '@ethersproject/units'
import { Trans } from '@lingui/macro'
import styled, { ThemeContext } from 'styled-components/macro'
import { AutoColumn, ColumnCenter } from 'components/Column'

import BannerBg from 'assets/img/banner.png'
import { darken, transparentize } from 'polished'
import { ExploreButton } from 'components/Button'

import { VotePledgeActionModal } from './VotePledgeAction'
import { useIVOStaking, usePNFTToken } from 'hooks/useContract'
import JSBI from 'jsbi'
import TransactionSubmissionModal from 'components/TransactionSubmissionModal'
import { useActiveWeb3React } from 'hooks/web3'

const IVOWrapper = styled(AutoColumn)`
  width: 100%;
`

const IvoOption = styled(IVOWrapper)`
  max-width: 900px;
  margin: auto;
  padding: 30px 16px 0px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: unset;
  `}
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
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 2rem;
    margin: 1.6875rem 0 0 0;
  `}
`
const PoolWrapper = styled(IvoOption)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 26px 16px;
  margin-top: 2.625rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-template-columns: 1fr;
  `}
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
        overflow: auto;
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
  width: 100%;
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
  z-index: 2;
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
const Waves = styled.div<{ height: number; isActive?: boolean }>`
  position: absolute;
  overflow: hidden;
  background: ${({ isActive }) =>
      isActive ? 'linear-gradient(to top, #dd3447, #cc31e0, #d442b7)' : 'linear-gradient(to top, #666, #666)'}
    space;
  bottom: 0;
  height: ${({ height }) => (height ? height : 0) + '%'};
  width: 100%;
  background-size: ${({ height }) => (height < 8 ? '100%' : '100% calc(100% - 9.78px)')};
  background-position: bottom;
  svg {
    position: absolute;
    top: 11px;
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
  const { account } = useActiveWeb3React()

  const theme = useContext(ThemeContext)
  const ivoStaking = useIVOStaking()
  const PnftToken = usePNFTToken()

  const [hash, setHash] = useState<string | undefined>()
  const [attempting, setAttempting] = useState(false)

  const handleDismissSubmissionModal = useCallback(() => {
    setHash(undefined)
    setAttempting(false)
  }, [setHash, setAttempting])

  const getStatus = useCallback(async () => {
    await ivoStaking
      ?.getStatus(14)
      .then(async (result: any) => {
        console.log(result)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [ivoStaking])

  const addProposes = useCallback(async () => {
    await ivoStaking
      ?.addProposes(
        '0xB8dA6c79AA9fe6A8CAf62B2E8cD1705d9dA5C51a',
        parseEther('37741655'),
        parseEther('37741680'),
        parseEther('1000000'),
        parseEther('10000000')
      )
      .then(async (result: any) => {
        console.log(result)

        if (result?.wait) {
          await result
            .wait()
            .then((res: any) => {
              console.log(JSBI.toNumber(JSBI.BigInt(res.logs[0].topics[2])))
            })
            .catch((err: any) => console.log(err))
        }
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [ivoStaking])

  const approve = useCallback(async () => {
    console.log(PnftToken)
    await PnftToken?.approve(ivoStaking?.address, '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
  }, [PnftToken])

  const toStaking = useCallback(async () => {
    setAttempting(true)
    await ivoStaking
      ?.deposit(14, parseEther('100'), 1)
      .then(async (result: any) => {
        if (result.hash) setHash(result.hash)
        if (result?.wait) {
          await result
            .wait()
            .then((res: any) => {
              console.log('成功', res)
            })
            .catch((err: any) => console.log(err))
        }
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [ivoStaking])

  const withdraw = useCallback(async () => {
    setAttempting(true)
    await ivoStaking
      ?.withdraw(14, parseEther('100'))
      .then(async (result: any) => {
        if (result.hash) setHash(result.hash)
        if (result?.wait) {
          await result
            .wait()
            .then((res: any) => {
              console.log('成功', res)
            })
            .catch((err: any) => console.log(err))
        }
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [ivoStaking])

  const checkStatus = useCallback(async () => {
    setAttempting(true)
    await ivoStaking
      ?.checkStatus(14)
      .then(async (result: any) => {
        if (result.hash) setHash(result.hash)
        if (result?.wait) {
          await result
            .wait()
            .then((res: any) => {
              console.log(res)
              // console.log(JSBI.toNumber(JSBI.BigInt(res.logs[0].topics[2])))
            })
            .catch((err: any) => console.log(err))
        }
      })
      .catch((err: any) => {
        console.log('拒绝', err)

        handleDismissSubmissionModal()
      })
  }, [ivoStaking])

  const getBalanceOf = useCallback(async () => {
    await ivoStaking
      ?.balanceOf(14, account)
      .then(async (result: any) => {
        console.log(result)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [ivoStaking])

  const getInfo = useCallback(async () => {
    await ivoStaking
      ?.getInfo(14)
      .then(async (result: any) => {
        console.log(result)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [ivoStaking])

  const [modalOpen, setModalOpen] = useState(false)
  const handleModalSelectorClick = useCallback(() => {
    setModalOpen(true)
  }, [setModalOpen])

  const handleDismissActionModal = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  return (
    <IVOWrapper>
      <BannerWrapper>
        <IvoOption>
          <BannerWrapperText>
            <Trans>COLLECT UNIQUE INTERESTING DIGITAL COLLECTIBLES</Trans>
          </BannerWrapperText>
        </IvoOption>
      </BannerWrapper>
      <AutoColumn gap="md">
        <IvoButton onClick={addProposes}>添加提案信息到IVO质押合约</IvoButton>
        <IvoButton onClick={approve}>approve</IvoButton>
        <IvoButton onClick={toStaking}>deposit</IvoButton>
        <IvoButton onClick={withdraw}>withdraw</IvoButton>
        <IvoButton onClick={checkStatus}>checkStatus</IvoButton>
        <IvoButton onClick={getStatus}>getStatus</IvoButton>
        <IvoButton onClick={getBalanceOf}>balanceOf</IvoButton>
        <IvoButton onClick={getInfo}>getInfo</IvoButton>
      </AutoColumn>

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
            <IvoButton onClick={handleModalSelectorClick}>
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
              <Min height={35}></Min>
              <VoteText size={14} style={{ position: 'absolute', bottom: 14, textAlign: 'center', zIndex: 3 }}>
                100,000,000 PNFT FUNDED
              </VoteText>
              <Waves height={20} isActive={true}>
                <WaveHead />
                <WaveHead />
              </Waves>
            </ProgressWrapper>
            <ProgressTextWrapper height={35 + 3}>
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
              <VoteText
                size={14}
                color={theme.text6}
                style={{ position: 'absolute', top: 14, textAlign: 'center', zIndex: 3 }}
              >
                100,000,000 PNFT FUNDED
              </VoteText>
              <Max></Max>
              <Min height={40}></Min>
              <VoteText size={14} style={{ position: 'absolute', bottom: 14, textAlign: 'center', zIndex: 3 }}>
                200,000 PNFT FUNDED
              </VoteText>

              <Waves height={20} isActive={false}>
                <WaveHead />
                <WaveHead />
              </Waves>
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
              <VoteText
                size={14}
                color={theme.text6}
                style={{ position: 'absolute', top: 14, textAlign: 'center', zIndex: 3 }}
              >
                100,000,000 PNFT FUNDED
              </VoteText>
              <Max></Max>
              <Min height={40}></Min>
              <VoteText size={14} style={{ position: 'absolute', bottom: 14, textAlign: 'center', zIndex: 3 }}>
                200,000 PNFT FUNDED
              </VoteText>

              <Waves height={50} isActive={false}>
                <WaveHead />
                <WaveHead />
              </Waves>
            </ProgressWrapper>
            <ProgressTextWrapper height={40 + 3}>
              <VoteText size={10}>
                <Trans>min</Trans>
              </VoteText>
            </ProgressTextWrapper>
          </PoolItem>
        </PoolItemWrapper>
      </PoolWrapper>
      <VotePledgeActionModal isOpen={modalOpen} onDismiss={handleDismissActionModal} />
      <TransactionSubmissionModal isOpen={attempting} hash={hash} onDismiss={handleDismissSubmissionModal} />
    </IVOWrapper>
  )
}
