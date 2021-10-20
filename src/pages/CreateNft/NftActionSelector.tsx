import React, { useCallback } from 'react'
import styled from 'styled-components/macro'
import { Text } from 'rebass'
import { CloseIcon } from 'theme'
import { Trans } from '@lingui/macro'
import Column from 'components/Column'
import Modal from 'components/Modal'
import { RowBetween } from 'components/Row'
import { MenuItem, PaddedColumn, Separator } from 'components/SearchModal/styleds'
import { ButtonDropdown } from 'components/Button'

export enum NftAction {
  TRANSFER_TOKEN = 'Transfer Token',
  APPROVE_TOKEN = 'Approve Token',
}

interface NftActionSelectorModalProps {
  isOpen: boolean
  onDismiss: () => void
  onNftActionSelect: (NftAction: NftAction) => void
}

const ContentWrapper = styled(Column)`
  width: 100%;
  flex: 1 1;
  position: relative;
`
const ActionSelectorHeader = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text2};
`

const ActionDropdown = styled(ButtonDropdown)`
  padding: 0px;
  background-color: transparent;
  color: ${({ theme }) => theme.text1};
  font-size: 1.25rem;

  :hover,
  :active,
  :focus {
    outline: 0px;
    box-shadow: none;
    background-color: transparent;
  }
`

const NftActionSelectorFlex = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.bg2};
  background-color: ${({ theme }) => theme.bg1};
`

const NftActionSelectorContainer = styled.div`
  flex: 1;
  padding: 1rem;
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 10px;
`

export const NftActionSelector = ({
  className,
  onClick,
  NftAction,
}: {
  className?: string
  onClick: () => void
  NftAction: NftAction
}) => {
  return (
    <NftActionSelectorFlex>
      <NftActionSelectorContainer className={className}>
        <ActionSelectorHeader>
          <Trans>Proposed Action</Trans>
        </ActionSelectorHeader>
        <ActionDropdown onClick={onClick}>{NftAction}</ActionDropdown>
      </NftActionSelectorContainer>
    </NftActionSelectorFlex>
  )
}

export function NftActionSelectorModal({ isOpen, onDismiss, onNftActionSelect }: NftActionSelectorModalProps) {
  const handleNftActionSelect = useCallback(
    (NftAction: NftAction) => {
      onNftActionSelect(NftAction)
      onDismiss()
    },
    [onDismiss, onNftActionSelect]
  )

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <ContentWrapper>
        <PaddedColumn gap="16px">
          <RowBetween>
            <Text fontWeight={500} fontSize={16}>
              <Trans>Select an action</Trans>
            </Text>
            <CloseIcon onClick={onDismiss} />
          </RowBetween>
        </PaddedColumn>
        <Separator />
        <MenuItem onClick={() => handleNftActionSelect(NftAction.TRANSFER_TOKEN)}>
          <Column>
            <Text fontWeight={500}>
              <Trans>Transfer Token</Trans>
            </Text>
          </Column>
        </MenuItem>
        <MenuItem onClick={() => handleNftActionSelect(NftAction.APPROVE_TOKEN)}>
          <Column>
            <Text fontWeight={500}>
              <Trans>Approve Token</Trans>
            </Text>
          </Column>
        </MenuItem>
      </ContentWrapper>
    </Modal>
  )
}
