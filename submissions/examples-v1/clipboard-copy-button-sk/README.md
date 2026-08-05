# Animated Clipboard Copy Button

A modern, accessible, highly responsive, and framework-independent clipboard copy button component featuring fluid icon transitions, click feedback, and light/dark theme overrides.

---

### 1. What does this component do?

This component provides a reusable copy-to-clipboard button that uses the browser's native Clipboard API to copy targeted text (such as terminal commands, API endpoints, or code snippets) and displays animated checkmark success feedback with an automatic reset delay.

---

### 2. How is it used?

#### Example HTML Usage

Include the structure below in your project:

```html
<div class="code-wrapper">
  <header class="code-header">
    <span class="code-lang">bash</span>
    
    <!-- Copy Button -->
    <button 
      class="btn-copy" 
      type="button" 
      data-target="code-snippet" 
      data-tooltip="Copy to Clipboard"
      aria-label="Copy code command"
      aria-live="polite"
    >
      <!-- Copy Icon SVG -->
      <svg class="icon-copy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-linecap="round" stroke-linejoin="round"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <!-- Checkmark Icon SVG -->
      <svg class="icon-check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span class="btn-text-copy">Copy</span>
      <span class="btn-text-copied">Copied!</span>
    </button>
  </header>
  
  <div class="code-body">
    <pre id="code-snippet">npm install easemotion-css</pre>
  </div>
</div>
```

Ensure `style.css` is imported. Toggling the button's `data-success="true/false"` property triggers the icon transitions, text changes, success color shifts, and tooltips automatically.

---

### 3. Why is it useful?

This component aligns perfectly with EaseMotion CSS's philosophy of offering **lightweight, highly performant, and accessible animated UI components**:

- **Staggered Icon Transition:** Icon transitions use CSS transform scale and rotation parameters (`scale(1) rotate(0)` vs `scale(0.4) rotate(-45deg)`) to transition from a copy icon to a checkmark icon with hardware-accelerated fluid motion.
- **Accessibility Best Practices:** Includes dynamic `aria-label` updates, `aria-live="polite"` status announcements for assistive screen-readers, and focus outlines that appear only when traversing via keyboard (`:focus-visible`).
- **No Heavy Libraries:** Built using standard inline SVG icons and native browser Clipboard APIs, eliminating the need for bulky CDNs, FontAwesome, or utility packages.
- **Responsive Layout scaling:** Suppresses iOS double-tap delay and shifts layouts cleanly to vertical lists on smaller mobile viewports.
- **Theme Variables Compatibility:** Native variables design integrates seamlessly with dark and light backgrounds.
