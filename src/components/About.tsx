import { Users, Award, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] bg-clip-text text-transparent">
          À Propos de Nous
        </h2>
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Afri-K Corporation Group est une entreprise innovante avec 8 ans d’expérience dans le secteur des services et technologies de l’information. Spécialisée dans le conseil numérique et l'intégration de solutions informatiques, nous aidons les entreprises publiques et privées à adopter des infrastructures performantes et à réussir leur transformation digitale. Basés au Sénégal, au cœur de l’Afrique de l’Ouest, nous proposons des solutions sur mesure pour relever les défis numériques d’aujourd’hui et préparer un avenir technologique prospère dans toute la région.          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-[rgba(39,40,91,0.1)] rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Users className="h-8 w-8 text-[rgba(144,36,53,0.898)]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Capital Humain</h3>
            <p className="text-gray-600">
            Notre richesse réside dans notre équipe. Ingénieurs, développeurs et experts spécialisés en cybersécurité, intelligence artificielle, systèmes d’information et transformation digitale unissent leurs compétences pour relever vos défis technologiques. Leur savoir-faire et leur engagement garantissent des solutions personnalisées, conçues pour optimiser vos performances.            </p>
          </div>

          <div className="text-center">
            <div className="bg-[rgba(39,40,91,0.1)] rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Award className="h-8 w-8 text-[rgba(144,36,53,0.898)]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Excellence</h3>
            <p className="text-gray-600">
            Chez Afri-K Corporation Group, nous plaçons l’excellence au cœur de tout ce que nous faisons. Nous nous engageons à fournir des solutions technologiques de pointe qui répondent aux plus hauts standards de qualité. Notre approche repose sur l’innovation, la personnalisation et une vision stratégique, afin d’accompagner nos clients dans leurs défis numériques et de leur offrir un avantage compétitif durable.           </p>
          </div>

          <div className="text-center">
            <div className="bg-[rgba(39,40,91,0.1)] rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Briefcase className="h-8 w-8 text-[rgba(144,36,53,0.898)]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Expérience</h3>
            <p className="text-gray-600">
            Avec 8 années d’expérience, nous avons développé une expertise approfondie dans les services et technologies de l’information. Cette expérience nous permet de comprendre les besoins uniques de chaque organisation, qu’elle soit publique ou privée, et de proposer des solutions adaptées. En collaborant avec des entreprises de divers secteurs, nous avons consolidé notre savoir-faire et affirmé notre position de partenaire de confiance en Afrique de l’Ouest.            </p>
          </div>
        </div>
      </div>
    </section>
  );
}