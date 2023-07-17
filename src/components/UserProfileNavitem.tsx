import { NavLink, Flex, Text } from "theme-ui"
import Image from "next/image"

type NavItem = {
    name: string
    linkRoute: string
}

const UserProfileNavitem = ({ items }: { items: NavItem[] }) => {
    return (
        <Flex
            as="nav"
            sx={{
                mt: "28px",
                pb: "32px",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
                borderBlockEnd: "1px solid #ECEFF4",
            }}>
            {items.map((item: NavItem, index: number) => (
                <NavLink
                    key={index}
                    href={item.linkRoute}
                    sx={{
                        padding: "8px 18px 8px 14px",
                        display: "flex",
                        alignItems: "center",
                        width: "225.3px",
                        gap: "10px",
                    }}>
                    <Image
                        src={`/${item.name}.svg`}
                        alt="icon"
                        width={24}
                        height={24}
                    />
                    <Text sx={{ color: "dark_600", fontWeight: "heading" }}>
                        {item.name}
                    </Text>
                </NavLink>
            ))}
        </Flex>
    )
}

export default UserProfileNavitem
