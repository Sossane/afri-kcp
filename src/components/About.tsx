import { Users, Award, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] bg-clip-text text-transparent">
          À Propos de Nous
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-lg leading-relaxed text-gray-600">
            Afri-K Corporation Group est une entreprise innovante avec 8 ans d'expérience dans le secteur des services et technologies de l'information. Spécialisée dans le conseil numérique et l'intégration de solutions informatiques, nous aidons les entreprises publiques et privées à adopter des infrastructures performantes et à réussir leur transformation digitale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16">
          <div className="group space-y-4 relative">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[rgba(39,40,91,0.1)] rounded-lg p-3">
                <Users className="h-6 w-6 text-[rgba(144,36,53,0.898)]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Capital Humain</h3>
            </div>
            <div className="pl-16">
              <p className="text-gray-600 leading-relaxed">
                Notre richesse réside dans notre équipe. Ingénieurs, développeurs et experts spécialisés unissent leurs compétences pour relever vos défis technologiques.
              </p>
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] mt-4 transition-all duration-300"></div>
            </div>
          </div>

          <div className="group space-y-4 relative">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[rgba(39,40,91,0.1)] rounded-lg p-3">
                <Award className="h-6 w-6 text-[rgba(144,36,53,0.898)]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Excellence</h3>
            </div>
            <div className="pl-16">
              <p className="text-gray-600 leading-relaxed">
                Nous nous engageons à fournir des solutions technologiques de pointe qui répondent aux plus hauts standards de qualité, basées sur l'innovation et une vision stratégique.
              </p>
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] mt-4 transition-all duration-300"></div>
            </div>
          </div>

          <div className="group space-y-4 relative">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[rgba(39,40,91,0.1)] rounded-lg p-3">
                <Briefcase className="h-6 w-6 text-[rgba(144,36,53,0.898)]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Expérience</h3>
            </div>
            <div className="pl-16">
              <p className="text-gray-600 leading-relaxed">
                Avec 8 années d'expertise, nous comprenons les besoins uniques de chaque organisation et proposons des solutions adaptées pour un avenir technologique prospère.
              </p>
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] mt-4 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}