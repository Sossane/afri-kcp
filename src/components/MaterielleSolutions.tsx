import { Server } from 'lucide-react';
import Navbar from '../components/Navbar';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

export default function MaterielleSolutions() {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section avec image de fond */}
      <div className="relative min-h-[70vh] flex items-center">
        <img
          src="/partners/hardware.png"
          alt="Matériel Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#240428]/60 via-[#b70e1b]/60 to-[#b70d1d]/60 backdrop-blur-[1px]"></div>
        
        {/* Forme décorative */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" 
             style={{
               clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 75% 60%, 50% 30%, 25% 60%, 0 30%)"
             }}>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Solutions Matérielles et Équipements Informatiques
          </h1>
        </div>
      </div>

      {/* Contenu détaillé */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="rounded-2xl bg-[rgba(39,40,91,0.1)] p-4 mr-4">
              <Server className="h-8 w-8 text-[rgba(144,36,53,0.898)]" />
            </div>
            <h2 className="text-3xl font-bold text-[rgb(39,40,91)]">
              Notre Expertise Matérielle
            </h2>
          </div>

          <div className="space-y-16">
            {/* Bloc 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="/partners/rt.jpg" 
                    alt="Équipements réseaux" 
                    className="w-full h-[200px] md:hidden object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-4 text-[rgba(144,36,53,0.898)]">
                      Réseaux et télécommunications
                    </h3>
                    <p className="text-gray-600">
                      Switches, routeurs, points d'accès Wi-Fi, modems, téléphones IP, casques audio, et systèmes de vidéoconférence
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 hidden md:block">
                <img 
                  src="/partners/rt.jpg" 
                  alt="Équipements réseaux" 
                  className="rounded-2xl object-cover w-full h-[300px]"
                />
              </div>
            </div>

            {/* Bloc 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="/partners/firewall.jpg" 
                    alt="Équipements de sécurité" 
                    className="w-full h-[200px] md:hidden object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-4 text-[rgba(144,36,53,0.898)]">
                      Sécurité
                    </h3>
                    <p className="text-gray-600">
                      Firewalls, systèmes antiviraux, et équipements de gestion des accès sécurisés
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 hidden md:block">
                <img 
                  src="/partners/firewall.jpg" 
                  alt="Équipements de sécurité" 
                  className="rounded-2xl object-cover w-full h-[300px]"
                />
              </div>
            </div>

            {/* Bloc 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="/partners/serveur.png" 
                    alt="Serveurs et stockage" 
                    className="w-full h-[200px] md:hidden object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-4 text-[rgba(144,36,53,0.898)]">
                      Serveurs et stockage
                    </h3>
                    <p className="text-gray-600">
                      Serveurs physiques et virtuels, solutions NAS/SAN, stockage cloud et virtualisation
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 hidden md:block">
                <img 
                  src="/partners/serveur.png" 
                  alt="Serveurs et stockage" 
                  className="rounded-2xl object-cover w-full h-[300px]"
                />
              </div>
            </div>

            {/* Bloc 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="/partners/poste.jpg" 
                    alt="Postes de travail" 
                    className="w-full h-[200px] md:hidden object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-4 text-[rgba(144,36,53,0.898)]">
                      Postes de travail et périphériques
                    </h3>
                    <p className="text-gray-600">
                      PC, ordinateurs portables, stations de travail, imprimantes, scanners, projecteurs et écrans haute résolution
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 hidden md:block">
                <img 
                  src="/partners/poste.jpg" 
                  alt="Postes de travail" 
                  className="rounded-2xl object-cover w-full h-[300px]"
                />
              </div>
            </div>

            {/* Bloc 5 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="/partners/souris.jpg" 
                    alt="Composants et accessoires" 
                    className="w-full h-[200px] md:hidden object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-4 text-[rgba(144,36,53,0.898)]">
                      Composants et accessoires
                    </h3>
                    <p className="text-gray-600">
                      Claviers, souris, cartes graphiques, onduleurs, câbles et autres accessoires indispensables
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 hidden md:block">
                <img 
                  src="/partners/souris.jpg" 
                  alt="Composants et accessoires" 
                  className="rounded-2xl object-cover w-full h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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