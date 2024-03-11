import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ariel's Literary Voyage",
  description: "Welcome aboard to Ariel's Literary Voyage, where the currents of literature carry us through the enchanting realms of romance, the whimsical landscapes of middle grade tales, and the eclectic array of genres that lie in between. Join me as we navigate through a sea of stories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
