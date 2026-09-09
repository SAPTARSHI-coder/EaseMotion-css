# Settings Preference Panel

## Overview

A polished SaaS dashboard settings panel with multiple preference sections, toggle switches, notification options, privacy cards, and account settings. The component is designed for admin interfaces and includes smooth hover transitions, responsive layout, and a premium settings-friendly aesthetic.

## Why it fits EaseMotion CSS

This submission is fully self-contained and built with pure HTML and CSS only. It demonstrates modern dashboard UI patterns with reusable settings rows, toggle interactions, and a responsive panel layout that aligns with EaseMotion CSS goals.

## Usage example

```html
<link rel="stylesheet" href="style.css">
<main class="settings-panel">
  <header class="settings-header">
    <p class="eyebrow">Preferences</p>
    <h1>Account settings</h1>
    <p class="header-copy">Manage notification, privacy, and account preferences from a polished SaaS dashboard module.</p>
  </header>

  <section class="settings-section">
    <div class="section-title-wrap">
      <h2>Notifications</h2>
      <p>Customize when your team receives alerts and updates.</p>
    </div>
    <div class="setting-row">
      <div>
        <p class="setting-name">Email notifications</p>
        <p class="setting-desc">Receive account and activity updates via email.</p>
      </div>
      <label class="toggle-switch">
        <input type="checkbox" checked>
        <span class="toggle-track"></span>
      </label>
    </div>
  </section>
</main>
```

## Customization options

- Adjust the theme colors by changing `--bg`, `--panel`, `--accent`, and `--accent-soft`.
- Change border radius and spacing for `.settings-panel`, `.settings-section`, and `.pref-card`.
- Update toggle size by modifying the `width` and `height` values in `.toggle-switch`.
- Adapt typography by editing `.settings-header h1`, `.setting-name`, and `.pref-card h3`.
- Add or remove preference rows and cards to extend the page for additional account or privacy options.
