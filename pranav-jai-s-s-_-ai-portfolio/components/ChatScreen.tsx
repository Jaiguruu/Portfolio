
import React from 'react';
import type { Message } from '../types';
import { MessageBubble } from './MessageBubble';
import { MessageInput } from './MessageInput';

interface ChatScreenProps {
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (text: string) => void;
  chatRef: React.RefObject<HTMLDivElement>;
}

export const ChatScreen: React.FC<ChatScreenProps> = ({ messages, isLoading, onSendMessage, chatRef }) => {
  return (
    <div className="z-10 flex flex-col h-full w-full">
      {/* Header */}
      <header className="flex-shrink-0 flex items-center p-3 bg-[#008069] dark:bg-[#202c33] text-white shadow-md">
        <img
          src={`https://2.gravatar.com/avatar/58c1696a2c978445bed47e98f77156fcadb3c7d5b860ca38704dfe9153a71c05?size=256&d=initials`}
          alt="Pranav Jai S S"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h1 className="text-lg font-medium">Pranav Jai S S</h1>
          <p className="text-sm text-gray-200">{isLoading ? 'typing...' : 'online'}</p>
        </div>
      </header>

      {/* Chat Body */}
      <main ref={chatRef} className="flex-grow p-4 overflow-y-auto bg-[#efeae2] dark:bg-[#0b141a]" style={{ backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')`}}>
        <div className="flex flex-col space-y-2">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-700 text-black dark:text-white p-3 rounded-lg max-w-sm shadow-md animate-pulse">
                <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Message Input */}
      <footer className="flex-shrink-0 p-2 bg-[#f0f2f5] dark:bg-[#202c33] border-t border-gray-200 dark:border-gray-700">
        <MessageInput onSendMessage={onSendMessage} isLoading={isLoading} />
      </footer>
    </div>
  );
};