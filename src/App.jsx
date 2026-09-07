import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import ShopByCollection from "./components/ShopByCollection";
import NewArrivals from "./components/NewArrivals";

// Homepage = Hero + Bestsellers + Collections + New Arrivals, all inside Layout
function Home() {
  return (
    <>
      <Hero/>
      <BestSellers />
      <ShopByCollection />
      <NewArrivals />
    </>
  );
}

// Example: a bags listing page — Header/Footer come free from Layout
function Bags() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10">
      <h1 className="text-2xl font-semibold text-[#0f3d4a] mb-6">Bags</h1>
      {/* your bags product grid goes here */}
    </div>
  );
}

function Backpacks() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10">
      <h1 className="text-2xl font-semibold text-[#0f3d4a] mb-6">Backpacks</h1>
      {/* your backpacks product grid goes here */}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Every route nested here automatically gets Header + Footer via Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bags" element={<Bags />} />
          <Route path="backpacks" element={<Backpacks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}