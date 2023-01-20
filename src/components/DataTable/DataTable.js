import React from 'react'
import { Table } from 'react-bootstrap'
import { useTable } from 'react-table'

const DataTable = ({ columns, data }) => {

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    })

    return (
        <Table striped bordered hover responsive {...getTableProps()}>
            <thead className='bg-white'>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => {
                                return column.hideHeader === true ? null : (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                )
                            })}
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default DataTable