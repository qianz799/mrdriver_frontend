
import React, { useState } from 'react';
import { X, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatBoxProps {
  onClose: () => void;
}

interface Message {
  id: number;
  sender: 'user' | 'admin' | 'system';
  text: string;
  name: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'admin',
      text: 'Please give me your email address in case we disconnect in the middle somehow',
      name: 'Admin'
    },
    {
      id: 2,
      sender: 'user',
      text: 'support@mrdrivers.com.au',
      name: 'support'
    },
    {
      id: 3,
      sender: 'system',
      text: 'Thank you! Please let me know your query',
      name: 'System'
    },
    {
      id: 4,
      sender: 'user',
      text: 'When is the next available booking for airport transfer?',
      name: 'support'
    }
  ]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message
    const newMessage = {
      id: messages.length + 1,
      sender: 'user' as const,
      text: message,
      name: 'You'
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div className="absolute bottom-20 right-0 w-[360px] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-[#A67C52] text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <MessageSquare className="h-5 w-5 mr-2" />
          <h3 className="font-medium">Welcome Back</h3>
        </div>
        <Button variant="ghost" size="icon" className="text-white hover:bg-[#8E6A45]" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4 max-h-[400px]">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`mb-4 ${
              msg.sender === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div className="flex items-start gap-2 mb-1">
              {msg.sender !== 'user' && (
                <div className="w-8 h-8 rounded-full bg-[#A67C52] flex items-center justify-center text-white">
                  {msg.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="flex-1">
                {msg.sender !== 'user' && (
                  <div className="text-[#A67C52] font-bold">{msg.name}:</div>
                )}
                <div 
                  className={`inline-block rounded-lg p-3 max-w-[80%] ${
                    msg.sender === 'user'
                      ? 'bg-[#A67C52] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-[#A67C52] flex items-center justify-center text-white">
                  {msg.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Input Area */}
      <form onSubmit={handleSendMessage} className="border-t p-3 flex">
        <Input
          type="text"
          placeholder="Write Something"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow mr-2"
        />
        <Button type="submit" className="bg-[#A67C52] hover:bg-[#8E6A45]">
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default ChatBox;
