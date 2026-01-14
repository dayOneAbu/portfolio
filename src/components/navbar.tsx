
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { RetroClock } from '@/components/ui/retro-clock';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md">
      <div className="flex items-center gap-2">
         {/* Logo Idea: Simple Star Icon as per design */}
         <span className="text-2xl font-light text-primary">*</span>
         <span className="text-lg font-medium text-foreground tracking-tight">Brandme</span>
      </div>

      {/* Desktop Menu - Hidden on mobile, but design is primarily mobile-ish */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <RetroClock label="Connected" color="green" className="scale-75 origin-right hidden lg:flex" />
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#work" className="hover:text-primary transition-colors">Work</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden text-foreground">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-background border-l-border w-full sm:w-[300px]">
             <div className="flex flex-col gap-8 mt-10 text-2xl font-light">
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
                 <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
             </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
