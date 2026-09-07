import React from "react";
import ProductCard from "./ProductCard";

const newArrivals = [
  {
    id: 1,
    image: "https://picsum.photos/seed/amalia-backpack/600/800",
    title: "Amalia Laptop Backpack (Black) - Bidri Kaiser",
    price: 1749,
    mrp: 2799,
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/raya-sling/600/800",
    title: "Raya Phone Sling Bombay Houndstooth",
    price: 1499,
    mrp: null,
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/aarohi-rucksack/600/800",
    title: "Bidri Kaiser Aarohi Rucksack",
    price: 3649,
    mrp: null,
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/zareen-clutch/600/800",
    title: "Citrine Zareen Clutch",
    price: 2799,
    mrp: null,
  },
];

export default function NewArrivals() {
  const handleAdd = (product) => {
    // TODO: wire up to cart context / API
    console.log("Add to cart:", product.title);
  };

  return (
    <section className="bg-[#faf6ef]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-[28px] font-semibold text-[#0f3d4a]">
            New Arrivals
          </h2>
          <a
            href="/new-arrivals"
            className="text-sm font-medium text-gray-700 underline hover:text-[#e07a3f]"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={{ ...product, onAdd: () => handleAdd(product) }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}