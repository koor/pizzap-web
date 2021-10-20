import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'
import { AutoColumn } from 'components/Column'
import { Form, Input, Button, Select, InputNumber, Spin } from 'antd'
import { useCallback, useState } from 'react'
import { PrimaryButton } from 'components/Button'
import { VailderInputPanel } from 'components/EditModal'

const CreateWrapper = styled(AutoColumn)`
  width: 800px;
  /* background: rgba(57, 44, 47, 0.55); */
`

const SubmitBtn = styled.div`
  width: 168px;
  height: 36px;
  margin: 20px auto;
`

export default function Create() {
  return (
    <CreateWrapper>
      <VailderInputPanel
        label="Audio content of this text*"
        value=""
        onChange={() => {
          console.log(11)
        }}
      ></VailderInputPanel>
      <VailderInputPanel
        label="Audio source selection*"
        value=""
        onChange={() => {
          console.log(11)
        }}
      ></VailderInputPanel>
      <VailderInputPanel
        label="Product name*"
        value=""
        onChange={() => {
          console.log(11)
        }}
      ></VailderInputPanel>
      <VailderInputPanel
        label="Describe"
        value=""
        onChange={() => {
          console.log(11)
        }}
      ></VailderInputPanel>
      <VailderInputPanel
        label="Unlock content"
        value=""
        onChange={() => {
          console.log(11)
        }}
      ></VailderInputPanel>
      <VailderInputPanel
        label="Number of casting NFT"
        value=""
        onChange={() => {
          console.log(11)
        }}
      ></VailderInputPanel>
      <SubmitBtn>
        <PrimaryButton>Create</PrimaryButton>
      </SubmitBtn>
    </CreateWrapper>
  )
}
