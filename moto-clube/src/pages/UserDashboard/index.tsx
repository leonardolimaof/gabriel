import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageBox from '../../components/MessageBox';

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  memberSince: string;
  status: 'active' | 'pending' | 'inactive';
}

const UserDashboard = () => {
  const navigate = useNavigate();
  const [userInfo] = useState<UserInfo>({
    name: 'João Silva',
    email: 'joao@email.com',
    phone: '(11) 99999-9999',
    city: 'São Paulo',
    state: 'SP',
    memberSince: '2023-01-15',
    status: 'active',
  });

  const [activeTab, setActiveTab] = useState<'overview' | 'events' | 'messages'>('overview');

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/');
  };

  const getStatusColor = (status: UserInfo['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/10 text-green-500';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-500';
      case 'inactive':
        return 'bg-red-500/10 text-red-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  const getStatusText = (status: UserInfo['status']) => {
    switch (status) {
      case 'active':
        return 'ATIVO';
      case 'pending':
        return 'PENDENTE';
      case 'inactive':
        return 'INATIVO';
      default:
        return status.toUpperCase();
    }
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-secondary-dark/50 backdrop-blur-md border-b border-primary/20 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-black text-accent tracking-wider">ÁREA DO MEMBRO</h1>
            <button
              onClick={handleLogout}
              className="text-accent-medium hover:text-red-500 px-3 py-2 rounded-xl text-sm font-bold tracking-wider transition duration-300"
            >
              SAIR
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-sm font-bold tracking-wider transition duration-300 ${
              activeTab === 'overview'
                ? 'bg-primary/20 text-primary'
                : 'text-accent-medium hover:bg-primary/10 hover:text-primary'
            }`}
          >
            VISÃO GERAL
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 rounded-xl text-sm font-bold tracking-wider transition duration-300 ${
              activeTab === 'events'
                ? 'bg-primary/20 text-primary'
                : 'text-accent-medium hover:bg-primary/10 hover:text-primary'
            }`}
          >
            MEUS EVENTOS
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 rounded-xl text-sm font-bold tracking-wider transition duration-300 ${
              activeTab === 'messages'
                ? 'bg-primary/20 text-primary'
                : 'text-accent-medium hover:bg-primary/10 hover:text-primary'
            }`}
          >
            MENSAGENS
          </button>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Informações do Usuário */}
            <div className="bg-secondary-dark/30 backdrop-blur-sm p-6 rounded-2xl border border-primary/10">
              <h2 className="text-xl font-bold text-accent mb-6">INFORMAÇÕES PESSOAIS</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-accent-medium">Nome</p>
                  <p className="text-accent font-bold">{userInfo.name}</p>
                </div>
                <div>
                  <p className="text-sm text-accent-medium">E-mail</p>
                  <p className="text-accent font-bold">{userInfo.email}</p>
                </div>
                <div>
                  <p className="text-sm text-accent-medium">Telefone</p>
                  <p className="text-accent font-bold">{userInfo.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-accent-medium">Cidade/Estado</p>
                  <p className="text-accent font-bold">{userInfo.city}/{userInfo.state}</p>
                </div>
                <div>
                  <p className="text-sm text-accent-medium">Membro desde</p>
                  <p className="text-accent font-bold">
                    {new Date(userInfo.memberSince).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-accent-medium">Status</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider ${getStatusColor(
                      userInfo.status
                    )}`}
                  >
                    {getStatusText(userInfo.status)}
                  </span>
                </div>
              </div>
            </div>

            {/* Próximos Eventos */}
            <div className="bg-secondary-dark/30 backdrop-blur-sm p-6 rounded-2xl border border-primary/10">
              <h2 className="text-xl font-bold text-accent mb-6">PRÓXIMOS EVENTOS</h2>
              <div className="space-y-4">
                <div className="p-4 bg-secondary-light/10 rounded-xl">
                  <h3 className="font-bold text-accent">Encontro Nacional</h3>
                  <p className="text-accent-medium text-sm mt-1">15 de Março, 2024</p>
                  <p className="text-accent-medium text-sm">São Paulo, SP</p>
                </div>
                <div className="p-4 bg-secondary-light/10 rounded-xl">
                  <h3 className="font-bold text-accent">Passeio Internacional</h3>
                  <p className="text-accent-medium text-sm mt-1">22 de Abril, 2024</p>
                  <p className="text-accent-medium text-sm">Santiago, Chile</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="bg-secondary-dark/30 backdrop-blur-sm p-6 rounded-2xl border border-primary/10">
              <h2 className="text-xl font-bold text-accent mb-6">EVENTOS INSCRITOS</h2>
              <div className="space-y-4">
                {/* Lista de eventos aqui */}
                <div className="p-4 bg-secondary-light/10 rounded-xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-accent">Encontro Nacional</h3>
                      <p className="text-accent-medium text-sm mt-1">15 de Março, 2024</p>
                      <p className="text-accent-medium text-sm">São Paulo, SP</p>
                    </div>
                    <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold">
                      CONFIRMADO
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary-dark/30 backdrop-blur-sm p-6 rounded-2xl border border-primary/10">
              <h2 className="text-xl font-bold text-accent mb-6">EVENTOS DISPONÍVEIS</h2>
              <div className="space-y-4">
                {/* Lista de eventos disponíveis aqui */}
                <div className="p-4 bg-secondary-light/10 rounded-xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-accent">Passeio Internacional</h3>
                      <p className="text-accent-medium text-sm mt-1">22 de Abril, 2024</p>
                      <p className="text-accent-medium text-sm">Santiago, Chile</p>
                    </div>
                    <button className="bg-primary/90 hover:bg-primary text-white px-4 py-2 rounded-xl text-sm font-bold tracking-wider transition duration-300">
                      INSCREVER-SE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <MessageBox userId="user1" userType="member" />
        )}
      </main>
    </div>
  );
};

export default UserDashboard; 