import React from 'react'
import styled from 'styled-components/macro'
import { Switch, Select } from 'antd'

export default function Market() {
  const Wrapper = styled.div<any>`
    width: 100%;
    /* align-self: flex-start; */
    .header {
      display: flex;
      justify-content: space-between;
    }
  `

  return (
    <Wrapper>
      <div className="header">
        <div>
          <Switch checked={true} />
          音频
          <Switch checked={true} />
          音源
        </div>
        <div>
          排序方式：
          <Select defaultValue="jack">
            <Select.Option value="jack">最近上市</Select.Option>
            <Select.Option value="jack2">最近上市</Select.Option>
            <Select.Option value="jack3">最近上市</Select.Option>
          </Select>
        </div>
      </div>
      <div></div>
    </Wrapper>
  )
}
