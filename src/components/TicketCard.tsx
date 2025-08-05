import { Ticket } from '../types';
import { MapPin, Star, Check } from 'lucide-react';
import { clsx } from 'clsx';

interface TicketCardProps {
  ticket: Ticket;
  isSelected: boolean;
  onSelect: () => void;
}

export function TicketCard({ ticket, isSelected, onSelect }: TicketCardProps) {
  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Our Pick':
        return 'badge-primary';
      case 'Best Value':
        return 'badge-accent';
      case 'Fan Favorite':
        return 'badge-orange';
      default:
        return 'badge-primary';
    }
  };

  return (
    <div
      className={clsx('ticket-card', isSelected && 'ticket-card-selected')}
      onClick={onSelect}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`badge ${getTagColor(ticket.tag)}`}>
            {ticket.tag === 'Our Pick' && <Star className="w-3 h-3 mr-1" />}
            {ticket.tag}
          </span>
          <span className="text-xs text-gray-500">via {ticket.provider}</span>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-gray-900">${ticket.price}</div>
          <div className="text-xs text-gray-500">per ticket</div>
        </div>
      </div>
      
      <div className="mb-3">
        <div className="flex items-center gap-1 text-sm font-medium text-gray-900 mb-1">
          <MapPin className="w-4 h-4 text-gray-400" />
          {ticket.section} • Row {ticket.row} • Seats {ticket.seats}
        </div>
        <p className="text-sm text-gray-600">{ticket.description}</p>
      </div>
      
      {ticket.features && ticket.features.length > 0 && (
        <div className="space-y-1">
          {ticket.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
              <Check className="w-3 h-3 text-accent-500" />
              {feature}
            </div>
          ))}
        </div>
      )}
      
      {isSelected && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-primary-600 font-medium">
            <Check className="w-4 h-4" />
            Selected
          </div>
        </div>
      )}
    </div>
  );
}