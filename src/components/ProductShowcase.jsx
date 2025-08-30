import { Thermometer, Shield, Cpu, Zap } from 'lucide-react';

const products = [
  {
    icon: Thermometer,
    title: 'CR-1 Foldable Panel',
    desc: 'Ultra-thin, deployable radiator array with aerospace-grade emissive coatings for smallsats and probes.',
    specs: 'Up to 1.2 kW dissipation | 3.1 kg/m² | -190°C to +120°C',
  },
  {
    icon: Shield,
    title: 'CR-2 Micrometeoroid Safe',
    desc: 'Multi-layer composite with embedded microchannels and puncture-tolerant flow pathways for resilient cooling.',
    specs: '2.5 kW dissipation | Self-isolating microchannels | Redundant loops',
  },
  {
    icon: Cpu,
    title: 'CoreTherm Controller',
    desc: 'Radiator control electronics with adaptive flow and emissivity modulation for dynamic thermal balance.',
    specs: 'CAN / SpaceWire | Rad-hard options | ML-based tuning',
  },
  {
    icon: Zap,
    title: 'CryoFlux Manifold',
    desc: 'High-compatibility coolant manifold optimized for cryogenic systems and long-duration missions.',
    specs: 'LOX / LCH4 compatible | Ultra-low leak | Quick-swap ports',
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-black via-[#0b0512] to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-4xl font-semibold">Radiator Systems</h2>
          <p className="text-white/70 mt-2 max-w-2xl">From cubesats to crewed platforms, our product line scales with your mission. Modular. Serviceable. Space-proven materials and processes.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/[0.08] transition-colors">
              <div className="h-10 w-10 rounded-md bg-purple-500/20 grid place-items-center text-purple-300 mb-4">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="text-white/70 text-sm mt-1">{p.desc}</p>
              <div className="text-xs text-white/60 mt-3 border-t border-white/10 pt-3">
                {p.specs}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
