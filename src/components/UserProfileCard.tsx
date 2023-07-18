import { Box, Flex, Text } from "theme-ui"

type propCardItem = {
    content: string
    color: string
}

const UserProfileCard = ({ items }: { items: propCardItem }) => {
    return (
        <Flex
            sx={{
                width: "223px",
                height: "128px",
                flexDirection: "column",
                border: "1px solid #E4E9EF",
                borderRadius: "4px",
            }}>
            <Box
                sx={{
                    height: "79px",
                    position: "relative",
                    borderBottom: "1px solid #E4E9EF",
                }}>
                <Box
                    sx={{
                        position: "absolute",
                        width: "53px",
                        height: "10px",
                        top: "16px",
                        left: "16px",
                        backgroundColor: items.color,
                    }}></Box>
            </Box>
            <Flex
                sx={{
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: "heading",
                    color: "dark_600",
                    height: "100%",
                    pl: "16px",
                }}>
                <Text>{items.content}</Text>
            </Flex>
        </Flex>
    )
}

export default UserProfileCard
