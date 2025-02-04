const BenefitCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-secondary-dark/30 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition duration-300 group">
    <h3 className="text-xl font-black mb-4 text-accent group-hover:text-primary transition duration-300">{title}</h3>
    <p className="text-accent-medium group-hover:text-accent-strong transition duration-300">
      {description}
    </p>
  </div>
);

const ProfessionItem = ({ profession }: { profession: string }) => (
  <li className="flex items-center space-x-3 group">
    <span className="h-2 w-2 bg-primary rounded-full transform transition duration-300 group-hover:scale-150" />
    <span className="text-accent-medium group-hover:text-accent transition duration-300">{profession}</span>
  </li>
);

const Coalition = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-black text-accent text-center mb-16 tracking-wider">COALIZÃO LE</h1>
        
        <div className="space-y-16">
          {/* O que é */}
          <div className="bg-secondary-dark/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-primary/20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-black text-primary mb-6 tracking-wide">O QUE É A COALIZÃO LE?</h2>
              <p className="text-accent-medium text-lg mb-6">
                A Coalizão Law Enforcement (LE) é uma aliança entre profissionais da área de segurança
                pública que compartilham valores e princípios comuns. Nossa missão é fortalecer os laços
                entre diferentes instituições e promover a união da categoria.
              </p>

              <h2 className="text-3xl font-black text-primary mb-6 tracking-wide">QUEM PODE PARTICIPAR?</h2>
              <ul className="space-y-4 mb-8 ml-4">
                <ProfessionItem profession="Policiais Militares" />
                <ProfessionItem profession="Policiais Civis" />
                <ProfessionItem profession="Policiais Federais" />
                <ProfessionItem profession="Policiais Rodoviários Federais" />
                <ProfessionItem profession="Guardas Municipais" />
                <ProfessionItem profession="Agentes Penitenciários" />
                <ProfessionItem profession="Bombeiros Militares" />
              </ul>
            </div>
          </div>

          {/* Benefícios */}
          <div>
            <h2 className="text-3xl font-black text-primary mb-8 tracking-wide text-center">BENEFÍCIOS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BenefitCard
                title="NETWORKING"
                description="Conecte-se com profissionais de diferentes instituições e amplie sua rede de contatos."
              />
              <BenefitCard
                title="EVENTOS EXCLUSIVOS"
                description="Participe de encontros, passeios e eventos organizados exclusivamente para membros."
              />
              <BenefitCard
                title="TROCA DE EXPERIÊNCIAS"
                description="Compartilhe conhecimentos e experiências com profissionais de diferentes áreas."
              />
              <BenefitCard
                title="SUPORTE MÚTUO"
                description="Faça parte de uma comunidade que se apoia e se fortalece mutuamente."
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center border border-primary/30">
            <h2 className="text-3xl font-black text-primary mb-4 tracking-wide">JUNTE-SE A NÓS</h2>
            <p className="text-accent-medium text-lg mb-6">
              Faça parte desta irmandade única e fortaleça os laços entre profissionais da segurança pública.
            </p>
            <button className="bg-primary/90 hover:bg-primary text-white px-8 py-3 rounded-2xl text-lg font-bold tracking-wider transition duration-300 transform hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-primary/40">
              SOLICITAR PARTICIPAÇÃO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coalition; 