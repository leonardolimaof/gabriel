import { useState } from 'react';
import AdminLayout from '../../../components/AdminLayout';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  maxParticipants: number;
  currentParticipants: number;
  status: 'upcoming' | 'ongoing' | 'finished' | 'cancelled';
}

interface Participant {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const EventForm = ({
  onClose,
  onSubmit,
  initialData,
}: {
  onClose: () => void;
  onSubmit: (data: Omit<Event, 'id' | 'currentParticipants' | 'status'>) => void;
  initialData?: Event;
}) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    date: initialData?.date || '',
    location: initialData?.location || '',
    maxParticipants: initialData?.maxParticipants || 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'maxParticipants' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-secondary-dark/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-primary/20 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-primary tracking-wide">
            {initialData ? 'EDITAR EVENTO' : 'NOVO EVENTO'}
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
          <div>
            <label htmlFor="title" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
              TÍTULO
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
              DESCRIÇÃO
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300 resize-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
                DATA
              </label>
              <input
                type="datetime-local"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
                LOCAL
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="maxParticipants" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
                LIMITE DE PARTICIPANTES
              </label>
              <input
                type="number"
                id="maxParticipants"
                name="maxParticipants"
                value={formData.maxParticipants}
                onChange={handleChange}
                min="0"
                className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                required
              />
            </div>
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
              {initialData ? 'SALVAR' : 'CRIAR EVENTO'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ParticipantsList = ({
  eventId,
  onClose,
}: {
  eventId: string;
  onClose: () => void;
}) => {
  const [participants] = useState<Participant[]>([
    {
      id: '1',
      name: 'João Silva',
      email: 'joao@email.com',
      phone: '(11) 99999-9999',
    },
    // Adicione mais participantes aqui
  ]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-secondary-dark/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-primary/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-primary tracking-wide">PARTICIPANTES</h2>
          <button
            onClick={onClose}
            className="text-accent-medium hover:text-accent transition duration-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="bg-secondary-dark/30 backdrop-blur-sm rounded-2xl border border-primary/10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/10">
                  <th className="text-left p-4 text-accent-strong font-bold tracking-wide">NOME</th>
                  <th className="text-left p-4 text-accent-strong font-bold tracking-wide">E-MAIL</th>
                  <th className="text-left p-4 text-accent-strong font-bold tracking-wide">TELEFONE</th>
                </tr>
              </thead>
              <tbody>
                {participants.map((participant) => (
                  <tr key={participant.id} className="border-b border-primary/10 hover:bg-primary/5 transition duration-300">
                    <td className="p-4 text-accent">{participant.name}</td>
                    <td className="p-4 text-accent-medium">{participant.email}</td>
                    <td className="p-4 text-accent-medium">{participant.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [showForm, setShowForm] = useState(false);
  const [showParticipants, setShowParticipants] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>();
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: 'Encontro Nacional',
      description: 'Grande encontro anual dos membros do moto clube.',
      date: '2024-03-15T10:00',
      location: 'São Paulo, SP',
      maxParticipants: 100,
      currentParticipants: 85,
      status: 'upcoming',
    },
    // Adicione mais eventos aqui
  ]);

  const handleSubmit = (data: Omit<Event, 'id' | 'currentParticipants' | 'status'>) => {
    console.log('Novo evento:', data);
    // Aqui você implementará a lógica para salvar o evento
  };

  const handleEdit = (event: Event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    console.log('Deletar evento:', id);
    // Aqui você implementará a lógica para deletar o evento
  };

  const getStatusColor = (status: Event['status']) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-500/10 text-blue-500';
      case 'ongoing':
        return 'bg-green-500/10 text-green-500';
      case 'finished':
        return 'bg-gray-500/10 text-gray-500';
      case 'cancelled':
        return 'bg-red-500/10 text-red-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  const getStatusText = (status: Event['status']) => {
    switch (status) {
      case 'upcoming':
        return 'PRÓXIMO';
      case 'ongoing':
        return 'EM ANDAMENTO';
      case 'finished':
        return 'FINALIZADO';
      case 'cancelled':
        return 'CANCELADO';
      default:
        return status.toUpperCase();
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-black text-accent tracking-wider">EVENTOS</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary/90 hover:bg-primary text-white px-6 py-3 rounded-xl font-bold tracking-wider transition duration-300 transform hover:scale-[1.02] shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            NOVO EVENTO
          </button>
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-secondary-dark/30 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">{event.title}</h3>
                  <p className="text-accent-medium mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center text-accent-medium">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(event.date).toLocaleString('pt-BR')}
                    </span>
                    <span className="flex items-center text-accent-medium">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </span>
                    <span className="flex items-center text-accent-medium">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {event.currentParticipants} / {event.maxParticipants}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider ${getStatusColor(event.status)}`}>
                    {getStatusText(event.status)}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowParticipants(event.id)}
                      className="text-accent-medium hover:text-primary transition duration-300"
                      title="Ver Participantes"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleEdit(event)}
                      className="text-accent-medium hover:text-primary transition duration-300"
                      title="Editar"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="text-accent-medium hover:text-red-500 transition duration-300"
                      title="Excluir"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Form Modal */}
      {showForm && (
        <EventForm
          onClose={() => {
            setShowForm(false);
            setSelectedEvent(undefined);
          }}
          onSubmit={handleSubmit}
          initialData={selectedEvent}
        />
      )}

      {/* Participants Modal */}
      {showParticipants && (
        <ParticipantsList
          eventId={showParticipants}
          onClose={() => setShowParticipants(null)}
        />
      )}
    </AdminLayout>
  );
};

export default Events; 