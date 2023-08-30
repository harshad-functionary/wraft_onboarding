import React from "react"
import { Flex, Text } from "theme-ui"
import Image from "next/image"
import DeletePromptImg from "../../../public/documents_svg/DeletePrompt.svg"
import Button from "../Components/Button"

interface DeletePromptProps {
    toggleModalClose: () => void
}

const DeletePrompt: React.FC<DeletePromptProps> = ({ toggleModalClose }) => {
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
                position: "absolute",
                top: "38%",
                left: "38%",
                zIndex: "10",
                background: "#FFF",
                alignItems: "center",
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
                <Button
                    border="none"
                    backgroundColor="#BD0000"
                    color="#FFF"
                    height="32px"
                    onClick={() => console.log("You clicked")}
                    radius="4px"
                    width="67px">
                    Confirm
                </Button>

                <Button
                    border="none"
                    backgroundColor="#D7DDE9"
                    color="dark_600"
                    height="32px"
                    onClick={toggleModalClose}
                    radius="4px"
                    width="67px">
                    Cancel
                </Button>
            </Flex>
        </Flex>
    )
}

export default DeletePrompt
