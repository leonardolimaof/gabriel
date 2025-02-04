import AdminLayout from '../../../components/AdminLayout';

const StatCard = ({ title, value, icon }: { title: string; value: string; icon: JSX.Element }) => (
  <div className="bg-secondary-dark/30 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition duration-300">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-accent-medium font-bold tracking-wide">{title}</p>
        <p className="text-3xl font-black text-primary mt-2">{value}</p>
      </div>
      <div className="text-primary/80">{icon}</div>
    </div>
  </div>
);

const RecentEventCard = ({ title, date, participants }: { title: string; date: string; participants: number }) => (
  <div className="bg-secondary-dark/30 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition duration-300">
    <h3 className="text-lg font-bold text-accent mb-2">{title}</h3>
    <div className="flex items-center justify-between text-accent-medium">
      <p className="flex items-center space-x-2">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{date}</span>
      </p>
      <p className="flex items-center space-x-2">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span>{participants} participantes</span>
      </p>
    </div>
  </div>
);

const ActivePollCard = ({ title, totalVotes, endDate }: { title: string; totalVotes: number; endDate: string }) => (
  <div className="bg-secondary-dark/30 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition duration-300">
    <h3 className="text-lg font-bold text-accent mb-2">{title}</h3>
    <div className="flex items-center justify-between text-accent-medium">
      <p className="flex items-center space-x-2">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <span>{totalVotes} votos</span>
      </p>
      <p className="flex items-center space-x-2">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Encerra em {endDate}</span>
      </p>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-black text-accent mb-8 tracking-wider">DASHBOARD</h1>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="TOTAL DE MEMBROS"
              value="156"
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
            <StatCard
              title="EVENTOS ESTE MÊS"
              value="8"
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
            <StatCard
              title="ENQUETES ATIVAS"
              value="3"
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
            />
            <StatCard
              title="NOVOS MEMBROS"
              value="12"
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              }
            />
          </div>
        </div>

        {/* Recent Events */}
        <div>
          <h2 className="text-2xl font-black text-primary mb-6 tracking-wide">EVENTOS RECENTES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RecentEventCard
              title="Encontro Nacional"
              date="15/03/2024"
              participants={85}
            />
            <RecentEventCard
              title="Passeio São Paulo"
              date="02/03/2024"
              participants={42}
            />
            <RecentEventCard
              title="Confraternização"
              date="24/02/2024"
              participants={120}
            />
            <RecentEventCard
              title="Viagem Internacional"
              date="10/02/2024"
              participants={35}
            />
          </div>
        </div>

        {/* Active Polls */}
        <div>
          <h2 className="text-2xl font-black text-primary mb-6 tracking-wide">ENQUETES ATIVAS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ActivePollCard
              title="Próximo Destino Internacional"
              totalVotes={89}
              endDate="3 dias"
            />
            <ActivePollCard
              title="Data da Confraternização"
              totalVotes={134}
              endDate="5 dias"
            />
            <ActivePollCard
              title="Local do Próximo Encontro"
              totalVotes={112}
              endDate="7 dias"
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard; 