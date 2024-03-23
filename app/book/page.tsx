import Image from "next/image";
import Link from "next/link";
import bookcover from "../../public/image/bookcover.png";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kavon.lol</Link>
      </div>
      <div className="">
        <h1 className="text-[10rem]">📕</h1>
      </div>
      <div className="flex pb-8 items-center gap-10 m-24 text-2xl">
        <h1>
          <Image src={bookcover} alt="Cover to Fashionably Ill" />
        </h1>
        <p>
          Welcome to the weird world of Kayvon Edson. Here we have a well-to-do
          white gay boy. He was proclaimed as infamous when he took his shoes
          off, clad in all black on the Boston Marathon finish line as he
          screamed, “Boston strong!” But there’s really more to the story than
          that. He made a deal with the devil. He gave his privilege away on a
          silver platter. Get ready to dance at the Disco Factory. You’re
          invited to a party that never ends with a fashion designer that
          believes in making an entrance.
        </p>
      </div>
    </main>
  );
}
