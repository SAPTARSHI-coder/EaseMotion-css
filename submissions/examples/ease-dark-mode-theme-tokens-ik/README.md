# EaseMotion CSS — Dark Mode Theme Tokens (`ease-dark-mode-theme-tokens-ik`)

A comprehensive semantic color token system supporting automatic OS dark mode detection (`prefers-color-scheme: dark`) and smooth class-based theme toggling for EaseMotion CSS components.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides semantic CSS custom properties (`--ease-bg-body`, `--ease-bg-surface`, `--ease-text-primary`, `--ease-border-color`, `--ease-accent-glow`) that automatically adapt to light and dark theme environments with zero component code rewrites.

---

## 2. How is it used?

Apply semantic variables in your stylesheet:

```css
.card {
  background-color: var(--ease-bg-surface);
  border: 1px solid var(--ease-border-color);
  color: var(--ease-text-primary);
}
```

Toggle manually in JavaScript or let the system adapt automatically:

```js
document.body.classList.toggle('dark-theme');
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS aims to make UI component styling human-readable and accessible. Standardizing semantic color tokens ensures high-contrast accessibility compliance across both light and dark display modes.
