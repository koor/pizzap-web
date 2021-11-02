import { useCallback, useState } from 'react'
import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'
import { Text } from 'rebass'
import Column, { AutoColumn } from 'components/Column'
import ModalShell from 'components/ModalShell'
import { CloseIcon } from 'theme'
import Card from 'components/Card'
import NumericalInput from 'components/NumericalInput'
import { RowBetween } from 'components/Row'

import One from 'assets/img/1.svg'
import Two from 'assets/img/2.svg'
import There from 'assets/img/3.svg'
import Four from 'assets/img/4.svg'
import Upload from 'assets/img/upload.png'
import { PrimaryButton } from 'components/Button'
import { darken } from 'polished'
import { PaddedColumn, Separator } from 'components/SearchModal/styleds'

interface VotePledgeActionModalProps {
  isOpen: boolean
  onDismiss: () => void
}

const TextOption = styled(Text)<{ amount?: number | string }>`
  color: ${({ theme, amount }) => darken(amount ? amount : 0, theme.text1)};
`

const ModalContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg0};
  padding: 0 1rem 1rem 1rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0 1rem 2rem 1rem;
  ${({ theme }) => theme.mediaWidth.upToMedium`padding: 0 1rem 2rem 1rem`};
`
const ContentWrapper = styled(Column)`
  width: 100%;
  flex: 1 1;
`

const BlackCard = styled(Card)`
  background-color: ${({ theme }) => theme.bg8};
  margin-top: 0.75rem;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    &:nth-child(1) {
      margin-top: 0;
    }
  `};
`

const CardIndex = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
`

const InputPanel = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap}
  margin-left: 27px;
  border-radius: 1.25rem;

  background-color: ${({ theme }) => theme.bg7};
  z-index: 1;
  width: 100%;
`

const Container = styled.div`
  position: relative;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.bg2};
  background-color: ${({ theme }) => theme.bg7};
  width: 100%;
  :focus,
  :hover {
    border: 1px solid ${({ theme }) => theme.bg3};
  }
`
const InputRow = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  padding: 1rem 1rem 0.75rem 1rem;
`

const UploadPanel = styled(InputPanel)``
const UploadRow = styled(InputRow)`
  ${({ theme }) => theme.flexColumnNoWrap}
  padding: 1.125rem 0 .9375rem 0;
`
const UploadInputFile = styled.input`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
`
const ButtonPanel = styled(PrimaryButton)`
  border: unset;
  width: 11rem;
  height: 1.625rem;
  margin-left: 3.125rem;
`
const ClaimPanel = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  margin-left: 27px;
  justify-content: space-between;
`
const ClaimItem = styled(Column)`
  &:last-child {
    text-align: end;
  }
`
const IconWrapper = styled.div<{ width?: number; height?: number }>`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  & > * {
    height: ${({ height }) => (height ? height + 'px' : '32px')};
    width: ${({ width }) => (width ? width + 'px' : '32px')};
  }
`
export function VotePledgeActionModal({ isOpen, onDismiss }: VotePledgeActionModalProps) {
  const [amountValue, setAmountValue] = useState('')

  const [file, setFile] = useState<{ name: string }>()

  const fileChange = useCallback(
    (event) => {
      setFile(event.target.files[0])
      // const fileObj = event.target.files[0]
      // const windowURL = window.URL || window.webkitURL
      // if (fileObj) {
      //   setFile(windowURL.createObjectURL(fileObj))
      // }
    },
    [setFile]
  )
  const handleAmountInput = useCallback(
    (amount: string) => {
      setAmountValue(amount)
    },
    [setAmountValue]
  )

  return (
    <ModalShell isOpen={isOpen} onDismiss={onDismiss}>
      <ContentWrapper>
        <PaddedColumn gap="16px">
          <RowBetween>
            <Text fontWeight={500} fontSize={16}>
              {/* <Trans>Select an action</Trans> */}
            </Text>
            <CloseIcon onClick={onDismiss} />
          </RowBetween>
        </PaddedColumn>
        <Separator />
        <ModalContentWrapper>
          <BlackCard $borderRadius="10px" padding="20px">
            <CardIndex>
              <IconWrapper width={21} height={27}>
                <img src={One} alt={'one'} />
              </IconWrapper>
              <UploadPanel>
                <Container>
                  <UploadRow>
                    <UploadInputFile
                      type="file"
                      name="upload"
                      accept=".wav,.mp3,.ogg,.acc,.webm"
                      onChange={fileChange}
                    />
                    {file ? (
                      <Text fontSize={12} fontWeight={500} mt={10}>
                        <Trans>{file?.name}</Trans>
                      </Text>
                    ) : (
                      <>
                        <img src={Upload} width={24} height={24} alt={'upload'} />
                        <Text fontSize={12} fontWeight={500} mt={10}>
                          <Trans>Click on this area or drag and drop a file to upload</Trans>
                        </Text>
                      </>
                    )}
                  </UploadRow>
                </Container>
              </UploadPanel>
              <ButtonPanel>
                <Text fontSize={16} fontWeight={'bold'}>
                  <Trans>UPLOAD</Trans>
                </Text>
              </ButtonPanel>
            </CardIndex>

            <TextOption ml={27 + 21} mt={9} fontSize={12} width="65%" amount={0.5}>
              <Trans>
                Please submit IP related sound or video files, format can be: mp3, wmv, mp4, file size: less than 50MB
              </Trans>
            </TextOption>
          </BlackCard>
          <BlackCard $borderRadius="10px" padding="20px">
            <CardIndex>
              <IconWrapper width={21} height={27}>
                <img src={Two} alt={'two'} />
              </IconWrapper>
              <InputPanel>
                <Container>
                  <InputRow>
                    <TextOption fontWeight={'bold'}>
                      <Trans>PNFT</Trans>
                    </TextOption>
                    <NumericalInput
                      className="token-amount-input"
                      value={amountValue}
                      onUserInput={(val) => {
                        handleAmountInput(val)
                      }}
                    />
                  </InputRow>
                </Container>
              </InputPanel>

              <ButtonPanel>
                <Text fontSize={16} fontWeight={'bold'}>
                  <Trans>STAKE</Trans>
                </Text>
              </ButtonPanel>
            </CardIndex>

            <TextOption ml={27 + 21} mt={9} fontSize={12} width="65%" amount={0.5}>
              <Trans>3000 / 5,000 PNFT quota remains</Trans>
            </TextOption>
          </BlackCard>
          <BlackCard $borderRadius="10px" padding="22px">
            <CardIndex>
              <IconWrapper width={21} height={27}>
                <img src={There} alt={'there'} />
              </IconWrapper>
              <ClaimPanel>
                <TextOption fontSize={12} fontWeight={600}>
                  <Trans>
                    Only investors on our whitelist can participate for this program. Please click the button on the
                    right to see if you are on the whitelist.
                  </Trans>
                </TextOption>
              </ClaimPanel>

              <ButtonPanel>
                <Text fontSize={16} fontWeight={'bold'}>
                  <Trans>Check</Trans>
                </Text>
              </ButtonPanel>
            </CardIndex>
          </BlackCard>
          <BlackCard $borderRadius="10px" padding="20px">
            <CardIndex>
              <IconWrapper width={21} height={27}>
                <img src={Four} alt={'four'} />
              </IconWrapper>
              <ClaimPanel>
                <ClaimItem>
                  <TextOption fontSize={12} amount={0.6}>
                    <Trans>Pool Name</Trans>
                  </TextOption>
                  <Text>2,000</Text>
                </ClaimItem>
                <ClaimItem>
                  <TextOption fontSize={12} amount={0.6}>
                    <Trans>Claim opens in</Trans>
                  </TextOption>
                  <TextOption fontSize={14} amount={0.35} fontWeight={600}>
                    <Trans>99 days 12 hours 12 mins</Trans>
                  </TextOption>
                </ClaimItem>
              </ClaimPanel>

              <ButtonPanel disabled={true}>
                <Text fontSize={16} fontWeight={'bold'}>
                  <Trans>CLAIM</Trans>
                </Text>
              </ButtonPanel>
            </CardIndex>
          </BlackCard>
        </ModalContentWrapper>
      </ContentWrapper>
    </ModalShell>
  )
}
