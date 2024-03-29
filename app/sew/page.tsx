import Link from "next/link";

export default function Funny() {
  return (
    <main className="flex flex-col items-center text-center justify-center mx-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kavon.lol</Link>
      </div>
      <div className="pt-3 md:pb-8">
        <h1 className="text-[6rem] md:text-[10rem]">🪡</h1>

        <h1 className="text-2xl text-center pb-8 sm:px-48 md:px-64">
          Kayvon makes clothes, and sometimes wears his creations.
        </h1>
      </div>
      <div className="grid gap-4 grid-cols-1">
        <iframe
          src="https://www.youtube.com/embed/YfJxh_pyzyw?si=nVsDxN-tXsxazSLn"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
