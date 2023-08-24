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
                height: "100%",
                backgroundColor: "#FFF",
            }}>
            <Text>New document</Text>
        </Box>
    )
}

export default NewDocument
