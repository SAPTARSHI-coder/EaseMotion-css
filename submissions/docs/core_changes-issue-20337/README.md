# Core Changes Proposal: Issue #20337

## Problem Description

Issue [#20337](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20337) reports that the demo page (`docs/demo.html`) is missing a Help (?) button, leaving users unable to access help information, FAQs, or guidance.

The current navigation bar at `docs/demo.html` (lines 302–307) contains:

```html
<ul class="demo-nav-links">
  <li><a href="#buttons">Buttons</a></li>
  <li><a href="#cards">Cards</a></li>
  <li><a href="#animations">Animations</a></li>
  <li><a href="#layout">Layout</a></li>
  <li><a href="./">Docs</a></li>
</ul>
```

There is no help icon or link.

## Proposed Fix

Add a Help (?) button to the navigation bar, linking to a help modal or the project's documentation. Two options:

### Option A: Simple link to FAQ/docs

```html
<li><a href="https://github.com/SAPTARSHI-coder/EaseMotion-css#readme" title="Help">?</a></li>
```

### Option B: Interactive help button with tooltip

Replace the closing `</ul>` with an additional list item styled as a help button:

```html
<li>
  <button
    class="demo-help-btn ease-hover-grow"
    aria-label="Help"
    title="Help &amp; Support"
    onclick="window.open('https://github.com/SAPTARSHI-coder/EaseMotion-css#readme', '_blank')"
  >
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  </button>
</li>
```

With the accompanying CSS added to the `docs/demo.html` `<style>` block:

```css
.demo-help-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  padding: 6px 10px;
  border-radius: var(--ease-radius-md);
  font-size: var(--ease-text-sm);
  display: flex;
  align-items: center;
  transition: color var(--ease-speed-fast) var(--ease-ease),
              background-color var(--ease-speed-fast) var(--ease-ease);
}

.demo-help-btn:hover {
  color: #ffffff;
  background: rgba(108, 99, 255, 0.12);
}
```

This adds a visible `?` icon that links to the project's documentation, making help accessible from any page.

## Why this is submitted here

Per the `CONTRIBUTING.md` policy and Core Framework Protection, this fix is proposed as a formal submission in the `submissions/` directory rather than modifying `docs/demo.html` directly.

## Files changed

| File | Change |
|------|--------|
| `docs/demo.html` (nav section) | Add Help (?) button with link to project docs |

Fixes #20337
