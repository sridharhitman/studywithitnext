import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Navbar from "../components/Navbar";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://cdn.tailwindcss.com"
        strategy="beforeInteractive"
      ></Script>
      <Navbar />
      <NextNProgress
        color="#000000"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
        options={{
          easing: "ease",
          speed: 500,
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
