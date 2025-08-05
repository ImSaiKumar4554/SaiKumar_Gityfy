import { AddOn } from '../types';
import { Hotel, Car, Star, MapPin, Check } from 'lucide-react';
import { clsx } from 'clsx';

interface AddOnCardProps {
  addOn: AddOn;
  isSelected: boolean;
  onToggle: () => void;
}

export function AddOnCard({ addOn, isSelected, onToggle }: AddOnCardProps) {
  const getIcon = () => {
    switch (addOn.type) {
      case 'hotel':
        return <Hotel className="w-4 h-4" />;
      case 'parking':
        return <Car className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  const getTypeLabel = () => {
    switch (addOn.type) {
      case 'hotel':
        return 'Hotel';
      case 'parking':
        return 'Parking';
      case 'transport':
        return 'Transport';
      default:
        return addOn.type;
    }
  };

  return (
    <div
      className={clsx('ticket-card', isSelected && 'ticket-card-selected')}
      onClick={onToggle}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-gray-100 rounded-md text-gray-600">
            {getIcon()}
          </div>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {getTypeLabel()}
          </span>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">${addOn.price}</div>
          {addOn.type === 'hotel' && <div className="text-xs text-gray-500">per night</div>}
        </div>
      </div>
      
      <div className="mb-3">
        <h3 className="font-medium text-gray-900 mb-1">{addOn.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{addOn.description}</p>
        
        <div className="flex items-center gap-4 text-xs text-gray-500">
          {addOn.distance && (
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {addOn.distance}
            </div>
          )}
          {addOn.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              {addOn.rating}
            </div>
          )}
        </div>
      </div>
      
      {isSelected && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-primary-600 font-medium">
            <Check className="w-4 h-4" />
            Added to booking
          </div>
        </div>
      )}
    </div>
  );
}