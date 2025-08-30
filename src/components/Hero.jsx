import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle vignette and top gradient to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 flex flex-col items-start gap-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/80 border border-white/10">
          <Star className="h-3.5 w-3.5 text-purple-300" />
          Pushing thermal frontiers in deep space
        </div>
        <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
          Cosmic Radiators for a Colder, Longer Voyage
        </h1>
        <p className="text-white/80 max-w-2xl text-base sm:text-lg">
          We design and manufacture high-efficiency radiative thermal systems for spacecraft, stations, and lunar habitats. Lighter. Smarter. Built for the vacuum of space.
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-2">
          <a href="#products" className="inline-flex items-center gap-2 rounded-md bg-purple-500 hover:bg-purple-400 transition-colors px-4 py-2 text-sm font-medium">
            <Rocket className="h-4 w-4" /> Explore Radiators
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/20 hover:border-white/40 transition-colors px-4 py-2 text-sm font-medium text-white/90">
            Talk to Engineering
          </a>
        </div>
      </div>
    </section>
  );
}
