/** @jsxImportSource theme-ui */

import React, { useMemo, useState } from "react"
import { useTable, usePagination } from "react-table"
import { Columns } from "./Columns"
import Link from "next/link"
import DeletePrompt from "./DeletePrompt"
import Delete from "../../../public/documents_svg/DocumentDelete.svg"
import Image from "next/image"
import Button from "../Components/Button"

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

    const [isModalOpen, setIsModalOpen] = useState(false);
    

    // Toggle function to open and close the modal
    const toggleModalOpen = () => {
        setIsModalOpen(true);
    }
    const toggleModalClose = () => {
        setIsModalOpen(false);
    }

   
    const bgColorMapping = {
        Approved: "rgba(159, 229, 185, 0.50)",
        Draft: "rgba(251, 204, 185, 0.50)",
        Pending: "rgba(208, 212, 244, 0.50)"
    }


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
        <div sx={{position: "relative"}}>
            <table {...getTableProps()} sx={{width: "100%", borderCollapse: "collapse", border: "1px solid #E4E9EF"}}>
                <thead sx={{height: "42px",bg: "#FFFFFF", borderBottom: "1px solid #E4E9EF"}}>
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
                            // <Link key={row.id} href={"#"} sx={{display: "table-row"}}>
                            <tr {...row.getRowProps()} key={row.id}  
                            sx={{height: "70px",
                                display: "table-row",
                                ":nth-of-type(even)": {
                                    bg: "#F9FAFB;", // Apply style for even rows
                                },
                                ":nth-of-type(odd)": {
                                    bg: "#FFFFFF", // Apply style for odd rows
                                },
                            }}>
                                
                                {row.cells.map((cell) => {
                                    return ( 
                                        <td {...cell.getCellProps()} key={cell.column.id} >
                                            { (cell.column.id !== "state" ) &&
                                                cell.render("Cell")
                                            }
                                            { (cell.column.id === "state" ) &&
                                                 <div sx={{display: "flex",marginRight: "28px", alignItems: "center"}}>
                                                 <p sx={{marginRight: "auto", p: "2px 10px", borderRadius: "12px",bg: `${bgColorMapping[row.original.state]}`}}>{row.original.state}</p>
                                                 {/* <button onClick={toggleModal} ><Image src={Delete} alt=""/></button> */}
                                                 <Button  border="none"
                                                    onClick={toggleModalOpen}
                                                    ><Image src={Delete} alt=""/>
                                                </Button>
                                             </div>
                                            }
                                        </td>  
                                    )
                                })}
                                
                            </tr>
                            // </Link>
                        )
                    })}
                </tbody>
            </table>

            {isModalOpen && <DeletePrompt toggleModalClose={toggleModalClose}/>}
      
            <div sx={{ display: "flex", marginTop: "28px",}}>
                <div sx={{ height: "29px", py: "8px", px: "10px", border: "1px solid #E4E9EF", borderRadius : "4px", display: "flex"}}>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {"<<"}First
                </button>
                <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>
                  Last{">>"}
                </button>
                </div>
                <div sx={{ marginLeft: "auto", fontSize: "12px", lineHeight: "19.2px", fontWeight: "heading", color: "dark_400"}}>
                  <p>Showing{" "}{pageIndex + 1} of {pageOptions.length}</p>  
                </div>
             </div>
        </div>
 
    )
}
export default TableComponent
