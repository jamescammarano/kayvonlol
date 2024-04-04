import Image from "next/image";
import main from "../public/image/main.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center justify-center">
      <div className="text-4xl">kavon.lol</div>
      <div className="pt-3 pb-5 md:pb-8">
        <Image src={main} alt="Kayvon" className="w-40 md:w-52 rounded-lg" />
      </div>
      <div className="grid grid-cols-2 gap-5 md:gap-10 justify-center">
        <Link href={"/terrorable"}>
          <p className="text-center text-[5rem] md:text-[6rem]">💣</p>
          <h1 className="text-center text-2xl md:text-4xl font-bold">
            Terrorable
          </h1>
        </Link>
        <Link href={"/gay"}>
          <p className="text-center text-[5rem] md:text-[6rem]">🍆</p>
          <h1 className="text-center text-2xl md:text-4xl font-bold">Gay</h1>
        </Link>
        <Link href={"/funny"}>
          <p className="text-center text-[5rem] md:text-[6rem]">🤡</p>
          <h1 className="text-center text-2xl md:text-4xl font-bold">Funny</h1>
        </Link>
        <Link href={"/poor"}>
          <p className="text-center text-[5rem] md:text-[6rem]">💸</p>
          <h1 className="text-center text-2xl md:text-4xl font-bold">Poor</h1>
        </Link>
        <Link href={"/sew"}>
          <p className="text-center text-[5rem] md:text-[6rem]">🪡</p>
          <h1 className="text-center text-2xl md:text-4xl font-bold">Sew</h1>
        </Link>
        <Link href={"/cray"}>
          <p className="text-center text-[5rem] md:text-[6rem]">🌪️</p>
          <h1 className="text-center text-2xl md:text-4xl font-bold">Cray</h1>
        </Link>
        <Link href={"/music"}>
          <p className="text-center text-[5rem] md:text-[6rem]">🎷</p>
          <h1 className="text-center text-2xl md:text-4xl font-bold">Music</h1>
        </Link>
        <Link href={"/press"}>
          <p className="text-center text-[5rem] md:text-[6rem]">🗞️</p>
          <h1 className="text-center text-2xl md:text-4xl font-bold">Press</h1>
        </Link>
      </div>
    </main>
  );
}
