import { Trans } from '@lingui/macro'
import { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components/macro'
import { MEDIA_WIDTHS } from 'theme'
import { AutoColumn } from 'components/Column'
import { useActiveWeb3React } from 'hooks/web3'
import { injected } from 'connectors'
import Identicon from 'components/Identicon'
import { shortenAddress } from 'utils'
import Copy from 'components/AccountDetails/Copy'
import EditModal from 'components/EditModal'
import Table from 'components/Table'
import Tabs, { Tab, TabList, TabPanels, TabPanel } from 'components/Tabs'
import { ProposalAction, ProposalActionSelector, ProposalActionSelectorModal } from './ActionSelector'

import FormatTime from 'utils/friendlyFormatTime'
import useWindowSize from 'hooks/useWindowSize'

import { Label, Checkbox } from '@rebass/forms'

const PersonalWapper = styled(AutoColumn)`
  width: 100%;
`
const HeaderWapper = styled.div`
  width: 100%;
  padding: 30px 1rem;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.bg1};

  ${({ theme }) => theme.mediaWidth.upToSmall`
      flex-direction: column;
  `}
`
const AccountWapper = styled.div`
  display: flex;
`
const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 15px;
`
const InfoTitle = styled.span``
const InfoDesc = styled.div`
  display: flex;
`
const EditWapper = styled.div``

const IconWrapper = styled.div<{ size?: number }>`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  & > img,
  span {
    height: ${({ size }) => (size ? size + 'px' : '32px')};
    width: ${({ size }) => (size ? size + 'px' : '32px')};
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    align-items: flex-end;
  `};
`

const ContentWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 55px;
`
const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
    color: ${({ theme }) => theme.primary1};
  }
`
export default function Personal() {
  const { account, connector } = useActiveWeb3React()
  const { width } = useWindowSize()

  // const [tabIndex, setTabIndex] = useState(1)
  // const [array, setArray] = useState<any>(Array.from({ length: 10 }))
  // const [hasMore, setHasMore] = useState(true)

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
  const columns = useMemo(
    () => [
      {
        Header: 'Event',
        accessor: 'event',
        collapse: true,
      },
      {
        Header: 'Project',
        accessor: 'project',
      },
      {
        Header: 'Price',
        accessor: 'price',
        collapse: true,
        align: 'right',
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
        collapse: true,
        align: 'right',
      },
      {
        Header: 'From',
        accessor: 'from',
      },
      {
        Header: 'To',
        accessor: 'to',
      },
      {
        Header: 'Time',
        accessor: 'time',
        Cell: ({ value }: { value: any }) => {
          return FormatTime(value)
        },
        align: 'right',
      },
    ],
    []
  )
  const data = [
    { event: 'aaaaa', project: 'a111111', price: '12', quantity: 1, from: 'your', to: 'your', time: 1632795725070 },
    { event: 'bbbbb', project: 'b222222', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632795737068 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632800044000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632800440581 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1624851244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1593315244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
  ]
  function getStatusIcon() {
    if (connector === injected) {
      return (
        <IconWrapper size={width <= MEDIA_WIDTHS.upToSmall ? 60 : 90}>
          <Identicon size={width <= MEDIA_WIDTHS.upToSmall ? 60 : 90} />
        </IconWrapper>
      )
    }
    return null
  }
  // const fetchMoreData = () => {
  //   if (array.length >= 100) {
  //     setHasMore(false)
  //     return
  //   }
  //   // a fake async api call like which sends
  //   // 20 more records in .5 secs
  //   setTimeout(() => {
  //     setArray(array.concat(Array.from({ length: 20 })))
  //   }, 500)
  // }
  return (
    <PersonalWapper justify="start">
      <HeaderWapper>
        <AccountWapper>
          {getStatusIcon()}
          <AccountInfo>
            <InfoTitle>{account ? shortenAddress(account) : <Trans>You Name</Trans>}</InfoTitle>
            <InfoDesc>
              {account && (
                <>
                  {shortenAddress(account)}
                  <Copy toCopy={account}>
                    <span style={{ marginLeft: '4px' }}>
                      <Trans>Copy Address</Trans>
                    </span>
                  </Copy>
                </>
              )}
            </InfoDesc>
          </AccountInfo>
        </AccountWapper>
        <EditWapper>
          <EditModal />
        </EditWapper>
      </HeaderWapper>
      <ContentWrapper>
        <Tabs onChange={() => console.log('onChange')}>
          <TabList>
            <Tab>
              <Trans>My items</Trans>
            </Tab>
            <Tab>
              <Trans>Transactions</Trans>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FilterWrapper>
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
              </FilterWrapper>
            </TabPanel>
            <TabPanel>
              {/* <Infinite array={array} fetchMore={fetchMoreData} loader={<p>Loading...</p>} hasMore={hasMore} /> */}
              <Table columns={columns} data={data} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ContentWrapper>
      <ProposalActionSelectorModal
        isOpen={modalOpen}
        onDismiss={handleDismissActionSelector}
        onProposalActionSelect={(proposalAction: ProposalAction) => handleActionChange(proposalAction)}
      />
    </PersonalWapper>
  )
}
