# Brutalism Cookie Consent Banner (Accessibility Setup Guide)

This guide documents the critical accessibility requirements for the Brutalism Cookie Consent Banner. While brutalism intentionally breaks many traditional design rules (using clashing colors, extreme fonts, and jarring layouts), it must **never** break accessibility rules.

## 1. ARIA Dialog Implementation

A cookie banner is an interruption that demands the user's attention. For screen reader users, it must be explicitly defined as a dialog.

### HTML Structure

```html
<!-- 
  role="alertdialog": Signals an urgent interruption.
  aria-labelledby: Points to the ID of the banner's title.
  aria-describedby: Points to the ID of the banner's main text.
-->
<div 
    class="brutal-cookie-banner" 
    role="alertdialog" 
    aria-labelledby="cookie-title" 
    aria-describedby="cookie-desc"
>
    <div class="brutal-content">
        <h2 id="cookie-title">WE USE COOKIES</h2>
        <p id="cookie-desc">Accept them to continue. We track everything.</p>
    </div>
    <!-- Buttons -->
</div>
```

When a screen reader encounters this container, it will announce it as a dialog and read the title and description seamlessly, rather than forcing the user to manually hunt for the context of the buttons.

## 2. Managing the Keyboard Focus Ring

Brutalist designs frequently rely on thick, `#000000` borders and hard, `#000000` box shadows. 

If you rely on the browser's default focus ring (which is often a thin dashed line or a light blue glow), it will become entirely invisible against the brutalist borders.

### CSS Solution: Outline Offset

To ensure keyboard users can clearly see which button they are focused on, use `outline-offset` to push a thick, high-contrast ring *outside* the button's border.

```css
:root {
    --focus-ring-color: #2563eb; /* High contrast bright blue */
}

.brutal-btn:focus-visible {
    /* 4px thick line */
    outline: 4px solid var(--focus-ring-color);
    
    /* Push it 4px away from the black border so it doesn't blend in */
    outline-offset: 4px;
}
```

## 3. Focus Trapping (JavaScript Requirement)

While this CSS documentation focuses on markup and styling, note that a true `alertdialog` requires JavaScript to trap focus. 

When the banner appears, keyboard focus should be moved to the banner (specifically the "Accept" or "Reject" button). If the user presses `Tab`, the focus must cycle between the buttons in the banner and not escape to the background page until a choice is made.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
