# Animated Breadcrumb Navigation (`ease-breadcrumb`)

This proposal introduces a fully responsive, accessible, and animated breadcrumb navigation component targeted for `components/breadcrumb.css`.

## 📌 Feature Overview

Breadcrumb navigation is a staple UI pattern for multi-level websites. This component brings it into the EaseMotion ecosystem with a distinctive "slide-in trail" effect.

Features:
- Staggered slide-in animation for each breadcrumb item using `nth-child` delays.
- Independent fade-in animation for the separators (`/` or `>`).
- Current page styling distinction.
- Hover and focus states on links.
- Fully accessible semantic HTML structure (`<nav aria-label="breadcrumb">` and `aria-current="page"`).

Included classes:
- `.ease-breadcrumb`
- `.ease-breadcrumb__item`
- `.ease-breadcrumb__separator`

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`.

Structure your HTML as follows:

```html
<nav aria-label="breadcrumb">
  <ol class="ease-breadcrumb">
    <!-- Completed Steps / Parent Pages -->
    <li class="ease-breadcrumb__item">
      <a href="#">Home</a>
      <span class="ease-breadcrumb__separator" aria-hidden="true">/</span>
    </li>
    <li class="ease-breadcrumb__item">
      <a href="#">Products</a>
      <span class="ease-breadcrumb__separator" aria-hidden="true">/</span>
    </li>
    
    <!-- Current Page -->
    <li class="ease-breadcrumb__item" aria-current="page">
      <span>Smartphones</span>
    </li>
  </ol>
</nav>
```

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-breadcrumb/` directory to avoid directly modifying core files and causing zero deletions.*

## 🔗 Related Issue
Closes Issue #13308
