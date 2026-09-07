import React from "react";

const collections = [
  {
    id: 1,
    title: "Z. by Zouk",
    link: "/z-by-zouk",
    image: "https://picsum.photos/seed/z-by-zouk/500/650",
  },
  {
    id: 2,
    title: "Alt Collection",
    link: "/alt-collection",
    image: "https://picsum.photos/seed/alt-collection/500/650",
  },
  {
    id: 3,
    title: "Zouk For Men",
    link: "/zouk-for-men",
    image: "https://picsum.photos/seed/zouk-for-men/500/650",
  },
  {
    id: 4,
    title: "Rhea Kapoor x Zouk",
    link: "/rhea-kapoor-x-zouk",
    image: "https://picsum.photos/seed/rhea-kapoor/500/650",
  },
  {
    id: 5,
    title: "1991 By Zouk",
    link: "/1991-by-zouk",
    image: "https://picsum.photos/seed/1991-by-zouk/500/650",
  },
];

export default function ShopByCollection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14">
        <h2 className="text-2xl md:text-[28px] font-semibold text-[#0f3d4a] text-center mb-8">
          Shop By Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {collections.map((c) => (
            <a
              key={c.id}
              href={c.link}
              className="group relative block overflow-hidden rounded-lg aspect-[3/4]"
            >
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-base font-semibold mb-1">{c.title}</h3>
                <span className="text-xs font-medium underline underline-offset-2">
                  Explore Now
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}