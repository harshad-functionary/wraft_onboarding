import { Box, Button, Flex, Input, Avatar, Text, Grid, Heading } from "theme-ui"
import FilterSearch from "../../public/documents_svg/Search toggle.svg"
import Image from "next/image"
import { useState, ChangeEvent } from "react"
import SideBar from "@/components/SideBar"
import DocumentHeader from "@/components/DocumentHeader"

const navItems = [
    { name: "content", items: ["documents", "approvals"] },
    {
        name: "structure",
        items: ["templates", "variants", "pipelines", "manage"],
    },
]

const Dashboard = () => {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const handleSearch = () => {
        // Perform search logic with the searchValue
        console.log("Search for:", searchValue)
    }

    return (
        <Flex as="section">
            {/* sidebar */}
            <SideBar
                handleInputChange={handleInputChange}
                handleSearch={handleSearch}
                searchValue={searchValue}
                navItems={navItems}
            />
            <Flex as="section" sx={{ flexGrow: 1, flexDirection: "column" }}>
                {/* -----header---- */}
                <DocumentHeader />
                {/* -----main------ */}
                <Box
                    as="main"
                    sx={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        px: "32px",
                        pt: "32px",
                        pb: "52px",
                        backgroundColor: "#FAFBFC",
                        height: "100vh",
                    }}>
                    <Flex></Flex>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Dashboard
