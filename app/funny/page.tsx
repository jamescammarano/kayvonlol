import Link from "next/link";

export default function Funny() {
  return (
    <main className="flex flex-col items-center justify-center py-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kavon.lol</Link>
      </div>
      <div className="pt-3 pb-8">
        <h1 className="text-[10rem]">💸</h1>
      </div>
      <h1 className="text-2xl text-center ms:px-48  md:px-64">
        Kayvon uses humor to explore and push social boundaries and one's own
        discomfort.
      </h1>
      <div className="grid gap-4 grid-cols-1">
        <video width="600" height="900" controls preload="none">
          <source src="/videos/coolgrandma.mp4" type="video/mp4" />
        </video>
        <video width="320" height="240" controls preload="none">
          <source src="/videos/pinatajiji.mp4" type="video/mp4" />
        </video>
        <video width="320" height="240" controls preload="none">
          <source src="/videos/who.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
