import { Box, Button, Flex, Input, Avatar, Text, Grid, Heading } from "theme-ui"
import DocumentSearch from "../../public/documents_svg/Search toggle.svg"
import FilterIcon from "../../public/documents_svg/Filter 2.svg"
import SortIcon from "../../public/documents_svg/Sort 2.svg"
import Image from "next/image"
import { useState, ChangeEvent } from "react"
import MockData from "./../components/documents/Mock_Data.json"
import SideBar from "@/components/documents/SideBar"
import DocumentHeader from "@/components/documents/DocumentHeader"
import DocumentTable from "@/components/documents/DocumentTable"

const navItems = [
    { name: "content", items: ["documents", "approvals"] },
    {
        name: "structure",
        items: ["templates", "variants", "pipelines", "manage"],
    },
]

const Documents: React.FC = () => {
    const [searchValue, setSearchValue] = useState("")
    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const handleSearch = () => {
        // Perform search logic with the searchValue
        console.log("Search for:", searchValue)
    }

    const handleFilterButtonClick = () => {
        setIsFilterDropdownOpen(!isFilterDropdownOpen)
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
                    <Flex
                        sx={{
                            maxHeight: "32px",
                            alignItems: "center",
                            marginBottom: "18px",
                            position: "relative",
                        }}>
                        <Button
                            sx={{
                                variant: "buttons.none",
                                border: "1px solid #E4E9EF",
                                borderTopLeftRadius: "4px",
                                borderBottomLeftRadius: "4px",
                                borderRight: "0px",
                                py: "6px",
                                pl: "11px",
                                pr: "13px",
                                margin: "0px",
                            }}
                            onClick={handleFilterButtonClick}>
                            <Flex sx={{ gap: "8px" }}>
                                <Image src={FilterIcon} alt="" />
                                <Text
                                    sx={{
                                        lineHeight: "19.2px",
                                        color: "dark_200",
                                        fontSize: "12px",
                                    }}>
                                    Filter
                                </Text>
                            </Flex>
                        </Button>
                        <Button
                            sx={{
                                variant: "buttons.none",
                                border: "1px solid #E4E9EF",
                                borderTopRightRadius: "4px",
                                borderBottomRightRadius: "4px",
                                py: "6px",
                                pl: "15px",
                                pr: "14px",
                                margin: "0px",
                            }}>
                            <Flex sx={{ gap: "8px" }}>
                                <Image src={SortIcon} alt="" />
                                <Text
                                    sx={{
                                        lineHeight: "19.2px",
                                        color: "dark_200",
                                        fontSize: "12px",
                                    }}>
                                    Sort
                                </Text>
                            </Flex>
                        </Button>
                        <Button
                            variant="buttons.none"
                            sx={{ marginLeft: "12px" }}>
                            <Image
                                src={DocumentSearch}
                                alt="click to search Documents"
                            />
                        </Button>
                        {isFilterDropdownOpen && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    width: "100%", // Set the width to 100% of the parent container
                                    background: "#fff",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    zIndex: 1,
                                }}>
                                {/* Content of the dropdown */}
                                {/* You can add your dropdown content here */}
                                hi
                            </Box>
                        )}
                    </Flex>
                    <DocumentTable data={MockData} />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Documents
