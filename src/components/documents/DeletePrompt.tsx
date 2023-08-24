import React from "react"
import { Button, Flex, Text } from "theme-ui"
import Image from "next/image"
import DeletePromptImg from "../../../public/documents_svg/DeletePrompt.svg"

const DeletePrompt = () => {
    return (
        <Flex
            sx={{
                flexDirection: "column",
                py: "24px",
                px: "32px",
                width: "342px",
                height: "205px",
                border: "1px solid #E4E9EF",
                borderRadius: "4px",
            }}>
            <Image src={DeletePromptImg} alt="" />
            <Text
                sx={{
                    marginTop: "23px",
                    mb: "18px",
                    textAlign: "center",
                    fontWeight: "heading",
                    color: "dark_600",
                }}>
                Are you sure you want to delete this Document?
            </Text>
            <Flex sx={{ gap: "12px" }}>
                <Button>Confirm</Button>
                <Button>Cancel</Button>
            </Flex>
        </Flex>
    )
}

export default DeletePrompt
