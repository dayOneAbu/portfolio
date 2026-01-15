
import { ArrowRight } from 'lucide-react';
import { SplitText } from '@/components/ui/split-text';
import { Button } from '@/components/ui/button';
import landscapeDesktop from '../assets/landscape-web.webp';

export const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-12">
        {/* Top Section */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground">
              <SplitText delay={0.1}>Hey,</SplitText>
              <br />
              <SplitText delay={0.2}>I'm Abubker.</SplitText>
            </h1>
            
            <div className="flex items-center gap-4 bg-white/10 p-2 rounded-full backdrop-blur-sm self-start mt-4 md:mt-0">
                <span className="px-4 text-sm font-medium text-white">How can i help </span>
                <Button size="icon" className="rounded-full bg-white text-black hover:bg-white/90">
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light">
            — a Full-Stack Software Engineer
          </p>
        </div>

      
        <div className="w-full aspect-video md:aspect-21/9 bg-muted/20 rounded-lg overflow-hidden relative group">
            
             <img src={landscapeDesktop} alt="landscape computer buki" />
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
          <p>
            Mission-driven Full Stack Developer with over 3 years of hands-on experience building scalable, production-ready web applications.<span className="underline decoration-accent underline-offset-4 text-foreground cursor-pointer"> Specializes in the TypeScript  (React, Next.js, Node.js) </span> with a strong emphasis on clean, maintainable, and well-tested code. Proven ability to deliver impactful internal systems at a major financial institution and high-quality freelance web solutions. 
          </p>
          <p>
           I bring broad experience from low-level Bash scripts automating installations to integrating chatbot with contact center platform during my previous role. On the freelance side, I've helped businesses build strong online presences, showcase their offerings, and attract more customers through clean, responsive websites.
          </p>
        </div>
      </div>
    </section>
  );
};
