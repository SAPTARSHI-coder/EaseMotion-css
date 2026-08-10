# Modern AI Chat Conversation UI

A responsive AI chatbot conversation interface built with pure HTML, CSS, and EaseMotion utility classes.

## What does it do?

This example showcases a modern AI chat interface featuring:

- Distinct AI and user message bubbles
- Animated message entrances
- CSS-only typing indicator
- Assistant online status
- Suggested prompt chips
- Responsive message composer
- Mobile-friendly layout

The example is presentation-only and does not connect to a backend or AI service, keeping the implementation entirely HTML and CSS.

---

## How is it used?

Include the repository-local EaseMotion stylesheet before the component stylesheet:

```html
<link rel="stylesheet" href="../../../easemotion.min.css">
<link rel="stylesheet" href="style.css">
```

Structure the conversation using semantic HTML:

```html
<div
  class="conversation-acu"
  role="log"
  aria-live="polite"
  aria-label="Conversation with the AI assistant"
>
  <div class="message-row-acu message-row-ai-acu">
    <span class="message-avatar-acu" aria-hidden="true">AI</span>

    <div class="message-stack-acu">
      <div class="message-bubble-acu message-bubble-ai-acu">
        <p>Hello! How can I help today?</p>
      </div>
    </div>
  </div>
</div>
```

## Features

- Pure HTML and CSS
- No JavaScript
- Responsive layout
- AI and user conversation bubbles
- CSS-only typing indicator
- Animated message appearance
- Suggested prompt chips
- Message composer UI
- Uses EaseMotion utility classes
- Customizable with CSS variables
- Keyboard accessible
- Supports `prefers-reduced-motion`

---

## Accessibility

- Uses `role="log"` with `aria-live="polite"` for conversation updates.
- Decorative avatars and typing dots are hidden from assistive technologies.
- Includes an accessible typing status label.
- Form controls have associated labels.
- Interactive elements provide visible `:focus-visible` states.
- Includes a skip-to-conversation link.
- Supports `prefers-reduced-motion` to reduce non-essential animations.
- Conversation content remains readable when animations are disabled.

---

## Responsive Behavior

- Desktop displays the introduction beside the chat card.
- Tablet stacks the introduction above the conversation.
- Mobile expands message width and uses a full-width Send button.
- Suggested prompts scroll horizontally on smaller screens.

---
