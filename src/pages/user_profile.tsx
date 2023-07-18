import { Box, Button, Flex, Input, Avatar, Text, Grid } from "theme-ui"
import UserProfileNavitem from "@/components/UserProfileNavitem"
import Frame from "../../public/Frame.svg"
import Light from "../../public/Dark-Light.svg"
import Image from "next/image"
import SearchIcon from "../../public/SearchDocument.svg"
import NotificationIcon from "../../public/Notification.svg"
import { useState, ChangeEvent } from "react"
import UserProfileCard from "@/components/UserProfileCard"

type propCardItem = {
    content: string
    color: string
}

const navItems = [
    { name: "Documents", linkRoute: "" },
    { name: "Approvals", linkRoute: "" },
    { name: "Variants", linkRoute: "" },
    { name: "Templates", linkRoute: "" },
    { name: "Blocks", linkRoute: "" },
    { name: "Manage", linkRoute: "" },
    { name: "Pipeline", linkRoute: "" },
    { name: "Settings", linkRoute: "" },
]

const userCards = [
    { content: "Exit Note", color: "info_400" },
    { content: "Branding Proposal", color: "error_400" },
    { content: "Relieving Letter", color: "success_400" },
    { content: "Simple Board Resolution", color: "warning_300" },
    { content: "Offer Letter", color: "warning_500" },
    { content: "NDA", color: "primary_500" },
]

const IndexPage = () => {
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
            <Box
                as="section"
                sx={{
                    width: "245px",
                    height: "100vh",
                    borderRight: "1px solid #ECEFF4",
                }}>
                <Box sx={{ mt: "23px", ml: "32px", mb: "25px" }}>
                    <Image src={Frame} alt="Logo" priority />
                </Box>

                <UserProfileNavitem items={navItems} />
                <Box sx={{ mt: "32px", ml: "32px" }}>
                    <Image src={Light} alt="Logo" />
                </Box>
            </Box>
            <Flex as="section" sx={{ width: "100%", flexDirection: "column" }}>
                <Box
                    as="header"
                    sx={{
                        py: "20px",
                        pl: "47px",
                        pr: "32px",
                        borderBottom: "1px solid #ECEFF4",
                    }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                        <Button sx={{ bg: "success_400" }}>New Document</Button>
                        <Flex
                            sx={{
                                ml: "auto",
                                gap: "24px",
                                alignItems: "center",
                            }}>
                            <Flex
                                sx={{
                                    width: "284px",
                                    height: "38px",
                                    bg: "#FAFBFC",
                                    border: "1px solid #E4E9EF",
                                    alignItems: "center",
                                    borderRadius: 0,
                                    py: "9px",
                                    pl: "16px",
                                    pr: "11px",
                                }}>
                                <Input
                                    type="text"
                                    placeholder="Search documents"
                                    value={searchValue}
                                    onChange={handleInputChange}
                                    sx={{
                                        appearance: "none",
                                        border: "none",
                                        fontSize: "12px",
                                        lineHeight: "19px",
                                        background: "transparent",
                                        p: "0",
                                        fontWeight: "heading",
                                    }}
                                />
                                <Button
                                    type="submit"
                                    onClick={handleSearch}
                                    sx={{
                                        variant: "buttons.none",
                                    }}>
                                    <Image
                                        src={SearchIcon}
                                        alt="click to search ducuments"
                                    />
                                </Button>
                            </Flex>
                            <Button variant="buttons.none">
                                <Image
                                    src={NotificationIcon}
                                    alt="click to see notifications"
                                />
                            </Button>
                            <Avatar
                                src="/UserAvatar.png"
                                sx={{ backgroundColor: "white" }}
                            />
                        </Flex>
                    </Box>
                </Box>
                <Box
                    as="main"
                    sx={{
                        display: "flex",
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
                        }}>
                        {userCards.map((item: propCardItem, index: number) => (
                            <UserProfileCard key={index} items={item} />
                        ))}
                    </Grid>
                </Box>
            </Flex>
        </Flex>
    )
}

export default IndexPage
