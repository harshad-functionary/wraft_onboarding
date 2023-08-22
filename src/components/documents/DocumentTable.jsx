/** @jsxImportSource theme-ui */

import React, { useMemo } from "react"
import { useTable, usePagination } from "react-table"
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

    const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, pageOptions,setPageSize, 
        state: { pageIndex,pageSize },
        gotoPage,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage, } =
        useTable({
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 8 }, // Initial page index
        }, usePagination // Use pagination feature
        )

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
                    {page.map((row) => {
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
      
            <div sx={{ display: "flex", marginTop: "28px", }}>
                <div sx={{ height: "29px", py: "8px", px: "10px", border: "1px solid #E4E9EF", borderRadius : "4px", display: "flex"}}>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {"<<"}First
                </button>
                <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>
                  Last{">>"}
                </button>
                </div>
                
                <div sx={{ marginLeft: "auto" }}>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{" "}
                </div>
             </div>
        </div>
 
    )
}
export default TableComponent
