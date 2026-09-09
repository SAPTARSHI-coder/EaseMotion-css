# Accessible Focus Rings (`outline` and `:focus-visible`)

This submission demonstrates how to implement highly visible, WCAG 2.1 AA compliant focus rings that adapt to complex backgrounds and support Windows High Contrast Mode.

## The Problem: `outline: none`

The most common accessibility failure on the web is developers globally setting `*:focus { outline: none; }` because they dislike how the default blue/black browser focus ring looks when a mouse user clicks a button.

By removing the focus ring entirely, you completely lock out keyboard-only users, as they have absolutely no way to see which element on the page they are currently interacting with.

## The Solution: `:focus-visible`

Modern CSS provides the `:focus-visible` pseudo-class. It allows you to style focus rings *only* when the browser determines the user needs them (e.g., when navigating via the `Tab` key), while hiding them when a mouse user clicks the element.

```css
/* 1. Remove focus for mouse users */
.btn:focus:not(:focus-visible) {
    outline: none;
}

/* 2. Provide a beautiful, highly-visible focus ring for keyboard users */
.btn:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 3px;
}
```

## Why `outline`, not `box-shadow`?

Many developers prefer to use `box-shadow` for focus rings because it respects `border-radius`. **However, `box-shadow` is completely stripped away in Windows High Contrast (Forced Colors) Mode.** 

The CSS `outline` property is strictly preferred for accessibility because the browser automatically maps it to the system's `Highlight` color in High Contrast Mode. 

*If you must use `box-shadow`, you are required to use a media query to fallback to an `outline` in forced-colors mode.*

## Dealing with Complex Backgrounds (Gradients)

If your button sits on a solid blue background, a blue focus ring will be completely invisible. 
If your button sits on a complex gradient, you cannot guarantee that *any* single color focus ring will have sufficient 3:1 contrast against the background.

**The Fix:** Use `outline-offset`.

By setting `outline-offset: 3px`, you create a transparent gap between the button and the focus ring. This "halo" effect guarantees that the focus ring will always have contrast against the button itself, and the background will show through the gap, ensuring visibility regardless of how complex the gradient is.

```css
.btn:focus-visible {
    outline: 3px solid white;
    outline-offset: 3px; /* Creates the necessary contrast gap */
}
```
