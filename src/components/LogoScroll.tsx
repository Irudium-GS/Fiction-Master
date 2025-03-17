
import React from 'react';
import { Construction, Hammer, Clock } from 'lucide-react';

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
function BrandScroller() {
  const brands = [
    { name: "Brand 1", url: Logo1 },
    { name: "Brand 2", url: Logo2 },
    { name: "Brand 3", url: Logo3 },
    { name: "Brand 4", url: Logo4},
    { name: "Brand 5", url: Logo5 },
    { name: "Brand 6", url: Logo6 },
    { name: "Brand 7", url: Logo7 },
    { name: "Brand 8", url: Logo8},
    { name: "Brand 9", url: Logo9 },
    { name: "Brand 10", url: Logo10 },
    { name: "Brand 11", url: Logo11 },
    { name: "Brand 12", url: Logo12 },
    { name: "Brand 13", url: Logo13 },
    { name: "Brand 14", url: Logo14 },
    { name: "Brand 15", url: Logo15 },
    { name: "Brand 16", url: Logo16 },
    { name: "Brand 17", url: Logo17 },
    { name: "Brand 18", url: Logo18 },
    { name: "Brand 19", url: Logo19 },
    { name: "Brand 20", url: Logo20 },
  ];

  const BrandRow = () => (
    <div className="flex gap-8 animate-scroll">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="flex-none w-[200px] h-[100px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={brand.url}
            alt={brand.name}
            className="w-full h-full object-contain p-4"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );

  // Create chunks of brands for mobile grid (3 rows with 2 items each)
  const mobileRows = Array.from({ length: 3 }, (_, rowIndex) => 
    brands.slice(rowIndex * 2, (rowIndex + 1) * 2)
  );

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-12">
      <div className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      
      {/* Desktop Continuous Scroll */}
      <div className="hidden md:block">
        <div className="flex whitespace-nowrap">
          <BrandRow />
          <BrandRow />
        </div>
      </div>

      {/* Mobile Grid View with Horizontal Scroll */}
      <div className="md:hidden px-4 space-y-6">
        {mobileRows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative overflow-hidden">
            <div className="flex animate-scroll-mobile">
              {/* Original row */}
              {row.map((brand, index) => (
                <div
                  key={`${index}-1`}
                  className="flex-none w-[calc(50vw-24px)] mx-2 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 aspect-video"
                >
                  <img
                    src={brand.url}
                    alt={brand.name}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate row for seamless loop */}
              {row.map((brand, index) => (
                <div
                  key={`${index}-2`}
                  className="flex-none w-[calc(50vw-24px)] mx-2 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 aspect-video"
                >
                  <img
                    src={brand.url}
                    alt={brand.name}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoScroll() {
  return (
    <div className="min-h-100">
      {/* Brand Scroller Section */}
      <div className="py-16">
        <BrandScroller />
      </div>
    </div>
  );
}

export default LogoScroll;