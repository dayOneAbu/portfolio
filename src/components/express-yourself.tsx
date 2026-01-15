import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { PhoneCallIcon, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export const ExpressYourself = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
        toast.error('Please fill in all fields before submitting.');
        return;
    }

    setIsSubmitting(true);

    try {
        const response = await fetch("https://formsubmit.co/ajax/c0c985d1c6fb5f72f0f9671bba9e13d7", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message,
                _subject: `New Contact Form Submission from ${formData.name}`,
                _template: "table"
            })
        });

        const result = await response.json();

        if (response.ok) {
            toast.success("Email sent! I will get back to you ASAP.");
            setFormData({ name: '', email: '', message: '' });
        } else {
            console.error("Form submission failed:", result);
            toast.error("Something went wrong. Please try again later.");
        }
    } catch (error) {
        console.error("Form submission error:", error);
        toast.error("Failed to send message. Please check your connection.");
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact"  className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Yellow Character Section */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">let's Get in Touch and  talk about you</h2>
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
         
         <p className="text-muted-foreground mb-12">Send me a message and I'll get back to you within in a few hours.</p>
         
         <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <Input 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12" 
                    required 
                 />
                 <Input 
                    name="email" 
                    type="email" 
                    placeholder="Email Address" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12" 
                    required 
                 />
             </div>
             <Textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleChange} 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[150px]" 
                required 
             />
             <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-secondary text-white hover:bg-secondary/80 h-12 text-lg font-medium"
             >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    "Submit"
                )}
             </Button>
         </form>
      </div>
      </div>
    </section>
  );
};
