import { Ticket, AddOn } from '../types';

export const mockTickets: Ticket[] = [
  {
    id: 'ticket-1',
    section: 'Grandstand',
    row: '12',
    seats: '15-16',
    price: 89,
    provider: 'StubHub',
    tag: 'Best Value',
    description: 'Great view of the action without breaking the bank',
    features: ['Good view', 'Covered seating', 'Easy access']
  },
  {
    id: 'ticket-2',
    section: 'Field Box',
    row: '8',
    seats: '3-4',
    price: 245,
    provider: 'SeatGeek',
    tag: 'Our Pick',
    description: 'Premium seats close to the action with excellent sightlines',
    features: ['Premium location', 'Close to field', 'In-seat service available']
  },
  {
    id: 'ticket-3',
    section: 'Bleachers',
    row: '5',
    seats: '22-23',
    price: 65,
    provider: 'BookSeats',
    tag: 'Fan Favorite',
    description: 'Classic Yankee Stadium experience in the heart of the crowd',
    features: ['Authentic atmosphere', 'Rowdy crowd', 'Budget-friendly']
  }
];

export const mockHotels: AddOn[] = [
  {
    id: 'hotel-1',
    type: 'hotel',
    name: 'The Bronx Marriott',
    price: 189,
    distance: '0.8 miles from stadium',
    rating: 4.2,
    description: 'Modern hotel with shuttle service to Yankee Stadium'
  },
  {
    id: 'hotel-2',
    type: 'hotel',
    name: 'Hampton Inn Manhattan',
    price: 229,
    distance: '12 miles from stadium',
    rating: 4.5,
    description: 'Convenient Manhattan location with subway access'
  }
];

export const mockParking: AddOn[] = [
  {
    id: 'parking-1',
    type: 'parking',
    name: 'Yankee Stadium Garage',
    price: 35,
    distance: '2 min walk',
    description: 'Official stadium parking with easy access'
  },
  {
    id: 'parking-2',
    type: 'parking',
    name: 'SpotHero - River Ave',
    price: 25,
    distance: '5 min walk',
    description: 'Secure parking with guaranteed spot'
  }
];

export const examplePrompts = [
  "2 Yankees tickets under $150 this Friday",
  "Best Red Sox vs Yankees seats for the rivalry",
  "Looking for Yankees tickets with parking included",
  "Need 4 tickets to Yankees game + hotel nearby"
];