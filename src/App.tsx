
 import { Hero } from '@/components/hero';
import { Services } from '@/components/about'; 
import { HighlightGrid } from '@/components/services';
import { Projects } from '@/components/projects';
import { ExpressYourself } from '@/components/express-yourself';
import { Footer } from '@/components/footer';
import NavBar from './components/nav-bar';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
       
      <NavBar />
      <main>
        <Hero />
        <Services />
        <HighlightGrid />
        <Projects />
        <ExpressYourself />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
