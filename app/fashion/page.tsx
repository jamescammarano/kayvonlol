import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kayvon.lol</Link>
      </div>{" "}
      <div className="pt-3 pb-8"></div>
      <div className="grid grid-cols-2 gap-4 justify-center"></div>
    </main>
  );
}
