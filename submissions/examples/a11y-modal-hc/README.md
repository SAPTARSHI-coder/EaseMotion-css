# Accessible High Contrast Modal

What does this do?  
This provides an accessible modal component with keyboard navigation, screen reader support, and `forced-colors: active` high contrast mode support.

How is it used?  
Wrap the modal in an overlay `.ease-modal-overlay` and the content inside `.ease-modal`. Use `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby` for full screen reader accessibility. Ensure focus trapping is managed via JS.

Why is it useful?  
It aligns with WCAG 2.1 AA requirements and improves usability for users relying on keyboard navigation, screen readers, or Windows High Contrast mode, aligning perfectly with EaseMotion's push for inclusive UI components.
