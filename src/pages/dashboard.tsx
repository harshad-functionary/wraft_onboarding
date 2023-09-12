import { Box, Button, Flex, Input, Avatar, Text, Grid } from "theme-ui"
import DashboardNavitem from "@/components/DashboardNavitem"
import Frame from "../../public/Frame.svg"
import Light from "../../public/Dark-Light.svg"
import Image from "next/image"
import SearchIcon from "../../public/SearchDocument.svg"
import NotificationIcon from "../../public/Notification.svg"
import { useState, ChangeEvent } from "react"
import DahboardTemplate from "@/components/DashboardTemplate"
import Cookies from "js-cookie"
import { useRouter } from "next/router"

type propCardItem = {
    content: string
    color: string
}

const token = Cookies.get("access_token")

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

const authenticateUser = () => {
    const isAuthenticated = !!Cookies.get("access_token")
    // console.log(Cookies.get("access_token"))
    return true
}

const Dashboard = () => {
    const [searchValue, setSearchValue] = useState("")
    const router = useRouter()
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }
    // console.log(Cookies.get("access_token"))

    const handleSearch = () => {
        // Perform search logic with the searchValue
        console.log("Search for:", searchValue)
    }

    const logoutHandle = () => {
        // Remove the "access_token" cookie
        Cookies.remove("access_token")
        Cookies.remove("refresh_token")
        router.push("/")
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

                <DashboardNavitem items={navItems} />
                <Box sx={{ mt: "32px", ml: "32px" }}>
                    <Image src={Light} alt="Logo" />
                </Box>
                <Button onClick={logoutHandle}>Logout</Button>
            </Box>
            <Flex as="section" sx={{ flexGrow: 1, flexDirection: "column" }}>
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
                        }}>
                        {userCards.map((item: propCardItem, index: number) => (
                            <DahboardTemplate key={index} items={item} />
                        ))}
                    </Grid>
                </Box>
            </Flex>
        </Flex>
    )
}

export async function getServerSideProps(context: any) {
    const isAuthenticated = authenticateUser()
    if (!isAuthenticated) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }
    return {
        props: {},
    }
}

export default Dashboard
