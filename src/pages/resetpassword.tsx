import { useState } from "react"

import Image from "next/image"
import { Flex, Box, Heading, Label, Input, Button, Text, Grid } from "theme-ui"
import Logo from "../../public/Logo.svg"

const ResetPasswordPage = () => {
    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showFirstSection, setShowFirstSection] = useState(true)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        e.preventDefault()

        if (isValidEmail(email)) {
            setShowFirstSection(false)
        }
        // Perform ResetPassword logic here
        // For simplicity, let's just navigate to a success page
    }

    const isValidEmail = (email: string): boolean => {
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
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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

                    <Box as="form" onSubmit={handleSubmit}>
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

                        <Button type="submit">Reset password</Button>
                    </Box>
                </Flex>
            )}
        </Grid>
    )
}

export default ResetPasswordPage
