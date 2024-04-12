import Link from "next/link";

export default function Funny() {
  return (
    <main className="flex flex-col items-center text-center justify-center mx-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kayvon.lol</Link>
      </div>
      <div className="pt-3 md:pb-8">
        <h1 className="text-[6rem] md:text-[10rem]">🤡</h1>
      </div>
      <h1 className="text-2xl text-center pb-8 sm:px-48 md:px-64">
        Kayvon uses humor to explore and push social boundaries and one&apos;s
        own discomfort.
      </h1>
      <div className="flex flex-col items-center gap-4 m-4">
        <video
          className="w-[300px] h-[500px] object-cover"
          controls
          preload="none"
        >
          <source src="/videos/corona.mp4" type="video/mp4" />
        </video>
        <video
          className="w-[300px] h-[500px] object-cover"
          controls
          preload="none"
        >
          <source src="/videos/rick.mp4" type="video/mp4" />
        </video>
        <video
          className="w-[300px] h-[500px] object-cover"
          controls
          preload="none"
        >
          <source src="/videos/fred.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
