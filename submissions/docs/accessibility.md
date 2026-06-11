# Accessibility Guide

EaseMotion-css is built to create engaging, fluid web animation while remaining fully inclusive and accessible to all users. This guide covers how to implement animations responsibly, respect user preferences, and maintain web accessibility standards(WCAG).

## 1. Respecting User Motion Preferences (`prefers- reduced-motion`)

For users with motion sickness, vestibular disorders, or epilepsy, intense animations can cause discomfort or health issues. EaseMotion-css automatically respects the system-level `prefers-reduced-motion` media query.

### How it works
When a user has "Reduce Motion" enabled in their operating system or browser settings, EaseMotion-css automatically dampens or completely disables sudden transitions.

```html
<div class="ease-hover-squish-border">
  Interactive Element
</div>
```

Best Practice: Avoid forcing animations using !important flags that override the default media query controls built into the utility sheets.

## 2. Screen Reader Utilities (`ease-sr-only`)

Sometimes, you need to provide extra context to visually impaired users using screen readers without changing the visual layout of your UI.

Use the `ease-sr-only` utility class to hide elements visually while  keeping them completely discoverable by assistive technologies.

```html
<button class="ease-hover-squish-border">
    <!--visual icon-->
    <span class="icon-plus" aria-hidden="true">+</span>
    <!--screen reader only context-->
    <span class="ease-sr-only">Add new project item</span>
</button>
```

## 3. Color Contrast Guidance

Animations and Interactive transition states (like hover and focus effects) must maintain clear visual boundaries.

* **Text Contrast:** Ensure text overlaying animated backgrounds maintains a contrast ratio of at least **4.5:1** for normal text and **3:1** for large text to satisfy WCAG AA requirements.
* **Interactive States:** When utilizing hover animations that change background or border configurations,ensure the transition contrast shift clearly indicates focus/hover flags to users navigating via keyboard.

## 4. Combining ARIA Attributes with EaseMotion Classes

Animations often change the state of components (e.g., expanding menus, fading alerts, loading spinners). You must pair your dynamic utility classes with the correct ARIA attributes to announce these states to assistive tools.

### Accessible Dropdown / Expandable Example
When animating a panel toggle, always manage the `aria-expanded` state alongside your entry and exit classes:

```html
<button aria-expanded="false" aria-controls="animated-menu" id="menu-btn">
    Toggle Menu
</button>
<div id="animated-menu" class="ease-fade-in" aria-labelledby="menu-btn" aria-hidden="true">
    <ul>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#settings">Settings</a></li>
    </ul>
</div>
```

### Dynamic Content Loading (Live Regions)
If an animation represents content updating dynamically (like a skeleton loader or spinner), use `aria-live` :

```html
<div class="ease-skeleton-loader" aria-live="polite" aria-busy="true">
    <span class="ease-sr-only">Loading content, please wait...</span>
</div>
```