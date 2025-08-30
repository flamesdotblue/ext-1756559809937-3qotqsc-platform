import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import TechSpecs from './components/TechSpecs';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <main className="relative z-10">
        <ProductShowcase />
        <TechSpecs />
      </main>
      <FooterCTA />
    </div>
  );
}

export default App;
