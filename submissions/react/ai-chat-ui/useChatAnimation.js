import { useState, useCallback, useRef } from 'react';

/**
 * Custom hook to orchestrate list entry and exit animation cycles in React.
 * Smoothly synchronizes React state updates with EaseMotion CSS transition states.
 * 
 * @param {Array} initialMessages - The initial list of messages
 * @param {number} animationDuration - The duration in ms matching CSS keyframes (default 400ms)
 */
export function useChatAnimation(initialMessages = [], animationDuration = 400) {
  const [messages, setMessages] = useState(() =>
    initialMessages.map(msg => ({
      ...msg,
      animationState: 'idle' // 'entering' | 'idle' | 'leaving'
    }))
  );

  // Keep a ref of current messages to avoid closure issues in timeouts
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  /**
   * Add a new message with an 'entering' state, switching it to 'idle'
   * after the EaseMotion entrance animations finish.
   */
  const addMessage = useCallback((message) => {
    const id = message.id || Date.now().toString() + Math.random().toString(36).substr(2, 5);
    const newMessage = {
      ...message,
      id,
      animationState: 'entering'
    };

    setMessages(prev => [...prev, newMessage]);

    // Schedule status transition from 'entering' -> 'idle'
    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg => (msg.id === id ? { ...msg, animationState: 'idle' } : msg))
      );
    }, animationDuration);

    return id;
  }, [animationDuration]);

  /**
   * Transition a message state to 'leaving', letting the EaseMotion CSS exit animations
   * run, and then unmount it fully from the React state array.
   */
  const removeMessage = useCallback((id) => {
    // Set to leaving state to trigger exit animation classes
    setMessages(prev =>
      prev.map(msg => (msg.id === id ? { ...msg, animationState: 'leaving' } : msg))
    );

    // Schedule deletion from state once animation completes
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => msg.id !== id));
    }, animationDuration);
  }, [animationDuration]);

  /**
   * Smoothly transitions all messages to 'leaving' before fully clearing them.
   */
  const clearMessages = useCallback(() => {
    setMessages(prev => prev.map(msg => ({ ...msg, animationState: 'leaving' })));

    setTimeout(() => {
      setMessages([]);
    }, animationDuration);
  }, [animationDuration]);

  /**
   * Update message content dynamically (e.g., when streaming AI responses).
   */
  const updateMessage = useCallback((id, updates) => {
    setMessages(prev =>
      prev.map(msg => (msg.id === id ? { ...msg, ...updates } : msg))
    );
  }, []);

  return {
    messages,
    addMessage,
    removeMessage,
    clearMessages,
    updateMessage,
    setMessages
  };
}
