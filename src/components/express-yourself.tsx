import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { PhoneCallIcon } from 'lucide-react';
export const ExpressYourself = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Yellow Character Section */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">let's Get in Touch and  Express yourself</h2>
      <div className="flex flex-col md:grid md:grid-cols-5 items-center justify-center mb-32 relative">
          
          <div className="relative w-full col-span-2 max-w-md aspect-square flex items-center justify-center">
               {/* Abstract representation of the yellow character/phone */}
               <div className="w-64 h-96 bg-[#ffd700] rounded-[3rem] border-4 border-black relative flex flex-col items-center p-6 shadow-[0_0_50px_rgba(255,215,0,0.3)] transform rotate-[-5deg]">
                    
                    {/* Screen/Face */}
                    <div className="w-full bg-white h-24 rounded-2xl border-2 border-black flex items-center justify-center mb-4 relative overflow-hidden">
                        <div className="w-16 h-8 bg-blue-400 rounded-full opacity-50 absolute -top-4 -left-4" />
                        <span className="text-3xl font-black text-black">?_*</span>
                    </div>

                    {/* Body Buttons */}
                    <div className="grid grid-cols-2 gap-4 w-full mb-auto">
                        <div className="h-12 bg-orange-400 rounded-xl border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]" />
                        <div className="h-12 bg-pink-400 rounded-xl border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]" />
                        <div className="h-12 bg-green-400 rounded-xl border-2 border-black col-span-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)]" />
                        <div className="h-24 bg-red-400 rounded-full border-2 border-black col-span-2 shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center justify-center">
                            <span className="text-black font-bold">LET'S TALK</span>
                        </div>
                    </div>
               </div>

               {/* Floating Badges */}
               <div className="absolute top-0 right-10 bg-purple-500 text-white font-bold p-2 rotate-12 border-2 border-black shadow-lg">Call!</div>
               <div className="absolute bottom-10 left-0 bg-blue-500 text-white font-bold p-2 -rotate-12 border-2 border-black shadow-lg">
                <PhoneCallIcon className="w-8 h-8"  />
                </div>
          </div>
          <div className="max-w-3xl col-span-3 mx-auto px-6 mb-32 relative z-10 text-center">
         <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-sm font-medium text-white mb-8">
            CONTACT US
         </div>
         
         <p className="text-muted-foreground mb-12">Send us a message and we'll get back to you within 24 hours.</p>
         
         <form className="flex flex-col gap-4 text-left">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <Input placeholder="Name" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12" />
                 <Input placeholder="Email Address" type="email" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12" />
             </div>
             <Textarea placeholder="Your Message" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[150px]" />
             <Button className="w-full bg-secondary text-white hover:bg-secondary/80 h-12 text-lg font-medium">
                Submit
             </Button>
         </form>
      </div>
      </div>
    </section>
  );
};
