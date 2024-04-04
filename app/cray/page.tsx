import Link from "next/link";
import Image from "next/image";

import darwin from "../../public/image/persona/darwin.jpg";
import blog from "../../public/image/persona/blog.jpg";
import cross from "../../public/image/persona/cross.jpg";
import designer from "../../public/image/persona/designer.jpg";
import drag_queen from "../../public/image/persona/drag_queen.jpg";
import martyr from "../../public/image/persona/martyr.jpg";
import mental_patient from "../../public/image/persona/mental_patient.jpg";
import terrorable from "../../public/image/persona/terrorable.jpg";

export default function Funny() {
  return (
    <main className="flex flex-col items-center text-center justify-center mx-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kavon.lol</Link>
      </div>
      <div className="pt-3 md:pb-8">
        <h1 className="text-[6rem] md:text-[10rem]">🌪️</h1>

        <h1 className="text-2xl text-center pb-8 sm:px-48 md:px-64">
          Kayvon uses his neurodivergence as raw material for his practice.{" "}
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <iframe
            src="https://www.youtube.com/embed/-Zoi0TSiFzc?si=V0s3_K82mp1HGVlt"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <Image src={darwin} alt="darwin" />
        <Image src={blog} alt="blog" />
        <Image src={cross} alt="cross" />
        <Image src={designer} alt="designer" />
        <Image src={drag_queen} alt="drag_queen" />
        <Image src={martyr} alt="martyr" />
        <Image src={mental_patient} alt="mental_patient" />
        <Image src={terrorable} alt="terrorable" />
      </div>
    </main>
  );
}
