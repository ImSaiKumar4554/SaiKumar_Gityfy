import { Ticket, AddOn } from '../types';
import { MapPin, Calendar, Users, CreditCard } from 'lucide-react';

interface BookingSummaryProps {
  ticket: Ticket;
  addOns: AddOn[];
  onBookNow: () => void;
  onModify: () => void;
}

export function BookingSummary({ ticket, addOns, onBookNow, onModify }: BookingSummaryProps) {
  const subtotal = ticket.price + addOns.reduce((sum, addon) => sum + addon.price, 0);
  const fees = Math.round(subtotal * 0.12); // 12% service fees
  const total = subtotal + fees;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Booking Summary</h2>
        <button
          onClick={onModify}
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          Modify
        </button>
      </div>

      {/* Event Info */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="font-medium">Yankees vs Red Sox</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>Yankee Stadium • Friday, March 15, 2024 • 7:05 PM</span>
        </div>
      </div>

      {/* Tickets */}
      <div className="space-y-4 mb-6">
        <div className="border-b border-gray-100 pb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-900">
                {ticket.section} • Row {ticket.row} • Seats {ticket.seats}
              </h3>
              <p className="text-sm text-gray-600">2 tickets via {ticket.provider}</p>
            </div>
            <div className="text-right">
              <span className="font-medium">${ticket.price * 2}</span>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        {addOns.map((addon) => (
          <div key={addon.id} className="flex justify-between items-start border-b border-gray-100 pb-4">
            <div>
              <h3 className="font-medium text-gray-900">{addon.name}</h3>
              <p className="text-sm text-gray-600 capitalize">{addon.type}</p>
            </div>
            <div className="text-right">
              <span className="font-medium">${addon.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Breakdown */}
      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Service fees</span>
          <span>${fees}</span>
        </div>
        <div className="border-t border-gray-200 pt-2 flex justify-between font-bold">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={onBookNow}
          className="w-full bg-primary-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
        >
          <CreditCard className="w-4 h-4" />
          Book Now - ${total}
        </button>
        <p className="text-xs text-gray-500 text-center">
          You'll be redirected to {ticket.provider} to complete your purchase
        </p>
      </div>
    </div>
  );
}