# Plumb.ai - Chat-First Event Tickets MVP

## 🎯 Product Overview

Plumb.ai is a chat-first, AI-powered assistant that helps users discover, compare, and book event tickets across providers — with intelligent add-ons like hotels, parking, and flights.

**"What ChatGPT is to answers, Plumb.ai is to event tickets."**

## ✨ Features Implemented

### 🎪 MVP Screens (5 Total)
1. **Welcome Screen** - Example prompts and chat introduction
2. **Live Conversation** - Natural chat with AI assistant
3. **Ticket Results** - Smart cards with "Our Pick", "Best Value", "Fan Favorite"
4. **Add-on Suggestions** - Hotel/parking bundling for travelers
5. **Booking Summary** - Final selection with pricing breakdown

### 💬 Core Experience
- **Chat-first interface** - No buttons or filters, just natural conversation
- **Smart recommendations** - AI explains why tickets are suggested
- **Context-aware bundling** - Hotels offered for out-of-town users
- **Mobile-first design** - Responsive, lightweight interface

### 🎫 Demo Scenario: Yankees vs Red Sox
- Simulated ticket inventory across multiple providers (StubHub, SeatGeek, BookSeats)
- Dynamic pricing and seating options
- Intelligent add-on suggestions based on user context

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser at http://localhost:3000
```

### Build for Production
```bash
npm run build
npm run preview
```

## 🧭 User Journey Flow

1. **User arrives** → Sees example prompts
2. **Natural input** → "2 Yankees tickets under $150 this Friday"
3. **AI searches** → Shows thinking indicator
4. **Results displayed** → 3 ticket cards with recommendation tags
5. **User selects** → Clicks preferred ticket
6. **Add-ons offered** → Hotels (if traveling) + Parking
7. **Booking summary** → Final pricing with provider hand-off

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#3b82f6` - CTAs, selections, branding
- **Accent Green**: `#10b981` - Success states, "Best Value" tags
- **Orange**: `#f97316` - "Fan Favorite" highlights
- **Grays**: Clean, minimal interface

### Typography
- **Font**: Inter (clean, modern, highly legible)
- **Hierarchy**: Bold headers, medium body, light metadata

### Components
- **Chat Bubbles**: Rounded, conversational feel
- **Ticket Cards**: Clean cards with hover states
- **Badges**: Color-coded recommendation tags
- **Mobile-first**: Responsive design principles

## 🛠️ Technical Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite (fast development)
- **Styling**: Tailwind CSS (utility-first)
- **Icons**: Lucide React (consistent iconography)
- **State**: React hooks (useState, useEffect)

## 📱 Mobile Experience

The app is built mobile-first with:
- Touch-friendly tap targets
- Responsive chat bubbles
- Sticky input bar
- Smooth scrolling
- Auto-expanding text areas

## 🎭 Simulated Features

Since this is an MVP prototype:
- **Ticket data**: Mock Yankees vs Red Sox inventory
- **AI responses**: Predefined conversational flows
- **Provider integration**: Simulated StubHub/SeatGeek handoff
- **Payment flow**: Demo booking confirmation

## 🚦 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ChatBubble.tsx   # Individual message display
│   ├── TicketCard.tsx   # Ticket option cards
│   ├── AddOnCard.tsx    # Hotel/parking cards
│   ├── ChatInput.tsx    # Message input field
│   ├── BookingSummary.tsx # Final booking details
│   └── ...
├── data/
│   └── mockData.ts      # Simulated ticket/hotel data
├── types.ts             # TypeScript interfaces
├── App.tsx              # Main application logic
└── main.tsx             # React entry point
```

## 🎯 Next Steps for Full Product

1. **Backend Integration**
   - Real provider APIs (StubHub, SeatGeek, etc.)
   - Live event data feeds
   - User authentication

2. **Enhanced AI**
   - Natural language processing
   - Intent recognition
   - Personalization

3. **Advanced Features**
   - Calendar integration
   - Group booking
   - Accessibility features
   - Multi-language support

## 🎪 Demo Instructions

Try these example conversations:
- "2 Yankees tickets under $150 this Friday"
- "Best Red Sox vs Yankees seats for the rivalry"
- "Need 4 tickets to Yankees game + hotel nearby"
- "Looking for Yankees tickets with parking included"

The AI will guide you through ticket selection, add-on bundling, and booking summary.

---

**Built with ❤️ for the future of event ticket booking**