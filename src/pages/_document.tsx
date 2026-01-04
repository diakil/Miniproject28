import NavBar from "@/components/navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-white text-black">
      <Head />
      <NavBar />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
