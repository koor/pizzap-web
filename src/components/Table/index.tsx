import { useMemo } from 'react'
import styled from 'styled-components/macro'
import { useTable } from 'react-table'
import FormatTime from 'utils/friendlyFormatTime'

const Styles = styled.div`
  /* This is required to make the table full-width */
  display: block;
  max-width: 100%;

  /* This will make the table scrollable when it gets too small */
  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid black;
  }

  table {
    /* Make sure the inner table is always as wide as needed */
    width: 100%;
    border-spacing: 0;
    border: 1px solid ${({ theme }) => theme.bg2};
    border-radius: 3px;
    thead {
      background: ${({ theme }) => theme.bg2};
      border-radius: 3px;
      height: 50px;
      tr {
        th {
          border-bottom: 0;
        }
      }
    }
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.bg2};
      text-align: center;
      /* The secret sauce */
      /* Each cell should grow equally */
      width: 1%;
      /* But "collapsed" cells should be as small as possible */
      &.collapse {
        width: 0.0000000001%;
      }

      :last-child {
        border-right: 0;
      }
    }
  }
`
function Table({ columns, data }: { columns: Array<any>; data: Array<any> }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <th {...column.getHeaderProps()} key={index}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} key={i}>
              {row.cells.map((cell, i) => {
                return (
                  <td {...cell.getCellProps()} key={i}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const Index = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Time',
        accessor: 'time',
        Cell: ({ value }: { value: any }) => {
          return FormatTime(value)
        },
        Style: `text-algin: left`,
      },
    ],
    []
  )
  const data = [
    { firstName: 'aaaaa', lastName: 'a111111', age: '12', time: 1632795725070 },
    { firstName: 'bbbbb', lastName: 'b222222', age: '14', time: 1632795737068 },
    { firstName: 'bbbbb', lastName: 'b333333', age: '14', time: 1632800044000 },
    { firstName: 'bbbbb', lastName: 'b333333', age: '14', time: 1632800440581 },
    { firstName: 'bbbbb', lastName: 'b333333', age: '14', time: 1624851244000 },
    { firstName: 'bbbbb', lastName: 'b333333', age: '14', time: 1593315244000 },
    { firstName: 'bbbbb', lastName: 'b333333', age: '14', time: 1632195244000 },
  ]
  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default Index
