import { Network, Server, Cloud, ArrowRight } from 'lucide-react';

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] bg-clip-text text-transparent">
          Notre Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-8 
                        shadow-lg hover:shadow-xl border border-gray-100 
                        transform hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-[rgba(39,40,91,0.1)] 
                          opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500" />
            <div className="relative">
              <div className="mb-8 inline-block rounded-2xl bg-[rgba(39,40,91,0.1)] p-4 
                            group-hover:bg-[rgba(39,40,91,0.15)] transition-all duration-500 
                            group-hover:scale-110 transform">
                <Network className="h-10 w-10 text-[rgba(144,36,53,0.898)] group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[rgb(39,40,91)] transition-colors duration-300">
                Solutions Réseaux, Télécommunications et Cybersécurité
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                Nous offrons des services personnalisés en réseaux, télécommunications et cybersécurité 
                pour optimiser vos infrastructures, protéger vos données sensibles et garantir une communication fluide et fiable.
                Ces solutions sont essentielles pour assurer la connectivité, la performance et la sécurité des entreprises dans un monde numérique en constante évolution.                
              </p>
              <a 
                href="/reseaux-solutions" 
                className="inline-flex items-center text-[rgba(144,36,53,0.898)] hover:text-[rgb(39,40,91)] 
                         transition-all duration-300 group-hover:translate-x-2 relative
                         after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 
                         after:h-0.5 after:bg-[rgb(39,40,91)] after:transition-all after:duration-300
                         hover:after:w-full"
              >
                En savoir plus <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-8 
                        shadow-lg hover:shadow-xl border border-gray-100 
                        transform hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-[rgba(39,40,91,0.1)] 
                          opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500" />
            <div className="relative">
              <div className="mb-8 inline-block rounded-2xl bg-[rgba(39,40,91,0.1)] p-4 
                            group-hover:bg-[rgba(39,40,91,0.15)] transition-all duration-500 
                            group-hover:scale-110 transform">
                <Server className="h-10 w-10 text-[rgba(144,36,53,0.898)] group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[rgb(39,40,91)] transition-colors duration-300">
                Solutions Matérielles et Équipements Informatiques
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                Nous proposons une large gamme de solutions matérielles et d'équipements informatiques adaptés aux besoins des entreprises, allant des réseaux et télécommunications à la sécurité,
                ainsi que des solutions de serveurs, stockage, postes de travail, périphériques et accessoires.
                Nos équipements sont conçus pour être performants, sécurisés et évolutifs, répondant aux exigences spécifiques de chaque entreprise.
              </p>
              <a 
                href="/materielles-solutions" 
                className="inline-flex items-center text-[rgba(144,36,53,0.898)] hover:text-[rgb(39,40,91)] 
                         transition-all duration-300 group-hover:translate-x-2 relative
                         after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 
                         after:h-0.5 after:bg-[rgb(39,40,91)] after:transition-all after:duration-300
                         hover:after:w-full"
              >
                En savoir plus <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-8 
                        shadow-lg hover:shadow-xl border border-gray-100 
                        transform hover:-translate-y-2 transition-all duration-500">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-[rgba(39,40,91,0.1)] 
                          opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500" />
            <div className="relative">
              <div className="mb-8 inline-block rounded-2xl bg-[rgba(39,40,91,0.1)] p-4 
                            group-hover:bg-[rgba(39,40,91,0.15)] transition-all duration-500 
                            group-hover:scale-110 transform">
                <Cloud className="h-10 w-10 text-[rgba(144,36,53,0.898)] group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[rgb(39,40,91)] transition-colors duration-300">
                Solutions Logicielles et Cloud
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                Notre équipe propose des solutions logicielles et Cloud complètes, adaptées aux besoins spécifiques des entreprises.
                Cela inclut le développement d'applications personnalisées, des services Cloud et d'intelligence artificielle, ainsi que l'intégration de systèmes et de bases de données.
                Nous proposons également des outils pour optimiser la collaboration, la productivité, la sécurité et la maintenance de vos infrastructures logicielles.
              </p>
              <a 
                href="/logicielles-solutions" 
                className="inline-flex items-center text-[rgba(144,36,53,0.898)] hover:text-[rgb(39,40,91)] 
                         transition-all duration-300 group-hover:translate-x-2 relative
                         after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 
                         after:h-0.5 after:bg-[rgb(39,40,91)] after:transition-all after:duration-300
                         hover:after:w-full"
              >
                En savoir plus <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
