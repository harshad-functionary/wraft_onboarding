import { useState } from "react"

import Image from "next/image"
import {
    Flex,
    Box,
    Heading,
    Label,
    Input,
    Button,
    Text,
    Link,
    Grid,
    Divider,
} from "theme-ui"
import Logo from "../../public/Logo.svg"
import GoogleLogo from "../../public/GoogleLogo.svg"

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Perform signup logic here
        // For simplicity, let's just navigate to a success page
    }

    const handleGoogleSignIn = () => {
        // Perform Google sign-in logic here
    }

    return (
        <Grid as="main" variant="variants.signinGrid">
            <Box as="section" sx={{ marginRight: "auto" }}>
                <Image src={Logo} alt="Wraft Logo" className="" priority />
            </Box>

            <Flex as="section" variant="signinRight">
                <Heading as="h3" variant="styles.h3" sx={{ mb: "48px" }}>
                    Sign in
                </Heading>

                <Box as="form" onSubmit={handleSubmit}>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        mb={"24px"}
                    />

                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        mb={"12px"}
                    />
                    <Flex
                        sx={{
                            width: "100%",
                            flexDirection: "row-reverse",
                            position: "relative",
                        }}>
                        <Link
                            href="/resetpassword"
                            sx={{
                                textDecoration: "none",
                                color: "dark_300",
                            }}>
                            Forgot Password?
                        </Link>
                        <Button
                            type="submit"
                            sx={{
                                position: "absolute",
                                mr: "auto",
                                top: "12px",
                                left: "0",
                            }}>
                            Join waitlist
                        </Button>
                    </Flex>
                </Box>

                <Divider
                    sx={{
                        margin: "56px 0",
                        color: "rgba(0.141, 0.243, 0.286, 0.1)",
                    }}
                />

                <Button onClick={handleGoogleSignIn} variant="googleLogin">
                    <Image src={GoogleLogo} alt="Google Logo" className="" />
                    Continue with Google
                </Button>

                <Text as="p" sx={{ mt: 5, color: "dark_600" }}>
                    Not a user yet?
                    <Link
                        href="/signin"
                        sx={{
                            textDecoration: "none",
                            color: "dark_600",
                            fontWeight: "bold",
                            pl: 0,
                        }}>
                        Request invite
                    </Link>
                </Text>
            </Flex>
        </Grid>
    )
}

export default LoginPage
