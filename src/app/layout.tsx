import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider, ConnectButton } from "thirdweb/react";
import Sidebar from "./Sidebar";
import { client } from "./client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thirdweb SDK + Next starter",
  description: "Starter template for using thirdweb SDK with Next.js App router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
          <div className="flex">
            <Sidebar />
            <div className="flex-grow p-4">
              <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <div className="text-lg font-bold">My App</div>
                <ConnectButton
                  client={client}
                  appMetadata={{
                    name: "Example App",
                    url: "https://example.com",
                  }}
                />
              </header>
              <main className="p-4">{children}</main>
            </div>
          </div>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
