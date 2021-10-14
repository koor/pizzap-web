// import ApeModeQueryParamReader from 'hooks/useApeModeQueryParamReader'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
// import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'

import Web3ReactManager from '../components/Web3ReactManager'
import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../components/Header'

import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'

import Home from './Home'
import Market from './Market'
import Create from './Create'
import Forum from './Forum'
import Personal from './Personal'
import { RedirectPathToHomeOnly } from './Home/redirects'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 76px 0px 0px 0px;
  align-items: center;
  flex: 1;
  z-index: 1;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 6rem 16px 16px 16px;
  `};
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

// function TopLevelModals() {
//   const open = useModalOpen(ApplicationModal.ADDRESS_CLAIM)
//   const toggle = useToggleModal(ApplicationModal.ADDRESS_CLAIM)
//   return <AddressClaimModal isOpen={open} onDismiss={toggle} />
// }

function App() {
  return (
    <ErrorBoundary>
      {/* <Route component={GoogleAnalyticsReporter} /> */}
      <Route component={DarkModeQueryParamReader} />
      {/* <Route component={ApeModeQueryParamReader} /> */}
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

              <Route component={RedirectPathToHomeOnly} />
            </Switch>
            <Marginer />
          </BodyWrapper>
        </AppWrapper>
      </Web3ReactManager>
    </ErrorBoundary>
  )
}

export default App
