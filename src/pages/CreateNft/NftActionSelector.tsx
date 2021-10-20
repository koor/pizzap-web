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
  VOICE_ITEM = 'VOICE Name',
  MODEL_ITEM = 'MODEL Name',
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
  nftAction,
}: {
  className?: string
  onClick: () => void
  nftAction: NftAction
}) => {
  return (
    <NftActionSelectorFlex>
      <NftActionSelectorContainer className={className}>
        <ActionSelectorHeader>
          <Trans>Audio source selection*</Trans>
        </ActionSelectorHeader>
        <ActionDropdown onClick={onClick}>{nftAction}</ActionDropdown>
      </NftActionSelectorContainer>
    </NftActionSelectorFlex>
  )
}

export function NftActionSelectorModal({ isOpen, onDismiss, onNftActionSelect }: NftActionSelectorModalProps) {
  const handleNftActionSelect = useCallback(
    (nftAction: NftAction) => {
      onNftActionSelect(nftAction)
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
        <MenuItem onClick={() => handleNftActionSelect(NftAction.VOICE_ITEM)}>
          <Column>
            <Text fontWeight={500}>
              <Trans>VOICE Name</Trans>
            </Text>
          </Column>
        </MenuItem>
        <MenuItem onClick={() => handleNftActionSelect(NftAction.MODEL_ITEM)}>
          <Column>
            <Text fontWeight={500}>
              <Trans>MODEL Name</Trans>
            </Text>
          </Column>
        </MenuItem>
      </ContentWrapper>
    </Modal>
  )
}
