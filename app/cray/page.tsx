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
    <main className="flex flex-col items-center justify-center py-10">
      <div className="text-4xl">
        <Link href={"/"}>⬅️ kavon.lol</Link>
      </div>
      <div className="pt-3 pb-8">
        <h1 className="text-[10rem]">🌪️</h1>
      </div>
      <h1 className="text-2xl text-center ms:px-48  md:px-64 pb-10">
        Kayvon uses his neurodivergence as raw material for his practice.
      </h1>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-Zoi0TSiFzc?si=V0s3_K82mp1HGVlt"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <Image className="w-72" src={darwin} alt="darwin" />
        <Image className="w-72" src={blog} alt="blog" />
        <Image className="w-72" src={cross} alt="cross" />
        <Image className="w-72" src={designer} alt="designer" />
        <Image className="w-72" src={drag_queen} alt="drag_queen" />
        <Image className="w-72" src={martyr} alt="martyr" />
        <Image className="w-72" src={mental_patient} alt="mental_patient" />
        <Image className="w-72" src={terrorable} alt="terrorable" />
      </div>
    </main>
  );
}
