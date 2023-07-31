import { ChangeEvent, SVGProps } from "react"
import { Box, Button, Flex, Input, Text, NavLink } from "theme-ui"
import AddDocument from "../../public/documents_svg/plus.svg"
import CompanyLogo from "../../public/documents_svg/Group 184.svg"
import UserAvatar from "../../public/documents_svg/Profile.svg"
import InputSearch from "../../public/documents_svg/search.svg"
import Image from "next/image"
import Documents from "@/svg/Documents"
import Approvals from "@/svg/Approvals"
import Manage from "@/svg/Manage"
import Pipelines from "@/svg/Pipeline"
import Variants from "@/svg/Variants"
import Templates from "@/svg/Templates"
import { useRouter } from "next/router"

type SidebarProps = {
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleSearch: () => void
    searchValue: string
    navItems: { name: string; items: string[] }[]
}

type SvgComponentType = React.ComponentType<SVGProps<SVGSVGElement>>
type ComponentMapping = SvgComponentType[]

const SideBar = ({
    handleInputChange,
    handleSearch,
    searchValue,
    navItems,
}: SidebarProps) => {
    const router = useRouter()
    const currentPathname = router.pathname
    const componentMapping1: ComponentMapping = [Documents, Approvals]
    const componentMapping2: ComponentMapping = [
        Templates,
        Variants,
        Pipelines,
        Manage,
    ]

    return (
        <Box
            as="nav"
            sx={{
                width: "245px",
                height: "100vh",
                borderRight: "1px solid #E4E9EF",
                display: "flex",
                flexDirection: "column",
            }}>
            {/*---- logo section------ */}
            <Flex
                sx={{
                    py: "26px",
                    px: "16px",
                    alignItems: "center",
                    borderBottom: "1px solid #E4E9EF",
                }}>
                <Image src={CompanyLogo} alt="logo of fucnctionary company" />
                <Flex sx={{ flexDirection: "column", ml: "8px" }}>
                    <Text
                        sx={{
                            fontWeight: "heading",
                            fontSize: "12px",
                            lineHeight: "15px",
                            color: "dark_600",
                        }}>
                        Functionary
                    </Text>
                    <Text
                        sx={{
                            fontSize: "9.6px",
                            lineHeight: "12px",
                            color: "dark_400",
                        }}>
                        21 members
                    </Text>
                </Flex>
                <Image
                    src={UserAvatar}
                    alt="avatar of user"
                    style={{ marginLeft: "auto" }}
                />
            </Flex>
            {/* ------search input and contents ---------*/}
            <Flex
                sx={{
                    pt: "32px",
                    pb: "16px",
                    px: "18px",
                    flexDirection: "column",
                    borderBottom: "1px solid #E4E9EF",
                }}>
                {/* ----search----- */}
                <Flex
                    sx={{
                        height: "32px",
                        bg: "#FAFBFC",
                        border: "1px solid #E4E9EF",
                        alignItems: "center",
                        background: "rgba(215, 221, 233, 0.25)",
                        borderRadius: 0,
                        py: "6px",
                        pl: "9px",
                        pr: "9px",
                        mb: "16px",
                    }}>
                    <Button
                        type="submit"
                        onClick={handleSearch}
                        aria-label="click here to search "
                        sx={{
                            variant: "buttons.none",
                            mr: "8px",
                        }}>
                        <Image
                            src={InputSearch}
                            alt="click on this icon or press enter to search for anuthing thoughout the app"
                        />
                    </Button>
                    <Input
                        type="text"
                        placeholder="Search"
                        aria-label="type what you want to search thoughout the app"
                        value={searchValue}
                        onChange={handleInputChange}
                        sx={{
                            appearance: "none",
                            border: "none",
                            fontSize: "13px",
                            lineHeight: "19.2px",
                            color: "#C1C6DB",
                            background: "transparent",
                            width: "100%",
                            p: "0px",
                            m: "0px",
                            height: "100%",
                        }}
                    />
                </Flex>
                {/* ------contents------ */}
                <Flex
                    sx={{
                        flexDirection: "column",
                        gap: "10px",
                    }}>
                    <Text
                        as="h6"
                        sx={{
                            color: "dark_200",
                            variant: "styles.caption_medium",
                            px: "3px",
                            mb: "2px",
                            textAlign: "start",
                        }}>
                        {navItems[0].name.toUpperCase()}
                    </Text>
                    {navItems[0].items.map(
                        (
                            item: SidebarProps["navItems"][number]["items"][number],
                            index: number
                        ) => {
                            const Component = componentMapping1[index]
                            if (currentPathname === `/${item}`) {
                                var bgColor = true
                            } else {
                                bgColor = false
                            }
                            return (
                                <NavLink
                                    key={index}
                                    href={`/${item}`}
                                    sx={{
                                        padding: "4px",
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%",
                                        borderRadius: "4px",
                                        gap: "8px",
                                        backgroundColor: bgColor
                                            ? "rgba(159, 229, 185, 0.3)"
                                            : "",
                                    }}>
                                    {currentPathname !== `/${item}` ? (
                                        <Component stroke="#8F959B" />
                                    ) : (
                                        <Component stroke="#008932" />
                                    )}
                                    <Text
                                        sx={{
                                            color: "dark_600",
                                            fontWeight: "heading",
                                        }}>
                                        {item.charAt(0).toUpperCase() +
                                            item.slice(1)}
                                    </Text>
                                </NavLink>
                            )
                        }
                    )}
                </Flex>
            </Flex>
            {/* --------structure and Add document button------- */}
            <Flex
                sx={{
                    px: "18px",
                    flexDirection: "column",
                    pt: "16px",
                    pb: "27px",
                    height: "100%",
                }}>
                {/* structure */}
                <Flex
                    sx={{
                        flexDirection: "column",
                        gap: "10px",
                        marginBlockEnd: "auto",
                    }}>
                    <Text
                        as="h6"
                        sx={{
                            color: "dark_200",
                            variant: "styles.caption_medium",
                            px: "3px",
                            mb: "2px",
                            textAlign: "start",
                        }}>
                        {navItems[1].name.toUpperCase()}
                    </Text>
                    {navItems[1].items.map(
                        (
                            item: SidebarProps["navItems"][number]["items"][number],
                            index: number
                        ) => {
                            const Component = componentMapping2[index]
                            if (currentPathname === `/${item}`) {
                                var bgColor = true
                            } else {
                                bgColor = false
                            }
                            return (
                                <NavLink
                                    key={index}
                                    href={`/${item}`}
                                    sx={{
                                        padding: "4px",
                                        display: "flex",
                                        alignItems: "center",
                                        width: "225.3px",
                                        gap: "8px",
                                        backgroundColor: bgColor
                                            ? "rgba(159, 229, 185, 0.3)"
                                            : "",
                                    }}>
                                    {currentPathname !== `/${item}` ? (
                                        <Component stroke="#8F959B" />
                                    ) : (
                                        <Component stroke="#008932" />
                                    )}
                                    <Text
                                        sx={{
                                            color: "dark_600",
                                            fontWeight: "heading",
                                        }}>
                                        {item.charAt(0).toUpperCase() +
                                            item.slice(1)}
                                    </Text>
                                </NavLink>
                            )
                        }
                    )}
                </Flex>
                {/* button */}
                <Button
                    sx={{
                        alignSelf: "center",
                        py: "9px",
                        pl: "32px",
                        pr: "36px",
                    }}>
                    <Flex sx={{ alignItems: "center", gap: "8px" }}>
                        <Image src={AddDocument} alt="add document icon" />
                        <Text as="p">Add Document</Text>
                    </Flex>
                </Button>
            </Flex>
        </Box>
    )
}

export default SideBar
