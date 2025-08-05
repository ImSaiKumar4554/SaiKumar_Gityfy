import { useState, useEffect, useRef } from 'react';
import { ChatState, Message, Ticket, AddOn } from './types';
import { mockTickets, mockHotels, mockParking } from './data/mockData';
import { ChatBubble } from './components/ChatBubble';
import { ChatInput } from './components/ChatInput';
import { ExamplePrompts } from './components/ExamplePrompts';
import { TypingIndicator } from './components/TypingIndicator';
import { BookingSummary } from './components/BookingSummary';
import { Sparkles } from 'lucide-react';

function App() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isTyping: false,
    currentStep: 'initial',
    selectedAddOns: [],
    userContext: {}
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages, chatState.isTyping]);

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date()
    };
    
    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  };

  const simulateAIResponse = async (userMessage: string) => {
    setChatState(prev => ({ ...prev, isTyping: true }));
    
    // Simulate thinking time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const lowerMessage = userMessage.toLowerCase();
    
    // Determine response based on user input
    if (chatState.currentStep === 'initial' || chatState.currentStep === 'searching') {
      // First interaction - show tickets
      let responseText = "Perfect! I found some great Yankees vs Red Sox tickets for you. Here are my top recommendations:";
      
      if (lowerMessage.includes('under') || lowerMessage.includes('budget') || lowerMessage.includes('cheap')) {
        responseText = "Great! I found some budget-friendly options for Yankees vs Red Sox. Here are the best deals:";
      } else if (lowerMessage.includes('premium') || lowerMessage.includes('vip') || lowerMessage.includes('best')) {
        responseText = "Excellent choice! Here are the premium Yankees vs Red Sox options:";
      }

      addMessage({
        type: 'ai',
        content: responseText,
        tickets: mockTickets
      });

      setChatState(prev => ({ 
        ...prev, 
        isTyping: false, 
        currentStep: 'results',
        userContext: {
          ...prev.userContext,
          isVisiting: lowerMessage.includes('visiting') || lowerMessage.includes('hotel') || lowerMessage.includes('flying')
        }
      }));
      
    } else if (chatState.currentStep === 'results' && chatState.selectedTicket) {
      // After ticket selection - suggest add-ons
      const isVisiting = chatState.userContext.isVisiting || lowerMessage.includes('hotel') || lowerMessage.includes('out of town');
      
      let addOns: AddOn[] = [];
      let responseText = "";
      
      if (isVisiting) {
        addOns = [...mockHotels, ...mockParking];
        responseText = "Great choice! Since you're visiting, I can help you with hotels and parking. Would you like to add any of these?";
      } else {
        addOns = mockParking;
        responseText = "Awesome! Would you like to add parking to make your game day easier?";
      }

      addMessage({
        type: 'ai',
        content: responseText,
        addOns: addOns
      });

      setChatState(prev => ({ 
        ...prev, 
        isTyping: false, 
        currentStep: 'addons' 
      }));
      
    } else if (chatState.currentStep === 'addons') {
      // Move to summary
      addMessage({
        type: 'ai',
        content: "Perfect! Here's your complete booking summary. Everything looks good to go!"
      });

      setChatState(prev => ({ 
        ...prev, 
        isTyping: false, 
        currentStep: 'summary' 
      }));
    }
  };

  const handleSendMessage = async (message: string) => {
    addMessage({ type: 'user', content: message });
    await simulateAIResponse(message);
  };

  const handleTicketSelect = (ticketId: string) => {
    const ticket = mockTickets.find(t => t.id === ticketId);
    if (ticket) {
      setChatState(prev => ({ 
        ...prev, 
        selectedTicket: ticket 
      }));
      
      // Auto-trigger add-ons flow
      setTimeout(() => {
        simulateAIResponse("Selected ticket");
      }, 500);
    }
  };

  const handleAddOnToggle = (addOnId: string) => {
    setChatState(prev => ({
      ...prev,
      selectedAddOns: prev.selectedAddOns.some(a => a.id === addOnId)
        ? prev.selectedAddOns.filter(a => a.id !== addOnId)
        : [...prev.selectedAddOns, ...mockHotels, ...mockParking].find(a => a.id === addOnId)
          ? [...prev.selectedAddOns, [...mockHotels, ...mockParking].find(a => a.id === addOnId)!]
          : prev.selectedAddOns
    }));
  };

  const handleBookNow = () => {
    addMessage({
      type: 'ai',
      content: "🎉 Booking confirmed! You'll be redirected to complete your purchase. Thanks for using Plumb.ai!"
    });
  };

  const handleModifyBooking = () => {
    setChatState(prev => ({ 
      ...prev, 
      currentStep: 'results',
      selectedTicket: undefined,
      selectedAddOns: []
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Plumb.ai</h1>
          </div>
          <div className="text-sm text-gray-500">
            Chat-first event tickets
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 flex flex-col">
        {/* Messages */}
        <div className="flex-1 space-y-4 mb-6">
          {chatState.messages.length === 0 ? (
            <div className="text-center py-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  What can I help you find?
                </h2>
                <p className="text-gray-600">
                  Just tell me what event tickets you're looking for, and I'll find the best options for you.
                </p>
              </div>
              <ExamplePrompts onSelectPrompt={handleSendMessage} />
            </div>
          ) : (
            <>
              {chatState.messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  message={message}
                  onTicketSelect={handleTicketSelect}
                  onAddOnToggle={handleAddOnToggle}
                  selectedTicketId={chatState.selectedTicket?.id}
                  selectedAddOnIds={chatState.selectedAddOns.map(a => a.id)}
                />
              ))}
              
              {chatState.isTyping && <TypingIndicator />}
              
              {chatState.currentStep === 'summary' && chatState.selectedTicket && (
                <div className="mt-6">
                  <BookingSummary
                    ticket={chatState.selectedTicket}
                    addOns={chatState.selectedAddOns}
                    onBookNow={handleBookNow}
                    onModify={handleModifyBooking}
                  />
                </div>
              )}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="sticky bottom-0 bg-gray-50 pt-4">
          <ChatInput
            onSendMessage={handleSendMessage}
            isDisabled={chatState.isTyping}
            placeholder={
              chatState.currentStep === 'summary' 
                ? "Anything else I can help you with?" 
                : "Tell me what tickets you're looking for..."
            }
          />
        </div>
      </main>
    </div>
  );
}

export default App;