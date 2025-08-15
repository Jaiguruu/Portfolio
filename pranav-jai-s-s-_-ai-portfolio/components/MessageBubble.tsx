
import React from 'react';
import type { Message } from '../types';
import { Sender } from '../types';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === Sender.User;
  const bubbleClasses = isUser
    ? 'bg-[#d9fdd3] dark:bg-[#005c4b] self-end'
    : 'bg-white dark:bg-[#202c33] self-start';
  const containerClasses = isUser ? 'justify-end' : 'justify-start';

  if(message.isError) {
      return (
          <div className="flex justify-center">
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-md max-w-md text-sm">
                  <p>{message.text}</p>
              </div>
          </div>
      )
  }

  return (
    <div className={`flex ${containerClasses}`}>
      <div className={`relative px-3 py-2 rounded-lg max-w-sm md:max-w-md shadow-sm text-black dark:text-gray-200 ${bubbleClasses}`}>
        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
        <span className="text-xs text-gray-500 dark:text-gray-400 float-right ml-2 mt-1">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
};
