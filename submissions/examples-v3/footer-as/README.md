# Site Footer

### What does this do?

It shows a responsive site footer with a brand block and blurb, three columns of links, a row of social icons, and a bottom bar with copyright and legal links. The columns collapse on narrow screens.

### How is it used?

```html
<footer class="footer">
  <div class="ft-cols">
    <div class="ft-brand">
      <div class="logo"><svg>...</svg>EaseMotion</div>
      <p>Short blurb.</p>
      <div class="ft-social"><a href="#"><svg>...</svg></a></div>
    </div>
    <nav class="ft-group"><h4>Product</h4><a href="#">Features</a></nav>
  </div>
  <div class="ft-bottom"><span>© 2026 EaseMotion</span><div class="ft-legal"><a href="#">Privacy</a></div></div>
</footer>
```

The top area is a four column grid that becomes two columns below 560px, with the brand block spanning the full width. The bottom bar sits under a divider.

### Why is it useful?

Almost every marketing site ends with a footer. This lays out a multi column footer with a brand block, link groups, social icons, and a bottom bar that reflows responsively, using only CSS and inline SVG so there are no external assets.
