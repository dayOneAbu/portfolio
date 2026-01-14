
 import { Hero } from '@/components/hero';
import { Services } from '@/components/services'; 
import { HighlightGrid } from '@/components/highlight-grid';
import { ExpressYourself } from '@/components/express-yourself';
import { Footer } from '@/components/footer';
import NavBar from './components/nav-bar';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
       
      <NavBar />
      <main>
        <Hero />
        <Services />
        <HighlightGrid />
        <ExpressYourself />
      </main>
      <Footer />
    </div>
  );
}

export default App;
