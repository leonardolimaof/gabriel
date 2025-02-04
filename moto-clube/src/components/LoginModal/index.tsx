import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError(''); // Limpa o erro quando o usuário começa a digitar
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      // Simula um delay de rede
      await new Promise(resolve => setTimeout(resolve, 500));

      // Simula autenticação (substitua por chamada real à API)
      if (formData.email === 'user@teste.com' && formData.password === '123456') {
        setSuccess(true);
        localStorage.setItem('userToken', 'dummy-user-token');
        
        // Aguarda um momento para mostrar a mensagem de sucesso
        setTimeout(() => {
          onClose();
          navigate('/minha-conta');
        }, 1000);
      } else {
        setError('E-mail ou senha inválidos');
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.');
    }
  };

  const handleAdminAccess = () => {
    onClose();
    navigate('/admin/login');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay com blur */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-md p-8 bg-secondary-dark/90 backdrop-blur-md rounded-3xl shadow-2xl border border-primary/20 transform transition-all duration-300 scale-100">
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="Nacionaes LEMC"
            className="mx-auto h-24 w-auto mb-4 drop-shadow-[0_0_15px_rgba(107,70,193,0.3)]"
          />
          <h2 className="text-3xl font-black text-accent tracking-wider">ÁREA DO MEMBRO</h2>
          <p className="text-accent-medium mt-2 tracking-wide">
            Faça login para acessar sua conta
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl mb-6 text-center">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-xl mb-6 text-center">
            Login realizado com sucesso! Redirecionando...
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-accent-strong tracking-wide mb-1">
              E-MAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
              required
              disabled={success}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-bold text-accent-strong tracking-wide mb-1">
              SENHA
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
              required
              disabled={success}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 text-primary focus:ring-primary/50 border-primary/20 rounded transition duration-300"
                disabled={success}
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-accent-medium">
                Lembrar-me
              </label>
            </div>

            <a href="#" className="text-sm text-primary hover:text-primary-strong transition duration-300">
              Esqueceu a senha?
            </a>
          </div>

          <button
            type="submit"
            className={`w-full bg-primary/90 hover:bg-primary text-white py-3 px-6 rounded-2xl text-sm font-bold tracking-wider transition duration-300 transform hover:scale-[1.02] shadow-lg shadow-primary/20 hover:shadow-primary/40 ${
              success ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={success}
          >
            {success ? 'LOGADO COM SUCESSO' : 'ENTRAR'}
          </button>
        </form>

        {/* Botão Admin Discreto */}
        <button
          onClick={handleAdminAccess}
          className="absolute bottom-2 right-2 text-accent-medium/30 hover:text-primary/50 transition-all duration-300 text-xs"
        >
          •
        </button>

        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-accent-medium hover:text-primary transition duration-300"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LoginModal; 