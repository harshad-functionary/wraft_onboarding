import Image from "next/image"
import { Flex, Box, Heading, Button } from "theme-ui"
import MailSend from "../../public/Group 164.svg"

type ChildProps = {
    updateShowSuccess1: (newValue: boolean) => void // Callback function prop
}

const WaitlistPrompt: React.FC<ChildProps> = ({ updateShowSuccess1 }) => {
    const handleClick = () => {
        // Call the callback function to update the state in the parent component
        updateShowSuccess1(true)
    }

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
                    pt: "109px",
                }}>
                <Image src={MailSend} alt="" className="" priority />
                <Heading
                    as="h1"
                    variant="styles.h1"
                    sx={{ mt: "40px", mb: "8px" }}>
                    Hang tight!
                </Heading>
                <Heading
                    as="h5"
                    variant="styles.h5"
                    sx={{ maxWidth: "376px", mb: "32px", textAlign: "center" }}>
                    We have sent a verification link to the registered email
                    waitlist
                </Heading>
                <Button onClick={handleClick}>Okay</Button>
            </Flex>
        </Box>
    )
}

export default WaitlistPrompt
