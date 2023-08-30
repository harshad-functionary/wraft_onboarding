import React from "react"
import { Box, Text } from "theme-ui"

const NewDocument = () => {
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
            }}>
            <Text>New document</Text>
        </Box>
    )
}

export default NewDocument
