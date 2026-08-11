# CSS Floating Notification v2

A modern, floating toast notification variant featuring an avatar placeholder with an online status indicator. Built entirely with pure CSS, it utilizes a smooth `cubic-bezier` slide-in animation and frosted glassmorphism aesthetics.

## 🎯 Features
- **Pure CSS/HTML:** Zero JavaScript dependencies. The entry animation is triggered automatically via CSS keyframes.
- **Avatar Support:** Built-in flexbox layout to perfectly align a circular avatar next to title and description text.
- **Message Truncation:** Automatically truncates messages over 2 lines using `-webkit-line-clamp` to preserve UI integrity.
- **Accessible:** Implements `role="status"`, `aria-live="polite"`, and `tabindex="0"`. Completely disables the slide-in translation for users with `prefers-reduced-motion` enabled.
- **Responsive:** Snaps to full-width mobile cards on small viewports.

## 📁 Files Included
```text
demo.html
style.css
README.md