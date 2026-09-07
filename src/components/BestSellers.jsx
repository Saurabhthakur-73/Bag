import React from "react";
import ProductCard from "./ProductCard";

const bestsellers = [
  {
    id: 1,
    image: "https://picsum.photos/seed/lattice-office-bag/600/800",
    title: "Lattice Lace Women's Office Bag",
    price: 1599,
    mrp: 1999,
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/mandala-combo/600/800",
    badge: "PACK OF 2",
    title: "Multicolor Mandala Print & Nawabi Couture Flap Sling Bag Combo",
    price: 1499,
    mrp: null,
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/geooptics-bag/600/800",
    title: "GeoOptics Women's Office Bag",
    price: 1599,
    mrp: 1999,
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/lattice-daypack/600/800",
    title: "Lattice Lace Amalia Daypack",
    price: 1399,
    mrp: 2299,
  },
];

export default function BestSellers() {
  const handleAdd = (product) => {
    // TODO: wire up to cart context / API
    console.log("Add to cart:", product.title);
  };

  return (
    <section className="bg-[#faf6ef]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-[28px] font-semibold text-[#0f3d4a]">
            Explore Bestsellers
          </h2>
          <a
            href="/bestsellers"
            className="text-sm font-medium text-gray-700 underline hover:text-[#e07a3f]"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {bestsellers.map((product) => (
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