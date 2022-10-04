import "../styles/globals.css";
import { NextUIProvider } from '@nextui-org/react';
import Navbar1 from "./components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <> <NextUIProvider>

      <Navbar1 />

      <Component {...pageProps} />
    </NextUIProvider>

    </>
  );
}

export default MyApp;
