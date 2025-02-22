import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
export const metadata: Metadata = {
  title: "GraffitiApp",
  description: "An app for graffiti stuffs",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
