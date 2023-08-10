/** @jsxImportSource theme-ui */

import React, { useMemo } from "react"
import { useTable } from "react-table"
import MockData from "./Mock_Data.json"
import { Columns } from "./Columns"

// interface DataItem {
//     name: string
//     category: string
//     colorCode: string
//     date: string
//     editedBy: string
//     editorAvatar: string
//     state: string
// }

const TableComponent = ({ data }) => {
    const columns = useMemo(() => Columns, [])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        })

    return (
        <div>
            <table {...getTableProps()} sx={{width: "100%", borderCollapse: "collapse", border: "1px solid #E4E9EF"}}>
                <thead sx={{height: "42px", borderBottom: "1px solid #E4E9EF"}}>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id} style={{ textAlign: "left" }}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} key={column.id}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} key={row.id} sx={{height: "70px"}}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()} key={cell.column.id}>
                                            {cell.render("Cell")}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default TableComponent
