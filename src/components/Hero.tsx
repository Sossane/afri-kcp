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

      <div className="absolute inset-0 bg-gradient-to-br from-[#240428]/70 via-[#b70e1b]/60 to-[#b70d1d]/70 backdrop-blur-[1px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[rgba(255,255,255,0.8)]">
              Transformez votre avenir numérique
            </span>
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed drop-shadow-md">
              Experts en solutions technologiques innovantes, nous accompagnons votre transformation digitale avec excellence et vision.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 rounded-full 
                       bg-gradient-to-r from-[rgba(144,36,53,0.898)] to-[rgb(39,40,91)] 
                       hover:from-[rgb(39,40,91)] hover:to-[rgba(144,36,53,0.898)]
                       text-white font-medium transition-all duration-300 
                       hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Démarrez votre projet
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}