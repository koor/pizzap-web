import { t, Trans } from '@lingui/macro'
import { ReactNode, useState } from 'react'
import { ButtonPrimary, ButtonLight } from 'components/Button'
import Modal from 'components/Modal'
import styled from 'styled-components/macro'
import { useWalletModalToggle } from 'state/application/hooks'
import { useActiveWeb3React } from 'hooks/web3'
import { ReactComponent as Close } from '../../assets/images/x.svg'
import { AutoColumn } from 'components/Column'
import InputPanel from 'components/InputPanel'

const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 14px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap}
  margin: 0;
  padding: 0;
  width: 100%;
`

const CloseColor = styled(Close)`
  path {
    stroke: ${({ theme }) => theme.text4};
  }
`

const HeaderRow = styled.div`
  ${({ theme }) => theme.flexRowNoWrap};
  padding: 1rem 1rem;
  font-weight: 500;
  color: ${(props) => (props.color === 'blue' ? ({ theme }) => theme.primary1 : 'inherit')};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 1rem;
  `};
`

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg0};
  padding: 0 1rem 1rem 1rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  ${({ theme }) => theme.mediaWidth.upToMedium`padding: 0 1rem 1rem 1rem`};
`
const FooterWrapper = styled.div`
  padding: 0 1rem 1rem 1rem;
`
const UpperSection = styled.div`
  position: relative;

  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }

  h5:last-child {
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 0;
    font-weight: 500;
  }
`

export function WalletAttion({ account, children }: { account: string | null | undefined; children: ReactNode }) {
  const toggleWalletModal = useWalletModalToggle()
  return (
    <>
      {!account ? (
        <ButtonLight onClick={toggleWalletModal} padding="8px 16px" $borderRadius="12px">
          <Trans>Connect Wallet</Trans>
        </ButtonLight>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default function EditModal() {
  const { account } = useActiveWeb3React()
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const error = true
  const toggleEditModal = () => {
    setIsOpen(false)
  }
  const editModalOpen = () => {
    setIsOpen(true)
  }
  function getModalContent() {
    return (
      <UpperSection>
        <CloseIcon onClick={toggleEditModal}>
          <CloseColor />
        </CloseIcon>
        <HeaderRow>
          <Trans>Edit Information</Trans>
        </HeaderRow>
        <ContentWrapper>
          <AutoColumn gap="md" style={{ padding: '1rem', paddingTop: '0' }} justify="start">
            <InputPanel placeholder={t`User Name`} label={'Name'} value={userName} onChange={setUserName} />
          </AutoColumn>
          <AutoColumn gap="md" style={{ padding: '1rem', paddingTop: '0' }} justify="center">
            <InputPanel
              placeholder={t`User Email`}
              label={t`Email`}
              value={email}
              onChange={setEmail}
              pattern={'^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$'}
            />
          </AutoColumn>
        </ContentWrapper>
        <FooterWrapper>
          <WalletAttion account={account}>
            <ButtonPrimary disabled={!userName || !email || !error} onClick={() => alert('submit')}>
              <Trans>Submit</Trans>
            </ButtonPrimary>
          </WalletAttion>
        </FooterWrapper>
      </UpperSection>
    )
  }
  return (
    <>
      <WalletAttion account={account}>
        <ButtonPrimary onClick={editModalOpen} padding="8px 16px" width="100%" $borderRadius="12px" mt="0.6rem">
          <Trans>Edit information</Trans>
        </ButtonPrimary>
      </WalletAttion>
      <Modal isOpen={isOpen} onDismiss={toggleEditModal} minHeight={false}>
        <Wrapper>{getModalContent()}</Wrapper>
      </Modal>
    </>
  )
}
