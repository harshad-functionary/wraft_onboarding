import "@/styles/globals.css"
import type { AppProps } from "next/app"
/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from "theme-ui"
import theme from "../styles/theme"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeUIProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeUIProvider>
    )
}
