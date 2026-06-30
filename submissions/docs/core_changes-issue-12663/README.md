# ease-cookie-consent

## What does this do?

Provides a fixed-position cookie consent banner with slide-up entrance animation, accept/reject/customize actions, localStorage persistence, and responsive layout — all with minimal companion JavaScript.

## How is it used?

```html
<div id="ease-cookie-consent" class="ease-cookie-consent">
  <div class="ease-cookie-consent-content">
    <p class="ease-cookie-consent-text">
      We use cookies to improve your experience.
    </p>
    <div class="ease-cookie-consent-actions">
      <button class="ease-cookie-consent-btn--accept" data-consent="accept">
        Accept All
      </button>
      <button class="ease-cookie-consent-btn--reject" data-consent="reject">
        Reject All
      </button>
      <button class="ease-cookie-consent-btn--customize">Customize</button>
    </div>
  </div>
</div>

<script>
  const banner = document.getElementById("ease-cookie-consent");
  const STORAGE_KEY = "ease-cookie-consent";

  // Check if previously dismissed
  if (localStorage.getItem(STORAGE_KEY) === "dismissed") {
    banner.classList.add("ease-cookie-consent--dismissed");
  }

  // Handle consent buttons
  document.querySelectorAll("[data-consent]").forEach((btn) => {
    btn.addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEY, "dismissed");
      banner.classList.add("ease-cookie-consent--dismissed");
    });
  });
</script>
```

### Available Classes

| Class                                 | Purpose                                    |
| ------------------------------------- | ------------------------------------------ |
| `.ease-cookie-consent`                | Fixed-position wrapper (centers banner)    |
| `.ease-cookie-consent-content`        | Inner container with bg, shadow, animation |
| `.ease-cookie-consent-text`           | Message text                               |
| `.ease-cookie-consent-actions`        | Button group container                     |
| `.ease-cookie-consent-btn--accept`    | Primary accept button                      |
| `.ease-cookie-consent-btn--reject`    | Secondary reject button                    |
| `.ease-cookie-consent-btn--customize` | Text-style customize link                  |
| `.ease-cookie-consent--dismissed`     | Triggers slide-down dismissal              |

### CSS Custom Properties

| Property     | Default            | Description                |
| ------------ | ------------------ | -------------------------- |
| `--ccbg`     | `#ffffff`          | Banner background          |
| `--ccborder` | `#e2e8f0`          | Border color               |
| `--cctext`   | `#1e293b`          | Text color                 |
| `--ccmuted`  | `#64748b`          | Muted text color           |
| `--ccaccent` | `#6c63ff`          | Accept button + link color |
| `--ccshadow` | `rgba(0,0,0,0.12)` | Box shadow                 |
| `--ccradius` | `0.75rem`          | Border radius              |
| `--ccmaxw`   | `640px`            | Max width                  |

## Why is it useful?

GDPR cookie consent is a legal requirement for most websites. This component provides a reusable, accessible, and animated consent banner that integrates with EaseMotion's design language and requires minimal JavaScript.

## Features

- Fixed at bottom of viewport
- Slide-up entrance animation (respects prefers-reduced-motion)
- Slide-down dismissal via `.ease-cookie-consent--dismissed`
- Accept, reject, and customize action buttons
- localStorage persistence with companion JS
- Dark mode support
- Responsive: vertical on mobile, horizontal on tablet+
- CSS custom properties for full theming
