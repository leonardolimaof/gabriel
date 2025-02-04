import { useState } from 'react';

const ContactIcon = ({ icon, text }: { icon: JSX.Element; text: string }) => (
  <div className="flex items-center group">
    <div className="text-primary group-hover:text-accent transition duration-300">
      {icon}
    </div>
    <span className="ml-3 text-accent-medium group-hover:text-accent transition duration-300">{text}</span>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-black text-accent text-center mb-16 tracking-wider">CONTATO</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary-dark/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
                    NOME COMPLETO
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                    required
                  />
                </div>

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
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
                  TELEFONE
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
                  MENSAGEM
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary/90 hover:bg-primary text-white py-4 px-6 rounded-2xl text-sm font-bold tracking-wider transition duration-300 transform hover:scale-[1.02] shadow-lg shadow-primary/20 hover:shadow-primary/40"
              >
                ENVIAR MENSAGEM
              </button>
            </form>

            <div className="mt-12 pt-12 border-t border-primary/20">
              <h2 className="text-2xl font-black text-primary mb-8 tracking-wide">OUTRAS FORMAS DE CONTATO</h2>
              <div className="space-y-6">
                <ContactIcon
                  icon={
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  text="contato@nacionaeslemc.com.br"
                />
                <ContactIcon
                  icon={
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                  text="(11) 99999-9999"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 