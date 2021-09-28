import { useState } from 'react'

import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'

import Web3ReactManager from '../components/Web3ReactManager'
import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../components/Header'

import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'

import Home from './Home'
import Market from './Market'
import Create from './Create'
import Forum from './Forum'
import Personal from './Personal'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 78px 87px;
  align-items: center;
  flex: 1;
  z-index: 1;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 4.875rem 16px 16px 16px;
  `};
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
  padding: 0 87px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: unset;
  `};
`

const Marginer = styled.div`
  margin-top: 5rem;
`

function TopLevelModals() {
  const open = false /*useModalOpen(ApplicationModal.ADDRESS_CLAIM)*/
  const toggle = false /*useToggleModal(ApplicationModal.ADDRESS_CLAIM)*/
  // return <AddressClaimModal isOpen={open} onDismiss={toggle} />
}

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <ErrorBoundary>
      <Route component={DarkModeQueryParamReader} />
      <Web3ReactManager>
        <AppWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            <Switch>
              <Route exact strict path="/home" component={Home} />
              <Route exact strict path="/market" component={Market} />
              <Route exact strict path="/create" component={Create} />
              <Route exact strict path="/forum" component={Forum} />
              <Route exact strict path="/personal" component={Personal} />
            </Switch>
            <Marginer />
          </BodyWrapper>
        </AppWrapper>
      </Web3ReactManager>
    </ErrorBoundary>
  )
}

export default App
