import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'
import { CommItem } from 'components/Commodity'
import { AutoColumn } from 'components/Column'
import { Label, Checkbox } from '@rebass/forms'

import OfferProduct from 'assets/img/item.png'
import Music from 'assets/img/music.svg'
import { useCallback, useState } from 'react'
import { ProposalAction, ProposalActionSelector, ProposalActionSelectorModal } from './ActionSelector'
import { darken } from 'polished'
import { createHashHistory } from 'history'
import InfiniteScroll from 'react-infinite-scroll-component'

const MarketWrapper = styled(AutoColumn)`
  width: 100%;
  max-width: 900px;
  padding: 30px 16px 0px;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text6};
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => darken(0.69, theme.text1)};
  margin: 0;
`

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
const InfoBold = styled.span<{ color?: string | null }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, color }) => (color ? color : theme.text1)};
`

const Wrapper = styled(AutoColumn)`
  margin-top: 0.625rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 28px 20px;
  height: auto;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  justify-content: space-between;
  margin: 15px 0 30px 0;
`

const CheckboxWrapper = styled.div`
  display: flex;
  & > label {
    width: unset;
    &:last-child {
      margin-left: 30px;
    }
  }
`
const CheckboxOption = styled(Label)`
  & > div > svg {
    color: ${({ theme }) => theme.text6};
  }

  & > div > input:focus ~ svg {
    background-color: unset;
  }
`

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

export default function Market() {
  const [checkeds, setCheckeds] = useState({
    audio: false,
    source: false,
  })
  const [items, setItems] = useState(Array.from({ length: 4 }))
  const [hasMore, setHasMore] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [proposalAction, setProposalAction] = useState(ProposalAction.TRANSFER_TOKEN)

  const changeChecked = useCallback(
    (item: { audio?: boolean; source?: boolean }) => {
      setCheckeds({ ...checkeds, ...item })
    },
    [checkeds]
  )

  const handleActionSelectorClick = useCallback(() => {
    setModalOpen(true)
  }, [setModalOpen])

  const handleActionChange = useCallback(
    (proposalAction: ProposalAction) => {
      setProposalAction(proposalAction)
    },
    [setProposalAction]
  )

  const handleDismissActionSelector = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  const fetchMoreData = () => {
    if (items.length >= 100) {
      setHasMore(false)
      return
    }

    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })))
    }, 500)
  }

  return (
    <MarketWrapper>
      <Title>Market</Title>
      <HeaderWrapper>
        <CheckboxWrapper>
          <CheckboxOption>
            <Checkbox checked={checkeds.audio} onChange={() => changeChecked({ audio: !checkeds.audio })} />
            <Trans>Audio</Trans>
          </CheckboxOption>
          <CheckboxOption>
            <Checkbox checked={checkeds.source} onChange={() => changeChecked({ source: !checkeds.source })} />
            <Trans>Sound source</Trans>
          </CheckboxOption>
        </CheckboxWrapper>
        <ProposalActionSelector onClick={handleActionSelectorClick} proposalAction={proposalAction} />
      </HeaderWrapper>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p style={{ textAlign: 'center' }}>Loading...</p>}
        height={600}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Wrapper>
          {items.map((item, index) => (
            <CommItem
              bg={OfferProduct}
              music={Music}
              key={index}
              onClick={() => createHashHistory().push(`/market/${index}`)}
              style={{ height: 300 }}
            >
              <OfferInfo
                item={{
                  name: 'After a sold-out Art Blocks drop, Reben is back with an exclusive series',
                  audioName: 'Audio Name' + index,
                  author: 'Rowen',
                }}
              />
            </CommItem>
          ))}
        </Wrapper>
      </InfiniteScroll>
      <ProposalActionSelectorModal
        isOpen={modalOpen}
        onDismiss={handleDismissActionSelector}
        onProposalActionSelect={(proposalAction: ProposalAction) => handleActionChange(proposalAction)}
      />
    </MarketWrapper>
  )
}
