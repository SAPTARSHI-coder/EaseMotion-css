# Overscroll Behavior Utilities Proposal (`overscroll-behavior-tm`)

A proposal for `core/utilities.css` adding standard CSS overscroll behavior utility classes.

## 🚀 Features

- **Overscroll Behavior Utilities**: Classes to control what happens when you hit the boundary of a scrolling area.
  - `.overscroll-auto`, `.overscroll-contain`, `.overscroll-none`
  - Axis specific: `.overscroll-[x|y]-[auto|contain|none]`

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. Scroll the inner container to the bottom to see `.overscroll-contain` prevent the parent page from scrolling!

You apply this class to any scrollable container:

```html
<div class="overscroll-contain" style="overflow-y: scroll; height: 300px;">
  <!-- Lots of content -->
</div>
```

*Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/utilities.css`.*

## 🔗 Related Issue
Resolves Issue #19132
