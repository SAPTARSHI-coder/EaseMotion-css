# Documentation: Retro Pixel Avatar Group - Basic Usage (#41566)

Comprehensive documentation guide, copy-paste HTML markup examples, CSS class naming conventions, custom CSS variable overrides, and accessibility/keyboard navigation notes for the EaseMotion **Retro Pixel Avatar Group (Basic Usage)** component (`#41566`), fully addressing issue `#81610`.

## 🚀 Overview & Features

- **Basic Avatar Grouping:** Renders an overlapping horizontal stack of retro-styled pixel avatars paired with an aggregate count badge.
- **Accessibility & ARIA Setup:** Built with semantic group roles (`role="group"`, `aria-label`) and descriptive avatar images.
- **Keyboard Navigation Setup:** Clear `:focus-visible` outlines and full tab support.

## 🛠️ Copy-Paste HTML Markup Example

```html
<div class="ease-pixel-avatar-group em-avatar-basic" role="group" aria-label="Retro Pixel Team Avatars" tabindex="0" autofocus>
    <div class="em-pixel-avatar" role="img" aria-label="Avatar 1">
        <span class="em-avatar-text">P1</span>
    </div>
    <div class="em-pixel-avatar" role="img" aria-label="Avatar 2">
        <span class="em-avatar-text">P2</span>
    </div>
    <div class="em-pixel-avatar" role="img" aria-label="Avatar 3">
        <span class="em-avatar-text">P3</span>
    </div>
    <div class="em-pixel-badge" aria-label="Plus 2 more members">+2</div>
</div>
