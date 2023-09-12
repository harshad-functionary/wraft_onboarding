/** @jsxImportSource theme-ui */
import React, { useState } from "react"
import { Box, Button, Flex, Text } from "theme-ui"

const NewDocument = () => {
    const [showSecondSection, setShowSecondSection] = useState(false)
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const handleSecondButton1Click = () => {
        setShowSecondSection(false)
    }
    const handleSecondButton2Click = () => {
        setShowSecondSection(true)
    }
    const handleOptionSelect = (option: string) => {
        setSelectedOption(option)
        setShowSecondSection(true)
    }

    return (
        <Box
            as="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "582px",
                height: "100vh",
                backgroundColor: "#FFF",
                position: "absolute",
                top: "0",
                right: "0",
                zIndex: "15",
                padding: "32px",
            }}>
            <Text
                sx={{
                    fontWeight: "bold",
                    color: "dark_600",
                    marginBottom: "28px",
                }}>
                New document
            </Text>
            <Flex sx={{ gap: "32px" }}>
                <Button
                    sx={{
                        bg: "transparent",
                        color: "dark_600",
                        fontWeight: "heading",
                    }}
                    onClick={handleSecondButton1Click}
                    disabled={selectedOption === null}>
                    <span
                        sx={{
                            display: "inline-block",
                            bg: "success_100",
                            color: "success_600",
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            marginRight: "10px",
                        }}>
                        1
                    </span>
                    Template
                </Button>
                <Button
                    sx={{
                        bg: "transparent",
                        color: showSecondSection ? "dark_600" : "dark_400",
                        fontWeight: showSecondSection ? "heading" : "",
                    }}
                    onClick={handleSecondButton2Click}
                    disabled={selectedOption === null}>
                    <span
                        sx={{
                            display: "inline-block",
                            bg: showSecondSection ? "success_100" : "#E4E9EF",
                            color: showSecondSection
                                ? "success_600"
                                : "dark_400",
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            marginRight: "10px",
                        }}>
                        2
                    </span>
                    Content
                </Button>
            </Flex>
            {!showSecondSection && (
                <div>
                    <h2>Section for Button 1</h2>
                    <ul>
                        <li onClick={() => handleOptionSelect("option1")}>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            )}
            {showSecondSection && (
                <div>
                    <h2>Section for Button 2</h2>
                    <p>This is the content for {selectedOption}.</p>
                </div>
            )}
        </Box>
    )
}

export default NewDocument
