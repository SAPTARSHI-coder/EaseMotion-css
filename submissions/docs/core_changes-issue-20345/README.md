# Core Changes Proposal: Issue #20345

## Problem Description

Issue #20345 reports that the demo page (`docs/demo.html`) has no visible GitHub repository link. While a GitHub link exists in the hero section, it is not accessible from the navigation bar, making it harder for users to find the source code, report issues, or contribute.

The current navigation bar at `docs/demo.html` (lines 297–332) contains:

- Logo (left)
- Nav links: Buttons, Cards, Animations, Layout, Docs
- Theme toggle (right)

No GitHub link is present in the nav.

## Proposed Fix

Add a GitHub icon button to the navigation bar's link list, positioned before the theme toggle. The button links to the project repository.

### HTML to add to `<ul class="demo-nav-links">`

```html
<li>
  <a
    href="https://github.com/SAPTARSHI-coder/EaseMotion-css"
    class="demo-gh-link ease-hover-grow"
    aria-label="GitHub Repository"
    title="GitHub Repository"
    target="_blank"
    rel="noopener"
  >
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path
        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
      />
    </svg>
  </a>
</li>
```

### CSS to add to `docs/demo.html` `<style>` block

```css
.demo-gh-link {
  display: flex;
  align-items: center;
  padding: 6px 8px;
  color: rgba(255, 255, 255, 0.65);
  border-radius: var(--ease-radius-md);
  transition:
    color var(--ease-speed-fast) var(--ease-ease),
    background-color var(--ease-speed-fast) var(--ease-ease);
}

.demo-gh-link:hover {
  color: #ffffff;
  background: rgba(108, 99, 255, 0.12);
}
```

## Why this is submitted here

Per `CONTRIBUTING.md` policy and Core Framework Protection, this fix is proposed as a formal submission in `submissions/` rather than modifying `docs/demo.html` directly.

## Files changed

| File                                     | Change                                     |
| ---------------------------------------- | ------------------------------------------ |
| `docs/demo.html` (nav section ~line 308) | Add GitHub icon link after "Docs" nav item |

Fixes #20345
