import Link from "next/link";

export default function Funny() {
  return (
    <main className="flex flex-col items-center justify-center py-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kavon.lol</Link>
      </div>
      <div className="pt-3 pb-8">
        <h1 className="text-[10rem]">🪡</h1>
      </div>
      <h1 className="text-2xl text-center ms:px-48  md:px-64 pb-10">
        Kayvon makes clothes, and sometimes wears his creations.
      </h1>
      <div className="grid gap-4 grid-cols-1">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YfJxh_pyzyw?si=nVsDxN-tXsxazSLn"
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
