## Feature Name

OAuth Buttons

---

## Description

Create an example showcasing modern OAuth authentication buttons for popular providers such as Google and GitHub. The example should provide a clean, responsive layout with smooth hover animations and subtle elevation effects.

### Files

- `demo.html`
- `style.css`
- `README.md` describing the classes used and customization options

---

## Why is this useful for EaseMotion CSS?

OAuth buttons are a common component in modern applications. Providing a reusable example aligns with EaseMotion CSS's animation-first and composable design philosophy, allowing developers to quickly create attractive social login interfaces.

---

## HTML Snippet

```html
<div class="oauth-container">
  <button class="oauth-btn google-btn">
    <span class="icon">G</span>
    Continue with Google
  </button>

  <button class="oauth-btn github-btn">
    <span class="icon">⌘</span>
    Continue with GitHub
  </button>
</div>
```

---

## CSS Snippet

```css
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f5f5f5;
  font-family: sans-serif;
}

.oauth-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 320px;
}

.oauth-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 20px;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.oauth-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.google-btn {
  background: #ffffff;
  color: #333;
}

.github-btn {
  background: #24292e;
  color: white;
}

.icon {
  font-weight: bold;
  font-size: 1.1rem;
}
```

---

## README.md

```md
# OAuth Buttons

A simple example demonstrating animated OAuth buttons.

## Features

- Google and GitHub buttons
- Responsive layout
- Smooth hover animations
- Subtle shadow and scale effects

## Files

- demo.html
- style.css

## Usage

Import `style.css` and use the provided HTML structure to add OAuth buttons to your project.
```

---

## Checklist

- [x] This feature does not duplicate an existing EaseMotion CSS class
- [x] I understand my naming will be standardized by the maintainer
- [x] I will submit code inside `submissions/examples/` only — not in `core/` or `components/`
