import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lebogang Matlala Portfolio",
  description: "Portfolio of Lebogang Matlala, a software developer",
  keywords: [
    "Lebogang Matlala",
    "Software Developer",
    "Portfolio",
    "Web Development",
    "Full Stack Developer",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Lebogang Matlala Portfolio",
    description: "Portfolio of Lebogang Matlala, a software developer",
    url: "https://your-portfolio-url.com", // Replace with your actual URL
    type: "website",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Lebogang Matlala Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar/>
        <main className="p-6">{children}</main>
      <Footer/>
      </body>


    </html>
  );
}
