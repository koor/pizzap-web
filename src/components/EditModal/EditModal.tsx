import Modal from 'components/Modal'
import { ApplicationModal } from 'state/application/actions'
import { useModalOpen, useWalletModalToggle } from 'state/application/hooks'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap}
  margin: 0;
  padding: 0;
  width: 100%;
`

export const EditModal = () => {
  const walletModalOpen = useModalOpen(ApplicationModal.WALLET)

  const toggleWalletModal = useWalletModalToggle()

  return (
    <Modal isOpen={walletModalOpen} onDismiss={toggleWalletModal} minHeight={false} maxHeight={90}>
      {/* <Wrapper>{getModalContent()}</Wrapper> */}
    </Modal>
  )
}

export default EditModal
