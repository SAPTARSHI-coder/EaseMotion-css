# Animated Chat Message Component

A modern, responsive messaging interface component built entirely with **pure HTML and CSS**. It supports staggered slide-in conversation threads, active bouncing typing indicators, double-read checkmark structures, and rounded incoming/outgoing bubble layouts.

---

## 1. What does this do?

The **Animated Chat Message** simulates a real-time messaging thread to showcase customer support interfaces, team dashboard chat boxes, or AI landing page mockups:

- **Conversation Stagger**: Messages fade and slide in chronologically on load (using a CSS variable multiplication delay).
- **Responsive Bubble Alignments**: Automatic flex rules position incoming messages to the left (incorporating avatars) and outgoing messages to the right.
- **Typing Indicator**: Displays an active status bubble containing three dots bouncing sequentially to indicate a typing participant.
- **Interactive Lifts**: Chat bubbles respond to mouse hovers by lifting slightly and casting deeper shadows.
- **100% JS-Free**: All staggered transitions and bouncing loops run entirely via CSS keyframes and variables.

---

## 2. How is it used?

### File Setup

Link `style.css` in the head of your document and copy the markup template:

```html
<link rel="stylesheet" href="style.css" />
```

### HTML Structure

Structure messages inside a window frame using incoming (`.ease-chat-incoming`) and outgoing (`.ease-chat-outgoing`) row modifiers. Set the load order delay using `--message-delay`:

```html
<div class="ease-chat-window">
  <!-- Header -->
  <header class="ease-chat-header">...</header>

  <!-- Body Container -->
  <div class="ease-chat-body">
    <!-- Incoming Message (Sarah Connor, delay 1) -->
    <div class="ease-chat-row ease-chat-incoming" style="--message-delay: 1;">
      <svg class="ease-chat-message-avatar">...</svg>
      <div class="ease-chat-bubble-group">
        <span class="ease-chat-sender">Sarah Connor</span>
        <div class="ease-chat-bubble">Is the new package ready to push?</div>
        <div class="ease-chat-meta">10:42 AM</div>
      </div>
    </div>

    <!-- Outgoing Message (Self, delay 2) -->
    <div class="ease-chat-row ease-chat-outgoing" style="--message-delay: 2;">
      <div class="ease-chat-bubble-group">
        <div class="ease-chat-bubble">Yes! Ready to go.</div>
        <div class="ease-chat-meta">
          <span>10:43 AM</span>
          <svg class="status-check-svg read-status">...</svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer input -->
  <footer class="ease-chat-footer">...</footer>
</div>
```

### Sizing and Override Variables

Customize primary backgrounds, glow strengths, and message widths by overriding custom properties:

```css
.my-custom-chat {
  --chat-primary: #8b5cf6; /* Custom purple accent */
  --chat-bg-incoming: rgba(0, 0, 0, 0.3); /* Transparent dark backdrop */
  --chat-read-color: #06b6d4; /* Custom blue status */
}
```

---

## 3. Why is it useful?

- **Zero JavaScript Runtime**: Messaging bubbles usually rely on layout scripts to inject components and delays. This pure CSS component has no script footprints, eliminating parser blocks.
- **Visual Micro-Interactions**: The hover lift effects on bubbles, combined with smooth chronological fade-ins, make the chat feel active and organic.
- **Mobile Responsive**: Flex structures and max-width percentages align bubbles fluidly across smaller device viewports.
- **Accessibility Fallback**: Supports the `prefers-reduced-motion: reduce` query. For users with motion sensitivities, slide-ins and continuous typing bounces are disabled, loading the message threads instantly.
