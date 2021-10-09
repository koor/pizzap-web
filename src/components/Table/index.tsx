import styled from 'styled-components/macro'
import { useTable, usePagination } from 'react-table'

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
  }

  table {
    /* Make sure the inner table is always as wide as needed */
    width: 100%;
    height: 300px;
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

const Th = styled.th<{ align?: 'left' | 'center' | 'right' }>`
  text-align: ${({ align }) => (align ? align : 'center')};
`

const Td = styled.td<{ align?: 'left' | 'center' | 'right' }>`
  text-align: ${({ align }) => (align ? align : 'center')};
`
export default function Table({ columns, data }: { columns: Array<any>; data: Array<any> }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    // @ts-ignore
    page, // Instead of using 'rows', we'll use page,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  )

  // Render the UI for your table
  return (
    <Styles>
      <div className="tableWrap">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column: any, index) => (
                  <Th
                    {...column.getHeaderProps({
                      className: column.collapse ? 'collapse' : '',
                    })}
                    key={index}
                    align={column.align}
                  >
                    {column.render('Header')}
                  </Th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row: any, index: number) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell: any, i: number) => {
                    return (
                      <Td
                        {...cell.getCellProps({
                          className: cell.column.collapse ? 'collapse' : '',
                        })}
                        key={i}
                        align={cell.column.align}
                      >
                        {cell.render('Cell')}
                      </Td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Styles>
  )
}
