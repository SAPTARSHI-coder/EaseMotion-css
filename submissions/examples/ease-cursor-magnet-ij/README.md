# Cursor Magnet

A CTA button that is magnetically attracted to the cursor within a radius, with a click ripple and springy release.

## How is it used?

Wrap the button in a `.magnet-wrap` container and drive two CSS variables from JavaScript:

```html
<div class="magnet-wrap" id="magnetWrap">
  <button class="magnetic">Get Started</button>
</div>
```

```js
btn.style.setProperty('--mx', dx + 'px');
btn.style.setProperty('--my', dy + 'px');
```

The button reads `--mx` / `--my` in its `translate()` transform and springs back with a bounce curve when the cursor leaves. Clicking spawns a `.ripple` span that scales out via `rippleExpand`.

## Why is it useful?

Magnetic interactions give buttons a tactile, premium feel and are a signature pattern in modern landing pages. This component packages the whole effect — springy translate, clamped radius, hover shadow lift, and material-style ripple — behind two CSS variables and a tiny event handler, matching EaseMotion's class-driven, dependency-free approach.
