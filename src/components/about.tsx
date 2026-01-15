
import { Separator } from '@/components/ui/separator';

export const Services = () => {
    
  const services = [
    {
      category: 'Education',
      items: ['Bachelor of Science in Information Systems  Addis Ababa University Ethiopia | 2022'],
    },
    {
      category: 'Jobs',
      items: ['Commercial Bank of Ethiopia — Addis Ababa, Ethiopia Junior Information Systems (IS) Officer II December 2022 – July 2025 (2 years 8 months)', 'DARSAB TRADING PLC — Addis Ababa, Ethiopia; Web Developer (Freelance) February 2022 – April 2022 (3 months)', 'Asselef Media and Communication — Addis Ababa, Ethiopia; Web Developer (Freelance) February 2025 – March 2025 (1 month)'],
    },
    {
      category: 'Certificates',
      items: ["Deep Dive Into Modern Web Development University of Helsinki (Full Stack Open course) — Comprehensive training in modern JavaScript, React, Node.js, GraphQL, TypeScript, and full-stack best practices", "React Basics Meta (via Coursera) — Core concepts of React including components, state, props, hooks, and building interactive UIs."],
    },
  ];
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
      
      {/* Vertical Text Area */}
      <div className="flex-1 hidden md:block">
        <h2 
            className="text-6xl font-bold leading-tight tracking-tight text-foreground whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
        >
          <span className="block mb-4">I automate internal </span>
            <span className="block mb-2"> business systems</span>
          <span className="block mb-4">eliminate manual  
</span>
          
          <span className="block text-secondary">processes</span>
          <span className="block text-secondary">& improve efficiency.</span>
          
        </h2>
      </div>

       
       <div className="md:hidden mb-12">
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground">
          <span className="block mb-2">I automate internal</span>
            <span className="block mb-2">
              business systems</span>
          <span className="block mb-2"> to eliminate manual  
</span>
        
          <span className="block text-secondary">processes</span> 
          <span className="block text-secondary">& improve efficiency.</span> 
          
        </h2>
       </div>

      {/* Services List */}
      <div className="flex-1 flex flex-col gap-12 justify-end">
        <p className="text-xl font-medium text-white mb-8">
            Here is a snapshot of path i have taken so far.
        </p>
        
        <div className="flex flex-col">
            {services.map((service, index) => (
                <div key={index}>
                    <div className="py-8 grid grid-cols-[100px_1fr] gap-8 border-t border-white/10">
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{service.category}</span>
                        <div className="flex flex-col gap-1">
                             {service.items.map((item, i) => (
                                <div key={i}>
                                 <span  className="text-lg text-foreground font-light">{item}</span>
                                 <Separator className="bg-white/10" />
                                </div>
                             ))}
                        </div>
                    </div>
                </div>
            ))}
             <Separator className="bg-white/10" />
        </div>
      </div>
    </section>
  );
};
