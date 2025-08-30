import { Gauge, Wrench, Shield, Thermometer } from 'lucide-react';

const metrics = [
  { icon: Gauge, label: 'Thermal Rejection', value: '0.8–5.0 kW' },
  { icon: Thermometer, label: 'Operating Range', value: '-190°C to +160°C' },
  { icon: Shield, label: 'MMOD Resilience', value: 'ISO 11227 Class III' },
  { icon: Wrench, label: 'Serviceability', value: 'On-orbit replaceable' },
];

export default function TechSpecs() {
  return (
    <section id="technology" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Engineering, Not Guesswork</h2>
          <p className="text-white/70 mt-2 max-w-2xl">
            Our radiators leverage high-emissivity nano-coatings, microchannel heat pipes, and topology-optimized manifolds. Every assembly is validated through thermal vacuum cycling and acoustic load tests.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-purple-500/20 grid place-items-center text-purple-300">
                  <m.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-white/70">{m.label}</div>
                  <div className="text-lg font-medium">{m.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
