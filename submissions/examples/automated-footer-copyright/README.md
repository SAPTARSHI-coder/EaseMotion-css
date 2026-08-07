# EaseMotion CSS — Interactive Demo

This folder contains the interactive demo page for **EaseMotion CSS**, showcasing buttons, cards, animations, and layout utilities.

## Files

- `demo.html` — the demo page markup. Inline demo-specific CSS has been extracted into `style.css` for better separation of concerns and easier maintenance.
- `style.css` — all demo-specific styles (nav, hero, sections, cards, animation boxes, badges, footer, divider) that were previously embedded in a `<style>` block inside `demo.html`.
- `README.md` — this file.

## What changed in this PR

- Moved the inline `<style>` block out of `demo.html` into a standalone `style.css`, linked via:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- No visual or functional changes — all class names, layout, and behavior (theme toggle, scroll spy, animation replay) remain identical.

## Footer / Copyright

The footer displays a dynamic copyright year:

```html
<footer class="demo-footer">
  <div class="ease-container">
    <p style="margin:0; color:rgba(255,255,255,0.3);">
      Built with ❤️ using <strong style="color:var(--ease-color-primary-light);">EaseMotion CSS</strong> — the
      animation-first, human-readable CSS framework.
    </p>
    <p style="margin:0.5rem 0 0; color:rgba(255,255,255,0.22); font-size:0.875rem;">
      &copy; <script>document.write(new Date().getFullYear())</script> EaseMotion CSS
    </p>
  </div>
</footer>
```

The year is generated at page-load time via `document.write(new Date().getFullYear())`, so it always shows the current year without needing manual updates.

## Usage

Open `demo.html` in a browser (served alongside `easemotion.min.css`, `docs.css`, and the `assets/` folder) to view the live demo.