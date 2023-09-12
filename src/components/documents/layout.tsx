import SideBar, { SidebarProps } from "./SideBar"
import { Flex } from "theme-ui"

interface LayoutProps {
    children: React.ReactNode
    sidebarProps: SidebarProps
}

const Layout: React.FC<LayoutProps> = ({ children, sidebarProps }) => {
    return (
        <Flex as="section">
            <SideBar {...sidebarProps} />
            {children}
        </Flex>
    )
}

export default Layout
