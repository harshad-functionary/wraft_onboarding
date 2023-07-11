import { useState } from "react"
import { useRouter } from "next/router"
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
} from "theme-ui"
import Logo from "../../public/Logo.svg"
import GoogleLogo from "../../public/GoogleLogo.svg"

const SignupPage = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Perform signup logic here
        // For simplicity, let's just navigate to a success page
        router.push("/success")
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
                    Join Wraft
                </Heading>

                <Box
                    as="form"
                    onSubmit={handleSubmit}
                    sx={{ marginBottom: "56px" }}>
                    <Flex sx={{ gap: "16px", marginBottom: "24px" }}>
                        <Box sx={{ flex: "1 1 264px" }}>
                            <Label htmlFor="firstName">First Name:</Label>
                            <Input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ flex: "1 1 auto" }}>
                            <Label htmlFor="lastName">Last Name:</Label>
                            <Input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Box>
                    </Flex>
                    <Box sx={{ marginBottom: "32px" }}>
                        <Label htmlFor="email">Email:</Label>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Button type="submit">Join waitlist</Button>
                </Box>

                <Button onClick={handleGoogleSignIn} variant="googleLogin">
                    <Image src={GoogleLogo} alt="Google Logo" className="" />
                    Continue with Google
                </Button>

                <Text as="p" variant="" mt={4}>
                    Already a member?{" "}
                    <Link href="/signin" variant="">
                        Sign in
                    </Link>
                </Text>
                <Text as="p" variant="">
                    By Joining the waiting list, I agree to Wraf&apos;s{" "}
                    <Link href="">Privacy Policy.</Link>
                </Text>
            </Flex>
        </Grid>
    )
}

export default SignupPage
