import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LoginModal from '../LoginModal';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Verifica se há um usuário ou admin logado
  const isAdminLoggedIn = localStorage.getItem('adminToken') !== null;
  const isUserLoggedIn = localStorage.getItem('userToken') !== null;

  const handleMyAccountClick = () => {
    if (isAdminLoggedIn) {
      navigate('/admin/dashboard');
    } else if (isUserLoggedIn) {
      navigate('/minha-conta');
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLogout = () => {
    if (isAdminLoggedIn) {
      localStorage.removeItem('adminToken');
    } else if (isUserLoggedIn) {
      localStorage.removeItem('userToken');
    }
    navigate('/');
    window.location.reload();
  };

  // Verifica se o usuário está tentando acessar uma rota protegida
  useEffect(() => {
    const protectedRoutes = ['/minha-conta'];
    if (protectedRoutes.includes(location.pathname) && !isUserLoggedIn && !isAdminLoggedIn) {
      setIsLoginModalOpen(true);
    }
  }, [location.pathname, isUserLoggedIn, isAdminLoggedIn]);

  return (
    <>
      <nav className="bg-secondary-dark/90 backdrop-blur-md sticky top-0 z-50 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 transform hover:scale-105 transition duration-300">
                <img
                  className="h-16 w-auto drop-shadow-lg"
                  src="/logo.png"
                  alt="Garbiel Tavares"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link to="/" className="text-accent-medium hover:text-primary px-3 py-2 rounded-xl text-sm font-bold tracking-wider transition duration-300 hover:scale-105 hover:bg-secondary-light">
                  HOME
                </Link>
                <Link to="/about" className="text-accent-medium hover:text-primary px-3 py-2 rounded-xl text-sm font-bold tracking-wider transition duration-300 hover:scale-105 hover:bg-secondary-light">
                  SOBRE NÓS
                </Link>
                <Link to="/gallery" className="text-accent-medium hover:text-primary px-3 py-2 rounded-xl text-sm font-bold tracking-wider transition duration-300 hover:scale-105 hover:bg-secondary-light">
                  GALERIA
                </Link>
                <Link to="/coalition" className="text-accent-medium hover:text-primary px-3 py-2 rounded-xl text-sm font-bold tracking-wider transition duration-300 hover:scale-105 hover:bg-secondary-light">
                  COALIZÃO LE
                </Link>
                <Link to="/contact" className="text-accent-medium hover:text-primary px-3 py-2 rounded-xl text-sm font-bold tracking-wider transition duration-300 hover:scale-105 hover:bg-secondary-light">
                  CONTATO
                </Link>

                {/* Botão de Login/Minha Conta */}
                {isAdminLoggedIn || isUserLoggedIn ? (
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handleMyAccountClick}
                      className="bg-primary/90 hover:bg-primary text-white px-6 py-2.5 rounded-2xl text-sm font-bold tracking-wider transition duration-300 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-primary/40"
                    >
                      MINHA CONTA
                    </button>
                    <button
                      onClick={handleLogout}
                      className="text-accent-medium hover:text-red-500 px-3 py-2 rounded-xl text-sm font-bold tracking-wider transition duration-300"
                    >
                      SAIR
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="bg-primary/90 hover:bg-primary text-white px-8 py-2.5 rounded-2xl text-sm font-bold tracking-wider transition duration-300 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-primary/40"
                  >
                    FAZER LOGIN
                  </button>
                )}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-accent-medium hover:text-primary transition duration-300"
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-accent-medium hover:text-primary block px-3 py-2 rounded-xl text-base font-bold tracking-wider">
                HOME
              </Link>
              <Link to="/about" className="text-accent-medium hover:text-primary block px-3 py-2 rounded-xl text-base font-bold tracking-wider">
                SOBRE NÓS
              </Link>
              <Link to="/gallery" className="text-accent-medium hover:text-primary block px-3 py-2 rounded-xl text-base font-bold tracking-wider">
                GALERIA
              </Link>
              <Link to="/coalition" className="text-accent-medium hover:text-primary block px-3 py-2 rounded-xl text-base font-bold tracking-wider">
                COALIZÃO LE
              </Link>
              <Link to="/contact" className="text-accent-medium hover:text-primary block px-3 py-2 rounded-xl text-base font-bold tracking-wider">
                CONTATO
              </Link>

              {/* Botão de Login/Minha Conta Mobile */}
              {isAdminLoggedIn || isUserLoggedIn ? (
                <div className="space-y-2 pt-2">
                  <button
                    onClick={handleMyAccountClick}
                    className="w-full bg-primary/90 hover:bg-primary text-white px-6 py-2.5 rounded-2xl text-sm font-bold tracking-wider transition duration-300"
                  >
                    MINHA CONTA
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-accent-medium hover:text-red-500 px-3 py-2 rounded-xl text-sm font-bold tracking-wider transition duration-300"
                  >
                    SAIR
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full bg-primary/90 hover:bg-primary text-white px-8 py-2.5 rounded-2xl text-sm font-bold tracking-wider transition duration-300 mt-2"
                >
                  FAZER LOGIN
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Modal de Login */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => {
          setIsLoginModalOpen(false);
          if (!isUserLoggedIn && !isAdminLoggedIn) {
            navigate('/');
          }
        }}
      />
    </>
  );
};

export default Navbar; 