import Link from "next/link";

export default function Funny() {
  return (
    <main className="flex flex-col items-center justify-center py-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kavon.lol</Link>
      </div>
      <div className="pt-3 pb-8">
        <h1 className="text-[10rem]">🍆</h1>
      </div>
      <h1 className="text-2xl text-center ms:px-48  md:px-64 pb-10">
        Kayvon the FGGT uses his sexuality as a weapon and a joke.
      </h1>
      <div className="grid gap-4 grid-cols-1">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nij61ulh6MQ?si=ITkAhdm3s5RXqTr4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NQBbqAwF8js?si=Lr2m8bKgrZ5amWo8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </main>
  );
}
