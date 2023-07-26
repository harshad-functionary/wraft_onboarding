import { Box, Button, Flex, Input, Avatar, Text, Grid, Heading } from "theme-ui"
import FilterSearch from "../../public/documents_svg/Search toggle.svg"
import Image from "next/image"
import { useState, ChangeEvent } from "react"
import SideBar from "@/components/SideBar"

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
            <SideBar
                handleInputChange={handleInputChange}
                handleSearch={handleSearch}
                searchValue={searchValue}
                navItems={navItems}
            />
            <Flex as="section" sx={{ flexGrow: 1, flexDirection: "column" }}>
                <Box
                    as="header"
                    sx={{
                        py: "25px",
                        pl: "32px",
                        borderBottom: "1px solid #E4E9EF",
                    }}>
                    <Heading
                        as="h5"
                        variant="styles.h5_regular"
                        sx={{ color: "dark_600" }}>
                        All documents
                    </Heading>
                </Box>
                <Box
                    as="main"
                    sx={{
                        display: "flex",
                        width: "70%",
                        flexDirection: "column",
                        px: "48px",
                        py: "26px",
                    }}>
                    <Text
                        as="p"
                        sx={{
                            fontWeight: "heading",
                            color: "#363E49",
                            mb: "18px",
                        }}>
                        Get started with templates
                    </Text>
                    <Grid
                        sx={{
                            gap: "24px",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            justifyContent: "start",
                            flex: "none",
                        }}></Grid>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Dashboard
