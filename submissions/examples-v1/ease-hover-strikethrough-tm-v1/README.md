# ease-hover-strikethrough

**What does this do?**
Adds a smooth strikethrough animation that sweeps across text (or any inline element) on hover. The line grows from left to right, giving a clean, modern "completed" or "dismissed" visual cue.

**How is it used?**

```html
<!-- Navigation link -->
<a href="#" class="strikethrough-link">Home</a>

<!-- Heading -->
<h3 class="strikethrough-text">Section Title</h3>

<!-- Button -->
<button class="strikethrough-btn">Submit</button>
```

```css
.strikethrough-link {
  position: relative;
}
.strikethrough-link::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 2px;
  background: #38bdf8;
  transition: width 0.3s ease;
  transform: translateY(-50%);
}
.strikethrough-link:hover::after {
  width: 100%;
}
```

**Why is it useful?**
Strikethrough-on-hover is a common pattern for todo lists, navigation highlights, and interactive labels. It is a lightweight, pure-CSS way to communicate state changes without JavaScript.

**Browser support:** All modern browsers (Chrome, Firefox, Safari, Edge). Uses `::after` pseudo-element and `transition`.
