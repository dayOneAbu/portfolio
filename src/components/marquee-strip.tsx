
export const MarqueeStrip = () => {
  return (
    <div className="w-full bg-black py-4 overflow-hidden flex border-y border-white/10">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="mx-8 text-xl md:text-2xl font-bold text-accent tracking-widest flex items-center gap-4">
             • ALL TALK • NO PRESSURE
          </span>
        ))}
      </div>
      <div className="animate-marquee2 whitespace-nowrap flex items-center absolute top-4 left-0">
           {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="mx-8 text-xl md:text-2xl font-bold text-accent tracking-widest flex items-center gap-4">
             • ALL TALK • NO PRESSURE
          </span>
        ))}
      </div>
    </div>
  );
};
