import { Lightbulb, Settings, Wrench, GraduationCap } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)]">
              Nos Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour accompagner votre transformation numérique
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Cercles décoratifs animés */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] h-[80%] border-2 border-[rgba(144,36,53,0.2)] rounded-full animate-spin-slow"></div>
            <div className="absolute w-[70%] h-[70%] border-2 border-[rgba(39,40,91,0.15)] rounded-full animate-spin-reverse-slow"></div>
            <div className="absolute w-[60%] h-[60%] border-2 border-[rgba(144,36,53,0.1)] rounded-full animate-spin-slower"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            {/* Service 1 */}
            <div className="group relative bg-white/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="bg-[rgba(39,40,91,0.1)] p-4 rounded-xl group-hover:bg-[rgba(39,40,91,0.15)] transition-all duration-300 group-hover:scale-110">
                  <Lightbulb className="h-8 w-8 text-[rgba(144,36,53,0.898)] group-hover:rotate-[15deg] transition-transform duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[rgb(39,40,91)] transition-colors">
                    Consulting & Conseil
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    Accompagnement stratégique pour optimiser votre infrastructure IT et vos processus numériques.
                  </p>
                  <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] transition-all duration-500"></div>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[rgba(144,36,53,0.2)] rounded-2xl transition-all duration-500"></div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="bg-[rgba(39,40,91,0.1)] p-4 rounded-xl group-hover:bg-[rgba(39,40,91,0.15)] transition-all duration-300 group-hover:scale-110">
                  <Settings className="h-8 w-8 text-[rgba(144,36,53,0.898)] group-hover:rotate-[30deg] transition-transform duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[rgb(39,40,91)] transition-colors">
                    Gestion Infrastructure IT
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    Supervision et maintenance proactive de vos systèmes informatiques et réseaux.
                  </p>
                  <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] transition-all duration-500"></div>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[rgba(144,36,53,0.2)] rounded-2xl transition-all duration-500"></div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="bg-[rgba(39,40,91,0.1)] p-4 rounded-xl group-hover:bg-[rgba(39,40,91,0.15)] transition-all duration-300 group-hover:scale-110">
                  <Wrench className="h-8 w-8 text-[rgba(144,36,53,0.898)] group-hover:-rotate-[25deg] transition-transform duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[rgb(39,40,91)] transition-colors">
                    Maintenance & Support
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    Support technique réactif et maintenance préventive de vos équipements.
                  </p>
                  <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] transition-all duration-500"></div>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[rgba(144,36,53,0.2)] rounded-2xl transition-all duration-500"></div>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-white/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="bg-[rgba(39,40,91,0.1)] p-4 rounded-xl group-hover:bg-[rgba(39,40,91,0.15)] transition-all duration-300 group-hover:scale-110">
                  <GraduationCap className="h-8 w-8 text-[rgba(144,36,53,0.898)] group-hover:rotate-[20deg] transition-transform duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[rgb(39,40,91)] transition-colors">
                    Formation
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    Programmes de formation personnalisés pour vos équipes sur les outils et technologies.
                  </p>
                  <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] transition-all duration-500"></div>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[rgba(144,36,53,0.2)] rounded-2xl transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
