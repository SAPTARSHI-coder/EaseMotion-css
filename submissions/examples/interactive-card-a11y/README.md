# Accessible Interactive Card (Enter & Space Keyboard Handlers)

This submission demonstrates how to make "entirely clickable" cards accessible when you are forced to build them using non-semantic HTML elements (like `<div>` or `<article>`).

## The Problem: Non-Semantic Buttons

Designers often want an entire card (containing an icon, title, and description) to act as a single clickable button. 
The easiest, most robust way to do this is to simply use a native `<button>` element.

However, sometimes developers use `<div>` or `<article>` elements and attach an `onclick` listener to them. **This is a massive accessibility violation.** 
A `<div>` cannot receive keyboard focus, and screen readers will not announce it as an interactive element.

## The Solution: The ARIA Button Pattern

If you absolutely must use a `<div>` or `<article>` as a button, you are required by WCAG to manually rebuild all the accessibility features that native `<button>` elements have by default.

### 1. Semantic Identity (`role` and `tabindex`)

You must explicitly tell the screen reader that the element is a button, and you must make it focusable via the `Tab` key.

```html
<article 
    class="interactive-card" 
    role="button" 
    tabindex="0"
>
    <!-- Card content -->
</article>
```

### 2. Manual Keyboard Handlers (Enter & Space)

Native `<button>` elements automatically trigger their `click` events when a user focuses them and presses the `Enter` or `Space` keys. 

Elements with `role="button"` **do not do this automatically**. If you only write a `click` handler, keyboard-only users will be completely unable to activate the card. You must manually listen for `Enter` and `Space`.

```javascript
const customCard = document.getElementById('custom-card-btn');

// Mouse/Touch Activation
customCard.addEventListener('click', triggerCardAction);

// CRITICAL ACCESSIBILITY: Keyboard Activation
customCard.addEventListener('keydown', (event) => {
    // Check if the pressed key is Enter or Space
    if (event.key === 'Enter' || event.key === ' ') {
        
        // Prevent default behavior (Space normally scrolls the page down)
        event.preventDefault(); 
        
        // Trigger the exact same action as the click handler
        triggerCardAction();
    }
});
```

### 3. State Announcement (`aria-pressed`)

If clicking the card changes its state (e.g., selecting a pricing tier or marking an item as a favorite), you must announce this state change to screen readers using `aria-pressed`.

```javascript
function triggerCardAction() {
    customCard.classList.toggle('is-activated');
    
    if(customCard.classList.contains('is-activated')) {
        customCard.setAttribute('aria-pressed', 'true');
    } else {
        customCard.setAttribute('aria-pressed', 'false');
    }
}
```

### 4. High Contrast (Forced Colors) Support

In Windows High Contrast Mode, `box-shadow` hover effects are stripped away. To ensure users can tell when the card is active or hovered, we use the `forced-colors` media query to apply solid system-color borders.

```css
@media (forced-colors: active) {
    .interactive-card:hover {
        border: 2px solid Highlight;
    }
    .interactive-card.is-activated {
        background-color: Highlight;
        /* Text inside must swap to HighlightText to remain readable */
    }
}
```
