import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full border-2 border-[rgb(39,40,91)]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full border-2 border-[rgba(144,36,53,0.898)]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] bg-clip-text text-transparent">
            Contactez-Nous
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-0.5 bg-gradient-to-r from-[rgb(39,40,91)] to-transparent rounded-full"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)]"></div>
            <div className="w-10 h-0.5 bg-gradient-to-l from-[rgb(39,40,91)] to-transparent rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(39,40,91)]/5 to-[rgba(144,36,53,0.898)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="bg-[rgba(39,40,91,0.1)] p-4 rounded-xl group-hover:scale-110 transition-transform duration-500">
                <Mail className="h-7 w-7 text-[rgba(144,36,53,0.898)]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[rgb(39,40,91)] transition-colors">Email</h3>
                <a href="mailto:contact@afri-kcorporationgroupe.com" 
                   className="text-gray-600 hover:text-[rgba(144,36,53,0.898)] transition-colors">
                  contact@afri-kcorporationgroupe.com
                </a>
              </div>
            </div>
          </div>

          {/* Téléphone */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(39,40,91)]/5 to-[rgba(144,36,53,0.898)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="bg-[rgba(39,40,91,0.1)] p-4 rounded-xl group-hover:scale-110 transition-transform duration-500">
                <Phone className="h-7 w-7 text-[rgba(144,36,53,0.898)]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[rgb(39,40,91)] transition-colors">Téléphone</h3>
                <p className="text-gray-600">
                  +221 77 389 57 17 <br />
                  +221 33 820 28 44
                </p>
              </div>
            </div>
          </div>

          {/* Adresse */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(39,40,91)]/5 to-[rgba(144,36,53,0.898)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="bg-[rgba(39,40,91,0.1)] p-4 rounded-xl group-hover:scale-110 transition-transform duration-500">
                <MapPin className="h-7 w-7 text-[rgba(144,36,53,0.898)]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[rgb(39,40,91)] transition-colors">Adresse</h3>
                <p className="text-gray-600">
                  Rue YF403 01 Nord Foire Extension <br />
                  BP 38059 Dakar, Sénégal
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}