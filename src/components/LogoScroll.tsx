// import React from 'react';
// import Logo1 from "../components/Assets/A1 CONSTRUCTION.png";
// import Logo2 from "../components/Assets/AI.jpg";
// import Logo3 from "../components/Assets/LOGO FULL.png";
// import Logo4 from "../components/Assets/Mr.Lion Logo Final.png";
// import Logo5 from "../components/Assets/NILE.jpg";
// import Logo6 from "../components/Assets/SHAS ATTAR FINAL png.png";
// import Logo7 from "../components/Assets/SHAS.jpg";
// import Logo8 from "../components/Assets/aarudra 2 finAL.png";
// import Logo9 from "../components/Assets/abdul gani.jpg";
// import Logo10 from "../components/Assets/afra.jpg";
// import Logo11 from "../components/Assets/american.jpg";
// import Logo12 from "../components/Assets/asq.jpg";
// import Logo13 from "../components/Assets/birdie.jpg";
// import Logo14 from "../components/Assets/captain.jpg";
// import Logo15 from "../components/Assets/frames hub.jpg";
// import Logo16 from "../components/Assets/komatha.jpg";
// import Logo17 from "../components/Assets/moonwalker.jpg";
// import Logo18 from "../components/Assets/rey drone logo 1.png";
// import Logo19 from "../components/Assets/sm dresses logo png.png";
// import Logo20 from "../components/Assets/sm dresses ok.png";


// const LogoScroll = () => {
//   const logos = [
//     { name: 'Google', image: Logo1 },
//     { name: 'Microsoft', image: Logo2 },
//     { name: 'Apple', image: Logo3 },
//     { name: 'Amazon', image: Logo4 },
//     { name: 'Meta', image: Logo5 },
//     { name: 'IBM', image: Logo6 },
//     { name: 'Intel', image: Logo7 },
//     { name: 'Oracle', image: Logo8 },
//     { name: 'Samsung', image: Logo9 },
//     { name: 'Sony', image: Logo10 },
//     { name: 'SpaceX', image: Logo11 },
//     { name: 'Tesla', image: Logo12 },
//     { name: 'Twitter', image: Logo13 },
//     { name: 'LinkedIn', image: Logo14 },
//     { name: 'Adobe', image: Logo15 },
//     { name: 'Nvidia', image: Logo16 },
//     { name: 'Salesforce', image: Logo17 },
//     { name: 'VMware', image: Logo18 },
//     { name: 'Zoom', image: Logo19 },
//     { name: 'Cisco', image: Logo20 },
//   ];

//   // Duplicate logos for seamless scrolling
//   const allLogos = [...logos, ...logos];

//   return (
//     <div className="w-full overflow-hidden py-10">
//       <div className="relative">
//         <div className="flex animate-scroll">
//           {allLogos.map((logo, index) => (
//             <div
//               key={`${logo.name}-${index}`}
//               className="flex items-center justify-center min-w-[200px] px-8"
//             >
//               <span className={`text-2xl font-bold tracking-wider ${logo.image} whitespace-nowrap`}>
//                 {logo.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogoScroll;

import React from "react";

// ✅ Corrected Import Paths
import Logo1 from "./Assets/A1_Construction.png";
import Logo2 from "./Assets/AI.jpg";
import Logo3 from "./Assets/Logo_Full.png";
import Logo4 from "./Assets/Mr_Lion_Logo_Final.png";
import Logo5 from "./Assets/NILE.jpg";
import Logo6 from "./Assets/Shas_Attar_Final.png";
import Logo7 from "./Assets/SHAS.jpg";
import Logo8 from "./Assets/aarudra_2_finAL.png";
import Logo9 from "./Assets/abdul_gani..jpg";
import Logo10 from "./Assets/afra.jpg";
import Logo11 from "./Assets/american.jpg";
import Logo12 from "./Assets/asq.jpg";
import Logo13 from "./Assets/birdie.jpg";
import Logo14 from "./Assets/captain.jpg";
import Logo15 from "./Assets/frames_hub.jpg";
import Logo16 from "./Assets/komatha.jpg";
import Logo17 from "./Assets/moonwalker.jpg";
import Logo18 from "./Assets/rey_drone_logo_1.png";
import Logo19 from "./Assets/Sm_Dresses_Logo.png";
import Logo20 from "./Assets/Sm_Dresses_Ok.png";

// Logo Array
const logos = [
  { name: "A1 Construction", image: Logo1 },
  { name: "AI", image: Logo2 },
  { name: "Logo Full", image: Logo3 },
  { name: "Mr. Lion", image: Logo4 },
  { name: "NILE", image: Logo5 },
  { name: "Shas Attar", image: Logo6 },
  { name: "SHAS", image: Logo7 },
  { name: "Aarudra", image: Logo8 },
  { name: "Abdul Gani", image: Logo9 },
  { name: "Afra", image: Logo10 },
  { name: "American", image: Logo11 },
  { name: "ASQ", image: Logo12 },
  { name: "Birdie", image: Logo13 },
  { name: "Captain", image: Logo14 },
  { name: "Frames Hub", image: Logo15 },
  { name: "Komatha", image: Logo16 },
  { name: "Moonwalker", image: Logo17 },
  { name: "Rey Drone", image: Logo18 },
  { name: "SM Dresses", image: Logo19 },
  { name: "SM Dresses OK", image: Logo20 },
];

// Duplicate for Infinite Scroll
const allLogos = [...logos, ...logos];

const LogoScroll = () => {
  return (
    <div className="w-full overflow-hidden py-10 bg-transparent">
      <div className="relative">
        <div className="flex space-x-10 animate-scroll">
          {allLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex items-center justify-center min-w-[200px] px-4">
              <img src={logo.image} alt={logo.name} className="h-30 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoScroll;
