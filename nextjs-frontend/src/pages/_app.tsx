import '../styles/globals.css'
import type { AppProps } from 'next/app'
import theme from '../utils/theme'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    const jssStyless = document.querySelector("#jss-server-side");
    jssStyless?.parentElement?.removeChild(jssStyless)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
