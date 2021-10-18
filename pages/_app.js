import { ChakraProvider } from "@chakra-ui/react"
import '../background.css'
import { createBreakpoints } from "@chakra-ui/theme-tools"

/* const breakpoints = createBreakpoints({
  sm: "20em",
  md: "34em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
}) */

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <Component {...breakpoints}/> */}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp