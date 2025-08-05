export interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  tickets?: Ticket[];
  addOns?: AddOn[];
}

export interface Ticket {
  id: string;
  section: string;
  row: string;
  seats: string;
  price: number;
  provider: string;
  tag: 'Our Pick' | 'Best Value' | 'Fan Favorite';
  description: string;
  features?: string[];
}

export interface AddOn {
  id: string;
  type: 'hotel' | 'parking' | 'transport';
  name: string;
  price: number;
  distance?: string;
  rating?: number;
  description: string;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  currentStep: 'initial' | 'searching' | 'results' | 'addons' | 'summary';
  selectedTicket?: Ticket;
  selectedAddOns: AddOn[];
  userContext: {
    location?: string;
    isVisiting?: boolean;
    budget?: number;
    groupSize?: number;
  };
}