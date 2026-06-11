# Shimmer Skeleton Loader Cards

A premium, modern SaaS-style card placeholder featuring a smooth shimmer animation. It is designed to act as a visual loading state for content-heavy card grids, providing a seamless layout transition as content loads.

---

## 📷 Screenshots

> [!NOTE]
> *Screenshots Placeholder: Insert demo preview screenshots showing the loading (skeleton) state and the loaded (live content) state.*

---

## 💡 How It Works

This component uses a modern CSS layout pattern to handle content loading states smoothly without causing layout shifts (CLS):
1. **Stacking Context**: Both the `.skeleton-card` and `.content-card` are placed inside a single `.card-wrapper` container. By applying `display: grid` to the wrapper and mapping both children to `grid-area: 1 / 1`, they overlap exactly in the same grid cell.
2. **State Transition**: The loading state is managed by a class (`.is-loaded`) on the grid container. When active, it cross-fades the cards by transitioning their `opacity`, `transform` (translating the content card up slightly for a fluid entry), and `visibility`.
3. **Hardware Acceleration**: The skeleton shimmer animation utilizes CSS background positioning translation with a `linear-gradient` to avoid layout redraws, ensuring a smooth 60fps animation.
4. **Reduced Motion**: Automatically respects standard accessibility preferences by freezing the shimmer animation and switching cross-fades to instant swaps.

---

## 🛠️ HTML Usage

To use this loader pattern, arrange the skeleton and content card siblings inside a `.card-wrapper`:

```html
<div class="card-wrapper">
  <!-- 1. Skeleton Card (Visible during loading) -->
  <div class="skeleton-card" aria-hidden="true">
    <div class="skeleton-image shimmer"></div>
    <div class="skeleton-body">
      <div class="skeleton-title shimmer"></div>
      <div class="skeleton-text shimmer"></div>
      <div class="skeleton-text shimmer short"></div>
    </div>
    <div class="skeleton-footer">
      <div class="skeleton-avatar shimmer"></div>
      <div class="skeleton-meta shimmer"></div>
    </div>
  </div>

  <!-- 2. Live Content Card (Revealed after loading) -->
  <article class="content-card">
    <div class="card-image-wrapper">
      <img src="path/to/image.jpg" alt="Artwork Description" class="card-image">
    </div>
    <div class="card-body">
      <h2 class="card-title"><a href="#">Card Title</a></h2>
      <p class="card-text">Card description content goes here...</p>
    </div>
    <div class="card-footer">
      <img src="path/to/avatar.jpg" alt="Author" class="card-avatar">
      <div class="card-meta">
        <span class="card-author">Author Name</span>
        <span class="card-date">Date</span>
      </div>
    </div>
  </article>
</div>
```

Toggle the state by adding `.is-loaded` to the parent container:
```javascript
document.querySelector('.demo-grid').classList.add('is-loaded');
```

---

## 🎨 CSS Explanation

The shimmer effect is achieved by translating a repeating gradient background using keyframes:

```css
/* Shimmer Keyframes */
@keyframes ease-kf-shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Base class applied to skeleton elements */
.shimmer {
  background: linear-gradient(
    90deg,
    var(--skeleton-bg) 25%,
    var(--skeleton-shimmer) 50%,
    var(--skeleton-bg) 75-percent
  );
  background-size: 200% 100%;
  animation: ease-kf-shimmer 1.6s infinite linear;
}
```

The overlapping container is set up using CSS grid cells:

```css
.card-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.skeleton-card,
.content-card {
  grid-area: 1 / 1;
}
```

---

## 🏆 Why It Fits EaseMotion CSS

1. **Animation-First Philosophy**: Uses a premium, smooth, hardware-accelerated shimmer effect that elevates standard loading pages.
2. **Zero Dependencies**: Pure HTML and CSS based, with no external packages, rendering libraries, or frameworks.
3. **Accessibility Compliant**: Uses `aria-hidden="true"` on the skeleton elements to hide redundant elements from screen readers, and fully respects `prefers-reduced-motion` preferences.
4. **Token Friendly**: Relies on standard framework properties and fits perfectly into the existing CSS components suite.