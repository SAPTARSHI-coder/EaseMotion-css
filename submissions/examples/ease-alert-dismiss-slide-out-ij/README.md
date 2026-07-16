# Alert Dismiss Slide Out

## What does this do?

Creates dismissible alert banners that slide out to the right and fade away when the user clicks the close button. Four alert types are available: info, success, warning, and error.

## How is it used?

Add the `ads-alert` class together with a type modifier (`ads-info`, `ads-success`, `ads-warning`, or `ads-error`) to a container element:

```html
<div class="ads-alert ads-info">
  <span class="ads-icon">&#8505;</span>
  <span class="ads-msg">Your profile has been updated.</span>
  <button class="ads-close" aria-label="Dismiss">&times;</button>
</div>
```

Add the `ads-dismissing` class programmatically via JavaScript to trigger the slide-out animation:

```js
alertEl.classList.add('ads-dismissing');
```

## Why is this useful?

Feedback banners are a common UI pattern, but abrupt removal can be jarring. This component provides a smooth, compositor-friendly slide-and-fade exit transition that respects the user's `prefers-reduced-motion` setting. The lightweight CSS-only animation layer makes it easy to integrate into any project without a framework dependency.
