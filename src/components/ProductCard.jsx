import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false);
  const { image, badge, title, price, mrp, onAdd } = product;

  return (
    <div className="group relative bg-white">
      {/* Image */}
      <div className="relative overflow-hidden rounded-md bg-gray-100 aspect-[3/4]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {badge && (
          <span className="absolute top-3 left-3 bg-[#0f3d4a] text-white text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded">
            {badge}
          </span>
        )}

        <button
          aria-label="Add to wishlist"
          onClick={() => setWishlisted((w) => !w)}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill={wishlisted ? "#e07a3f" : "none"}
            stroke={wishlisted ? "#e07a3f" : "#1a1a1a"}
            strokeWidth="1.8"
          >
            <path d="M12 21s-7.5-4.9-10-9.3C.4 8.4 2 4.8 5.6 4.1 8 3.6 10 4.7 12 7c2-2.3 4-3.4 6.4-2.9 3.6.7 5.2 4.3 3.6 7.6C19.5 16.1 12 21 12 21z" />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className="pt-3">
        <h3 className="text-sm text-gray-900 leading-snug line-clamp-2 mb-1.5">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-gray-900">
              ₹ {price.toLocaleString("en-IN")}
            </span>
            {mrp && (
              <span className="text-xs text-gray-400 line-through">
                MRP: ₹ {mrp.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <button
            onClick={onAdd}
            className="bg-[#0f3d4a] hover:bg-[#0c313b] text-white text-xs font-semibold tracking-wide px-4 py-1.5 rounded transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}