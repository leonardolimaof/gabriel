import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Limpa o erro quando o usuário começa a digitar
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    try {
      // Simulando um delay de rede
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Verifica as credenciais
      if ((formData.email === 'admin@admin.com' && formData.password === 'admin') ||
          (formData.email === 'admin@teste.com' && formData.password === '123456')) {
        setSuccess(true);
        localStorage.setItem('adminToken', 'dummy-token');
        // Aguarda um momento para mostrar a mensagem de sucesso
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1000);
      } else {
        setError('E-mail ou senha inválidos');
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-secondary-dark/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-primary/20">
          <h1 className="text-4xl font-black text-primary text-center mb-8 tracking-wider">ADMIN LOGIN</h1>
          
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
              <label htmlFor="email" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
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
              <label htmlFor="password" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
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

            <button
              type="submit"
              className={`w-full bg-primary/90 hover:bg-primary text-white py-4 px-6 rounded-2xl text-sm font-bold tracking-wider transition duration-300 transform hover:scale-[1.02] shadow-lg shadow-primary/20 hover:shadow-primary/40 ${
                success ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={success}
            >
              {success ? 'LOGADO COM SUCESSO' : 'ENTRAR'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin; 