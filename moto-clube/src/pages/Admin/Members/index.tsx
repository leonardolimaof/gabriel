import { useState } from 'react';
import AdminLayout from '../../../components/AdminLayout';

interface Member {
  id: string;
  name: string;
  birthDate: string;
  country: string;
  state: string;
  city: string;
  cpf: string;
  phone: string;
  email: string;
  status: 'active' | 'inactive';
}

const MemberForm = ({
  onClose,
  onSubmit,
  initialData,
}: {
  onClose: () => void;
  onSubmit: (data: Omit<Member, 'id' | 'status'>) => void;
  initialData?: Member;
}) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    birthDate: initialData?.birthDate || '',
    country: initialData?.country || '',
    state: initialData?.state || '',
    city: initialData?.city || '',
    cpf: initialData?.cpf || '',
    phone: initialData?.phone || '',
    email: initialData?.email || '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-secondary-dark/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-primary/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-primary tracking-wide">
            {initialData ? 'EDITAR MEMBRO' : 'NOVO MEMBRO'}
          </h2>
          <button
            onClick={onClose}
            className="text-accent-medium hover:text-accent transition duration-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

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
              <label htmlFor="birthDate" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
                DATA DE NASCIMENTO
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
                PAÍS
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
                ESTADO
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
                CIDADE
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="cpf" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                required
              />
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

            {!initialData && (
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
                  required={!initialData}
                />
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl text-accent-medium hover:text-accent transition duration-300"
            >
              CANCELAR
            </button>
            <button
              type="submit"
              className="bg-primary/90 hover:bg-primary text-white px-6 py-3 rounded-xl font-bold tracking-wider transition duration-300 transform hover:scale-[1.02] shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              {initialData ? 'SALVAR' : 'CADASTRAR'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Members = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | undefined>();
  const [members] = useState<Member[]>([
    {
      id: '1',
      name: 'João Silva',
      birthDate: '1985-03-15',
      country: 'Brasil',
      state: 'SP',
      city: 'São Paulo',
      cpf: '123.456.789-00',
      phone: '(11) 99999-9999',
      email: 'joao@email.com',
      status: 'active',
    },
    // Adicione mais membros aqui
  ]);

  const handleSubmit = (data: Omit<Member, 'id' | 'status'>) => {
    console.log('Novo membro:', data);
    // Aqui você implementará a lógica para salvar o membro
  };

  const handleEdit = (member: Member) => {
    setSelectedMember(member);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    console.log('Deletar membro:', id);
    // Aqui você implementará a lógica para deletar o membro
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-black text-accent tracking-wider">MEMBROS</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary/90 hover:bg-primary text-white px-6 py-3 rounded-xl font-bold tracking-wider transition duration-300 transform hover:scale-[1.02] shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            NOVO MEMBRO
          </button>
        </div>

        {/* Table */}
        <div className="bg-secondary-dark/30 backdrop-blur-sm rounded-2xl border border-primary/10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/10">
                  <th className="text-left p-4 text-accent-strong font-bold tracking-wide">NOME</th>
                  <th className="text-left p-4 text-accent-strong font-bold tracking-wide">E-MAIL</th>
                  <th className="text-left p-4 text-accent-strong font-bold tracking-wide">TELEFONE</th>
                  <th className="text-left p-4 text-accent-strong font-bold tracking-wide">CIDADE</th>
                  <th className="text-left p-4 text-accent-strong font-bold tracking-wide">STATUS</th>
                  <th className="text-right p-4 text-accent-strong font-bold tracking-wide">AÇÕES</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="border-b border-primary/10 hover:bg-primary/5 transition duration-300">
                    <td className="p-4 text-accent">{member.name}</td>
                    <td className="p-4 text-accent-medium">{member.email}</td>
                    <td className="p-4 text-accent-medium">{member.phone}</td>
                    <td className="p-4 text-accent-medium">{member.city}</td>
                    <td className="p-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
                          member.status === 'active'
                            ? 'bg-green-500/10 text-green-500'
                            : 'bg-red-500/10 text-red-500'
                        }`}
                      >
                        {member.status === 'active' ? 'ATIVO' : 'INATIVO'}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => handleEdit(member)}
                        className="text-accent-medium hover:text-primary transition duration-300"
                      >
                        <svg className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(member.id)}
                        className="text-accent-medium hover:text-red-500 transition duration-300"
                      >
                        <svg className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <MemberForm
          onClose={() => {
            setShowForm(false);
            setSelectedMember(undefined);
          }}
          onSubmit={handleSubmit}
          initialData={selectedMember}
        />
      )}
    </AdminLayout>
  );
};

export default Members; 