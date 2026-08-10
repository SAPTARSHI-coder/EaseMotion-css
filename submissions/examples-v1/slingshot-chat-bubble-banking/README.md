# Slingshot Chat Bubble — Banking Design

A pure CSS chat bubble component featuring a physics-inspired "slingshot" entrance animation. Tailored for banking, finance, and secure fintech support interfaces with clean alignments, security badges, and robust user/assistant distinct stylings.

## What does this do?
When bubbles load or enter the viewport, they perform an elastic stretch-and-snap motion:
- **Assistant bubbles (left)**: Stretch from the left and snap into position.
- **User bubbles (right)**: Stretch from the right and snap into position.

It transitions dynamically on hover/focus and features full keyboard accessibility and theme configurations (Dark and Light modes).

---

## How is it used?

### 1. Link the Stylesheet
Link `style.css` in your project header:
```html
<link rel="stylesheet" href="style.css">
```

### 2. Markup Blueprint

```html
<div class="ease-slingshot-chat-bubble" aria-label="Customer Support Chat">
  <div class="ease-chat__container">
    
    <!-- Assistant Message -->
    <div class="ease-chat__message ease-chat__message--assistant" tabindex="0">
      <div class="ease-chat__avatar">
        AS
      </div>
      <div class="ease-chat__content">
        <p>Hello! How can I assist you with your account today?</p>
        <span class="ease-chat__timestamp">
          <span class="ease-chat__security-badge">Secure</span>
          &bull; 10:24 AM
        </span>
      </div>
    </div>
    
    <!-- User Message -->
    <div class="ease-chat__message ease-chat__message--user" tabindex="0">
      <div class="ease-chat__content">
        <p>I would like to review my pending check deposit.</p>
        <span class="ease-chat__timestamp">10:25 AM</span>
      </div>
      <div class="ease-chat__avatar">
        ME
      </div>
    </div>
    
  </div>
</div>
```

---

## Why is it useful?
- **Tactile Slingshot Physics**: Pure CSS keyframe animations stretch elements horizontally (`scaleX(1.35)`) and bounce them elastically, creating an organic, premium feel.
- **Fintech Aesthetic**: Designed for high trust, with secure badges, slate-teal color schemes, and sharp-but-soft corporate border-radius profiles.
- **Highly Accessible**:
  - `tabindex="0"` compatible for reading messages sequentially with screen readers.
  - High-visibility focus indicators (`:focus-within`) for keyboard navigators.
  - Respects `@media (prefers-reduced-motion)` by bypassing motion translations and applying a direct fade-in.
- **Zero Dependencies**: Pure HTML and CSS only. No JavaScript runtime overhead.

---

## Customization API (CSS Custom Properties)

Custom variables are declared on the parent block `.ease-slingshot-chat-bubble` and can be overridden inline or in stylesheets:

| Property | Default | Description |
|---|---|---|
| `--ease-chat-duration` | `650ms` | Base transition duration for entrance |
| `--ease-chat-easing` | `cubic-bezier(...)` | Spring-back elastic bezier curve |
| `--ease-chat-stagger` | `180ms` | Delay increment between consecutive messages |
| `--ease-chat-bounce-intensity` | `1.0` | Multiplying scale for rubber-band stretch length |
| `--ease-chat-spacing` | `1rem` | Gap between messages |
| `--ease-chat-radius` | `16px` | Corner radius for chat bubbles |
| `--ease-chat-color-user-bg` | `#0d9488` | Background of user bubble (teal) |
| `--ease-chat-color-user-text` | `#ffffff` | Text color of user bubble |
| `--ease-chat-color-assistant-bg` | `#ffffff` | Background of assistant bubble (white/slate) |
| `--ease-chat-color-assistant-border` | `#e2e8f0` | Border color of assistant bubble |
