import { useState } from "react"
import PasswordVerified from "@/components/PasswordVerified"
import Image from "next/image"
import { Flex, Box, Heading, Label, Input, Button, Text, Grid } from "theme-ui"
import Logo from "../../public/Logo.svg"
import { useAppContext } from "../AppContext"

const ResetPasswordPage = () => {
    const { commonState, updateCommonState } = useAppContext()
    const { password, email } = commonState

    const [email1, setEmail1] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [showFirstSection, setShowFirstSection] = useState(true)
    const [verified, setVerified] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (isValidEmail(email1)) {
            if (email === email1) {
                setShowFirstSection(false)
            } else {
                alert("wrong email")
            }
        }
    }
    console.log(email)
    const handleSubmit1 = (e: React.FormEvent) => {
        e.preventDefault()

        if (validatePassword(newPassword, confirmPassword)) {
            updateCommonState({ password: newPassword })
        }
    }

    const isValidEmail = (email1: string): boolean => {
        // Simple email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validatePassword = (
        newPassword: string,
        confirmPassword: string
    ): boolean => {
        return newPassword === confirmPassword
    }

    const handleClick = () => {
        setVerified(true)
    }

    if (verified) {
        return <PasswordVerified />
    }

    return (
        <Grid as="main" variant="variants.signinGrid">
            <Box as="section" sx={{ marginRight: "auto" }}>
                <Image src={Logo} alt="Wraft Logo" className="" priority />
            </Box>

            {showFirstSection && (
                <Flex as="section" variant="signinRight">
                    <Heading as="h3" variant="styles.h3" sx={{ mb: "18px" }}>
                        Reset password
                    </Heading>

                    <Text
                        as="p"
                        sx={{
                            fontWeight: "heading",
                            color: "dark_400",
                            mb: "48px",
                        }}>
                        We will send you a verification link to your registered
                        email.
                    </Text>
                    <Box as="form" onSubmit={handleSubmit}>
                        <Label htmlFor="email">Enter your email</Label>
                        <Input
                            type="email"
                            id="email1"
                            value={email1}
                            onChange={(e) => setEmail1(e.target.value)}
                            mb={"24px"}
                        />

                        <Button type="submit">Next</Button>
                    </Box>
                </Flex>
            )}
            {!showFirstSection && (
                <Flex as="section" variant="signinRight">
                    <Heading as="h3" variant="styles.h3" sx={{ mb: "64px" }}>
                        Reset password
                    </Heading>

                    <Box as="form" onSubmit={handleSubmit1}>
                        <Label htmlFor="New password">New password</Label>
                        <Input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            mb={"24px"}
                        />

                        <Label htmlFor="Confirm password">
                            Confirm password
                        </Label>
                        <Input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            mb={"24px"}
                        />

                        <Button type="submit" onClick={handleClick}>
                            Reset password
                        </Button>
                    </Box>
                </Flex>
            )}
        </Grid>
    )
}

export default ResetPasswordPage
