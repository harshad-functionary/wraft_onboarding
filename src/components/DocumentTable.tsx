/** @jsxImportSource theme-ui */

interface DocumentItem {
    name: string
    category: string
    colorCode: string
    date: string
    editedBy: string
    state: string
}
interface TableProps {
    documents: DocumentItem[]
}

const DocumentTable: React.FC<TableProps> = ({ documents }) => {
    return (
        <table
            sx={{
                textAlign: "left",
                width: "100%",
                borderCollapse: "collapse",
                border: "1px solid #E4E9EF",
            }}>
            <thead sx={{ height: "41px", border: "1px solid #E4E9EF" }}>
                <tr sx={{}}>
                    <th sx={{ width: "33.5%", pl: "24px" }}>Name</th>
                    <th sx={{ width: "19.5%" }}>Date</th>
                    <th sx={{ width: "28.8%" }}>Edited By</th>
                    <th sx={{ width: "18.2%" }}>State</th>
                </tr>
            </thead>
            <tbody>
                {documents.map((document) => (
                    <tr key={document.name} sx={{ height: "70px" }}>
                        <td>{document.name}</td>
                        <td>{document.date}</td>
                        <td>{document.editedBy}</td>
                        <td>{document.state}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DocumentTable
