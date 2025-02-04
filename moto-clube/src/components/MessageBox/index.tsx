import { useState, useEffect } from 'react';

interface Message {
  id: string;
  from: string;
  to: string;
  content: string;
  timestamp: string;
  read: boolean;
  fromName: string;
}

interface Contact {
  id: string;
  name: string;
  lastMessage?: string;
  unreadCount: number;
  lastMessageTime?: string;
  status: 'online' | 'offline';
}

interface MessageBoxProps {
  userId: string;
  userType: 'admin' | 'member';
}

// Função para carregar mensagens do localStorage
const loadMessages = (): Message[] => {
  const stored = localStorage.getItem('chat_messages');
  if (stored) {
    return JSON.parse(stored);
  }
  return [];
};

// Função para salvar mensagens no localStorage
const saveMessages = (messages: Message[]) => {
  localStorage.setItem('chat_messages', JSON.stringify(messages));
};

// Função para carregar contatos do localStorage
const loadContacts = (): Contact[] => {
  const stored = localStorage.getItem('chat_contacts');
  if (stored) {
    return JSON.parse(stored);
  }
  return [];
};

// Função para salvar contatos no localStorage
const saveContacts = (contacts: Contact[]) => {
  localStorage.setItem('chat_contacts', JSON.stringify(contacts));
};

const MessageBox = ({ userId, userType }: MessageBoxProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Carrega mensagens e contatos iniciais
  useEffect(() => {
    const storedMessages = loadMessages();
    const storedContacts = loadContacts();

    if (storedMessages.length === 0) {
      // Mensagens iniciais apenas se não houver mensagens salvas
      const initialMessages: Message[] = [
      {
        id: '1',
        from: 'admin',
        fromName: 'Administrador',
        to: 'user1',
        content: 'Olá! Como posso ajudar?',
        timestamp: new Date().toISOString(),
        read: false,
      },
      {
        id: '2',
        from: 'user1',
        fromName: 'João Silva',
        to: 'admin',
        content: 'Preciso de informações sobre o próximo evento.',
        timestamp: new Date().toISOString(),
        read: false,
      },
    ];
      setMessages(initialMessages);
      saveMessages(initialMessages);
    } else {
      setMessages(storedMessages);
    }

    if (storedContacts.length === 0) {
      // Contatos iniciais apenas se não houver contatos salvos
      const initialContacts: Contact[] = [
      {
        id: 'user1',
        name: 'João Silva',
        lastMessage: 'Preciso de informações sobre o próximo evento.',
        unreadCount: 2,
        lastMessageTime: new Date().toISOString(),
        status: 'online',
      },
      {
        id: 'user2',
        name: 'Maria Oliveira',
        lastMessage: 'Obrigada pela ajuda!',
        unreadCount: 0,
        lastMessageTime: new Date(Date.now() - 3600000).toISOString(),
        status: 'offline',
      },
    ];
      setContacts(initialContacts);
      saveContacts(initialContacts);
    } else {
      setContacts(storedContacts);
    }

    // Simula atualização em tempo real
    const interval = setInterval(() => {
      const updatedMessages = loadMessages();
      const updatedContacts = loadContacts();
      
      setMessages(updatedMessages);
      setContacts(updatedContacts);
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval);
  }, []);

  // Atualiza o status de leitura quando uma mensagem é visualizada
  useEffect(() => {
    if (selectedContact) {
      const updatedMessages = messages.map(msg => {
        if (msg.to === userId && msg.from === selectedContact && !msg.read) {
          return { ...msg, read: true };
        }
        return msg;
      });

      setMessages(updatedMessages);
      saveMessages(updatedMessages);

      // Atualiza o contador de mensagens não lidas
      const updatedContacts = contacts.map(contact => {
        if (contact.id === selectedContact) {
          return { ...contact, unreadCount: 0 };
        }
        return contact;
      });

      setContacts(updatedContacts);
      saveContacts(updatedContacts);
    }
  }, [selectedContact, messages, userId, contacts]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedContact) return;

    const message: Message = {
      id: Date.now().toString(),
      from: userId,
      fromName: userType === 'admin' ? 'Administrador' : 'Membro',
      to: selectedContact,
      content: newMessage,
      timestamp: new Date().toISOString(),
      read: false,
    };

    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    saveMessages(updatedMessages);
    setNewMessage('');

    // Atualiza o último status da mensagem no contato
    const updatedContacts = contacts.map(contact =>
        contact.id === selectedContact
          ? {
              ...contact,
              lastMessage: newMessage,
              lastMessageTime: new Date().toISOString(),
            }
          : contact
    );

    setContacts(updatedContacts);
    saveContacts(updatedContacts);
  };

  // Filtra contatos com base na pesquisa
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filtra mensagens do contato selecionado
  const filteredMessages = messages.filter(
    msg => (msg.from === userId && msg.to === selectedContact) ||
           (msg.to === userId && msg.from === selectedContact)
  );

  // Formata o horário da mensagem
  const formatMessageTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString('pt-BR');
    }
  };

  return (
    <div className="bg-secondary-dark/30 backdrop-blur-sm rounded-2xl border border-primary/10 h-[600px] flex">
      {/* Lista de Contatos */}
      <div className="w-1/3 border-r border-primary/10 flex flex-col">
        {/* Barra de Pesquisa */}
        <div className="p-4 border-b border-primary/10">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar contatos..."
            className="w-full px-4 py-2 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
          />
        </div>

        {/* Lista de Contatos */}
        <div className="flex-1 overflow-y-auto">
          {filteredContacts.map(contact => (
            <button
              key={contact.id}
              onClick={() => setSelectedContact(contact.id)}
              className={`w-full text-left p-4 border-b border-primary/10 transition duration-300 ${
                selectedContact === contact.id
                  ? 'bg-primary/20'
                  : 'hover:bg-primary/10'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-accent">{contact.name}</span>
                {contact.lastMessageTime && (
                  <span className="text-xs text-accent-medium">
                    {formatMessageTime(contact.lastMessageTime)}
                  </span>
                )}
              </div>
              {contact.lastMessage && (
                <p className="text-sm text-accent-medium truncate">{contact.lastMessage}</p>
              )}
              <div className="flex items-center justify-between mt-2">
                <span className={`flex items-center text-xs ${
                  contact.status === 'online' ? 'text-green-500' : 'text-accent-medium'
                }`}>
                  <span className={`w-2 h-2 rounded-full mr-1 ${
                    contact.status === 'online' ? 'bg-green-500' : 'bg-accent-medium'
                  }`}></span>
                  {contact.status === 'online' ? 'Online' : 'Offline'}
                </span>
                {contact.unreadCount > 0 && (
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {contact.unreadCount}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Área de Mensagens */}
      <div className="flex-1 flex flex-col">
        {selectedContact ? (
          <>
            {/* Cabeçalho */}
            <div className="p-4 border-b border-primary/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-accent">
                    {contacts.find(c => c.id === selectedContact)?.name}
                  </h3>
                  <span className={`text-xs ${
                    contacts.find(c => c.id === selectedContact)?.status === 'online'
                      ? 'text-green-500'
                      : 'text-accent-medium'
                  }`}>
                    {contacts.find(c => c.id === selectedContact)?.status === 'online'
                      ? 'Online'
                      : 'Offline'}
                  </span>
                </div>
                {userType === 'admin' && (
                  <button className="text-accent-medium hover:text-primary transition duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Mensagens */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {filteredMessages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.from === userId ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-xl ${
                      message.from === userId
                        ? 'bg-primary/20 text-accent'
                        : 'bg-secondary-light/30 text-accent'
                    }`}
                  >
                    <p>{message.content}</p>
                    <div className="flex items-center justify-end mt-1 space-x-2">
                      <span className="text-xs text-accent-medium">
                        {formatMessageTime(message.timestamp)}
                      </span>
                      {message.from === userId && (
                        <span className="text-xs text-accent-medium">
                          {message.read ? '✓✓' : '✓'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input de Mensagem */}
            <div className="p-4 border-t border-primary/10">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-2 bg-secondary-light/30 border border-primary/20 rounded-xl text-accent placeholder-accent-medium/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition duration-300"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-primary/90 hover:bg-primary text-white px-6 py-2 rounded-xl font-bold tracking-wider transition duration-300 transform hover:scale-[1.02] shadow-lg shadow-primary/20 hover:shadow-primary/40"
                >
                  ENVIAR
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-accent-medium">
            Selecione um contato para iniciar uma conversa
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBox; 