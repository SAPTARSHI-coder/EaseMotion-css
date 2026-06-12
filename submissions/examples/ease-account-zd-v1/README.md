# Ease Account Zd

## What does this do?

An animated account settings / profile page component with avatar, form fields, toggle switches, and action buttons — pure HTML and CSS.

## How is it used?

```html
<div class="ac-card">
  <div class="ac-header">
    <div class="ac-avatar-wrap">
      <img
        class="ac-avatar"
        src="avatar.jpg"
        alt="Profile photo"
        width="64"
        height="64"
      />
    </div>
    <div class="ac-heading">
      <h2>Name</h2>
      <p>email@example.com</p>
    </div>
  </div>
  <div class="ac-body">
    <div class="ac-section">
      <div class="ac-section-title">Section Title</div>
      <div class="ac-row">
        <span class="ac-label">Field</span>
        <input class="ac-input" type="text" value="Value" />
      </div>
    </div>
    <div class="ac-actions">
      <button class="ac-btn ac-btn-primary">Save</button>
    </div>
  </div>
</div>
```

Toggle: `.ac-toggle` (off) / `.ac-toggle-on` (on)
Buttons: ac-btn-primary, ac-btn-secondary, ac-btn-danger

## Why is it useful?

Account settings pages are a core part of every web application. This component provides a clean, animated settings interface with form fields, toggles, and action buttons.
