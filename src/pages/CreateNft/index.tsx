import { Trans, t } from '@lingui/macro'
import { ButtonError, PrimaryButton } from 'components/Button'
import { BlueCard } from 'components/Card'
import { AutoColumn } from 'components/Column'
import InputPanel from 'components/InputPanel'
import TextAreaInput from 'components/Textarea'
import { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components/macro'
import AppBody from '../AppBody'
import { NftAction, NftActionSelector, NftActionSelectorModal } from './NftActionSelector'
import { TransactionSubmissionModal } from './TransactionSubmissionModal'

export const Wrapper = styled.div`
  position: relative;
  padding: 20px;
`

const CreateNftButton = ({
  // hasActiveOrPendingNft,
  // hasEnoughVote,
  isFormInvalid,
  handleCreateNft,
}: {
  // hasActiveOrPendingNft: boolean
  // hasEnoughVote: boolean
  isFormInvalid: boolean
  handleCreateNft: () => void
}) => {
  return (
    <ButtonError
      style={{ marginTop: '18px' }}
      // error={hasActiveOrPendingNft || !hasEnoughVote}
      // disabled={isFormInvalid || hasActiveOrPendingNft || !hasEnoughVote}
      disabled={isFormInvalid}
      onClick={handleCreateNft}
    >
      {/* {hasActiveOrPendingNft ? (
        <Trans>You already have an active or pending proposal</Trans>
      ) : !hasEnoughVote ? (
        <>
          <Trans>You don&apos;t have enough votes to submit a proposal</Trans>
        </>
      ) : (
        <Trans>Create Nft</Trans>
      )} */}
      <Trans>Create Nft</Trans>
    </ButtonError>
  )
}
const CreateNftWrapper = styled(Wrapper)`
  display: flex;
  flex-flow: column wrap;
`
export default function CreateNft() {
  const [modalOpen, setModalOpen] = useState(false)
  const [hash, setHash] = useState<string | undefined>()
  const [attempting, setAttempting] = useState(false)

  const [audioText, setAudioText] = useState('')
  const [nftAction, setNftAction] = useState(NftAction.MODEL_ITEM)
  const [productName, setProductName] = useState('')
  const [describeText, setDescribeText] = useState('')
  const [unlockText, setUnlockText] = useState('')

  const handleActionSelectorClick = useCallback(() => {
    setModalOpen(true)
  }, [setModalOpen])

  const handleActionChange = useCallback(
    (nftAction: NftAction) => {
      setNftAction(nftAction)
    },
    [setNftAction]
  )
  const handleDismissActionSelector = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  const handleDismissSubmissionModal = useCallback(() => {
    setHash(undefined)
    setAttempting(false)
  }, [setHash, setAttempting])

  const handleAudioTextInput = useCallback(
    (text: string) => {
      setAudioText(text)
    },
    [setAudioText]
  )

  const handleProductInput = useCallback(
    (name: string) => {
      setProductName(name)
    },
    [setProductName]
  )

  const handleDescribeInput = useCallback(
    (text: string) => {
      setDescribeText(text)
    },
    [setDescribeText]
  )
  const handleUnlockInput = useCallback(
    (text: string) => {
      setUnlockText(text)
    },
    [setUnlockText]
  )

  const isFormInvalid = useMemo(
    () => Boolean(!nftAction || audioText === '' || productName === '' || describeText === '' || unlockText === ''),
    [audioText, nftAction, productName, describeText, unlockText]
  )

  // const createProposalCallback = useCreateProposalCallback()

  const handleCreateProposal = async () => {
    setAttempting(true)

    //     const createProposalData: CreateProposalData = {} as CreateProposalData

    //     if (!createProposalCallback || !proposalAction || !currencyValue.isToken) return

    //     const tokenAmount = tryParseAmount(amountValue, currencyValue)
    //     if (!tokenAmount) return

    //     createProposalData.targets = [currencyValue.address]
    //     createProposalData.values = ['0']
    //     createProposalData.description = `# ${titleValue}

    // ${bodyValue}
    // `

    //     let types: string[][]
    //     let values: string[][]
    //     switch (proposalAction) {
    //       case ProposalAction.TRANSFER_TOKEN: {
    //         types = [['address', 'uint256']]
    //         values = [[getAddress(toAddressValue), tokenAmount.quotient.toString()]]
    //         createProposalData.signatures = [`transfer(${types[0].join(',')})`]
    //         break
    //       }

    //       case ProposalAction.APPROVE_TOKEN: {
    //         types = [['address', 'uint256']]
    //         values = [[getAddress(toAddressValue), tokenAmount.quotient.toString()]]
    //         createProposalData.signatures = [`approve(${types[0].join(',')})`]
    //         break
    //       }
    //     }

    //     createProposalData.calldatas = []
    //     for (let i = 0; i < createProposalData.signatures.length; i++) {
    //       createProposalData.calldatas[i] = utils.defaultAbiCoder.encode(types[i], values[i])
    //     }

    //     const hash = await createProposalCallback(createProposalData ?? undefined)?.catch(() => {
    //       setAttempting(false)
    //     })

    if (hash) setHash(hash)
  }

  return (
    <AppBody {...{ maxWidth: '900px' }}>
      <CreateNftWrapper>
        <BlueCard>
          <AutoColumn gap="10px">
            <Trans>Create a new audio NFT product</Trans>
          </AutoColumn>
        </BlueCard>
        <NftActionSelector onClick={handleActionSelectorClick} nftAction={nftAction} />
        <TextAreaInput
          label={t`Audio content of this text*`}
          placeholder={t`Provide your text content.`}
          value={audioText}
          onChange={handleAudioTextInput}
        />

        <InputPanel
          label={t`Product name*`}
          placeholder={t`Product name`}
          value={productName}
          onChange={handleProductInput}
        />
        <TextAreaInput
          label={t`Describe`}
          placeholder={t`Provide your text content.`}
          value={describeText}
          onChange={handleDescribeInput}
        />
        <TextAreaInput
          label={t`Unlock content`}
          placeholder={t`Input content (link to file, etc.)`}
          value={unlockText}
          onChange={handleUnlockInput}
        />

        <CreateNftButton
          // hasActiveOrPendingNft={
          //   latestProposalData?.status === ProposalState.ACTIVE || latestProposalData?.status === ProposalState.PENDING
          // }
          // hasEnoughVote={hasEnoughVote}
          isFormInvalid={isFormInvalid}
          handleCreateNft={handleCreateProposal}
        />

        <NftActionSelectorModal
          isOpen={modalOpen}
          onDismiss={handleDismissActionSelector}
          onNftActionSelect={(nftAction: NftAction) => handleActionChange(nftAction)}
        />
        <TransactionSubmissionModal isOpen={attempting} hash={hash} onDismiss={handleDismissSubmissionModal} />
      </CreateNftWrapper>
    </AppBody>
  )
}
