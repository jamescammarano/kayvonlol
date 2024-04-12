import Image from "next/image";
import Link from "next/link";
import bookcover from "../../public/image/bookcover.png";
import books from "../../public/image/Group 1 (1).png";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kayvon.lol</Link>
      </div>
      <div className="hidden md: md:block pt-3">
        <h1 className="text-[6rem] md:text-[10rem]">📕</h1>
      </div>
      <div className="pb-8 md:flex justify-center items-center m-10 text-xl md:text-2xl">
        <div className="pb-10 md:w-1/2 md:pb-0 md:pr-6">
          <Image
            src={bookcover}
            className="object-fit"
            alt="Cover to Fashionably Ill"
          />
        </div>
        <p className="md:w-80">
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
      <a className="text-4xl" href="https://www.instagram.com/fashionablyill">
        @fashionablyill
      </a>{" "}
    </main>
  );
}
