/** @jsxImportSource theme-ui */
import TableNameCell from "./TableNameCell"
import Image from "next/image"
import Delete from "../../../public/documents_svg/DocumentDelete.svg"

export const Columns = [
    {
        Header: "Name",
        accessor: "name",
        Cell: ({row}) =>{
            return(<div sx={{display: "flex", gap: "18px"}}>
                <div sx={{width: "6.3px", height: "38px", bg: `${row.original.name.colorCode}`}}> </div>
                <div sx={{display: "flex", flexDirection: "column"}}>
                    <p sx={{fontSize: "12px", lineHeight: "19.2px", color: "dark_200"}}>{row.original.name.documentName}</p>
                   <p sx={{fontWeight: "heading", color: "dark_600"}}> {row.original.name.category}</p>
                </div>
                </div>)
        } 
    },
    {
        Header: "Date",
        accessor: "date",
    },
    {
        Header: "Edited By",
        accessor: "editedBy",
        Cell: ({row}) => {
            return(
                <div sx={{display: "flex"}}>
                    <img src={row.original.editedBy.editorAvatar} alt=""/>
                    <p>{row.original.editedBy.editorName}</p>
                </div>
            )
        }
    },
    {
        Header: "State",
        accessor: "state",
        Cell: ({row}) => {
            return(
                <div sx={{display: "flex",marginRight: "28px"}}>
                    <p sx={{marginRight: "auto"}}>{row.original.state}</p>
                    <Image src={Delete} alt=""/>
                </div>
            )
        }
    },
]
