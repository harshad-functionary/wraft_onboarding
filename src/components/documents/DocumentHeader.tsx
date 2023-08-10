import { Box, Heading } from "theme-ui"
const DocumentHeader = () => {
    return (
        <Box
            as="header"
            sx={{
                py: "25px",
                pl: "32px",
                borderBottom: "1px solid #E4E9EF",
            }}>
            <Heading
                as="h5"
                variant="styles.h5_regular"
                sx={{ color: "dark_600" }}>
                All documents
            </Heading>
        </Box>
    )
}

export default DocumentHeader
