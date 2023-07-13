import { useState } from "react"

import Image from "next/image"
import { Flex, Box, Heading, Button } from "theme-ui"
import CheckSuccess from "../../public/check-success.svg"

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Box
            as="main"
            sx={{ display: "flex", justifyContent: "center", mt: 7 }}>
            <Flex
                as="section"
                variant="signinRight"
                sx={{
                    flexDirection: "column",
                    alignItems: "center",
                    pt: "170px",
                }}>
                <Image src={CheckSuccess} alt="" className="" priority />
                <Heading
                    as="h3"
                    variant="styles.h3"
                    sx={{ mt: "127px", mb: "32px", color: "#363E49" }}>
                    Password changed
                </Heading>
                <Button>Go to login page</Button>
            </Flex>
        </Box>
    )
}

export default LoginPage
