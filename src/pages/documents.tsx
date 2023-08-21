/** @jsxImportSource theme-ui */

import { Box, Button, Flex, Input, Avatar, Text, Grid, Heading } from "theme-ui"
import SearchToggle from "../../public/documents_svg/Search toggle.svg"
import FilterIcon from "../../public/documents_svg/Filter 2.svg"
import SortIcon from "../../public/documents_svg/Sort 2.svg"
import SortByDate from "../../public/documents_svg/DateSort.svg"
import SortAscending from "../../public/documents_svg/AscendingSort.svg"
import DocumentSearch from "../../public/documents_svg/DocumentSearch.svg"
import Image from "next/image"
import { useState, ChangeEvent } from "react"
import MockData from "./../components/documents/Mock_Data.json"
import SideBar from "@/components/documents/SideBar"
import DocumentHeader from "@/components/documents/DocumentHeader"
import DocumentTable from "@/components/documents/DocumentTable"
import FilterDropdown from "@/components/documents/FilterDropdown"

const navItems = [
    { name: "content", items: ["documents", "approvals"] },
    {
        name: "structure",
        items: ["templates", "variants", "pipelines", "manage"],
    },
]

interface DropdownItems {
    // Define your properties here
    filter: boolean
    sort: boolean
    search: boolean
}

const Documents: React.FC = () => {
    const [searchValue, setSearchValue] = useState("")

    const [isDropdown, setIsDropdown] = useState<DropdownItems>({
        filter: false,
        sort: false,
        search: false,
    })

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const handleSearch = () => {
        // Perform search logic with the searchValue
        console.log("Search for:", searchValue)
    }

    const handleFilterButtonClick = () => {
        setIsDropdown((prevState) => ({
            ...prevState,
            sort: false,
            filter: !prevState.filter,
        }))
    }
    const handleSortButtonClick = () => {
        setIsDropdown((prevState) => ({
            ...prevState,
            filter: false,
            sort: !prevState.sort,
        }))
    }
    const handleSearchButtonClick = () => {
        setIsDropdown((prevState) => ({
            ...prevState,
            search: !prevState.search,
        }))
    }

    const uniqueCategories: string[] = [
        ...new Set(MockData.map((item) => item.category)),
    ].sort()

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
                        as="section"
                        sx={{
                            maxHeight: "32px",
                            alignItems: "center",
                            marginBottom: "18px",
                            minWidth: "200px",
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
                            }}
                            onClick={handleSortButtonClick}>
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
                        {!isDropdown.search ? (
                            <Button
                                variant="buttons.none"
                                sx={{ marginLeft: "12px" }}
                                onClick={handleSearchButtonClick}>
                                <Image
                                    src={SearchToggle}
                                    alt="click to search Documents"
                                />
                            </Button>
                        ) : (
                            <Flex
                                sx={{
                                    height: "32px",
                                    width: "155px",
                                    bg: "#FFFFFF",
                                    border: "1px solid #E4E9EF",
                                    alignItems: "center",
                                    borderRadius: 0,
                                    py: "6px",
                                    pl: "8px",
                                    pr: "8px",
                                    ml: "12px",
                                }}>
                                <Button
                                    onClick={handleSearchButtonClick}
                                    aria-label="click here to search "
                                    sx={{
                                        variant: "buttons.none",
                                        mr: "8px",
                                    }}>
                                    <Image
                                        src={DocumentSearch}
                                        alt="click on this icon or press enter to search for anuthing thoughout the app"
                                    />
                                </Button>
                                <Input
                                    type="text"
                                    placeholder="Search"
                                    aria-label="type what you want to search thoughout the app"
                                    value={searchValue}
                                    onChange={handleInputChange}
                                    sx={{
                                        appearance: "none",
                                        border: "none",
                                        fontSize: "13px",
                                        lineHeight: "19.2px",
                                        color: "#C1C6DB",
                                        background: "transparent",
                                        width: "100%",
                                        p: "0px",
                                        m: "0px",
                                        height: "100%",
                                        "::placeholder": {
                                            color: "#C1C6DB",
                                        },
                                    }}
                                />
                            </Flex>
                        )}

                        {isDropdown.filter && (
                            <FilterDropdown props={uniqueCategories} />
                        )}

                        {isDropdown.sort && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    display: "flex",
                                    flexDirection: "column",
                                    top: "36px",
                                    left: "0px",
                                    width: "200px",
                                    background: "#fff",
                                    borderRadius: "4px",
                                    zIndex: 1,
                                    boxShadow:
                                        "2px 3px 14px 0px rgba(0, 0, 0, 0.16)",
                                }}>
                                <Button
                                    sx={{
                                        variant: "buttons.none",
                                        display: "flex",
                                        height: "40px",
                                        px: "16px",
                                        py: "8px",
                                        maxWidth: "100%",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}>
                                    <Text>By name</Text>
                                    <Image src={SortAscending} alt="" />
                                </Button>
                                <Button
                                    sx={{
                                        variant: "buttons.none",
                                        display: "flex",
                                        height: "40px",
                                        px: "16px",
                                        py: "8px",
                                        maxWidth: "100%",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}>
                                    <Text>By date</Text>
                                    <Image src={SortByDate} alt="" />
                                </Button>
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
