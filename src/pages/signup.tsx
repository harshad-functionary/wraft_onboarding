"use client"
import { useState, ChangeEvent, FormEvent } from "react"
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
    Divider,
} from "theme-ui"
import Logo from "../../public/Logo.svg"
import GoogleLogo from "../../public/GoogleLogo.svg"
import { useAppContext } from "../AppContext"
import WaitlistPrompt from "@/components/WaitlistPrompt"
import SignupVerification from "@/components/SignupVerificatin"

const SignUpPage = () => {
    const { commonState, updateCommonState } = useAppContext()
    const { firstName, lastName, email } = commonState
    const [formData, setFormData] = useState({ firstName, lastName, email })

    // State variable for conditional rendering
    const [showSuccess, setShowSuccess] = useState(false)
    const [showSuccess1, setShowSuccess1] = useState(false)

    const router = useRouter()

    const updateShowSuccess1 = (newValue: boolean) => {
        setShowSuccess1(newValue)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
        // console.log(formData)
    }

    const handleSubmit = (event: FormEvent<HTMLDivElement>) => {
        event.preventDefault()
        console.log(email)
        if (
            isValidEmail(formData.email) &&
            formData.firstName.length !== 0 &&
            formData.lastName.length !== 0
        ) {
            updateCommonState(formData)
            console.log(formData)
            console.log(email)
            console.log(commonState)
            setShowSuccess(true)
        } else {
            alert("fill the inputs currectly")
        }
    }

    const isValidEmail = (email: string): boolean => {
        // Simple email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleGoogleSignIn = () => {
        // Perform Google sign-in logic here
    }

    if (showSuccess) {
        if (!showSuccess1) {
            return <WaitlistPrompt updateShowSuccess1={updateShowSuccess1} />
        }
        return <SignupVerification />
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

                <Box as="form" onSubmit={handleSubmit}>
                    <Flex sx={{ gap: "16px", marginBottom: "24px" }}>
                        <Box sx={{ flex: "1 1 264px" }}>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Box>
                        <Box sx={{ flex: "1 1 auto" }}>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Box>
                    </Flex>
                    <Box sx={{ marginBottom: "32px" }}>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Box>
                    <Button type="submit">Join waitlist</Button>
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

                <Text as="p" sx={{ mt: 4, color: "dark_600", mb: "4px" }}>
                    Already a member?
                    <Link
                        href="/"
                        sx={{
                            textDecoration: "none",
                            color: "dark_600",
                            fontWeight: "bold",
                            pl: 0,
                        }}>
                        Sign in
                    </Link>
                </Text>
                <Text as="p">
                    By Joining the waiting list, I agree to Wraf&apos;s{" "}
                    <Link href="" sx={{ color: "text" }}>
                        Privacy Policy.
                    </Link>
                </Text>
            </Flex>
        </Grid>
    )
}

export default SignUpPage
