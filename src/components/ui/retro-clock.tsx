
import { useEffect, useState } from 'react';

interface RetroClockProps {
  label?: string;
  color?: 'green' | 'blue';
  value?: string;
  className?: string;
}

export const RetroClock = ({ label, color = 'green', value, className = '' }: RetroClockProps) => {
  const [time, setTime] = useState(value || '888.888');

  useEffect(() => {
    if (!value) {
      const interval = setInterval(() => {
        const now = new Date();
        // Mocking a counter look: Hours.Minutes.Seconds
        const h = now.getHours().toString().padStart(2, '0');
        const m = now.getMinutes().toString().padStart(2, '0');
        const s = now.getSeconds().toString().padStart(2, '0');
        setTime(`${h}${m}.${s}`);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [value]);

  const textColor = color === 'green' ? 'text-[#4ade80]' : 'text-[#60a5fa]';
  const labelColor = color === 'green' ? 'text-[#4ade80]' : 'text-[#60a5fa]';

  return (
    <div className={`bg-black/90 rounded-lg p-3 border border-white/10 inline-flex flex-col gap-1 shadow-2xl font-mono ${className}`}>
      {label && (
        <div className={`flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider ${labelColor} opacity-80`}>
             <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
             {label}
        </div>
      )}
      <div className={`text-4xl md:text-5xl font-bold tracking-widest ${textColor} font-mono leading-none flex items-baseline`}>
         {time}
         <span className="text-[10px] ml-2 opacity-50">TX</span>
      </div>
      
       {/* Pseudo-decorations for the digital look */}
       <div className="flex gap-1 mt-1 justify-end opacity-30">
           {[...Array(5)].map((_, i) => (
               <div key={i} className={`w-1 h-1 rounded-full ${textColor}`} />
           ))}
       </div>
    </div>
  );
};
