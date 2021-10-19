import styled from 'styled-components/macro'
import { darken } from 'polished'
import { Trans } from '@lingui/macro'

import Logo from 'assets/svg/logo.svg'
// import { NavLink } from 'react-router-dom'
// import Row from 'components/Row'
// import { SupportedChainId } from 'constants/chains'
import { useActiveWeb3React } from 'hooks/web3'

const FooterFrame = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap}
  width: auto;
  align-items: center;
`
const FooterLogo = styled.img`
  width: 7.25rem;
  height: 1.875rem;
`
const FooterText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => darken(0.591, theme.text1)};
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => darken(0.69, theme.text1)};
`

// const FooterLinks = styled(Row)`
//   justify-self: center;
//   background-color: ${({ theme }) => theme.bg0};
//   width: fit-content;
//   padding: 4px;
//   border-radius: 16px;
//   display: grid;
//   grid-auto-flow: column;
//   grid-gap: 10px;
//   overflow: auto;
//   align-items: center;
//   ${({ theme }) => theme.mediaWidth.upToLarge`
//     justify-self: start;
//     `};
//   ${({ theme }) => theme.mediaWidth.upToMedium`
//     justify-self: center;
//   `};
//   ${({ theme }) => theme.mediaWidth.upToMedium`
//     flex-direction: row;
//     justify-content: space-between;
//     justify-self: center;
//     z-index: 99;
//     position: fixed;
//     bottom: 0; right: 50%;
//     transform: translate(50%,-50%);
//     margin: 0 auto;
//     background-color: ${({ theme }) => theme.bg0};
//     border: 1px solid ${({ theme }) => theme.bg2};
//     box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);
//   `};
// `

// const activeClassName = 'ACTIVE'

// const StyledNavLink = styled(NavLink).attrs({
//   activeClassName,
// })`
//   ${({ theme }) => theme.flexRowNoWrap}
//   align-items: left;
//   border-radius: 3rem;
//   outline: none;
//   cursor: pointer;
//   text-decoration: none;
//   color: ${({ theme }) => theme.text2};
//   font-size: 1rem;
//   font-weight: 500;
//   padding: 8px 12px;
//   word-break: break-word;
//   overflow: hidden;
//   white-space: nowrap;
//   &.${activeClassName} {
//     border-radius: 12px;
//     font-weight: 600;
//     justify-content: center;
//     color: ${({ theme }) => theme.text1};
//     background-color: ${({ theme }) => theme.bg2};
//   }

//   :hover,
//   :focus {
//     color: ${({ theme }) => darken(0.1, theme.text1)};
//   }
// `
export default function Footer() {
  const { account, chainId } = useActiveWeb3React()
  return (
    <FooterFrame>
      <FooterLogo src={Logo} alt={'logo'} />
      <FooterText>
        <Trans>Create, sell & collect the authenticated digital collectibles.</Trans>
      </FooterText>
      {/* <FooterLinks>
        <StyledNavLink id={`swap-nav-link`} to={'/home'}>
          <Trans>Home</Trans>
        </StyledNavLink>
        <StyledNavLink id={`swap-nav-link`} to={'/market'}>
          <Trans>Market</Trans>
        </StyledNavLink>
        {chainId && chainId === SupportedChainId.MAINNET && (
          <StyledNavLink id={`vote-nav-link`} to={'/create'}>
            <Trans>Create</Trans>
          </StyledNavLink>
        )}
        <StyledNavLink id={`swap-nav-link`} to={'/forum'}>
          <Trans>Forum</Trans>
        </StyledNavLink>
      </FooterLinks> */}
    </FooterFrame>
  )
}
