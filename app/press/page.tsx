import Image from "next/image";
import hassel from "../../public/image/bhass-logo.jpg";
import vice from "../../public/image/vice-logo-white.png";
import nymag from "../../public/image/nymag.png";
import dazed from "../../public/image/dazed.jpg";
import Link from "next/link";

export default function Press() {
  return (
    <main className="flex flex-col items-center text-center justify-center mx-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kayvon.lol</Link>
      </div>{" "}
      <div className="pt-3 md:pb-8">
        <h1 className="text-[6rem] md:text-[10rem]">🗞️</h1>

        <h1 className="text-2xl text-center pb-8 sm:px-48 md:px-64">
          Kayvon is an international artist
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <a href="https://bostonhassle.com/kayvon-edson-artist/">
          <Image src={hassel} className="w-90" alt="Boston Hassel Logo" />
        </a>

        <a href="https://www.vice.com/en/article/bn5vdm/ok-kayvon-edson-boston-bombing-hoaxer-you-have-my-attention">
          <Image className="w-90" src={vice} alt="Boston Hassel Logo" />
        </a>
        <a href="https://www.dazeddigital.com/artsandculture/article/19607/1/kevin-edson-performance-artist-plants-fake-bomb-hoax-boston-marathon">
          <Image className="w-90" src={dazed} alt="Boston Hassel Logo" />
        </a>
        <a href="https://nymag.com/intelligencer/2014/04/kayvon-edson-performance-artist-boston-bomb-hoax.html">
          <Image className="w-90" src={nymag} alt="Boston Hassel Logo" />
        </a>
      </div>
    </main>
  );
}
