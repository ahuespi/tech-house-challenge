import type { Metadata } from "next";
import "./globals.css";
import { HeaderComponent } from "./components/Header/HeaderComponent";

export const metadata: Metadata = {
  title: "Tiendanimal",
  description: "Tech House Challenge - ahuespi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/favicon.ico' />
      </head>
      <body suppressHydrationWarning={true}>
        <HeaderComponent />
        <main>{children}</main>
      </body>
    </html>
  );
}
