# Bouncing Dots Loader

**What does this do?**

Displays a loading indicator using three dots that bounce sequentially in an infinite loop.

**How is it used?**

```html
<div class="loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
```

**Why is it useful?**

The bouncing dots loader is a classic loading animation that provides clear visual feedback to users while content is loading. It is lightweight, customizable through CSS variables, and requires no JavaScript.

---

Submitted by: @Pr241singh
Date: 2026-05-31
Status: **Pending review**

# Bouncing Dots Loader Animation

### What does this do?

This submission adds a highly customizable and accessible three-dot bouncing loader animation (`.dots-loader`) with staggered animation delays, ideal for inline action buttons and page-level loading indicators.

---

### How is it used?

Include three child `.dot` elements inside a parent `.dots-loader` container:

```html
<div class="dots-loader">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>
```

#### Size Scale Classes (Helper Classes)

- **Small** (ideal inside buttons): `.dots-loader-sm`
- **Large** (ideal for overlays): `.dots-loader-lg`

#### Theme Classes

- **Success Theme**: `.dots-loader-success`
- **Danger Theme**: `.dots-loader-danger`
- **Warning Theme**: `.dots-loader-warning`
- **Gradient Theme**: `.dots-loader-gradient`

#### Custom CSS Variables Configuration

You can customize the loader properties dynamically by overriding variables in your local stylesheet:

```css
.my-custom-loader {
  --dot-size: 14px;
  --dot-gap: 8px;
  --dot-bounce-height: -12px;
  --dot-speed: 0.7s;
  --dot-color: #ec4899;
}
```

---

### Why does it fit EaseMotion CSS?

A staggered bouncing dots loader is an industry-standard indicator for inline form submissions, loading overlays, and dynamic states that was previously missing from the framework.

By building it entirely on CSS variables (`--dot-size`, `--dot-color`, `--dot-gap`, etc.), we avoid hardcoded styling limitations. Developers can tweak speed, size, spacing, and colors to match their brand using simple, declarative CSS variables, upholding EaseMotion CSS's philosophy of highly composable, human-readable utility design.
