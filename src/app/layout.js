import { Bricolage_Grotesque, Poppins, Covered_By_Your_Grace } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-head",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const coveredByYourGrace = Covered_By_Your_Grace({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Syam Kumar – A Life Above Limits",
  description:
    "From 16 surgeries to setting a world record — support Syam Kumar in becoming the first person without a leg to skydive from 45,000 feet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${bricolage.variable} ${poppins.variable} ${coveredByYourGrace.variable}`}
      >
        <Loader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
