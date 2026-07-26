/* =============================================================
   Collapsible Floating Support Chat Widget Window
   EaseMotion — Vanilla JS Logic
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const fab        = document.getElementById('chat-fab');
  const chatWindow = document.getElementById('chat-window');
  const closeBtn   = document.getElementById('chat-close');
  const chatBody   = document.getElementById('chat-body');
  const inputEl    = document.getElementById('chat-input');
  const sendBtn    = document.getElementById('chat-send');
  const chips      = document.querySelectorAll('.chip');
  const badge      = document.getElementById('fab-badge');
  const typing     = document.getElementById('typing-indicator');

  let isOpen = false;

  // -----------------------------------------------------------
  // TOGGLE OPEN / CLOSE
  // -----------------------------------------------------------
  function openChat() {
    isOpen = true;
    chatWindow.classList.add('is-open');
    chatWindow.setAttribute('aria-hidden', 'false');
    fab.setAttribute('aria-expanded', 'true');
    // Hide unread badge when opened
    badge.classList.add('is-hidden');
    // Focus the input for accessibility
    setTimeout(() => inputEl.focus(), 320);
  }

  function closeChat() {
    isOpen = false;
    chatWindow.classList.remove('is-open');
    chatWindow.setAttribute('aria-hidden', 'true');
    fab.setAttribute('aria-expanded', 'false');
    fab.focus();
  }

  fab.addEventListener('click', () => isOpen ? closeChat() : openChat());
  closeBtn.addEventListener('click', closeChat);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeChat();
  });

  // -----------------------------------------------------------
  // SEND A MESSAGE
  // -----------------------------------------------------------
  function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    // Append user bubble
    appendBubble(trimmed, 'user');
    inputEl.value = '';
    autoResizeInput();

    // Hide chips after first interaction
    document.getElementById('chat-chips').style.display = 'none';

    // Show typing indicator after a short delay
    showTyping();

    // Simulate agent reply
    setTimeout(() => {
      hideTyping();
      const replies = [
        "Thanks for reaching out! Let me look into that for you. 🔍",
        "Great question! I'll connect you with the right resources right away.",
        "Got it! Our documentation covers this in detail — I'll send you a link.",
        "I understand. Let me escalate this to our engineering team!"
      ];
      const reply = replies[Math.floor(Math.random() * replies.length)];
      appendBubble(reply, 'agent');
    }, 2000);
  }

  function appendBubble(text, type) {
    const row = document.createElement('div');
    row.className = `bubble-row bubble-row--${type}`;

    const bubble = document.createElement('div');
    bubble.className = `bubble bubble--${type}`;
    bubble.textContent = text;

    row.appendChild(bubble);
    // Insert before the typing indicator row
    chatBody.insertBefore(row, typing);
    scrollToBottom();
  }

  function showTyping() {
    typing.style.display = 'flex';
    scrollToBottom();
  }

  function hideTyping() {
    typing.style.display = 'none';
  }

  function scrollToBottom() {
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // -----------------------------------------------------------
  // SEND BUTTON & ENTER KEY
  // -----------------------------------------------------------
  sendBtn.addEventListener('click', () => sendMessage(inputEl.value));

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputEl.value);
    }
  });

  // -----------------------------------------------------------
  // AUTO-RESIZE TEXTAREA
  // -----------------------------------------------------------
  function autoResizeInput() {
    inputEl.style.height = 'auto';
    inputEl.style.height = `${inputEl.scrollHeight}px`;
  }

  inputEl.addEventListener('input', autoResizeInput);

  // -----------------------------------------------------------
  // QUICK REPLY CHIPS
  // -----------------------------------------------------------
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      sendMessage(chip.dataset.msg);
    });
  });

  // -----------------------------------------------------------
  // INITIAL STATE
  // -----------------------------------------------------------
  hideTyping(); // typing indicator starts hidden, shown on first reply
  scrollToBottom();
});
