'use client';

import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[300px] md:h-[375px] bg-iaam-primary overflow-hidden">
      <Image
        src="hero-conference.png"
        alt="Hero background"
        fill
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-[30px] h-full flex flex-col justify-center">
        <h2 className="font-montserrat font-bold text-[24px] md:text-[32px] text-white leading-tight max-w-[700px]">
          Advancing materials toward a <br/> climate-neutral world
        </h2>
        <p className="font-roboto text-[16px] md:text-[20px] text-white/90 mt-4 max-w-[600px]">
          Connecting science, innovation, and policy for a sustainable future through advanced materials.
        </p>
        <a
          href="#"
          className="mt-6 inline-flex items-center justify-center px-8 py-3 bg-iaam-cta text-white font-roboto font-medium text-[18px] rounded shadow-lg hover:brightness-110 transition-all w-fit"
        >
          Join or Renew Membership
        </a>
      </div>
    </section>
  );
}



