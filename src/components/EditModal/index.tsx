import { t, Trans } from '@lingui/macro'
import { ReactNode, useCallback, useState, useContext } from 'react'
import { ButtonPrimary, ButtonLight, ButtonError } from 'components/Button'
import Modal from 'components/Modal'
import styled, { ThemeContext } from 'styled-components/macro'
import { useWalletModalToggle } from 'state/application/hooks'
import { useActiveWeb3React } from 'hooks/web3'
import { ReactComponent as Close } from '../../assets/images/x.svg'
import { AutoColumn } from 'components/Column'
import { RowBetween } from 'components/Row'
import { TYPE } from 'theme'

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

const ContainerRow = styled.div<{ error: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 1px solid ${({ error, theme }) => (error ? theme.red1 : theme.bg2)};
  transition: border-color 300ms ${({ error }) => (error ? 'step-end' : 'step-start')},
    color 500ms ${({ error }) => (error ? 'step-end' : 'step-start')};
  background-color: ${({ theme }) => theme.bg1};
`

const InputPanel = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap}
  position: relative;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.bg1};
  z-index: 1;
  width: 100%;
`

const InputContainer = styled.div`
  flex: 1;
  padding: 1rem;
`

const Input = styled.input<{ error?: boolean }>`
  font-size: 1.25rem;
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({ theme }) => theme.bg1};
  transition: color 300ms ${({ error }) => (error ? 'step-end' : 'step-start')};
  color: ${({ error, theme }) => (error ? theme.red1 : theme.text1)};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
  ::placeholder {
    color: ${({ theme }) => theme.text4};
  }
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.text4};
  }
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

export function VailderInputPanel({
  id,
  className = 'recipient-email-input',
  label,
  placeholder,
  value,
  onChange,
  require = false,
}: {
  id?: string
  className?: string
  label?: ReactNode
  placeholder?: string
  // the typed string value
  value: string
  // triggers whenever the typed value changes
  onChange: (value: string) => void
  require?: boolean
}) {
  const theme = useContext(ThemeContext)

  const address = useEMAIL(value)

  const handleInput = useCallback(
    (event) => {
      const input = event.target.value
      const withoutSpaces = input.replace(/\s+/g, '')
      onChange(withoutSpaces)
    },
    [onChange]
  )

  const error = require && Boolean(value.length > 0 && !address)
  return (
    <InputPanel id={id}>
      <ContainerRow error={error}>
        <InputContainer>
          <AutoColumn gap="md">
            <RowBetween>
              <TYPE.black color={theme.text2} fontWeight={500} fontSize={14}>
                {label ?? <Trans>Recipient</Trans>}
              </TYPE.black>
            </RowBetween>
            <Input
              className={className}
              type="text"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              placeholder={placeholder}
              error={error}
              pattern="^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
              onChange={handleInput}
              value={value}
            />
          </AutoColumn>
        </InputContainer>
      </ContainerRow>
    </InputPanel>
  )
}

export default function EditModal() {
  const { chainId, account, connector } = useActiveWeb3React()
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const error = useEMAIL(email)
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
            <VailderInputPanel placeholder={t`User Name`} label={'Name'} value={userName} onChange={setUserName} />
          </AutoColumn>
          <AutoColumn gap="md" style={{ padding: '1rem', paddingTop: '0' }} justify="center">
            <VailderInputPanel require placeholder={t`User Email`} label={'Email'} value={email} onChange={setEmail} />
            {!error && (
              <TYPE.error error={true}>
                <Trans>Email Address has no available claim</Trans>
              </TYPE.error>
            )}
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

function useEMAIL(nameOrAddress?: string | any) {
  const reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
  if (!reg.test(nameOrAddress) && nameOrAddress) {
    return false
  } else {
    return true
  }
}
