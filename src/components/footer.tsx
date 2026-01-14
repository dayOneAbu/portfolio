
import { ArrowRight } from 'lucide-react';
import { CircularText } from '@/components/ui/circular-text';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';



export const Footer = () => {
  return (
    <footer id="contact" className="bg-background pt-24 pb-12 overflow-hidden relative">
      
          

      <div className="border-t border-white/10 max-w-7xl mx-auto pt-16 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
              <div>
                  <h4 className="text-white font-bold mb-6">Contact</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                      Abubker.init@gmail.com<br/>
                      0938544598<br/>
                      Addis Ababa<br/>
                      Ethiopia
                  </p>
              </div>
              <div>
                  <h4 className="text-white font-bold mb-6">Sitemap</h4>
                  <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                      <li><a href="#" className="hover:text-white">Home</a></li>
                      <li><a href="#" className="hover:text-white">Services</a></li>
                      <li><a href="#" className="hover:text-white">Work</a></li>
                      <li><a href="#" className="hover:text-white">About</a></li>
                      <li><a href="#" className="hover:text-white">Contact</a></li>
                  </ul>
              </div>
               <div>
                  <h4 className="text-white font-bold mb-6">Socials</h4>
                  <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                      <li><a href="#" className="hover:text-white">Twitter</a></li>
                      <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                      <li><a href="#" className="hover:text-white">Threads</a></li>
                      <li><a href="#" className="hover:text-white">Read CV</a></li>
                      <li><a href="#" className="hover:text-white">Telegram</a></li>
                  </ul>
              </div>
               <div className="flex flex-col justify-end">
                   <p className="text-white font-medium mb-4">Let's build great things.</p>
                  <Link to={"tel:+251938544598"} >
                       <Button   variant="outline" className="rounded-full w-fit bg-white text-black hover:bg-white/90 border-none gap-2">
                           Contact Me <ArrowRight className="h-4 w-4" />
                       </Button>
                  </Link>
              </div>
          </div>

          {/* Big Circular Text Footer */}
          <div className="relative flex justify-center items-center py-20">
               <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
                   <h1 className="text-[12rem] md:text-[20rem] font-bold text-white tracking-tighter">DayOne</h1>
               </div>
               
              
          </div>
          
           <div className="flex justify-between items-center text-xs text-muted-foreground/30 mt-12 pb-6">
              © {new Date().getFullYear()} Abubker M. All rights reserved.
           </div>
      </div>
    </footer>
  );
};
