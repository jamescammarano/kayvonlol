import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kavon.lol</Link>
      </div>
      <div className="pt-3 pb-8">
        <h1 className="text-[10rem]">🎷</h1>
      </div>
      <h1 className="text-2xl text-center ms:px-48 md:px-64 pb-10">
        Kayvon makes poems, and music too.
      </h1>
      <div className="flex mb-20 grid-cols-2 gap-4 justify-center">
        <iframe
          title="Bandcamp"
          className="border-0 w-[20rem] h-[20rem]"
          src="https://bandcamp.com/EmbeddedPlayer/album=866069903/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://ratsnestrecords.bandcamp.com/album/underground-nightclub-1">
            Underground Nightclub 1 by Kayvon
          </a>
        </iframe>
      </div>
    </main>
  );
}
