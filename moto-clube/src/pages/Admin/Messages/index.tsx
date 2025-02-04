import { useState, useEffect } from 'react';
import MessageBox from '../../../components/MessageBox';
import AdminLayout from '../../../components/AdminLayout';

const AdminMessages = () => {
  const [unreadCount, setUnreadCount] = useState(0);

  // Simula a contagem de mensagens não lidas
  useEffect(() => {
    setUnreadCount(3); // Exemplo: 3 mensagens não lidas
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-black text-accent tracking-wider">MENSAGENS</h1>
          {unreadCount > 0 && (
            <span className="bg-primary/20 text-primary px-4 py-2 rounded-xl text-sm font-bold">
              {unreadCount} mensagens não lidas
            </span>
          )}
        </div>

        <div className="bg-secondary-dark/30 backdrop-blur-sm p-6 rounded-2xl border border-primary/10">
          <MessageBox userId="admin" userType="admin" />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminMessages; 