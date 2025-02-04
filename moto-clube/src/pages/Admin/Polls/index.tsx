import { useState } from 'react';
import AdminLayout from '../../../components/AdminLayout';

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface Poll {
  id: string;
  title: string;
  description: string;
  eventId?: string;
  eventTitle?: string;
  options: PollOption[];
  totalVotes: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'finished' | 'scheduled';
}

const PollForm = ({
  onClose,
  onSubmit,
  initialData,
  events,
}: {
  onClose: () => void;
  onSubmit: (data: Omit<Poll, 'id' | 'totalVotes' | 'status'>) => void;
  initialData?: Poll;
  events: Array<{ id: string; title: string }>;
}) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    eventId: initialData?.eventId || '',
    startDate: initialData?.startDate || '',
    endDate: initialData?.endDate || '',
    options: initialData?.options.map(opt => ({ text: opt.text })) || [{ text: '' }, { text: '' }],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOptionChange = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      options: prev.options.map((opt, i) => (i === index ? { text: value } : opt)),
    }));
  };

  const addOption = () => {
    setFormData(prev => ({
      ...prev,
      options: [...prev.options, { text: '' }],
    }));
  };

  const removeOption = (index: number) => {
    if (formData.options.length <= 2) return;
    setFormData(prev => ({
      ...prev,
      options: prev.options.filter((_, i) => i !== index),
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
            {initialData ? 'EDITAR ENQUETE' : 'NOVA ENQUETE'}
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

          <div>
            <label htmlFor="eventId" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
              EVENTO RELACIONADO (OPCIONAL)
            </label>
            <select
              id="eventId"
              name="eventId"
              value={formData.eventId}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
            >
              <option value="">Selecione um evento</option>
              {events.map(event => (
                <option key={event.id} value={event.id}>{event.title}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="startDate" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
                DATA DE INÍCIO
              </label>
              <input
                type="datetime-local"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="endDate" className="block text-sm font-bold text-accent-strong tracking-wide mb-2">
                DATA DE TÉRMINO
              </label>
              <input
                type="datetime-local"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-bold text-accent-strong tracking-wide">OPÇÕES</label>
              <button
                type="button"
                onClick={addOption}
                className="text-primary hover:text-primary/80 transition duration-300"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              {formData.options.map((option, index) => (
                <div key={index} className="flex gap-4">
                  <input
                    type="text"
                    value={option.text}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Opção ${index + 1}`}
                    className="flex-1 px-4 py-3 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                    required
                  />
                  {formData.options.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeOption(index)}
                      className="text-red-500 hover:text-red-400 transition duration-300"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
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
              {initialData ? 'SALVAR' : 'CRIAR ENQUETE'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PollResults = ({
  poll,
  onClose,
}: {
  poll: Poll;
  onClose: () => void;
}) => {
  const maxVotes = Math.max(...poll.options.map(opt => opt.votes));

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-secondary-dark/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-primary/20 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-primary tracking-wide">RESULTADOS</h2>
          <button
            onClick={onClose}
            className="text-accent-medium hover:text-accent transition duration-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-accent mb-2">{poll.title}</h3>
            <p className="text-accent-medium">{poll.description}</p>
          </div>

          <div className="space-y-4">
            {poll.options.map((option) => {
              const percentage = poll.totalVotes > 0 ? (option.votes / poll.totalVotes) * 100 : 0;
              const width = maxVotes > 0 ? (option.votes / maxVotes) * 100 : 0;

              return (
                <div key={option.id} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-accent">{option.text}</span>
                    <span className="text-accent-medium">{option.votes} votos ({percentage.toFixed(1)}%)</span>
                  </div>
                  <div className="h-2 bg-secondary-light/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-primary/20">
            <p className="text-accent-medium text-center">
              Total de votos: <span className="font-bold text-accent">{poll.totalVotes}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Polls = () => {
  const [showForm, setShowForm] = useState(false);
  const [showResults, setShowResults] = useState<string | null>(null);
  const [selectedPoll, setSelectedPoll] = useState<Poll | undefined>();
  const [polls] = useState<Poll[]>([
    {
      id: '1',
      title: 'Próximo Destino Internacional',
      description: 'Escolha o destino para nossa próxima viagem internacional.',
      eventId: '1',
      eventTitle: 'Viagem Internacional 2024',
      options: [
        { id: '1', text: 'Chile', votes: 45 },
        { id: '2', text: 'Argentina', votes: 30 },
        { id: '3', text: 'Uruguai', votes: 14 },
      ],
      totalVotes: 89,
      startDate: '2024-03-01T00:00',
      endDate: '2024-03-15T23:59',
      status: 'active',
    },
    // Adicione mais enquetes aqui
  ]);

  const [events] = useState([
    { id: '1', title: 'Viagem Internacional 2024' },
    { id: '2', title: 'Encontro Nacional' },
    // Adicione mais eventos aqui
  ]);

  const handleSubmit = (data: Omit<Poll, 'id' | 'totalVotes' | 'status'>) => {
    console.log('Nova enquete:', data);
    // Aqui você implementará a lógica para salvar a enquete
  };

  const handleEdit = (poll: Poll) => {
    setSelectedPoll(poll);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    console.log('Deletar enquete:', id);
    // Aqui você implementará a lógica para deletar a enquete
  };

  const getStatusColor = (status: Poll['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/10 text-green-500';
      case 'finished':
        return 'bg-gray-500/10 text-gray-500';
      case 'scheduled':
        return 'bg-blue-500/10 text-blue-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  const getStatusText = (status: Poll['status']) => {
    switch (status) {
      case 'active':
        return 'ATIVA';
      case 'finished':
        return 'FINALIZADA';
      case 'scheduled':
        return 'AGENDADA';
      default:
        return status.toUpperCase();
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-black text-accent tracking-wider">ENQUETES</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary/90 hover:bg-primary text-white px-6 py-3 rounded-xl font-bold tracking-wider transition duration-300 transform hover:scale-[1.02] shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            NOVA ENQUETE
          </button>
        </div>

        {/* Polls List */}
        <div className="grid grid-cols-1 gap-6">
          {polls.map((poll) => (
            <div
              key={poll.id}
              className="bg-secondary-dark/30 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">{poll.title}</h3>
                  <p className="text-accent-medium mb-4">{poll.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {poll.eventTitle && (
                      <span className="flex items-center text-accent-medium">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {poll.eventTitle}
                      </span>
                    )}
                    <span className="flex items-center text-accent-medium">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {poll.totalVotes} votos
                    </span>
                    <span className="flex items-center text-accent-medium">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {new Date(poll.endDate).toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider ${getStatusColor(poll.status)}`}>
                    {getStatusText(poll.status)}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowResults(poll.id)}
                      className="text-accent-medium hover:text-primary transition duration-300"
                      title="Ver Resultados"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleEdit(poll)}
                      className="text-accent-medium hover:text-primary transition duration-300"
                      title="Editar"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(poll.id)}
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

      {/* Poll Form Modal */}
      {showForm && (
        <PollForm
          onClose={() => {
            setShowForm(false);
            setSelectedPoll(undefined);
          }}
          onSubmit={handleSubmit}
          initialData={selectedPoll}
          events={events}
        />
      )}

      {/* Results Modal */}
      {showResults && (
        <PollResults
          poll={polls.find(p => p.id === showResults)!}
          onClose={() => setShowResults(null)}
        />
      )}
    </AdminLayout>
  );
};

export default Polls; 