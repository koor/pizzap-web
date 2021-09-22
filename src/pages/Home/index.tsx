import { Trans } from '@lingui/macro'
import styled, { ThemeContext } from 'styled-components/macro'
import { ColumnCenter } from 'components/Column'
import BannerRotation from './BannerPage'

const HomeWrapper = styled(ColumnCenter)``

export default function Home() {
  return (
    <>
      <HomeWrapper>
        <BannerRotation />
        <br />
        Home
      </HomeWrapper>
    </>
  )
}
