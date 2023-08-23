/** @jsxImportSource theme-ui */


const TableNameCell = ({row}) => {
  return (
   <>
    <div sx={{display: "flex"}}>
        {/* <div sx={{width: "6.3px", height: "38px", bg: `${row.original.name.documentName}`}}> </div> */}
        {row.original.name.category}
    </div>
   </>
  )
}

export default TableNameCell