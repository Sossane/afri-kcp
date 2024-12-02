import { Network } from 'lucide-react';
import Navbar from './Navbar';
import Partners from './Partners';
import Contact from './Contact';

export default function ReseauxSolutions() {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section avec image de fond et forme décorative */}
      <div className="relative min-h-[70vh] flex items-center">
        <img
          src="/partners/retelcyb.jpg"
          alt="Réseaux Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#240428]/60 via-[#b70e1b]/60 to-[#b70d1d]/60 backdrop-blur-[1px]"></div>
        
        {/* Forme décorative */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" 
             style={{
               clipPath: "polygon(0 100%, 100% 100%, 100% 0, 50% 40%, 0 0)"
             }}>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Solutions Réseaux, Télécommunications et Cybersécurité
          </h1>
        </div>
      </div>

      {/* Contenu détaillé */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="rounded-2xl bg-[rgba(39,40,91,0.1)] p-4 mr-4">
              <Network className="h-8 w-8 text-[rgba(144,36,53,0.898)]" />
            </div>
            <h2 className="text-3xl font-bold text-[rgb(39,40,91)]">
              Notre Expertise Réseaux
            </h2>
          </div>

          {/* Solutions en blocs alternés */}
          <div className="space-y-16">
            {/* Bloc 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[rgba(144,36,53,0.898)]">
                    Infrastructure réseau
                  </h3>
                  <p className="text-gray-600">
                    Conception, déploiement et gestion de LAN, WAN, VLAN, VPN, câblage et fibre optique
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="/partners/fibre.jpg" 
                  alt="Infrastructure réseau" 
                  className="rounded-2xl object-cover w-full h-[300px]"
                />
              </div>
            </div>

            {/* Bloc 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[rgba(144,36,53,0.898)]">
                    Connectivité et collaboration
                  </h3>
                  <p className="text-gray-600">
                    WI-FI haut débit, téléphonie IP, VoIP, vidéoconférence et solutions de télécommunications unifiées
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="/partners/connectivite.png" 
                  alt="Connectivité" 
                  className="rounded-2xl object-cover w-full h-[300px]"
                />
              </div>
            </div>

            {/* Bloc 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[rgba(144,36,53,0.898)]">
                    Cybersécurité proactive
                  </h3>
                  <p className="text-gray-600">
                    Protection contre les menaces, surveillance (SIEM, SOC), gestion des risques et sensibilisation
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="/partners/cybersecuritepro.png" 
                  alt="Cybersécurité" 
                  className="rounded-2xl object-cover w-full h-[300px]"
                />
              </div>
            </div>

            {/* Continuez le même pattern pour les autres solutions */}
          </div>
        </div>
      </section>

      {/* Partenaires et Contact */}
      <Partners />
      <Contact />
      
      <footer className="bg-gradient-to-r from-[#240428] to-[#b70e1b] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Afri-k Corporation Group. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}