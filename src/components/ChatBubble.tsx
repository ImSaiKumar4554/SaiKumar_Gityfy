import { Message } from '../types';
import { User, Bot } from 'lucide-react';
import { TicketCard } from './TicketCard';
import { AddOnCard } from './AddOnCard';

interface ChatBubbleProps {
  message: Message;
  onTicketSelect?: (ticketId: string) => void;
  onAddOnToggle?: (addOnId: string) => void;
  selectedTicketId?: string;
  selectedAddOnIds?: string[];
}

export function ChatBubble({ 
  message, 
  onTicketSelect, 
  onAddOnToggle, 
  selectedTicketId, 
  selectedAddOnIds = [] 
}: ChatBubbleProps) {
  return (
    <div className={`flex items-start gap-3 mb-6 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        message.type === 'user' ? 'bg-primary-500' : 'bg-gray-200'
      }`}>
        {message.type === 'user' ? (
          <User className="w-4 h-4 text-white" />
        ) : (
          <Bot className="w-4 h-4 text-gray-600" />
        )}
      </div>
      
      <div className="flex-1 max-w-lg">
        <div className={`chat-bubble ${message.type === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}`}>
          <p className="whitespace-pre-wrap">{message.content}</p>
        </div>
        
        {message.tickets && message.tickets.length > 0 && (
          <div className="mt-4 space-y-3">
            {message.tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                isSelected={selectedTicketId === ticket.id}
                onSelect={() => onTicketSelect?.(ticket.id)}
              />
            ))}
          </div>
        )}
        
        {message.addOns && message.addOns.length > 0 && (
          <div className="mt-4 space-y-3">
            {message.addOns.map((addOn) => (
              <AddOnCard
                key={addOn.id}
                addOn={addOn}
                isSelected={selectedAddOnIds.includes(addOn.id)}
                onToggle={() => onAddOnToggle?.(addOn.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}