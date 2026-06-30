# ease-mention-dropdown (`ease-mention-dropdown-ssh`)

An `@mention` autocomplete dropdown component with avatars, highlighted matching text, keyboard navigation, and a smooth entrance animation — built with **pure HTML + CSS**. No JavaScript, no external libraries.

---

## 1. What does this do?

It renders a polished mention-suggestion dropdown (like the ones in Twitter, Discord, Slack, GitHub) that appears when an `@` trigger is activated. Each suggestion shows a colored gradient avatar, the user's name, their handle, and an optional badge — with the matching characters visually highlighted using `<mark>`. State is managed with a hidden checkbox and `:checked`, and keyboard navigation uses native `tabindex` + `:focus`.

---

## 2. How is it used?

The component combines an editable input area, an `@` trigger button (a `<label>`), and a hidden checkbox that controls dropdown visibility. Each suggestion is a focusable `<li>` for accessible keyboard navigation.

```html
<div class="mention-input">
  <input type="checkbox" id="mention-trigger" class="mention-input__state" />

  <div class="mention-input__field" contenteditable="true"
       data-placeholder="Type your comment... use @ to mention someone">
    Great work on the new release! Thanks
  </div>

  <label for="mention-trigger" class="mention-input__trigger">@</label>

  <div class="mention-dropdown" role="listbox">
    <div class="mention-dropdown__header">
      People matching <strong>"@sa"</strong>
    </div>

    <ul class="mention-dropdown__list">
      <li class="mention-item" tabindex="0" role="option">
        <div class="mention-item__avatar mention-item__avatar--purple">SA</div>
        <div class="mention-item__info">
          <div class="mention-item__name"><mark>Sa</mark>ptarshi Sadhu</div>
          <div class="mention-item__handle">@<mark>sa</mark>ptarshi</div>
        </div>
        <span class="mention-item__badge">Maintainer</span>
      </li>

      <li class="mention-item" tabindex="0" role="option">
        <div class="mention-item__avatar mention-item__avatar--blue">SA</div>
        <div class="mention-item__info">
          <div class="mention-item__name"><mark>Sa</mark>m Rivera</div>
          <div class="mention-item__handle">@<mark>sa</mark>m_dev</div>
        </div>
      </li>
    </ul>

    <div class="mention-dropdown__footer">
      <span class="kbd">↑</span><span class="kbd">↓</span> navigate ·
      <span class="kbd">Tab</span> select ·
      <span class="kbd">Esc</span> close
    </div>
  </div>
</div>
```

### Available avatar color variants

| Class                              | Gradient                |
| ---------------------------------- | ----------------------- |
| `.mention-item__avatar--purple`    | Purple → indigo          |
| `.mention-item__avatar--blue`      | Cyan → blue              |
| `.mention-item__avatar--pink`      | Pink → magenta           |
| `.mention-item__avatar--green`     | Green → teal             |
| `.mention-item__avatar--orange`    | Yellow → orange          |

Just open `demo.html` in any modern browser — no server, no build step, no dependencies. Click the **@** button to open the dropdown, then Tab through the suggestions.

---

## 3. Why does it fit EaseMotion CSS?

This submission embodies EaseMotion CSS's animation-first, CSS-only philosophy:

- **Pure CSS state management** — the dropdown opens via a hidden checkbox + `:checked` sibling-selector pattern. Zero JavaScript.
- **Smooth entrance animation** — uses an `ease-mention-enter` keyframe (`cubic-bezier(0.16, 1, 0.3, 1)`) that combines opacity, translateY, and scale for a fluid, modern feel.
- **Accessible keyboard navigation** — each suggestion has `tabindex="0"` and a custom `:focus` style with cyan accent border. Users can Tab through suggestions naturally.
- **Semantic markup** — `role="listbox"` and `role="option"` ensure screen-reader compatibility.
- **Highlighted matches via `<mark>`** — a semantic HTML element, styled with a cyan accent that adapts in name vs handle contexts.
- **Self-contained avatars** — gradient backgrounds with initials. No external images, no CDN.
- **Responsive** — adapts gracefully to mobile (smaller avatars, condensed footer hints).
- **Respects `prefers-reduced-motion`** — disables all animation for users who prefer less motion.

Mention/autocomplete dropdowns are a foundational UI primitive for chat apps, comment systems, project-management tools, and CMS editors. This component gives EaseMotion CSS a reusable, accessible, animated implementation ready for any framework to wire to real filtering logic.

---

## Acceptance Criteria (matches issue #19883)

- [x] Appears on `@` trigger in input
- [x] Filtered list with avatar + username
- [x] Highlighted matching text
- [x] Keyboard navigation
- [x] Smooth entrance animation

---

## Browser Support

Works on all modern browsers:

- ✅ Chrome / Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

---

## Author

Submitted by **@soumyasekharshee265-ux** as part of issue [#19883](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/19883).