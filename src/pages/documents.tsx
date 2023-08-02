import { Box, Button, Flex, Input, Avatar, Text, Grid, Heading } from "theme-ui"
import DocumentSearch from "../../public/documents_svg/Search toggle.svg"
import FilterIcon from "../../public/documents_svg/Filter 2.svg"
import SortIcon from "../../public/documents_svg/Sort 2.svg"
import Image from "next/image"
import { useState, ChangeEvent } from "react"
import SideBar from "@/components/SideBar"
import DocumentHeader from "@/components/DocumentHeader"
import DocumentTable from "@/components/DocumentTable"

interface DocumentItem {
    name: string
    category: string
    colorCode: string
    date: string
    editedBy: string
    state: string
}

const navItems = [
    { name: "content", items: ["documents", "approvals"] },
    {
        name: "structure",
        items: ["templates", "variants", "pipelines", "manage"],
    },
]

const documents: DocumentItem[] = [
    {
        name: "EXT001",
        category: "Exit Note",
        colorCode: "info_400",
        date: "2023-08-01",
        editedBy: "User A",
        state: "Pending",
    },
    {
        name: "Document 2",
        date: "2023-07-30",
        editedBy: "User B",
        state: "Approved",
    },
    {
        name: "Document 3",
        date: "2023-07-28",
        editedBy: "User C",
        state: "Rejected",
    },
    {
        name: "Document 4",
        date: "2023-07-25",
        editedBy: "User A",
        state: "Pending",
    },
]

const Dashboard = () => {
    const [searchValue, setSearchValue] = useState("")
    // const [selectedFilter, setSelectedFilter] = useState<string>("") // You can initialize with default values
    // const [selectedSort, setSelectedSort] = useState<string>("") // You can initialize with default values

    // // Options for the filter and sort dropdowns
    // const filterOptions: string[] = ["Option 1", "Option 2", "Option 3"]
    // const sortOptions: string[] = ["Option A", "Option B", "Option C"]

    // const handleFilterChange = (
    //     event: ChangeEvent<HTMLSelectElement>
    // ): void => {
    //     setSelectedFilter(event.target.value)
    // }

    // const handleSortChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    //     setSelectedSort(event.target.value)
    // }

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
                    <Flex
                        sx={{
                            maxHeight: "32px",
                            alignItems: "center",
                            marginBottom: "19px",
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
                            }}>
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
                    </Flex>
                    <DocumentTable documents={documents} />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Dashboard
