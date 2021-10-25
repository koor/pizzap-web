import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'
import { AutoColumn } from 'components/Column'
import Tabs, { Tab, TabList, TabPanel, TabPanels } from 'components/Tabs'
import Table from 'components/Table'
import { useMemo } from 'react'
import FormatTime from 'utils/friendlyFormatTime'
import { CommItem } from 'components/Commodity'

import OfferProduct from 'assets/img/item.png'
import Music_white from 'assets/img/music_white.svg'

const DetailWrapper = styled(AutoColumn)`
  width: 100%;
  max-width: 900px;
  padding: 30px 16px 0px;
`

const ProductWrapper = styled(AutoColumn)`
  width: 100%;
  display: flex;
  margin-bottom: 49px;
`

const ProductImage = styled.div`
  width: 376px;
  height: 376px;
`

const Detail = styled.div`
  margin-left: 43px;
  flex: 1;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 23px;
`

const DescTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`

const Desc = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 28px;
`

const AudioName = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 19px;
`

const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;

  div:first-of-type {
    margin-right: 24px;
  }
`

export default function ProductDetail() {
  const columns = useMemo(
    () => [
      {
        Header: 'Event',
        accessor: 'event',
        collapse: true,
      },
      {
        Header: 'Project',
        accessor: 'project',
      },
      {
        Header: 'Price',
        accessor: 'price',
        collapse: true,
        align: 'right',
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
        collapse: true,
        align: 'right',
      },
      {
        Header: 'From',
        accessor: 'from',
      },
      {
        Header: 'To',
        accessor: 'to',
      },
      {
        Header: 'Time',
        accessor: 'time',
        Cell: ({ value }: { value: any }) => {
          return FormatTime(value)
        },
        align: 'right',
      },
    ],
    []
  )
  const data = [
    { event: 'aaaaa', project: 'a111111', price: '12', quantity: 1, from: 'your', to: 'your', time: 1632795725070 },
    { event: 'bbbbb', project: 'b222222', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632795737068 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632800044000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632800440581 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1624851244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1593315244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
    { event: 'bbbbb', project: 'b333333', price: '14', quantity: 1, from: 'your', to: 'your', time: 1632195244000 },
  ]

  return (
    <DetailWrapper>
      <ProductWrapper>
        <ProductImage>
          <CommItem
            onClick={() => {
              console.log(111)
            }}
            bg={OfferProduct}
            music={Music_white}
            style={{ padding: 'unset' }}
          ></CommItem>
        </ProductImage>
        <Detail>
          <Title>Rare digital audio source</Title>
          <DescTitle>描述商品：</DescTitle>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys since the 1500s
          </Desc>
          <AudioName>AUDIO NAME</AudioName>
          <Price>
            <div>One price</div>
            <div>10 ($68）</div>
          </Price>
        </Detail>
      </ProductWrapper>
      <Tabs>
        <TabList>
          <Tab>
            <Trans>Describe</Trans>
          </Tab>
          <Tab>
            <Trans>About</Trans>
          </Tab>
          <Tab>
            <Trans>Contract information</Trans>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            Selling My Original Audio. Please Buy it If you like it. I could send a Even the file related to this song.
            Thank a lot
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs>
        <TabList>
          <Tab>
            <Trans>Transaction history</Trans>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Table columns={columns} data={data}></Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DetailWrapper>
  )
}
