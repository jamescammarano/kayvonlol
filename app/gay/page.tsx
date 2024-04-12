import Link from "next/link";

export default function Funny() {
  return (
    <main className="flex flex-col items-center text-center justify-center mx-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kayvon.lol</Link>
      </div>
      <div className="pt-3 md:pb-8">
        <h1 className="text-[6rem] md:text-[10rem]">🍆</h1>
      </div>
      <h1 className="text-2xl text-center pb-8 sm:px-48 md:px-64">
        Kayvon the FGGT uses his sexuality as a weapon and a joke.
      </h1>
      <div className="flex flex-col items-center gap-4">
        <iframe
          className="h-56 w-[25rem] sm:h-72 sm:w-[515px]"
          src="https://www.youtube.com/embed/NQBbqAwF8js?si=Lr2m8bKgrZ5amWo8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="h-56 w-[25rem] sm:h-72 sm:w-[515px]"
          src="https://www.youtube.com/embed/nij61ulh6MQ?si=ITkAhdm3s5RXqTr4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
