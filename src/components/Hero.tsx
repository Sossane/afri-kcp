import { ArrowRight } from 'lucide-react';
import background from '/partners/background.jpeg';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <img
        src={background}
        alt="Technology Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#240428]/60 via-[#b70e1b]/60 to-[#b70d1d]/60 backdrop-blur-[1px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#b70e1b] mb-8">
          Solutions Numériques Innovantes
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light">
          Expertise en conseil numérique et intégration de solutions informatiques pour transformer votre entreprise
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white font-medium transition-all hover:scale-105"
        >
          Commencer votre projet
          <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
        </a>
      </div>
    </div>
  );
}