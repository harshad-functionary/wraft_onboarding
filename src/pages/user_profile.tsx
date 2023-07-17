import { Box, Flex } from "theme-ui"
import UserProfileNavitem from "@/components/UserProfileNavitem"
import Frame from "../../public/Frame.svg"
import Light from "../../public/Dark-Light.svg"
import Image from "next/image"

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

const IndexPage = () => {
    return (
        <Flex as="main">
            <Box
                as="section"
                sx={{
                    width: "245px",
                    height: "100vh",
                    borderRight: "1px solid #ECEFF4",
                }}>
                <Box sx={{ mt: "23px", ml: "32px", mb: "25px" }}>
                    <Image src={Frame} alt="Logo" />
                </Box>

                <UserProfileNavitem items={navItems} />
                <Box sx={{ mt: "32px", ml: "32px" }}>
                    <Image src={Light} alt="Logo" />
                </Box>
            </Box>
        </Flex>
    )
}

export default IndexPage
