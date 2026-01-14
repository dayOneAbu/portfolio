
import { ArrowRight } from 'lucide-react';
import { SplitText } from '@/components/ui/split-text';
import { Button } from '@/components/ui/button';

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
             {/* Abstract Gradient Background since we don't have the photo */}
             <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-accent/5" />
             <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-light text-xl">
                [Hero Image Placeholder]
             </div>
        </div>

       \
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
          <p>
            I've spent a couple of decades creating brands and digital products and obsessing over what makes them fly. I run a creative studio called <span className="underline decoration-accent underline-offset-4 text-foreground cursor-pointer">The Morphing</span> and invest in cartel-esque ventures — collaborating on brave ideas with amazing people.
          </p>
          <p>
            I focus on early-stage design — taking a brand from zero to one. My portfolio companies raise strategic rounds in their foundational stages and leverage their position in the market. Over the past few years, I've helped build fun startups and my work has led to over $500M in investment.
          </p>
        </div>
      </div>
    </section>
  );
};
