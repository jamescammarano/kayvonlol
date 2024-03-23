import Link from "next/link";

export default function Terrorable() {
  return (
    <main className="flex flex-col items-center justify-center py-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kavon.lol</Link>
      </div>
      <div className="pt-3 pb-8">
        <h1 className="text-[10rem]">💣</h1>
      </div>
      <h1 className="text-2xl text-center sm:px-48 md:px-64">
        Kayvon isn&apos;t afraid to make a splash with his art, even if that
        means going to jail.
      </h1>
      <div className="grid gap-4 grid-cols-1">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eNEZ01hOUu0?si=pP2a4rNlXaT-CXI-"
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
