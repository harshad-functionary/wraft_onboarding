import "@/styles/globals.css"
import type { AppProps } from "next/app"
/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from "theme-ui"
import theme from "../styles/theme"
import { useAppContext, AppProvider } from "../AppContext"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function App({ Component, pageProps }: AppProps) {
    const { commonState } = useAppContext()
    const { isLoggedIn } = commonState
    const router = useRouter()

    useEffect(() => {
        if (isLoggedIn && router.pathname === "/") {
            router.push("/dashboard")
        }
    }, [isLoggedIn, router])

    return (
        <AppProvider>
            <ThemeUIProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeUIProvider>
        </AppProvider>
    )
}
