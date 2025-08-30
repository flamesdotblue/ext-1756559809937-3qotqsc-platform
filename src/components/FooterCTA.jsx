import { Mail, Phone, Rocket } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-purple-300 mb-2">
                <Rocket className="h-4 w-4" />
                Cosmic Radiators
              </div>
              <h3 className="text-2xl font-semibold">Ready to cool your next mission?</h3>
              <p className="text-white/70 mt-1 max-w-xl">Engage our engineering team for trade studies, thermal budgets, and integration support. We respond within 48 hours.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a href="mailto:eng@cosmicradiators.space" className="inline-flex items-center justify-center gap-2 rounded-md bg-purple-500 hover:bg-purple-400 transition-colors px-4 py-2 text-sm font-medium w-full sm:w-auto">
                <Mail className="h-4 w-4" /> eng@cosmicradiators.space
              </a>
              <a href="tel:+10000000000" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 hover:border-white/40 transition-colors px-4 py-2 text-sm font-medium text-white/90 w-full sm:w-auto">
                <Phone className="h-4 w-4" /> +1 (000) 000-0000
              </a>
            </div>
          </div>
        </div>
        <div className="text-xs text-white/50 mt-6 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Cosmic Radiators, Inc. All rights reserved.</span>
          <span className="text-white/30">Made on Earth. Tested in vacuum.</span>
        </div>
      </div>
    </footer>
  );
}
