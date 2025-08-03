"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

const pages = [
  {
    name: "Nutricost Creatine Monohydrate Micronized Powder 500G, 5000mg Per Serv (5g) - 100 Servings, 17.9 Oz",
    description: "product_1",
    src: "https://m.media-amazon.com/images/I/61WkUwQ3UEL._AC_SL1500_.jpg",
    price: "$29.99",
  },
  {
    name: "Sports Research Creatine Monohydrate - Gain Lean Muscle, Improve Performance and Strength and Support Workout Recovery - 5 g Micronized Creatine - 1.1LBS",
    description: "product_2",
    src: "https://m.media-amazon.com/images/I/512XOmrMKLL._AC_UL320_.jpg",
    price: "$34.95",
  },
  {
    name: "NAKED Pure Micronized Creatine Monohydrate – 200 Servings, 1,000g Bulk – Vegan, Non-GMO, Gluten & Soy Free - Muscle Building, Strength Training, Gym & Fitness Supplement",
    description: "product_3",
    src: "https://m.media-amazon.com/images/I/61L-6ZVdpLL._AC_UL320_.jpg",
    price: "$59.99",
  },
  {
    name: "Optimum Nutrition Micronized Creatine Monohydrate Powder, Unflavored, Keto Friendly, 114 Servings",
    description: "product_4",
    src: "https://m.media-amazon.com/images/I/513jo2AhdDL._AC_UL320_.jpg",
    price: "$44.99",
  },
  {
    name: "MuscleTech Platinum Creatine Monohydrate Powder – Muscle Builder for Men & Women – 5g Creatine Monohydrate – 80 Servings",
    description: "product_5",
    src: "https://m.media-amazon.com/images/I/61Utc+lIHlL._AC_UL320_.jpg",
    price: "$39.99",
  },
  {
    name: "GNC Pro Performance Creatine Monohydrate - Unflavored, 5000mg per serving - 120 Servings",
    description: "product_6",
    src: "https://m.media-amazon.com/images/I/71ZyH7YILxL._AC_UL320_.jpg",
    price: "$49.99",
  },
  {
    name: "Bulk Supplements Creatine Monohydrate Powder - Micronized - 500 Grams (1.1 lb)",
    description: "product_7",
    src: "https://m.media-amazon.com/images/I/71pioo9C-WL._AC_UL320_.jpg",
    price: "$24.99",
  },
  {
    name: "Transparent Labs Creatine HMB - Muscle Growth & Strength with Beta-Hydroxy Beta-Methylbutyrate - 500g",
    description: "product_8",
    src: "https://m.media-amazon.com/images/I/61VDdKmEpML._AC_UL320_.jpg",
    price: "$54.99",
  },
  {
    name: "BSN Micronized Creatine Monohydrate Powder, Unflavored, Keto Friendly, 60 Servings",
    description: "product_9",
    src: "https://m.media-amazon.com/images/I/61WkUwQ3UEL._AC_SL1500_.jpg",
    price: "$28.95",
  },
  {
    name: "Cellucor COR-Performance Creatine Monohydrate Powder, Unflavored - 72 Servings",
    description: "product_10",
    src: "https://m.media-amazon.com/images/I/512XOmrMKLL._AC_UL320_.jpg",
    price: "$35.50",
  },
  {
    name: "Thorne Creatine - Amino Acid for Muscle Mass, Power, and Strength Support - NSF Certified for Sport",
    description: "product_11",
    src: "https://m.media-amazon.com/images/I/61L-6ZVdpLL._AC_UL320_.jpg",
    price: "$62.00",
  },
  {
    name: "Beast Sports Nutrition Creature Creatine Complex, 60 Servings - Citrus Flavor",
    description: "product_12",
    src: "https://m.media-amazon.com/images/I/513jo2AhdDL._AC_UL320_.jpg",
    price: "$39.49",
  },
  {
    name: "Rule One R1 Creatine - Micronized Creatine Monohydrate Powder, Unflavored - 150 Servings",
    description: "product_13",
    src: "https://m.media-amazon.com/images/I/61Utc+lIHlL._AC_UL320_.jpg",
    price: "$43.99",
  },
  {
    name: "Kaged Creatine HCl Powder - Patented Creatine Hydrochloride, Unflavored - 75 Servings",
    description: "product_14",
    src: "https://m.media-amazon.com/images/I/71ZyH7YILxL._AC_UL320_.jpg",
    price: "$52.99",
  },
  {
    name: "XWERKS Lift - Micronized Creatine Monohydrate Powder, Unflavored - 80 Servings",
    description: "product_15",
    src: "https://m.media-amazon.com/images/I/61VDdKmEpML._AC_UL320_.jpg",
    price: "$49.95",
  },
  {
    name: "Beast Sports Nutrition Creature Powder, Advanced Creatine Complex, Fruit Punch, 60 Servings",
    description: "product_16",
    src: "https://m.media-amazon.com/images/I/71pioo9C-WL._AC_UL320_.jpg",
    price: "$36.90",
  },
  {
    name: "ON Creatine Capsules - 2500mg per Serving, 200 Capsules",
    description: "product_17",
    src: "https://m.media-amazon.com/images/I/61WkUwQ3UEL._AC_SL1500_.jpg",
    price: "$29.00",
  },
  {
    name: "Promera Sports CON-CRET Patented Creatine HCl, 48 Servings - Lemon Lime",
    description: "product_18",
    src: "https://m.media-amazon.com/images/I/512XOmrMKLL._AC_UL320_.jpg",
    price: "$44.50",
  },
  {
    name: "Evlution Nutrition Creatine5000, Micronized Creatine Monohydrate Powder, 60 Servings",
    description: "product_19",
    src: "https://m.media-amazon.com/images/I/61L-6ZVdpLL._AC_UL320_.jpg",
    price: "$38.99",
  },
  {
    name: "Six Star Pro Nutrition Creatine X3 Powder, Triple-Action Creatine Formula, Fruit Punch",
    description: "product_20",
    src: "https://m.media-amazon.com/images/I/513jo2AhdDL._AC_UL320_.jpg",
    price: "$27.50",
  },
  {
    name: "MyProtein Creatine Monohydrate Powder, Unflavored, 250g",
    description: "product_21",
    src: "https://m.media-amazon.com/images/I/61Utc+lIHlL._AC_UL320_.jpg",
    price: "$24.00",
  },
  {
    name: "Ultimate Nutrition Creatine Monohydrate Powder, 500g",
    description: "product_22",
    src: "https://m.media-amazon.com/images/I/71ZyH7YILxL._AC_UL320_.jpg",
    price: "$33.75",
  },
  {
    name: "Dymatize Creatine Micronized, Unflavored, 300g",
    description: "product_23",
    src: "https://m.media-amazon.com/images/I/61VDdKmEpML._AC_UL320_.jpg",
    price: "$31.99",
  },
  {
    name: "EAS Phosphagen Creatine Powder, Classic Formula",
    description: "product_24",
    src: "https://m.media-amazon.com/images/I/71pioo9C-WL._AC_UL320_.jpg",
    price: "$28.49",
  },
  {
    name: "Beast Mode Creatine Complex, Advanced Strength Formula",
    description: "product_25",
    src: "https://m.media-amazon.com/images/I/61WkUwQ3UEL._AC_SL1500_.jpg",
    price: "$40.99",
  },
];

export const Card = ({ name, src, alt, des, price }) => {
  const [btn, setBtn] = useState(false);
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-70 flex items-center justify-center rounded-lg mb-3 overflow-hidden p-3">
        <img
          src={src}
          alt={alt}
          className="max-h-full max-w-full object-contain"
        />
        <div className="absolute inset-0 bg-black/5"></div>
        <button
          onClick={() => setBtn(!btn)}
          className="absolute bottom-3 left-3 bg-white rounded-full p-1.5 shadow-md hover:cursor-pointer"
        >
          {btn ? <Heart color="red" fill="red" /> : <Heart />}
        </button>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div>
          <h2 className=" text-black text-lg font-semibold line-clamp-3">{name}</h2>
        </div>
        <p className="text-gray-600 text-xl font-bold ">{price}</p>
        <button
        className="bg-blue-500 p-3 rounded-lg text-white font-semibold"
        >
            Add To Cart
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-blue-200 py-10 ">
      <h1 className="text-3xl font-extrabold text-center ">CREATINE-AZON</h1>
      <h1 className="text-3xl font-semibold text-center mb-8">We Know Its Wierd To Sell Only Creatine But We dont gaf</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-1.5 px-4 max-w-7xl mx-auto">
        {pages.map((page, index) => (
          <Card
            src={page.src}
            alt="product"
            name={page.name}
            key={index}
            des={page.description}
            price={page.price}
          />
        ))}
      </div>
    </div>
  );
}
