import { BlueCard } from 'components/Card'
import { AutoColumn } from 'components/Column'
import { useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import AppBody from '../AppBody'
import { NftEditor } from './NftEditor'

export const Wrapper = styled.div`
  position: relative;
  padding: 20px;
`

const CreateProposalWrapper = styled(Wrapper)`
  display: flex;
  flex-flow: column wrap;
`
export default function CreateNft() {
  const [titleValue, setTitleValue] = useState('')
  const [bodyValue, setBodyValue] = useState('')
  console.log(titleValue, bodyValue)

  const handleTitleInput = useCallback(
    (title: string) => {
      setTitleValue(title)
    },
    [setTitleValue]
  )

  const handleBodyInput = useCallback(
    (body: string) => {
      setBodyValue(body)
    },
    [setBodyValue]
  )
  return (
    <AppBody {...{ maxWidth: '800px' }}>
      <CreateProposalWrapper>
        <BlueCard>
          <AutoColumn gap="10px">Create a new audio NFT product</AutoColumn>
        </BlueCard>

        <NftEditor title={titleValue} body={bodyValue} onTitleInput={handleTitleInput} onBodyInput={handleBodyInput} />
      </CreateProposalWrapper>
    </AppBody>
  )
}
