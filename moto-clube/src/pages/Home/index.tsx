import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants/images';

const SocialIcons = {
  Instagram: () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  Facebook: () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Twitter: () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  ),
  YouTube: () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
};

const FlagImage = ({ src, alt, country }: { src: string; alt: string; country: string }) => (
  <div className="group relative">
    <img 
      src={src} 
      alt={alt} 
      className="h-8 rounded shadow-lg transform transition duration-300 group-hover:scale-110 group-hover:shadow-primary/20" 
    />
    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-accent-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {country}
    </span>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${IMAGES.hero}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-transparent to-secondary" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <img
            src={IMAGES.logo}
            alt="Gabriel Tavares"
            className="w-48 h-48 mb-8 animate-pulse drop-shadow-[0_0_25px_rgba(255,30,30,0.3)]"
          />
          <h1 className="text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient tracking-wider">
            Gabriel Tavares
          </h1>
          <p className="text-2xl mb-12 text-accent-medium font-bold tracking-widest">LIBERDADE • IRMANDADE • RESPEITO</p>
          <div className="flex space-x-8 animate-float">
            <FlagImage src={IMAGES.flags.pt} alt="Portugal" country="PORTUGAL" />
            <FlagImage src={IMAGES.flags.it} alt="Itália" country="ITÁLIA" />
            <FlagImage src={IMAGES.flags.br} alt="Brasil" country="BRASIL" />
            <FlagImage src={IMAGES.flags.us} alt="Estados Unidos" country="EUA" />
            <FlagImage src={IMAGES.flags.cl} alt="Chile" country="CHILE" />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* História */}
          <div className="group bg-secondary-dark/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 transform hover:-translate-y-2 transition duration-500 border border-primary/10 hover:border-primary/30 hover:shadow-primary/20">
            <h2 className="text-2xl font-black mb-4 text-accent group-hover:text-primary transition duration-300 tracking-wide">NOSSA HISTÓRIA</h2>
            <p className="text-accent-medium mb-6 group-hover:text-accent-strong transition duration-300">
              Conheça a história do nosso clube e os valores que nos guiam em nossa jornada.
            </p>
            <Link to="/sobre" className="text-primary/80 group-hover:text-primary font-bold inline-flex items-center transition duration-300 tracking-wide">
              SAIBA MAIS 
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Eventos */}
          <div className="group bg-secondary-dark/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 transform hover:-translate-y-2 transition duration-500 border border-primary/10 hover:border-primary/30 hover:shadow-primary/20">
            <h2 className="text-2xl font-black mb-4 text-accent group-hover:text-primary transition duration-300 tracking-wide">EVENTOS</h2>
            <p className="text-accent-medium mb-6 group-hover:text-accent-strong transition duration-300">
              Participe dos nossos encontros e eventos exclusivos para membros e convidados.
            </p>
            <Link to="/eventos" className="text-primary/80 group-hover:text-primary font-bold inline-flex items-center transition duration-300 tracking-wide">
              VER EVENTOS
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Coalizão */}
          <div className="group bg-secondary-dark/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 transform hover:-translate-y-2 transition duration-500 border border-primary/10 hover:border-primary/30 hover:shadow-primary/20">
            <h2 className="text-2xl font-black mb-4 text-accent group-hover:text-primary transition duration-300 tracking-wide">COALIZÃO LE</h2>
            <p className="text-accent-medium mb-6 group-hover:text-accent-strong transition duration-300">
              Faça parte da nossa comunidade de Law Enforcement e compartilhe experiências.
            </p>
            <Link to="/coalizao" className="text-primary/80 group-hover:text-primary font-bold inline-flex items-center transition duration-300 tracking-wide">
              CONHECER MAIS
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary-dark/90 backdrop-blur-md text-white py-16 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 transform hover:scale-105 transition duration-300">
              <img src={IMAGES.logo} alt="Nacionaes LEMC" className="h-24 drop-shadow-[0_0_15px_rgba(255,30,30,0.3)]" />
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-accent-medium hover:text-primary transform hover:scale-110 transition duration-300">
                <SocialIcons.Instagram />
              </a>
              <a href="#" className="text-accent-medium hover:text-primary transform hover:scale-110 transition duration-300">
                <SocialIcons.Facebook />
              </a>
              <a href="#" className="text-accent-medium hover:text-primary transform hover:scale-110 transition duration-300">
                <SocialIcons.Twitter />
              </a>
              <a href="#" className="text-accent-medium hover:text-primary transform hover:scale-110 transition duration-300">
                <SocialIcons.YouTube />
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-accent-medium font-bold tracking-wider">© 2024 - NACIONAES LAW ENFORCEMENT MOTORCYCLE CLUB</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 