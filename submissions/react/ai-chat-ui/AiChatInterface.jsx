import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useChatAnimation } from './useChatAnimation';

// Configuration of simulated AI Agent responses
const AI_RESPONSES = [
  {
    keywords: ['stagger', 'delay', 'list'],
    text: "I can stagger message lists easily using EaseMotion! For example, when this message mounts, each paragraph or card has `.ease-delay-100` or `.ease-delay-200` to create a fluid, waterfall entry visual effect."
  },
  {
    keywords: ['bounce', 'button', 'badge'],
    text: "EaseMotion has loop classes such as `.ease-bounce` (for alerts and active badges) and `.ease-btn-hover` for GPU-accelerated lift + glow. Try checking out the Recommended plan card badges in other demos!"
  },
  {
    keywords: ['typing', 'pulse'],
    text: "My typing indicator itself uses `.ease-loader-dots` (which bounces dots with sequential delays) and `.ease-pulse` to create a smooth loader element before unmounting seamlessly when my response compiles."
  },
  {
    keywords: ['hello', 'hi', 'hey'],
    text: "Hello! I am a simulated AI assistant powered by React and EaseMotion CSS. Try asking me about 'stagger delays', 'looping loaders', or 'exit transitions' to see the animations in action!"
  }
];

const DEFAULT_RESPONSE = "That's awesome! Utilizing `useChatAnimation` helps React state updates wait for EaseMotion's CSS animations (such as slide and fade elements) before fully removing items, preventing sudden layout jumps.";

export default function AiChatInterface() {
  const { messages, addMessage, removeMessage, clearMessages } = useChatAnimation([
    { id: '1', sender: 'agent', text: "Hello! 👋 I'm EaseBot, your animation companion. Ask me anything or try out one of the suggestion chips below to see staggered entrance and exit orchestration!" }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);
  const chatMessagesRef = useRef(null);

  // Auto-scroll to bottom with animation safety lock
  const scrollToBottom = useCallback((behavior = 'smooth') => {
    // requestAnimationFrame ensures the DOM has updated and layout calculations are complete
    requestAnimationFrame(() => {
      if (chatBottomRef.current) {
        chatBottomRef.current.scrollIntoView({ behavior, block: 'nearest' });
      }
    });
  }, []);

  // Scroll to bottom when new messages arrive or typing status toggles
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Handle incoming message submit
  const handleSend = useCallback((text) => {
    if (!text.trim() || isTyping) return;

    // 1. Add user message
    addMessage({ sender: 'user', text });
    setInputValue('');

    // 2. Trigger simulated Agent typing response with slight delay
    setIsTyping(true);

    setTimeout(() => {
      // 3. Resolve matching agent response
      const lowerText = text.toLowerCase();
      let matchedText = DEFAULT_RESPONSE;

      for (const response of AI_RESPONSES) {
        if (response.keywords.some(keyword => lowerText.includes(keyword))) {
          matchedText = response.text;
          break;
        }
      }

      setIsTyping(false);
      addMessage({ sender: 'agent', text: matchedText });
    }, 1500); // 1.5s simulated typing delay
  }, [addMessage, isTyping]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleSend(inputValue);
  };

  // Suggestion chips handler
  const handleSuggestionClick = (suggestion) => {
    handleSend(suggestion);
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <header class="chat-header">
        <div class="chat-agent-info">
          <div class="chat-agent-avatar">
            E
            <span class="agent-status-indicator ease-pulse" />
          </div>
          <div>
            <h3 class="chat-agent-title">EaseBot Agent</h3>
            <p class="chat-agent-subtitle">Online • Animation Orchestrator</p>
          </div>
        </div>
        <div class="chat-actions">
          <button 
            onClick={clearMessages} 
            className="ease-btn ease-btn-sm ease-btn-outline ease-hover-grow"
            style={{ borderColor: 'rgba(239, 68, 68, 0.3)', color: '#fca5a5' }}
            title="Clear all messages"
          >
            Clear Conversation
          </button>
        </div>
      </header>

      {/* Messages Feed */}
      <div class="chat-messages" ref={chatMessagesRef}>
        {messages.map((msg) => {
          // Compute dynamic CSS class combinations
          let animClass = '';
          if (msg.animationState === 'entering') {
            animClass = 'ease-slide-up ease-fade-in';
          } else if (msg.animationState === 'leaving') {
            animClass = 'leaving';
          }

          return (
            <div 
              key={msg.id} 
              className={`message-row ${msg.sender} ${animClass}`}
            >
              {/* Message Bubble */}
              <div className="message-bubble">
                {msg.text}
              </div>

              {/* Individual message delete trigger */}
              <button 
                className="delete-msg-btn"
                onClick={() => removeMessage(msg.id)}
                aria-label="Delete message"
              >
                ✕
              </button>
            </div>
          );
        })}

        {/* Loading / Typing Indicator */}
        {isTyping && (
          <div className="message-row agent typing-row ease-slide-up ease-fade-in">
            <div className="typing-bubble">
              <span className="typing-text">EaseBot is thinking</span>
              <div className="ease-loader-dots" aria-label="Loading indicator" aria-busy="true">
                <div className="ease-loader-dot" />
                <div className="ease-loader-dot" />
                <div className="ease-loader-dot" />
              </div>
            </div>
          </div>
        )}

        {/* Scroll anchor */}
        <div ref={chatBottomRef} style={{ float: 'left', clear: 'both' }} />
      </div>

      {/* Suggested Chips & Form Input Footer */}
      <footer class="chat-footer">
        {/* Suggestion Chips */}
        {messages.length <= 1 && !isTyping && (
          <div 
            className="ease-flex ease-flex-wrap ease-justify-center ease-slide-up ease-delay-150"
            style={{ gap: '0.5rem', marginBottom: '1rem' }}
          >
            <button 
              onClick={() => handleSuggestionClick("How do you handle stagger delays?")}
              className="ease-btn ease-btn-sm ease-btn-outline ease-btn-pill ease-hover-grow"
              style={{ color: '#cbd5e1', borderColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              ✨ Stagger Delays
            </button>
            <button 
              onClick={() => handleSuggestionClick("Tell me about looping pulse animations")}
              className="ease-btn ease-btn-sm ease-btn-outline ease-btn-pill ease-hover-grow"
              style={{ color: '#cbd5e1', borderColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              🔄 Looping animations
            </button>
            <button 
              onClick={() => handleSuggestionClick("What is useChatAnimation hook?")}
              className="ease-btn ease-btn-sm ease-btn-outline ease-btn-pill ease-hover-grow"
              style={{ color: '#cbd5e1', borderColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              🛠 React state sync
            </button>
          </div>
        )}

        <form onSubmit={onFormSubmit} className="chat-input-form">
          <div className="chat-input-wrapper">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={isTyping ? "EaseBot is typing..." : "Type a message (e.g. 'stagger', 'pulse', 'hello')..."}
              className="chat-input"
              disabled={isTyping}
              aria-label="Chat input message"
            />
            <button 
              type="submit" 
              className="chat-send-btn" 
              disabled={!inputValue.trim() || isTyping}
              aria-label="Send message"
            >
              ➔
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
}
