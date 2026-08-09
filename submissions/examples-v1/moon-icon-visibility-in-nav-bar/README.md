## What does this do?
This demo fixes the moon icon visibility in the theme toggle when the page is in light mode.

## How is it used?
No extra HTML is needed. The change is applied through the CSS selector `[data-theme="light"] .theme-toggle-btn .moon-icon`, with the added line `color: #fffffe;` to make the moon icon visible in light mode.

```css
[data-theme="light"] .theme-toggle-btn .moon-icon {
  opacity: 1;
  transform: rotate(0deg) scale(1);
  color: #fffffe;      /* REMOVES THE VISIBILITY ISSUE OF THE MOON ICON IN LIGHT MODE BY GIVING IT A SOLID BORDER COLOR. */
}
```

## Why is it useful?
It improves contrast and keeps the toggle icon easy to see, which makes the navbar feel more polished and accessible.