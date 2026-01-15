import { 
    Code2, 
    Database, 
    Layout, 
    Server, 
    Rocket, 
    BookOpen, 
    Film, 
    Brain, 
    MessageCircle,
    Coffee,
    Lightbulb
} from 'lucide-react';

export const HighlightGrid = () => {
    
    const techStack = [
        { name: "Next.js", icon: <Layout className="w-5 h-5" /> },
        { name: "Node.js", icon: <Server className="w-5 h-5" /> },
        { name: "Express", icon: <Code2 className="w-5 h-5" /> },
        { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
        { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
        { name: "TailwindCSS", icon: <Layout className="w-5 h-5" /> },
        { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
        { name: "Prisma", icon: <Database className="w-5 h-5" /> },
    ];

    const interests = [
        { name: "Reading", icon: <BookOpen className="w-4 h-4" /> },
        { name: "Startups", icon: <Rocket className="w-4 h-4" /> },
        
        { name: "Movies", icon: <Film className="w-4 h-4" /> },
        { name: "Life", icon: <Coffee className="w-4 h-4" /> },
        { name: "AI", icon: <Brain className="w-4 h-4" /> },
    ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Introduction & Services */}
      <div className="mb-24">
         <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">
            What I Do
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                    I build accessible, pixel-perfect, and performant web experiences. 
                    I combine technical expertise with a keen eye for design to create production-ready applications solving real-world problems.
                </p>
            </div>
            <div className="space-y-6">
                 <p className="text-lg text-muted-foreground">
                    From intuitive front-end interfaces to robust back-end systems, 
                    I specialize in the full development lifecycle. My approach involves understanding 
                    business goals and translating them into technical solutions that scale.
                 </p>
            </div>
         </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-24">
        <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <span className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Code2 className="w-5 h-5" /></span>
            Tech Stack
        </h3>
        <div className="flex flex-wrap gap-4">
            {techStack.map((tech, idx) => (
                <div 
                    key={idx}
                    className="flex items-center gap-3 px-5 py-3 bg-muted/30 hover:bg-muted/50 border border-white/5 rounded-xl transition-all duration-300 hover:scale-105 cursor-default"
                >
                    <span className="text-muted-foreground">{tech.icon}</span>
                    <span className="font-medium text-foreground">{tech.name}</span>
                </div>
            ))}
        </div>
      </div>

      {/* Interests */}
      <div className="mb-24">
        <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <span className="p-2 bg-purple-500/10 rounded-lg text-purple-500"><Lightbulb className="w-5 h-5" /></span>
             Interests & Curiosities
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((item, idx) => (
                <div 
                    key={idx}
                    className="flex flex-col items-center justify-center gap-3 p-6 bg-muted/20 border border-white/5 rounded-2xl hover:bg-muted/40 transition-colors text-center group"
                >
                    <div className="p-3 bg-white/5 rounded-full text-foreground/80 group-hover:text-foreground group-hover:scale-110 transition-all">
                        {item.icon}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.name}
                    </span>
                </div>
            ))}
        </div>
      </div>


         <h3 className="text-3xl md:text-4xl font-light text-foreground mb-8 text-center max-w-4xl mx-auto leading-normal">
            Got an idea?<span className="inline-flex p-1 bg-purple-500/20 rounded-md mx-1 align-middle">🔮</span>lets make it happen <span className="inline-flex p-1 bg-blue-500/20 rounded-md mx-1 align-middle">🚀</span>  If you get an idea or project in mind, let's talk about it. <span className="inline-flex p-1 bg-green-500/20 rounded-md mx-1 align-middle">🧪</span>
            
            and see where it leads. 
                    I'm open to discussing 
             <span className="inline-flex p-1 bg-yellow-500/20 rounded-md mx-1 align-middle">new opportunities</span> with <span className="inline-flex p-1 bg-red-500/20 rounded-md mx-1 align-middle">startups, and the future of tech. </span>
</h3>
    <div className="pt-4">
                     <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-transform active:scale-95 flex items-center gap-2 mx-auto">
                        <MessageCircle className="w-5 h-5" />
                        Let's Chat
                    </button>
                </div>

    </section>
  );
};
