import Link from "next/link";

export default function Terrorable() {
  return (
    <main className="flex flex-col items-center text-center justify-center mx-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kayvon.lol</Link>
      </div>
      <div className="pt-3 md:pb-8">
        <h1 className="text-[6rem] md:text-[10rem]">💣</h1>
      </div>
      <h1 className="text-2xl text-center pb-8 sm:px-48 md:px-64">
        Kayvon isn&apos;t afraid to make a splash with his art, even if that
        means going to jail.
      </h1>
      <div>
        <iframe
          width={300}
          height={534}
          src="https://www.youtube.com/embed/eNEZ01hOUu0?si=pP2a4rNlXaT-CXI-"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
