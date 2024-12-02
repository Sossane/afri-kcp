import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] bg-clip-text text-transparent">
          Contactez-Nous
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[rgba(144,36,53,0.898)] mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contact@afri-kcorporationgroupe.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[rgba(144,36,53,0.898)] mt-1" />
                <div>
                  <h3 className="font-semibold">Téléphone</h3>
                  <p className="text-gray-600">+221 77 389 57 17 <br /> +221 33 820 28 44</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-[rgba(144,36,53,0.898)] mt-1" />
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-gray-600">Rue YF403 01 Nord Foire Extension / BP 38059 <br /> Dakar, Sénégal</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Votre nom"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b70e1b] focus:ring-2 focus:ring-[#b70e1b]/20 outline-none transition-all"
            />
            
            <input 
              type="email" 
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b70e1b] focus:ring-2 focus:ring-[#b70e1b]/20 outline-none transition-all"
            />
            
            <textarea 
              placeholder="Votre message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b70e1b] focus:ring-2 focus:ring-[#b70e1b]/20 outline-none transition-all"
            ></textarea>
            
            <button 
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#b70e1b] to-[#240428] text-white rounded-lg 
                       hover:shadow-lg hover:shadow-[#b70e1b]/20 transition-all hover:scale-105"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}