import { useState, ChangeEvent } from "react"
import Layout from "@/components/documents/layout"
import { SidebarProps } from "@/components/documents/SideBar"

const Approvals: React.FC = () => {
    const [searchValue, setSearchValue] = useState("")
    const navItems = [
        { name: "content", items: ["documents", "approvals"] },
        {
            name: "structure",
            items: ["templates", "variants", "pipelines", "manage"],
        },
    ]
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const handleSearch = () => {
        // Perform search logic with the searchValue
        console.log("Search for:", searchValue)
    }

    const sidebarProps: SidebarProps = {
        handleInputChange: () => {
            handleInputChange
        },
        handleSearch: () => {
            handleSearch
        },
        searchValue: searchValue,
        navItems: navItems,
    }

    return (
        <Layout sidebarProps={sidebarProps}>
            <div>Approvals</div>
        </Layout>
    )
}

export default Approvals
