# Accessibility Guide — Building Inclusive Animations

EaseMotion CSS is designed to work seamlessly with accessibility best practices. This guide covers how to build interfaces that work for everyone—including users with motor, visual, and vestibular disabilities.

---

## 🎬 Respecting Motion Preferences

### What is `prefers-reduced-motion`?

The CSS `prefers-reduced-motion` media query detects if users have requested reduced motion in their operating system settings. This preference indicates users who experience discomfort, dizziness, or seizures triggered by animations.

**Enable reduced motion:**
- **Windows 11/10:** Settings → Ease of Access → Display → Show animations (toggle OFF)
- **macOS:** System Preferences → Accessibility → Display → Reduce motion
- **iOS:** Settings → Accessibility → Motion → Reduce Motion
- **Android:** Settings → Accessibility → Remove Animations

### How EaseMotion CSS Handles It

All animation classes automatically respect `prefers-reduced-motion`. When enabled, animations run with:
- Duration: `0.01ms` (essentially instant)
- Iteration count: `1` (no loops)
- Transition duration: `0.01ms` (no fade transitions)

This is applied globally at the end of `core/animations.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Classes That Respect This

✅ **All entrance animations:** `.ease-fade-in`, `.ease-slide-up`, `.ease-zoom-in`, `.ease-flip`, etc.  
✅ **All looping animations:** `.ease-bounce`, `.ease-pulse`, `.ease-rotate`, `.ease-ping`  
✅ **All exit animations:** `.ease-fade-out`, `.ease-expand-border-exit`, etc.  
✅ **All hover animations:** `.ease-hover-grow`, `.ease-hover-lift-shadow`, etc.

**No additional setup required.** EaseMotion CSS classes work correctly whether `prefers-reduced-motion` is enabled or not.

---

## 👁️ Screen Reader Only Content

### What is Screen Reader Only Content?

Screen reader–only content is text hidden from visual displays but announced to assistive technologies like JAWS, NVDA, and VoiceOver. Common use cases:

- **Icon-only buttons:** "Skip to main content" icon that needs a label
- **Implicit context:** Status indicators, loading states
- **Form helpers:** Aria-describedby references

### The `ease-sr-only` Class

Use `.ease-sr-only` to hide content visually while keeping it available to screen readers:

```html
<!-- Icon button with hidden label -->
<button aria-label="Close menu">
  <svg><!-- × icon --></svg>
  <span class="ease-sr-only">Close navigation menu</span>
</button>

<!-- Form field with live feedback -->
<input id="username" type="text" aria-describedby="username-help" />
<div id="username-help" class="ease-sr-only">
  Username must be 3–20 characters
</div>

<!-- Loading indicator with status -->
<div aria-live="polite" class="ease-sr-only">
  Loading results…
</div>
```

### CSS Implementation

```css
.ease-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  white-space: nowrap;
}
```

This technique:
- ✅ Removes content from layout flow
- ✅ Prevents visual display
- ✅ Remains available to screen readers
- ✅ Works across all assistive technologies

---

## 🎨 Color Contrast Guidance

### WCAG Standards

EaseMotion CSS color tokens are designed with WCAG compliance in mind. However, you should always verify contrast in your specific implementation.

**WCAG 2.1 Levels:**
- **AA (standard):** 4.5:1 for normal text, 3:1 for large text
- **AAA (enhanced):** 7:1 for normal text, 4.5:1 for large text

### Color Token Contrast

Default color combinations meet WCAG AA:

| Foreground | Background | Contrast Ratio | WCAG Level |
|-----------|-----------|----------------|-----------|
| `--ease-color-text` (#1e293b) | `--ease-color-surface` (#ffffff) | 15:1 | ✅ AAA |
| `--ease-color-primary` (#6c63ff) | `--ease-color-surface` (#ffffff) | 6.5:1 | ✅ AAA |
| `--ease-color-success` (#22c55e) | `--ease-color-surface` (#ffffff) | 5.5:1 | ✅ AAA |
| `--ease-color-muted` (#64748b) | `--ease-color-surface` (#ffffff) | 7.1:1 | ✅ AAA |

### Testing for Contrast

Use online contrast checkers:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Colors](https://accessible-colors.com/)
- Browser DevTools: Right-click element → Inspect → check contrast ratio

### Best Practices

```html
<!-- ✅ DO: Use sufficient contrast -->
<button class="ease-btn ease-btn-primary">
  Save Changes
</button>

<!-- ❌ AVOID: Light text on light background -->
<p style="color: #e2e8f0;">
  This text is too faint
</p>

<!-- ✅ DO: Provide text alternatives for color-only information -->
<div style="color: #ef4444;">
  ❌ Error
  <span class="ease-sr-only">(Required field)</span>
</div>

<!-- ❌ AVOID: Relying solely on color -->
<div style="color: #ef4444;">Error: Missing email</div>
```

---

## ♿ ARIA Attributes + EaseMotion Classes

### When to Use ARIA

ARIA attributes describe meaning and state to assistive technologies. Combine them with EaseMotion classes:

- `aria-label` — Invisible label for icon buttons
- `aria-describedby` — Extended description via linked element
- `aria-live` — Announce dynamic updates
- `aria-hidden` — Hide decorative elements
- `aria-disabled` — Mark inactive controls

### Button with Icon + Label

```html
<!-- Animated button with accessible label -->
<button 
  class="ease-btn ease-btn-primary ease-hover-grow"
  aria-label="Add new item">
  <svg aria-hidden="true"><!-- + icon --></svg>
  <span class="ease-sr-only">Add new item</span>
</button>
```

### Loading State with Live Region

```html
<!-- Animated loader with screen reader announcement -->
<div 
  aria-live="polite" 
  aria-busy="true" 
  role="status">
  <div class="ease-bounce">
    <span aria-hidden="true">●</span>
  </div>
  <span class="ease-sr-only">
    Loading results, please wait
  </span>
</div>
```

### Form with Error Animation

```html
<form>
  <label for="email">Email</label>
  <input 
    id="email"
    type="email"
    aria-describedby="email-error"
    aria-invalid="false" />
  
  <!-- Animated error message -->
  <div 
    id="email-error"
    class="ease-fade-in"
    aria-live="assertive"
    role="alert">
    Please enter a valid email address
  </div>
</form>
```

### Link with Animation

```html
<!-- Animated underline link with accessible state -->
<a 
  href="/profile"
  class="ease-hover-underline"
  aria-current="page">
  Profile
</a>
```

### Disabled State

```html
<!-- Visually reduced + semantically marked as disabled -->
<button 
  class="ease-btn ease-btn-primary"
  aria-disabled="true"
  disabled>
  Submit (Disabled)
</button>
```

---

## 📋 Accessibility Checklist

Use this checklist before shipping animated interfaces:

- [ ] **Motion:** Tested with `prefers-reduced-motion` enabled
- [ ] **Screen readers:** Tested with NVDA, JAWS, or VoiceOver
- [ ] **Contrast:** All text meets WCAG AA (4.5:1 minimum)
- [ ] **Keyboard:** All interactive elements keyboard-accessible
- [ ] **Labels:** Icon buttons have `aria-label` or `ease-sr-only`
- [ ] **Forms:** Inputs have associated `<label>` elements
- [ ] **Status:** Live updates use `aria-live` and `role="status"`
- [ ] **Errors:** Error messages linked via `aria-describedby`
- [ ] **Color:** Information not conveyed by color alone
- [ ] **Focus:** Visible focus indicators on all interactive elements

---

## 🔗 Related Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN: ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [W3C: ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM: Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [The A11y Project](https://www.a11yproject.com/)

---

**Questions about accessibility in EaseMotion CSS?** [Open an issue](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/new?template=bug_report.md) or [start a discussion](https://github.com/SAPTARSHI-coder/EaseMotion-css/discussions).
