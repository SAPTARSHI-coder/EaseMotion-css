# Navbar

### What does this do?

It shows a desktop top navigation bar with a logo, a row of nav links where the active one is underlined, and a sign in and get started button pair. Below 680px the links and actions collapse behind a checkbox hamburger.

### How is it used?

```html
<header class="navbar">
  <a class="nav-logo" href="#"><svg>...</svg>EaseMotion</a>
  <input type="checkbox" id="nav-toggle" class="nav-toggle" />
  <label class="nav-burger" for="nav-toggle" aria-label="Toggle menu"><span></span></label>
  <nav class="nav-links"><a class="is-active" href="#">Home</a></nav>
  <div class="nav-actions"><a class="nav-ghost" href="#">Sign in</a><a class="nav-cta" href="#">Get started</a></div>
</header>
```

Mark the current page link with `is-active` for the underline. The hamburger checkbox reveals the stacked links and actions on small screens.

### Why is it useful?

The top navbar is the first component on most sites. This lays out a logo, nav links with an active underline, and action buttons, with a checkbox driven mobile menu, using only CSS. Links and buttons show focus rings and transitions are removed under reduced motion.
