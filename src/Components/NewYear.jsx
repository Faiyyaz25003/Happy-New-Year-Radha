
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const pics = [
  {
    src: "/Radha1.jpeg",
    text: "Teri muskaan mein hai naye saal ki raunak, tere saath har pal hai zindagi ka maksad. 🌟",
    subtext: "Happy New Year, my love! Tu hai to har din jashn hai.",
  },
  {
    src: "/Radha2.jpeg",
    text: "Chaand bhi sharmaye teri hansi dekhkar, sitaare bhi kahein 'waah' teri ada dekhkar. ✨",
    subtext:
      "2026 mein bhi bas tere saath chalna hai, har khushi tere sang palna hai.",
  },
  {
    src: "/Radha3.jpeg",
    text: "Teri aankhon mein kho jaaun, teri baahon mein paa jaaun, yahi hai meri naye saal ki dua. 💫",
    subtext: "Har naya din tere naam, har nayi shaam tere sang.",
  },
  {
    src: "/Radha4.jpeg",
    text: "Tu meri subah ki pehli kiran, tu meri raat ka aakhri khwaab. 💖",
    subtext: "Is naye saal mein bhi bas tere pyaar mein dooba rahun.",
  },
  {
    src: "/Radha5.jpeg",
    text: "Jab se tu mili hai, zindagi ek khubsurat safar ban gayi. 🌹",
    subtext: "2026 mein bhi yun hi saath chalte rahein, haath mein haath.",
  },
  {
    src: "/Radha6.jpeg",
    text: "Teri har ada pe fida hoon main, teri har baat pe marta hoon main. ✨",
    subtext: "Naya saal ho ya purana, bas tu meri rahna.",
  },
  {
    src: "/Radha7.jpeg",
    text: "Tere bina adhuri hai ye zindagi, tere sang puri hai har khushi. 🌸",
    subtext: "Is saal bhi tere pyaar mein yun hi khoya rahun.",
  },
  {
    src: "/Radha8.jpeg",
    text: "Dil kehta hai tere paas rahun, har lamha tujhmein hi bas jaaun. 💕",
    subtext: "Happy New Year to my forever! Tu hi meri manzil hai.",
  },
  {
    src: "/Radha9.jpeg",
    text: "Teri yaadon mein khoya rahun, teri baahon mein soya rahun. 🌙",
    subtext: "2026 mein bhi bas tu aur main, aur pyaar ki ye kahaani.",
  },
  {
    src: "/Radha10.jpeg",
    text: "Teri hansi mein hai jannat ka ehsaas, tere sang har pal hai khaas. 😊",
    subtext:
      "Naye saal mein bhi yun hi muskurati rahna, main hamesha tere saath hoon.",
  },
  {
    src: "/Radha11.jpeg",
    text: "Tu meri zaroorat hai, tu meri chaahat hai, tu hi meri mohabbat hai. 🤍",
    subtext: "Is naye saal mein bhi, sirf tere liye dhadkun.",
  },
  {
    src: "/Radha12.jpeg",
    text: "Tere ishq mein paagal hoon main, tere pyaar ka qaidi hoon main. 🔥",
    subtext: "2026 bhi tere naam! Happy New Year, jaan! 💝",
  },
  {
    src: "/Radha13.jpeg",
    text: "Tu hai to zindagi rangeen hai, tere bina sab kuch adhura sa hai. 🎆",
    subtext:
      "Naye saal mein bhi bas tere sang chalun, tere khwabon mein palun.",
  },
];

export default function NewYearPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % pics.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-purple-100 to-pink-100">
      {/* GOOGLE FONT */}
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700;900&display=swap"
        rel="stylesheet"
      />

      {/* HERO SLIDER */}
      <div className="relative w-full min-h-[90vh] overflow-hidden">
        {pics.map((pic, index) => {
          const active = index === current;
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`mt-[25px] absolute inset-0 transition-all duration-1000 ease-in-out ${
                active
                  ? "opacity-100 translate-x-0 scale-100 z-10"
                  : "opacity-0 translate-x-10 scale-95"
              }`}
            >
              <div
                className={`h-full flex flex-col md:flex-row ${
                  !isEven ? "md:flex-row-reverse" : ""
                } items-center gap-10 px-6 md:px-16`}
              >
                {/* IMAGE */}
                <div className="w-full md:w-1/2 h-[45vh] md:h-[75vh] relative rounded-[2.5rem] overflow-hidden ring-8 ring-pink-200/80 shadow-2xl bg-gradient-to-br from-pink-50 to-purple-50 backdrop-blur transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-purple-500/20 z-10"></div>
                  <Image
                    src={pic.src}
                    alt="new year"
                    fill
                    className="object-contain filter brightness-105 contrast-105 saturate-110"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 mix-blend-overlay z-20"></div>
                </div>

                {/* TEXT BOX */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="bg-white/70 backdrop-blur-xl p-8 md:p-14 rounded-[2.5rem] shadow-2xl max-w-xl border border-white/60">
                    <h2
                      className="text-2xl md:text-4xl font-extrabold text-gray-900"
                      style={{
                        fontFamily: "'Noto Sans Devanagari', sans-serif",
                      }}
                    >
                      {pic.text}
                    </h2>

                    <p
                      className="mt-6 text-gray-700 italic"
                      style={{
                        fontFamily: "'Noto Sans Devanagari', sans-serif",
                      }}
                    >
                      {pic.subtext}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* GALLERY SECTION WITH ALTERNATE IMAGE/CONTENT */}
      <div className="p-6 md:p-12 space-y-14">
        {pics.map((pic, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 bg-white/80 backdrop-blur p-6 md:p-10 rounded-[2.5rem] shadow-xl ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/2 h-[45vh] md:h-[50vh] relative rounded-[2.5rem] overflow-hidden ring-8 ring-pink-200/80 shadow-2xl bg-gradient-to-br from-pink-50 to-purple-50 backdrop-blur transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-purple-500/20 z-10"></div>
                <Image
                  src={pic.src}
                  alt="new year"
                  fill
                  className="object-contain filter brightness-105 contrast-105 saturate-110"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 mix-blend-overlay z-20"></div>
              </div>

              {/* TEXT */}
              <div className="w-full md:w-3/5 text-center md:text-left space-y-4">
                <p
                  className="text-xl md:text-2xl font-bold text-gray-800"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  {pic.text}
                </p>
                <p
                  className="text-gray-600 italic"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  {pic.subtext}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}