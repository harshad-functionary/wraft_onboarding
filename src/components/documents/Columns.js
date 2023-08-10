/** @jsxImportSource theme-ui */


export const Columns = [
    {
        Header: "Name",
        accessor: (data) => `${data.name} - ${data.category}`,
        Cell: ({ value }) => <div>{value}</div>,
    },
    {
        Header: "Date",
        accessor: "date",
    },
    {
        Header: "Edited By",
        accessor: "editedBy",
    },
    {
        Header: "State",
        accessor: "state",
    },
]
