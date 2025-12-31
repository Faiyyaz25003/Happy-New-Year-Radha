// // "use client";

// // import { useEffect, useState } from "react";
// // import Image from "next/image";

// // const pics = [
// //   {
// //     src: "/Radha1.jpeg",
// //     text: "तेरी मुस्कान में है नए साल की रौनक, तेरे साथ हर पल है ज़िन्दगी का मक़सद। 🌟",
// //     subtext: "Happy New Year, my love! तू है तो हर दिन जश्न है।",
// //   },
// //   {
// //     src: "/Radha2.jpeg",
// //     text: "चाँद भी शर्माए तेरी हंसी देखकर, सितारे भी कहें 'वाह' तेरी अदा देखकर। ✨",
// //     subtext: "2026 में भी बस तेरे साथ चलना है, हर खुशी तेरे संग पलना है।",
// //   },
// //   {
// //     src: "/Radha3.jpeg",
// //     text: "तेरी आंखों में खो जाऊं, तेरी बाहों में पा जाऊं, यही है मेरी नए साल की दुआ। 💫",
// //     subtext: "हर नया दिन तेरे नाम, हर नई शाम तेरे संग।",
// //   },
// //   {
// //     src: "/Radha4.jpeg",
// //     text: "तू मेरी सुबह की पहली किरण, तू मेरी रात का आखिरी ख़्वाब। 💖",
// //     subtext: "इस नए साल में भी बस तेरे प्यार में डूबा रहूं।",
// //   },
// //   {
// //     src: "/Radha5.jpeg",
// //     text: "जब से तू मिली है, ज़िन्दगी एक ख़ूबसूरत सफ़र बन गई। 🌹",
// //     subtext: "2026 में भी यूं ही साथ चलते रहें, हाथ में हाथ।",
// //   },
// //   {
// //     src: "/Radha6.jpeg",
// //     text: "तेरी हर अदा पे फ़िदा हूं मैं, तेरी हर बात पे मरता हूं मैं। ✨",
// //     subtext: "नया साल हो या पुराना, बस तू मेरी रहना।",
// //   },
// //   {
// //     src: "/Radha7.jpeg",
// //     text: "तेरे बिना अधूरी है ये ज़िन्दगी, तेरे संग पूरी है हर ख़ुशी। 🌸",
// //     subtext: "इस साल भी तेरे प्यार में यूं ही खोया रहूं।",
// //   },
// //   {
// //     src: "/Radha8.jpeg",
// //     text: "दिल कहता है तेरे पास रहूं, हर लम्हा तुझमें ही बस जाऊं। 💕",
// //     subtext: "Happy New Year to my forever! तू ही मेरी मंज़िल है।",
// //   },
// //   {
// //     src: "/Radha9.jpeg",
// //     text: "तेरी यादों में खोया रहूं, तेरी बाहों में सोया रहूं। 🌙",
// //     subtext: "2026 में भी बस तू और मैं, और प्यार की ये कहानी।",
// //   },
// //   {
// //     src: "/Radha10.jpeg",
// //     text: "तेरी हंसी में है जन्नत का एहसास, तेरे संग हर पल है ख़ास। 😊",
// //     subtext: "नए साल में भी यूं ही मुस्कुराती रहना, मैं हमेशा तेरे साथ हूं।",
// //   },
// //   {
// //     src: "/Radha11.jpeg",
// //     text: "तू मेरी ज़रूरत है, तू मेरी चाहत है, तू ही मेरी मोहब्बत है। 🤍",
// //     subtext: "इस नए साल में भी, सिर्फ़ तेरे लिए धड़कूं।",
// //   },
// //   {
// //     src: "/Radha12.jpeg",
// //     text: "तेरे इश्क़ में पागल हूं मैं, तेरे प्यार का क़ैदी हूं मैं। 🔥",
// //     subtext: "2026 भी तेरे नाम! Happy New Year, जान! 💝",
// //   },
// //   {
// //     src: "/Radha13.jpeg",
// //     text: "तू है तो ज़िन्दगी रंगीन है, तेरे बिना सब कुछ अधूरा सा है। 🎆",
// //     subtext: "नए साल में भी बस तेरे संग चलूं, तेरे ख़्वाबों में पलूं।",
// //   },
// // ];

// // export default function NewYear() {
// //   const [current, setCurrent] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % pics.length);
// //     }, 3500);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="bg-gradient-to-br from-rose-100 via-purple-100 to-pink-100 min-h-screen">
// //       <style jsx global>{`
// //         @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700;900&display=swap");
// //       `}</style>

// //       {/* ================= TOP SLIDER ================= */}
// //       <div className="relative w-full min-h-[90vh] overflow-hidden">
// //         {pics.map((pic, index) => {
// //           const isEven = index % 2 === 0;

// //           return (
// //             <div
// //               key={index}
// //               className={`absolute inset-0 transition-all duration-1000 ease-in-out
// //                 ${
// //                   index === current
// //                     ? "opacity-100 translate-x-0 scale-100 z-10"
// //                     : "opacity-0 translate-x-10 scale-95"
// //                 }`}
// //             >
// //               <div
// //                 className={`h-full flex flex-col md:flex-row ${
// //                   !isEven ? "md:flex-row-reverse" : ""
// //                 } items-center gap-10 px-6 md:px-16`}
// //               >
// //                 {/* IMAGE */}
// //                 <div
// //                   className="w-full md:w-1/2 h-[45vh] sm:h-[55vh] md:h-[75vh] relative rounded-[2.5rem] overflow-hidden
// //                   ring-4 ring-white/60 shadow-2xl bg-white/30 backdrop-blur"
// //                 >
// //                   <Image
// //                     src={pic.src}
// //                     alt={`slide-${index}`}
// //                     fill
// //                     className="object-contain"
// //                     priority={index === 0}
// //                   />
// //                 </div>

// //                 {/* TEXT */}
// //                 <div className="w-full md:w-1/2 flex items-center justify-center">
// //                   <div
// //                     className="bg-white/60 backdrop-blur-xl p-8 sm:p-10 md:p-14 rounded-[2.5rem]
// //                     shadow-2xl max-w-xl border border-white/50"
// //                   >
// //                     <h2
// //                       className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug
// //                       text-center md:text-left"
// //                       style={{
// //                         fontFamily: "'Noto Sans Devanagari', sans-serif",
// //                       }}
// //                     >
// //                       {pic.text}
// //                     </h2>

// //                     <p
// //                       className="mt-6 text-gray-700 text-base md:text-lg text-center md:text-left italic"
// //                       style={{
// //                         fontFamily: "'Noto Sans Devanagari', sans-serif",
// //                       }}
// //                     >
// //                       {pic.subtext}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>

// //       {/* ================= BOTTOM CONTENT ================= */}
// //       <div className="p-6 md:p-12 space-y-16">
// //         {pics.map((pic, index) => {
// //           const isEven = index % 2 === 0;

// //           return (
// //             <div
// //               key={index}
// //               className={`group flex flex-col md:flex-row ${
// //                 !isEven ? "md:flex-row-reverse" : ""
// //               } gap-12 items-center bg-white/80 backdrop-blur
// //                 border border-white/60 p-6 md:p-10 rounded-[2.5rem]
// //                 shadow-xl hover:shadow-2xl transition-all duration-500`}
// //             >
// //               {/* IMAGE */}
// //               <div
// //                 className="w-full md:w-[40%] h-[45vh] md:h-[65vh] relative rounded-[2rem] overflow-hidden
// //                 group-hover:scale-[1.03] transition-transform duration-500 bg-gray-100"
// //               >
// //                 <Image
// //                   src={pic.src}
// //                   alt={`pic-${index + 1}`}
// //                   fill
// //                   className="object-contain"
// //                 />
// //               </div>

// //               {/* TEXT */}
// //               <div className="w-full md:w-[60%] flex flex-col items-center justify-center px-4 space-y-4">
// //                 <p
// //                   className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800
// //                   text-center md:text-left leading-relaxed"
// //                   style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
// //                 >
// //                   {pic.text}
// //                 </p>
// //                 <p
// //                   className="text-base md:text-lg text-gray-600 italic text-center md:text-left"
// //                   style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
// //                 >
// //                   {pic.subtext}
// //                 </p>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// const pics = [
//   {
//     src: "/Radha1.jpeg",
//     text: "तेरी मुस्कान में है नए साल की रौनक, तेरे साथ हर पल है ज़िन्दगी का मक़सद। 🌟",
//     subtext: "Happy New Year, my love! तू है तो हर दिन जश्न है।",
//   },
//   {
//     src: "/Radha2.jpeg",
//     text: "चाँद भी शर्माए तेरी हंसी देखकर, सितारे भी कहें 'वाह' तेरी अदा देखकर। ✨",
//     subtext: "2026 में भी बस तेरे साथ चलना है, हर खुशी तेरे संग पलना है।",
//   },
//   {
//     src: "/Radha3.jpeg",
//     text: "तेरी आंखों में खो जाऊं, तेरी बाहों में पा जाऊं, यही है मेरी नए साल की दुआ। 💫",
//     subtext: "हर नया दिन तेरे नाम, हर नई शाम तेरे संग।",
//   },
//   {
//     src: "/Radha4.jpeg",
//     text: "तू मेरी सुबह की पहली किरण, तू मेरी रात का आखिरी ख़्वाब। 💖",
//     subtext: "इस नए साल में भी बस तेरे प्यार में डूबा रहूं।",
//   },
//   {
//     src: "/Radha5.jpeg",
//     text: "जब से तू मिली है, ज़िन्दगी एक ख़ूबसूरत सफ़र बन गई। 🌹",
//     subtext: "2026 में भी यूं ही साथ चलते रहें, हाथ में हाथ।",
//   },
//   {
//     src: "/Radha6.jpeg",
//     text: "तेरी हर अदा पे फ़िदा हूं मैं, तेरी हर बात पे मरता हूं मैं। ✨",
//     subtext: "नया साल हो या पुराना, बस तू मेरी रहना।",
//   },
//   {
//     src: "/Radha7.jpeg",
//     text: "तेरे बिना अधूरी है ये ज़िन्दगी, तेरे संग पूरी है हर ख़ुशी। 🌸",
//     subtext: "इस साल भी तेरे प्यार में यूं ही खोया रहूं।",
//   },
//   {
//     src: "/Radha8.jpeg",
//     text: "दिल कहता है तेरे पास रहूं, हर लम्हा तुझमें ही बस जाऊं। 💕",
//     subtext: "Happy New Year to my forever! तू ही मेरी मंज़िल है।",
//   },
//   {
//     src: "/Radha9.jpeg",
//     text: "तेरी यादों में खोया रहूं, तेरी बाहों में सोया रहूं। 🌙",
//     subtext: "2026 में भी बस तू और मैं, और प्यार की ये कहानी।",
//   },
//   {
//     src: "/Radha10.jpeg",
//     text: "तेरी हंसी में है जन्नत का एहसास, तेरे संग हर पल है ख़ास। 😊",
//     subtext: "नए साल में भी यूं ही मुस्कुराती रहना, मैं हमेशा तेरे साथ हूं।",
//   },
//   {
//     src: "/Radha11.jpeg",
//     text: "तू मेरी ज़रूरत है, तू मेरी चाहत है, तू ही मेरी मोहब्बत है। 🤍",
//     subtext: "इस नए साल में भी, सिर्फ़ तेरे लिए धड़कूं।",
//   },
//   {
//     src: "/Radha12.jpeg",
//     text: "तेरे इश्क़ में पागल हूं मैं, तेरे प्यार का क़ैदी हूं मैं। 🔥",
//     subtext: "2026 भी तेरे नाम! Happy New Year, जान! 💝",
//   },
//   {
//     src: "/Radha13.jpeg",
//     text: "तू है तो ज़िन्दगी रंगीन है, तेरे बिना सब कुछ अधूरा सा है। 🎆",
//     subtext: "नए साल में भी बस तेरे संग चलूं, तेरे ख़्वाबों में पलूं।",
//   },
// ];

// export default function NewYearPage() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % pics.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-rose-100 via-purple-100 to-pink-100">
//       {/* GOOGLE FONT */}
//       <link
//         href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700;900&display=swap"
//         rel="stylesheet"
//       />

//       {/* HERO SLIDER */}
//       <div className="relative w-full min-h-[90vh] overflow-hidden">
//         {pics.map((pic, index) => {
//           const active = index === current;
//           const isEven = index % 2 === 0;

//           return (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//                 active
//                   ? "opacity-100 translate-x-0 scale-100 z-10"
//                   : "opacity-0 translate-x-10 scale-95"
//               }`}
//             >
//               <div
//                 className={`h-full flex flex-col md:flex-row ${
//                   !isEven ? "md:flex-row-reverse" : ""
//                 } items-center gap-10 px-6 md:px-16`}
//               >
//                 {/* IMAGE */}
//                 <div className="w-full md:w-1/2 h-[45vh] md:h-[75vh] relative rounded-[2.5rem] overflow-hidden ring-4 ring-white/60 shadow-2xl bg-white/30 backdrop-blur">
//                   <Image
//                     src={pic.src}
//                     alt="new year"
//                     fill
//                     className="object-contain"
//                     priority={index === 0}
//                   />
//                 </div>

//                 {/* TEXT BOX */}
//                 <div className="w-full md:w-1/2 flex justify-center">
//                   <div className="bg-white/70 backdrop-blur-xl p-8 md:p-14 rounded-[2.5rem] shadow-2xl max-w-xl border border-white/60">
//                     <h2
//                       className="text-2xl md:text-4xl font-extrabold text-gray-900"
//                       style={{
//                         fontFamily: "'Noto Sans Devanagari', sans-serif",
//                       }}
//                     >
//                       {pic.text}
//                     </h2>

//                     <p
//                       className="mt-6 text-gray-700 italic"
//                       style={{
//                         fontFamily: "'Noto Sans Devanagari', sans-serif",
//                       }}
//                     >
//                       {pic.subtext}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* GALLERY SECTION */}
//       <div className="p-6 md:p-12 space-y-14">
//         {pics.map((pic, index) => (
//           <div
//             key={index}
//             className="flex flex-col md:flex-row gap-10 items-center bg-white/80 backdrop-blur p-6 md:p-10 rounded-[2.5rem] shadow-xl"
//           >
//             <div className="w-full md:w-2/5 h-[45vh] relative rounded-[2rem] overflow-hidden">
//               <Image
//                 src={pic.src}
//                 alt="memory"
//                 fill
//                 className="object-contain"
//               />
//             </div>

//             <div className="w-full md:w-3/5 text-center md:text-left space-y-4">
//               <p
//                 className="text-xl md:text-2xl font-bold text-gray-800"
//                 style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
//               >
//                 {pic.text}
//               </p>
//               <p
//                 className="text-gray-600 italic"
//                 style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
//               >
//                 {pic.subtext}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const pics = [
  {
    src: "/Radha1.jpeg",
    text: "तेरी मुस्कान में है नए साल की रौनक, तेरे साथ हर पल है ज़िन्दगी का मक़सद। 🌟",
    subtext: "Happy New Year, my love! तू है तो हर दिन जश्न है।",
  },
  {
    src: "/Radha2.jpeg",
    text: "चाँद भी शर्माए तेरी हंसी देखकर, सितारे भी कहें 'वाह' तेरी अदा देखकर। ✨",
    subtext: "2026 में भी बस तेरे साथ चलना है, हर खुशी तेरे संग पलना है।",
  },
  {
    src: "/Radha3.jpeg",
    text: "तेरी आंखों में खो जाऊं, तेरी बाहों में पा जाऊं, यही है मेरी नए साल की दुआ। 💫",
    subtext: "हर नया दिन तेरे नाम, हर नई शाम तेरे संग।",
  },
  {
    src: "/Radha4.jpeg",
    text: "तू मेरी सुबह की पहली किरण, तू मेरी रात का आखिरी ख़्वाब। 💖",
    subtext: "इस नए साल में भी बस तेरे प्यार में डूबा रहूं।",
  },
  {
    src: "/Radha5.jpeg",
    text: "जब से तू मिली है, ज़िन्दगी एक ख़ूबसूरत सफ़र बन गई। 🌹",
    subtext: "2026 में भी यूं ही साथ चलते रहें, हाथ में हाथ।",
  },
  {
    src: "/Radha6.jpeg",
    text: "तेरी हर अदा पे फ़िदा हूं मैं, तेरी हर बात पे मरता हूं मैं। ✨",
    subtext: "नया साल हो या पुराना, बस तू मेरी रहना।",
  },
  {
    src: "/Radha7.jpeg",
    text: "तेरे बिना अधूरी है ये ज़िन्दगी, तेरे संग पूरी है हर ख़ुशी। 🌸",
    subtext: "इस साल भी तेरे प्यार में यूं ही खोया रहूं।",
  },
  {
    src: "/Radha8.jpeg",
    text: "दिल कहता है तेरे पास रहूं, हर लम्हा तुझमें ही बस जाऊं। 💕",
    subtext: "Happy New Year to my forever! तू ही मेरी मंज़िल है।",
  },
  {
    src: "/Radha9.jpeg",
    text: "तेरी यादों में खोया रहूं, तेरी बाहों में सोया रहूं। 🌙",
    subtext: "2026 में भी बस तू और मैं, और प्यार की ये कहानी।",
  },
  {
    src: "/Radha10.jpeg",
    text: "तेरी हंसी में है जन्नत का एहसास, तेरे संग हर पल है ख़ास। 😊",
    subtext: "नए साल में भी यूं ही मुस्कुराती रहना, मैं हमेशा तेरे साथ हूं।",
  },
  {
    src: "/Radha11.jpeg",
    text: "तू मेरी ज़रूरत है, तू मेरी चाहत है, तू ही मेरी मोहब्बत है। 🤍",
    subtext: "इस नए साल में भी, सिर्फ़ तेरे लिए धड़कूं।",
  },
  {
    src: "/Radha12.jpeg",
    text: "तेरे इश्क़ में पागल हूं मैं, तेरे प्यार का क़ैदी हूं मैं। 🔥",
    subtext: "2026 भी तेरे नाम! Happy New Year, जान! 💝",
  },
  {
    src: "/Radha13.jpeg",
    text: "तू है तो ज़िन्दगी रंगीन है, तेरे बिना सब कुछ अधूरा सा है। 🎆",
    subtext: "नए साल में भी बस तेरे संग चलूं, तेरे ख़्वाबों में पलूं।",
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
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
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
                <div className="w-full md:w-1/2 h-[45vh] md:h-[75vh] relative rounded-[2.5rem] overflow-hidden ring-4 ring-white/60 shadow-2xl bg-white/30 backdrop-blur">
                  <Image
                    src={pic.src}
                    alt="new year"
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
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
              <div className="w-full md:w-2/5 h-[45vh] relative rounded-[2rem] overflow-hidden">
                <Image
                  src={pic.src}
                  alt="memory"
                  fill
                  className="object-contain"
                />
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
