
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ChatScreen } from './components/ChatScreen';
import { Message, Sender } from './types';
import { geminiService } from './services/geminiService';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there, I'm Pranav. Thanks for stopping by my interactive resume. Feel free to ask me anything about my experience and projects. What's on your mind?",
      sender: Sender.AI,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);
  
  const handleSendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: Sender.User,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const aiResponse = await geminiService.generateReply(text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: Sender.AI,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I couldn't connect to the AI. Please check your API key and try again.",
        sender: Sender.AI,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="relative w-full max-w-lg h-full sm:h-[90vh] sm:max-h-[700px] flex flex-col bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[127px] bg-[#00a884] dark:bg-[#005c4b]"></div>
             <ChatScreen
                messages={messages}
                isLoading={isLoading}
                onSendMessage={handleSendMessage}
                chatRef={chatRef}
            />
        </div>
    </div>
  );
};

export default App;