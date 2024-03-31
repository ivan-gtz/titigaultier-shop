import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";
import { Providers } from "@/components";


export const metadata: Metadata = {
  title: {
    template: "%s -TitiGaultier | Shop",
    default: 'Home'
  },
  description: "Moda Juvenil y Tendencias Contemporáneas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
