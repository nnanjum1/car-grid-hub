import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import AppNavbar from "@/app/component/Navbar";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CarGridHub",
  description: "A simple platform to browse and manage car listings.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <ToastContainer position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
