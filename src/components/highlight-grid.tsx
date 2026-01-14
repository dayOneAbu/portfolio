
import { ArrowUpRight } from 'lucide-react';

export const HighlightGrid = () => {
    // Mock data for the grid items based on the image
    const projects = [
        { id: 1, title: 'Crypto Dashboard', type: 'App Design', colSpan: 2 },
        { id: 2, title: 'Mobile Finance', type: 'Mobile App', colSpan: 1 },
        { id: 3, title: 'Health Tracker', type: 'Product Design', colSpan: 1 },
        { id: 4, title: 'Architecture', type: 'Branding', colSpan: 2 },
        { id: 5, title: 'Camera UI', type: 'Interface', colSpan: 1 },
        { id: 6, title: 'Folder System', type: 'UX Research', colSpan: 1 },
        { id: 7, title: 'Mountain View', type: 'Photography', colSpan: 1 },
    ];

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      
      <div className="mb-16">
         <h3 className="text-3xl md:text-4xl font-light text-foreground mb-8 text-center max-w-4xl mx-auto leading-normal">
            Find your <span className="inline-flex p-1 bg-purple-500/20 rounded-md mx-1 align-middle">🔮</span> favorite frequencies and <span className="inline-flex p-1 bg-blue-500/20 rounded-md mx-1 align-middle">🚀</span> chat about all <span className="inline-flex p-1 bg-green-500/20 rounded-md mx-1 align-middle">🧪</span> things fun, fascinating and refreshingly weird <span className="inline-flex p-1 bg-yellow-500/20 rounded-md mx-1 align-middle">🧀</span> with <span className="inline-flex p-1 bg-red-500/20 rounded-md mx-1 align-middle">🍔</span> people across the globe.
         </h3>
         
         {/* Trusted By Logos */}
         <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 py-12 items-center">
             <span className="text-xl font-bold text-white tracking-[0.2em]">SAMSUNG</span>
             <span className="text-xs font-serif italic text-white border border-white px-2 py-1 rounded-full">THE<br/>AVOCADO<br/>CLUB</span>
             <span className="text-2xl font-black text-white italic">MOVE</span>
             <span className="text-xl font-bold text-white flex items-center gap-1"><span className="text-2xl">⚡</span> VACATURE</span>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
             <div 
                key={project.id} 
                className={`
                    group relative overflow-hidden rounded-2xl bg-muted/30 aspect-square md:aspect-auto
                    ${project.colSpan === 2 ? 'md:col-span-2 md:aspect-2/1' : ''}
                `}
             >
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="text-white font-bold text-xl">{project.title}</h4>
                                <p className="text-white/70 text-sm">{project.type}</p>
                            </div>
                            <div className="p-2 bg-white rounded-full text-black">
                                <ArrowUpRight className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Placeholder Content */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 text-4xl font-bold bg-white/5">
                    {project.id}
                </div>
             </div>
        ))}
      </div>
    </section>
  );
};
