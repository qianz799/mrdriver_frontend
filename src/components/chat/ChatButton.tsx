
import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatBox from './ChatBox';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && <ChatBox onClose={() => setIsOpen(false)} />}
      
      <Button
        onClick={toggleChat}
        className={`h-14 w-14 rounded-full shadow-lg flex items-center justify-center bg-[#A67C52] hover:bg-[#8E6A45] transition-all`}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageSquare className="h-6 w-6 text-white" />}
      </Button>
    </div>
  );
};

export default ChatButton;
