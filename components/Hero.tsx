import Image from "next/image";
import React from "react";
import HeroBg from "@/public/herobg.jpg";

export default function Hero() {
  return (
    <div className="">
      <Image
        src={HeroBg}
        alt="Hero image"
        className="h-screen w-screen object-cover"
        priority
      />
    </div>
  );
}
