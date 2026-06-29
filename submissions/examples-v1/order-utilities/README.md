# Order Utilities

An overview and guide for using CSS `order` utility classes to visually rearrange items within Flexbox and Grid layouts.

## Core Questions

### What does this do?

These utility classes specify the visual order of a flex or grid item inside its parent container, independent of its order in the DOM markup.

### How is it used?

Apply the utility classes directly to children of containers configured with `display: flex` or `display: grid`:

```html
<div class="flex-container">
  <div class="order-last">This displays last</div>
  <div>This displays first</div>
</div>
```

### Why is it useful?

It allows responsive restructuring (such as moving sidebars below main content on mobile layout viewports) directly through utility classes, without needing JavaScript DOM manipulation or changing source code order.

---

## Utility Classes

| Class          | CSS Declaration | Description                                              |
| :------------- | :-------------- | :------------------------------------------------------- |
| `.order-first` | `order: -9999;` | Pushes the item to the absolute beginning of the layout. |
| `.order-last`  | `order: 9999;`  | Pushes the item to the absolute end of the layout.       |
| `.order-none`  | `order: 0;`     | Restores default layout order (equivalent to DOM order). |
| `.order-1`     | `order: 1;`     | Sets visual position index to 1.                         |
| `.order-2`     | `order: 2;`     | Sets visual position index to 2.                         |
| `.order-3`     | `order: 3;`     | Sets visual position index to 3.                         |
| `.order-4`     | `order: 4;`     | Sets visual position index to 4.                         |
| `.order-5`     | `order: 5;`     | Sets visual position index to 5.                         |

---

## Explanation of CSS `order` Property

The `order` CSS property sets the order to lay out an item in a flex or grid container.

- **Sorting Rule**: Items in a container are sorted and laid out ascendingly by their `order` value. Items with the same `order` value are laid out in the order they appear in the source code.
- **Initial Value**: The default value of `order` is `0` (which is what `.order-none` targets).
- **Accessibility / Focus Order Warning**: The `order` property only affects the _visual_ representation of the elements. It does **not** change the tab or keyboard navigation order, nor does it affect screen readers. Screen readers and keyboard navigation follow the physical DOM source order. Therefore, using `order` to rearrange interactive content should be done carefully to maintain an intuitive keyboard focus path.

---

## Usage Examples

### 1. Reordering Mobile Sidebars

On mobile screens, you may want sidebars to visually sit below main contents, but appear on the left/right of desktop viewports:

```html
<div class="flex-container">
  <!-- Sidebar -->
  <aside class="order-last md:order-first">Navigation Sidebar</aside>
  <!-- Main -->
  <main class="order-first md:order-last">Main Articles Body</main>
</div>
```

### 2. Prioritizing Announcement Banners

Bring a banner item to the very top dynamically:

```html
<div class="dashboard-grid" style="display: grid;">
  <div class="card">Stats Panel</div>
  <div class="card order-first">Important Alert Banner</div>
  <div class="card">Recent Activity</div>
</div>
```

---

## Common Use Cases

1. **Responsive Sidebars**: Shifting navigation lists or filter panels above or below main feeds depending on breakpoints.
2. **Featured Grid Items**: Forcing high-priority items (like sale call-outs or announcements) to display at the front of a gallery list.
3. **Alternating Layout Cards**: Creating alternating rows in feature cards (e.g. image-left/text-right, then text-left/image-right) by applying order classes on grid child tags.
4. **Header Navigation Action**: Forcing critical CTAs (like log-in or checkout buttons) to stay at the very end of header menus across different flex arrangements.

---

## Browser Support Notes

CSS `order` is natively supported across all modern browsers:

- Chrome 29+
- Edge 12+
- Firefox 20+
- Safari 7+
- iOS Safari 7+
- Android Browser 4.4+

_Note: IE 10 supported an older, prefixed syntax (`-ms-flex-order`), which is deprecated and no longer necessary in modern environments._
