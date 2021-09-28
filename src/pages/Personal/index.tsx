import { Trans } from '@lingui/macro'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { AutoColumn } from 'components/Column'
import { useActiveWeb3React } from 'hooks/web3'
import { injected } from 'connectors'
import Identicon from 'components/Identicon'
import { shortenAddress } from 'utils'
import Copy from 'components/AccountDetails/Copy'
import EditModal from 'components/EditModal'
import Table from 'components/Table'

import Tabs, { Tab, TabList, TabPanels, TabPanel } from 'components/Tabs'
import '@reach/tabs/styles.css'

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
  margin-top: 55px;
`

export default function Personal() {
  const { account, connector } = useActiveWeb3React()
  const [tabIndex, setTabIndex] = useState(1)
  const [array, setArray] = useState<any>(Array.from({ length: 10 }))
  const [hasMore, setHasMore] = useState(true)

  function getStatusIcon() {
    if (connector === injected) {
      return (
        <IconWrapper size={90}>
          <Identicon size={90} />
        </IconWrapper>
      )
    }
    return null
  }
  const fetchMoreData = () => {
    if (array.length >= 100) {
      setHasMore(false)
      return
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      setArray(array.concat(Array.from({ length: 20 })))
    }, 500)
  }
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
            <TabPanel>2222</TabPanel>
            <TabPanel>
              {/* <Infinite array={array} fetchMore={fetchMoreData} loader={<p>Loading...</p>} hasMore={hasMore} /> */}
              <Table />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ContentWrapper>
    </PersonalWapper>
  )
}
