import Image from "next/image"
import { Flex, Box, Heading, Button, Link } from "theme-ui"
import Expired from "../../public/Messages 04 1.svg"

const LinkExpired = () => {
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
                    pt: "69px",
                }}>
                <Image src={Expired} alt="" className="" priority />
                <Heading
                    as="h1"
                    variant="styles.h1"
                    sx={{ mt: "51px", mb: "8px" }}>
                    Oh snap!
                </Heading>
                <Heading
                    as="h5"
                    variant="styles.h5"
                    sx={{ maxWidth: "376px", mb: "32px", textAlign: "center" }}>
                    Your email is not verified yet. Please verify your email and
                    try again.
                </Heading>
                <Link>
                    <Button>Resend verification link</Button>
                </Link>
            </Flex>
        </Box>
    )
}

export default LinkExpired
