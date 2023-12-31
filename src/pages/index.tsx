import { useState, useEffect } from "react"
import axios from "axios"
import Cookies from "js-cookie"
import Image from "next/image"
import Head from "next/head"
import { useRouter } from "next/router"
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
import { parse } from "cookie"

const LoginPage = () => {
    const [accessToken1, setAccessToken1] = useState<string | undefined>(
        undefined
    )

    useEffect(() => {
        // Retrieve the access token from the cookie
        const token = Cookies.get("access_token")
        console.log("info: token - ", token)
        if (token) {
            // If the access token exists in the cookie, set it in the state
            router.push("/dashboard")
            setAccessToken1(token)
        }
    }, [])

    const [email, setEmail] = useState("shijith.k@aurut.com")
    const [password, setPassword] = useState("pa55w0rd")
    const router = useRouter()

    const endpointUrl = "https://api.dev.wraft.co/api/v1/users/signin"

    // const { commonState, setCommonState } = useAppContext()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const payload = {
            password: password,
            email: email,
        }

        try {
            const response = await axios.post(endpointUrl, payload)

            const accessToken = response.data.access_token
            const refreshToken = response.data.refresh_token

            Cookies.set("access_token", accessToken, { expires: 2 / 24 }) // Set a 2-hour expiration time
            Cookies.set("refresh_token", refreshToken, { expires: 2 }) // Set a 2-day expiration time

            setAccessToken1(accessToken)

            if (accessToken) {
                router.push("/dashboard")
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    const handleGoogleSignIn = () => {
        // Perform Google sign-in logic here
    }

    return (
        <>
            <Head>
                <title>Wraft</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

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
                                onClick={handleSubmit}
                                sx={{
                                    position: "absolute",
                                    mr: "auto",
                                    top: "12px",
                                    left: "0",
                                }}>
                                Sign in
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
                        <Image
                            src={GoogleLogo}
                            alt="Google Logo"
                            className=""
                        />
                        Continue with Google
                    </Button>

                    <Text as="p" sx={{ mt: 5, color: "dark_600" }}>
                        Not a user yet?
                        <Link
                            href="/signup"
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
        </>
    )
}

export async function getServerSideProps(context: any) {
    // Access cookies using context.req.headers.cookie and parse it using 'cookies' library
    const cookies = parse(context.req.headers.cookie || "")

    // You can print the headers to the console
    console.log("is there access_token in cookie set ? :", cookies.access_token)

    // is 'token' there in cookie ?
    //   Y : redirect to dashboard
    //   N : do nothing

    if (cookies.access_token) {
        return {
            redirect: {
                destination: "/dashboard",
                permanent: false,
            },
        }
    }

    return {
        props: {
            // Your props here...
        },
    }
}

export default LoginPage
