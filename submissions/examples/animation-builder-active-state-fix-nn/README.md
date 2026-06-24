# Navbar Active State Bug Fix

## 1. What does this do?

This component demonstrates a bug-fix for a navbar navigation issue where the "Animation Builder" menu item remained permanently highlighted in an active purple state even when the user was browsing other pages. The solution isolates routing classes, ensuring the active style is applied dynamically only when a page strictly matches the current location.

## 2. How is it used?

Rather than hardcoding global active selectors or classes on specialized buttons, structure your HTML menu links to use standard active class selectors:

```html
<!-- Fixed Navbar Links Structure -->
<div class="nav-links-nn">
  <a href="#" class="nav-link-nn active-nn">Guide</a>
  <a href="#" class="nav-link-nn">Components</a>
  <a href="#" class="nav-link-nn">Animations</a>
  <a href="#" class="nav-link-nn">Animation Builder</a>
  <!-- Highlighted only when active-nn class is present -->
  <a href="#" class="nav-link-nn">API Reference</a>
</div>
```

Ensure the active style is tied explicitly to the `.active-nn` class:

```css
/* Normal state */
.nav-link-nn {
  color: var(--nav-link-color-nn);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Active Highlight (strictly applies when .active-nn is appended) */
.nav-link-nn.active-nn {
  background-color: var(--nav-link-active-bg-nn);
  color: var(--nav-link-active-color-nn);
}
```

## 3. Why is it useful and how does it fit EaseMotion CSS philosophy?

Clear visual hierarchy is vital for high-quality user experiences. This fix:

- **Prevents Misleading Feedback**: Ensures that navigation cues match actual user locations rather than showing multiple pages as "active".
- **Preserves Thematic Integrity**: Supports responsive layouts and adapts across both Light and Dark modes.
- **Maintains Motion Consistency**: Keeps transition timing curves intact during hover and click navigation events.
