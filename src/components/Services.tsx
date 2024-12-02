import { Lightbulb, Settings, Wrench, GraduationCap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Lightbulb className="h-10 w-10 text-[rgba(144,36,53,0.898)] group-hover:rotate-[15deg] transition-transform duration-500" />,
      title: "Consulting & Conseil",
      description: "Accompagnement stratégique pour optimiser votre infrastructure IT et vos processus numériques."
    },
    {
      icon: <Settings className="h-10 w-10 text-[rgba(144,36,53,0.898)] group-hover:rotate-[30deg] transition-transform duration-500" />,
      title: "Gestion Infrastructure IT",
      description: "Supervision et maintenance proactive de vos systèmes informatiques et réseaux."
    },
    {
      icon: <Wrench className="h-10 w-10 text-[rgba(144,36,53,0.898)] group-hover:-rotate-[25deg] transition-transform duration-500" />,
      title: "Maintenance & Support",
      description: "Support technique réactif et maintenance préventive de vos équipements."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-[rgba(144,36,53,0.898)] group-hover:rotate-[20deg] transition-transform duration-500" />,
      title: "Formation",
      description: "Programmes de formation personnalisés pour vos équipes sur les outils et technologies."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)]">
              Nos Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour accompagner votre transformation numérique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl bg-white p-8 
                        shadow-lg hover:shadow-xl border border-gray-100 
                        transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-[rgba(39,40,91,0.1)] 
                            opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500" />
              <div className="relative">
                <div className="mb-8 inline-block rounded-2xl bg-[rgba(39,40,91,0.1)] p-4 
                              group-hover:bg-[rgba(39,40,91,0.15)] transition-all duration-500 
                              group-hover:scale-110 transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[rgb(39,40,91)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
