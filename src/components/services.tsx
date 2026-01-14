
import { Separator } from '@/components/ui/separator';

export const Services = () => {
    
  const services = [
    {
      category: 'Core',
      items: ['Brand Strategy', 'Brand Identity', 'Visual Identity', 'Tone of Voice', 'Strike Design', 'Roll-out'],
    },
    {
      category: 'Focus',
      items: ['User Research & Testing', 'Information Architecture', 'Software Design / Visual Design', 'System / Marketing Design'],
    },
    {
      category: 'Content',
      items: ['Content Strategy', 'Video', 'Design Assets', 'Scripted', 'Writing Assets'],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
      
      {/* Vertical Text Area */}
      <div className="flex-1 hidden md:block">
        <h2 
            className="text-6xl font-bold leading-tight tracking-tight text-foreground whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
        >
          <span className="block mb-4">I partner with venture capital</span>
          <span className="block mb-4">and accelerators — helping</span>
          <span className="block mb-4">shape investments as a</span>
          <span className="block text-secondary">Design Director.</span>
        </h2>
      </div>

       {/* Mobile Version of Text */}
       <div className="md:hidden mb-12">
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground">
          <span className="block mb-2">I partner with venture capital</span>
          <span className="block mb-2">and accelerators — helping</span>
          <span className="block mb-2">shape investments as a</span>
          <span className="block text-secondary">Design Director.</span>
        </h2>
       </div>

      {/* Services List */}
      <div className="flex-1 flex flex-col gap-12 justify-end">
        <p className="text-xl font-medium text-white mb-8">
            At smalltribe, we believe in a connected approach.
        </p>
        
        <div className="flex flex-col">
            {services.map((service, index) => (
                <div key={index}>
                    <div className="py-8 grid grid-cols-[100px_1fr] gap-8 border-t border-white/10">
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{service.category}</span>
                        <div className="flex flex-col gap-1">
                             {service.items.map((item, i) => (
                                 <span key={i} className="text-lg text-foreground font-light">{item}</span>
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
