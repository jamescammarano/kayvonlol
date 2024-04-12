import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

import books from "../public/image/Group 1 (1).png";
import youtube from "../public/image/youtube_social_squircle_red.png";
import instagram from "../public/image/Instagram_Glyph_Gradient.svg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kayvon.lol",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`pt-10 pb-16 md:py-10 ${inter.className}`}>
        {children}
        <div className="border-t-2 bg-[#FFFAFA] fixed w-full bottom-0 border-t-gray-200">
          <div className="my-2 grid grid-flow-col justify-items-center justify-evenly grid-cols-3">
            <a href="https://www.instagram.com/kayvon.lol/">
              <Image alt="Instagram" className="h-8 w-8" src={instagram} />
            </a>
            <a href="https://www.youtube.com/@Kayvonthefggt/videos">
              <Image alt="Youtube" className="h-8 w-8" src={youtube} />
            </a>
            <Link href={"/book"}>
              <Image alt="My Book" className="h-8 w-8" src={books} />
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
