# Ease Photo Gallery Masonry

1. What does this do? Renders a self-contained, responsive CSS multi-column photo masonry grid with an interactive photographer's contact sheet hover effect and a keyboard-accessible fullscreen lightbox.
2. How is it used? Add the component script tag to your page and use the `<ease-photo-gallery-masonry>` element:
   ```html
   <script type="module" src="./ease-photo-gallery-masonry.js"></script>

   <ease-photo-gallery-masonry columns="4" gap="16px">
     <img
       src="photo.jpg"
       alt="Description"
       data-caption="Full photo details."
     />
   </ease-photo-gallery-masonry>
   ```
3. Why is it useful? It encapsulates complex responsive column layout logic, keyboard focus trapping, and custom event streams into a clean, zero-dependency custom element that aligns with EaseMotion's performance and accessibility goals.

---

## 🛠️ API & Attributes

| Attribute | Type         | Default | Description                                                                                 |
| --------- | ------------ | ------- | ------------------------------------------------------------------------------------------- |
| `columns` | Number       | `4`     | Number of columns to show on desktop displays (screens wider than 1200px).                  |
| `gap`     | String       | `16px`  | Gap size between images (supporting any valid CSS unit like `px`, `rem`, `em`).             |
| `images`  | Array (JSON) | `[]`    | JSON string array specifying images. Example: `[{"src":"...","alt":"...","caption":"..."}]` |

---

## 📥 Feeding Images

You can feed images into `<ease-photo-gallery-masonry>` in two ways:

### 1. Light DOM Child Elements (HTML Flow)

Drop standard `<img>` tags directly inside the custom element. The component automatically reads `src`, `alt`, and `data-caption` attributes on mount and on slot updates:

```html
<ease-photo-gallery-masonry columns="3" gap="20px">
  <img
    src="forest.jpg"
    alt="Rainforest Canopy"
    data-caption="Sunlight filtering through ferns in Washington."
  />
  <img
    src="ocean.jpg"
    alt="Coastal Tidepools"
    data-caption="Mussels and sea anemones on the Oregon coast."
  />
</ease-photo-gallery-masonry>
```

### 2. Attribute Feeding (JavaScript/JSON)

Set the `images` attribute containing a JSON array:

```javascript
const el = document.querySelector("ease-photo-gallery-masonry");
el.setAttribute(
  "images",
  JSON.stringify([
    {
      src: "lake.jpg",
      alt: "Lake View",
      caption: "Quiet evening at Lake Geneva.",
    },
  ])
);
```

---

## 📢 Custom Events

The component dispatches standard, bubbling custom events from the shadow root:

- **`ease-photo-open`**: Dispatched when an image is opened in the lightbox.
  - `event.detail`: `{ index: Number }`
- **`ease-photo-close`**: Dispatched when the lightbox is closed.
  - `event.detail`: `{ index: Number }`

---

## ♿ Accessibility Notes (A11y)

- **Keyboard Navigation**:
  - Open lightbox: Focus a thumbnail using `Tab` and press `Enter` or `Space`.
  - Next/Prev: Use `ArrowRight` and `ArrowLeft` keys to cycle through the photos.
  - Close: Press the `Escape` key.
- **Focus Trap**: When the lightbox is open, focus cycles only among close, prev, and next controls inside the overlay. It is impossible to tab back into the background elements.
- **Focus Restoration**: Closing the lightbox automatically restores keyboard focus to the triggering thumbnail.
- **Lazy Loading**: Image thumbnails use `loading="lazy"` to optimize page load speed and bandwidth.
- **Motion Reduction**: Honoring `prefers-reduced-motion` disables hover transitions and opacity shifts instantly.
