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

const MarketWrapper = styled(AutoColumn)`
  width: 100%;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text6};
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => darken(0.69, theme.text1)};
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
`

const Header = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  justify-content: space-between;
  margin-top: 15px;
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

  console.log(checkeds)

  return (
    <MarketWrapper>
      <Title>Market</Title>
      <Header>
        <CheckboxWrapper>
          <CheckboxOption onChange={() => changeChecked({ audio: !checkeds.audio })}>
            <Checkbox checked={checkeds.audio} />
            <Trans>Audio</Trans>
          </CheckboxOption>
          <CheckboxOption>
            <Checkbox checked={checkeds.source} onChange={() => changeChecked({ source: !checkeds.source })} />
            <Trans>Sound source</Trans>
          </CheckboxOption>
        </CheckboxWrapper>
        <ProposalActionSelector onClick={handleActionSelectorClick} proposalAction={proposalAction} />
      </Header>
      <Wrapper>
        <CommItem
          bg={OfferProduct}
          music={Music}
          onClick={() => {
            console.log(11)
          }}
        >
          <OfferInfo
            item={{
              name: 'After a sold-out Art Blocks drop, Reben is back with an exclusive series',
              audioName: 'Audio Name1',
              author: 'Rowen',
            }}
          />
        </CommItem>
        <CommItem
          bg={OfferProduct}
          music={Music}
          onClick={() => {
            console.log(11)
          }}
        >
          <OfferInfo
            item={{
              name: 'After a sold-out Art Blocks drop, Reben is back with an exclusive series',
              audioName: 'Audio Name1',
              author: 'Rowen',
            }}
          />
        </CommItem>
        <CommItem
          bg={OfferProduct}
          music={Music}
          onClick={() => {
            console.log(11)
          }}
        >
          <OfferInfo
            item={{
              name: 'After a sold-out Art Blocks drop, Reben is back with an exclusive series',
              audioName: 'Audio Name1',
              author: 'Rowen',
            }}
          />
        </CommItem>
      </Wrapper>
      <ProposalActionSelectorModal
        isOpen={modalOpen}
        onDismiss={handleDismissActionSelector}
        onProposalActionSelect={(proposalAction: ProposalAction) => handleActionChange(proposalAction)}
      />
    </MarketWrapper>
  )
}
