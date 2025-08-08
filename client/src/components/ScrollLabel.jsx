import React from "react";

const ScrollLabel = () => (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md text-green2 px-8 py-3 rounded-full font-nunito text-base shadow-xl z-20 flex items-center gap-3 border border-green2/30">
    <span className="font-bold">Scroll for more</span>
    <span className="animate-bounce text-xl">↓</span>
  </div>
);

export default ScrollLabel;
