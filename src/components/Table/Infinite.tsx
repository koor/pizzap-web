import { ReactNode, useMemo } from 'react'
import styled from 'styled-components/macro'
import InfiniteScroll from 'react-infinite-scroll-component'

const Row = styled.div`
  height: 30;
  border: '1px solid green';
  margin: 6;
  padding: 8;
`
export const Infinite = ({
  array,
  hasMore,
  fetchMore,
  loader,
}: {
  array: Array<any>
  fetchMore: () => void
  hasMore: boolean
  loader: ReactNode
}) => {
  return (
    <InfiniteScroll
      dataLength={array.length}
      next={fetchMore}
      hasMore={hasMore}
      loader={loader}
      height={400}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {array.map((i, index) => (
        <Row key={index}>div - #{index}</Row>
      ))}
    </InfiniteScroll>
  )
}
export default Infinite
