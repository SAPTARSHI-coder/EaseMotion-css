# File: docs/css-variable-theming.md

# Theming with CSS Variables in Easemotion

Before: light gray background with blue primary
After: deep dark background with purple accent branding

EaseMotion uses a global theme system built on CSS custom properties. This makes it easy to reshape the whole UI by overriding key variables in your own project, without changing the framework source files.

## How the Easemotion theme system works

EaseMotion defines design tokens and theme values as CSS variables in a central `:root` block. Those variables are used throughout the framework to control:

- colors (`--ease-color-bg`, `--ease-color-surface`, `--ease-color-text`, etc.)
- spacing and layout (`--ease-space-*`)
- radii (`--ease-radius-*`)
- shadows (`--ease-shadow-*`)
- typography (`--ease-font-sans`, `--ease-text-base`, etc.)
- transition speeds and easing curves

Because the framework reads these values from `var(...)`, changing the variables changes the look and feel everywhere the framework uses them.

## Where variables are defined

The core theme variables live in `core/variables.css` inside the Easemotion repository.

If you use the bundled file, those same variables are also included in `easemotion.css`.

In other words:

- source variables: `core/variables.css`
- compiled bundle: `easemotion.css`

That means you do not need to edit `core/variables.css` or `easemotion.css` to theme Easemotion.

## Safe, project-level theming workflow

Follow these steps to override Easemotion variables safely.

1. Import Easemotion first.
2. Add your own theme overrides after the framework import.
3. Use `:root` or a theme class to define your custom values.
4. Keep core files unchanged so framework updates remain easy.

### Example import order

```html
<link rel="stylesheet" href="path/to/easemotion.css" />
<link rel="stylesheet" href="path/to/theme-overrides.css" />
```

### Why order matters

CSS variables are resolved in cascade order. Your override file must load after Easemotion so your custom values replace the defaults.

## Step-by-step override instructions

### 1. Choose the variables to override

Start with the main theme variables:

- `--ease-color-bg`
- `--ease-color-surface`
- `--ease-color-text`
- `--ease-color-muted`
- `--ease-color-primary`
- `--ease-color-success`
- `--ease-color-danger`
- `--ease-color-warning`

You can also override spacing, typography, shadows, and other token groups.

### 2. Create an override block in your own stylesheet

A simple safe pattern is:

```css
:root {
  --ease-color-bg: #0f172a;
  --ease-color-surface: #111827;
  --ease-color-text: #f8fafc;
  --ease-color-muted: #94a3b8;
  --ease-color-primary: #8b5cf6;
}
```

### 3. Load the override stylesheet after Easemotion

Make sure your theme CSS appears later in the document or bundler output than the framework CSS.

### 4. Verify the UI

Open your project and check buttons, cards, backgrounds, text, borders, and utilities. The framework will use your new values wherever `var(--ease-...)` is applied.

## Default variables from Easemotion

Here are the default theme variables from `core/variables.css`:

```css
:root {
  --ease-color-primary: #6c63ff;
  --ease-color-primary-light: #a09af8;
  --ease-color-primary-dark: #4b44cc;

  --ease-color-success: #22c55e;
  --ease-color-success-light: #86efac;
  --ease-color-success-dark: #15803d;

  --ease-color-danger: #ef4444;
  --ease-color-danger-light: #fca5a5;
  --ease-color-danger-dark: #b91c1c;

  --ease-color-warning: #f59e0b;
  --ease-color-warning-light: #fcd34d;
  --ease-color-warning-dark: #b45309;

  --ease-color-info: #3b82f6;
  --ease-color-info-light: #93c5fd;
  --ease-color-info-dark: #1d4ed8;

  --ease-color-neutral-50: #f8fafc;
  --ease-color-neutral-100: #f1f5f9;
  --ease-color-neutral-200: #e2e8f0;
  --ease-color-neutral-300: #cbd5e1;
  --ease-color-neutral-400: #94a3b8;
  --ease-color-neutral-500: #64748b;
  --ease-color-neutral-600: #475569;
  --ease-color-neutral-700: #334155;
  --ease-color-neutral-800: #1e293b;
  --ease-color-neutral-900: #0f172a;

  --ease-color-bg: var(--ease-color-neutral-50);
  --ease-color-surface: #ffffff;
  --ease-color-text: var(--ease-color-neutral-800);
  --ease-color-muted: var(--ease-color-neutral-500);
}
```

## Custom theme override using `:root`

This override converts Easemotion from the default light palette to a darker, branded look.

```css
:root {
  --ease-color-bg: #0b1120;
  --ease-color-surface: #111827;
  --ease-color-text: #e2e8f0;
  --ease-color-muted: #94a3b8;
  --ease-color-primary: #7c3aed;
  --ease-color-primary-light: #a78bfa;
  --ease-color-primary-dark: #5b21b6;
}
```

### What changes in the UI

- Page background becomes darker through `--ease-color-bg`
- Panels, cards, and surfaces use the new `--ease-color-surface`
- Text shifts to a lighter tone via `--ease-color-text`
- Muted labels, helper text, and icons follow `--ease-color-muted`
- Buttons and accents adopt the new primary color

Those changes ripple across Easemotion utilities and components without editing individual CSS rules.

## Light theme override example

Use this when you want a brighter, clean interface that still uses Easemotion tokens.

```css
:root {
  --ease-color-bg: #f8fafc;
  --ease-color-surface: #ffffff;
  --ease-color-text: #111827;
  --ease-color-muted: #64748b;
  --ease-color-primary: #6366f1;
  --ease-color-primary-light: #a5b4fc;
  --ease-color-primary-dark: #4338ca;
}
```

This light theme keeps the framework’s spacing, shadows, and typography, while giving the UI a fresh, high-contrast palette.

## Dark theme override example

A dark theme with rich surfaces and subtle neutral tones.

```css
:root {
  --ease-color-bg: #0f172a;
  --ease-color-surface: #111827;
  --ease-color-text: #e2e8f0;
  --ease-color-muted: #94a3b8;
  --ease-color-primary: #8b5cf6;
  --ease-color-success: #22c55e;
  --ease-color-danger: #ef4444;
  --ease-color-warning: #f59e0b;
}
```

### Simulating theme modes

If you want both light and dark themes, define theme-specific selectors instead of only `:root`:

```css
:root {
  --ease-color-bg: #f8fafc;
  --ease-color-surface: #ffffff;
  --ease-color-text: #111827;
}

.dark-theme {
  --ease-color-bg: #0f172a;
  --ease-color-surface: #111827;
  --ease-color-text: #e2e8f0;
}
```

Then toggle `.dark-theme` on the `html` or `body` element.

## Best practices

### Do’s

- Do override variables in your own CSS file, not in framework sources.
- Do load overrides after `easemotion.css`.
- Do keep token names consistent with Easemotion variables.
- Do override only the variables you need.
- Do use theme classes if you need multiple modes.

### Don’ts

- Don’t edit `core/variables.css` or `easemotion.css` directly.
- Don’t duplicate variable definitions in multiple places without a clear plan.
- Don’t rely on hard-coded colors inside your own component styles if the framework already exposes a token.
- Don’t load your overrides before the framework CSS.

### Why overrides are better

Override-based theming keeps your project upgrade-safe. When Easemotion is updated, your theme file still works because you are only changing the values, not the framework’s implementation.

## Final summary

Easemotion’s theme system is built on CSS variables defined in `core/variables.css` and bundled into `easemotion.css`. You can theme the entire UI safely by overriding those variables in your own stylesheet, loaded after the framework.

Use `:root` for global theme changes, and theme classes for mode switching. Keep core files untouched, and let the framework continue using the same variable names while you control the palette, surface tones, text contrast, and brand colors.
