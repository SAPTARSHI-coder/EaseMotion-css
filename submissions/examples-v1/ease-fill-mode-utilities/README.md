# Animation Fill Mode Utilities Proposal (`ease-fill-mode-utilities`)

A proposal for `core/utilities.css` adding standard `animation-fill-mode` helper classes.

## 🚀 Features

- **`.em-fill-forwards`**: The element retains the style values that are set by the last keyframe when the animation finishes.
- **`.em-fill-backwards`**: The element will get the style values that is set by the first keyframe during the `animation-delay` period.
- **`.em-fill-both`**: The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions.
- **`.em-fill-none`**: Default. Animation will not apply any styles to the element before or after it is executing.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. Click "Run Animations" to observe the differences. The demo uses a 1-second `animation-delay` to clearly show the effects of `backwards` and `both`.

You can apply the proposed utility classes to any animated element to modify its fill behavior without writing custom CSS:

```html
<div class="em-slide-in em-fill-forwards">
  I will slide in and stay in my final position!
</div>
```

_Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/utilities.css`._

## 🔗 Related Issue

Resolves Issue #16802
