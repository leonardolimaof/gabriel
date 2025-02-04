import { IMAGES } from '../../constants/images';

const About = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-black text-accent text-center mb-16 tracking-wider">SOBRE NÓS</h1>
        
        <div className="space-y-16">
          {/* História */}
          <div className="bg-secondary-dark/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black text-primary mb-6 tracking-wide">NOSSA HISTÓRIA</h2>
                <p className="text-accent-medium mb-4 text-lg">
                  O Nacionaes Law Enforcement Motorcycle Club é uma irmandade dedicada a reunir profissionais
                  da área de segurança pública que compartilham a paixão pelo motociclismo.
                </p>
                <p className="text-accent-medium text-lg">
                  Fundado com base nos princípios de Liberdade, Irmandade e Respeito, nosso clube tem como
                  missão fortalecer os laços entre os profissionais de segurança e promover a camaradagem
                  através do motociclismo.
                </p>
              </div>
              <div className="relative group">
                <img 
                  src={IMAGES.about.history} 
                  alt="Nossa História" 
                  className="rounded-2xl shadow-xl transform transition duration-500 group-hover:scale-[1.02] group-hover:shadow-primary/20"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </div>
          </div>

          {/* Valores */}
          <div className="bg-secondary-dark/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative group">
                <img 
                  src={IMAGES.about.values} 
                  alt="Nossos Valores" 
                  className="rounded-2xl shadow-xl transform transition duration-500 group-hover:scale-[1.02] group-hover:shadow-primary/20"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-black text-primary mb-6 tracking-wide">NOSSOS VALORES</h2>
                <ul className="space-y-4">
                  <li className="flex items-center group">
                    <span className="h-3 w-3 bg-primary rounded-full mr-3 transform transition duration-300 group-hover:scale-150"></span>
                    <span className="text-accent-medium text-lg group-hover:text-accent transition duration-300">Liberdade</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="h-3 w-3 bg-primary rounded-full mr-3 transform transition duration-300 group-hover:scale-150"></span>
                    <span className="text-accent-medium text-lg group-hover:text-accent transition duration-300">Irmandade</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="h-3 w-3 bg-primary rounded-full mr-3 transform transition duration-300 group-hover:scale-150"></span>
                    <span className="text-accent-medium text-lg group-hover:text-accent transition duration-300">Respeito</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="h-3 w-3 bg-primary rounded-full mr-3 transform transition duration-300 group-hover:scale-150"></span>
                    <span className="text-accent-medium text-lg group-hover:text-accent transition duration-300">Profissionalismo</span>
                  </li>
                  <li className="flex items-center group">
                    <span className="h-3 w-3 bg-primary rounded-full mr-3 transform transition duration-300 group-hover:scale-150"></span>
                    <span className="text-accent-medium text-lg group-hover:text-accent transition duration-300">Integridade</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 