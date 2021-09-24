import React from 'react'
import styled from 'styled-components/macro'
import { Switch, Select, Tabs, Table } from 'antd'
import { ButtonLight, ButtonGray } from 'components/Button'

export default function Market() {
  const Wrapper = styled.div`
    width: 100%;
    /* align-self: flex-start; */
    .top {
      display: flex;

      .product-cover {
        width: 460px;
        height: 460px;
        background: #bbbbbb;
        margin-right: 84px;
      }

      .product-detail {
        flex: 1;
        color: #1b1b1b;
      }
    }

    .buy-box {
      height: 218px;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      border-radius: 5px;
    }
  `

  return (
    <Wrapper>
      <div>商品详情</div>
      <div className="top">
        <div className="product-cover">商品图片</div>
        <div className="product-detail">
          <h2>稀有数字音频</h2>
          <p>描述商品：</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys since the 1500s
          </p>
          <p>稀有数字音频：已验证</p>
          <p>Audio Name</p>
          <p>创建者：harvey</p>
          <p>拥有者：I-AHN_RECORDS</p>
          <ButtonLight>立即购买</ButtonLight>
        </div>
      </div>
      <Tabs>
        <Tabs.TabPane tab="商品描述" key="1">
          <p>拥有者: I-AHN_RECORDS</p>
          <p>
            Selling My Original Audio. Please Buy it If you like it. I could send a Even the file related to this song.
            Thank a lot
          </p>
        </Tabs.TabPane>
        <Tabs.TabPane tab="关于平台" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="合约信息" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
      <Tabs>
        <Tabs.TabPane tab="交易历史" key="1">
          <Table dataSource={[]}>
            <Table.Column title="事件" dataIndex="firstName" key="firstName" />
            <Table.Column title="一口价" dataIndex="lastName" key="lastName" />
            <Table.Column title="数量" dataIndex="age" key="age" />
            <Table.Column title="从" dataIndex="address" key="address" />
            <Table.Column title="至" dataIndex="addressa" key="addressa" />
            <Table.Column title="时间" dataIndex="addressaa" key="addressaa" />
          </Table>
        </Tabs.TabPane>
      </Tabs>
    </Wrapper>
  )
}
