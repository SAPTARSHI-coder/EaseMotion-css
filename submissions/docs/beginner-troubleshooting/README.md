# Beginner Troubleshooting Guide

## Overview

New to EaseMotion CSS? If an animation or style is not working as expected, don't worry. Most problems are caused by a small setup mistake.

This guide provides simple checks that beginners can try before looking for more advanced solutions.

---

## 1. My animation is not showing

### What you see

You added an EaseMotion animation class, but the element looks completely normal.

### What to check

- Make sure the EaseMotion CSS file is loaded.
- Check that the animation class is spelled correctly.
- Make sure the class is added to the correct HTML element.

### Example

```html
<div class="ease-fade-in">
    Hello!
</div>
```

If the class is misspelled, the animation will not be applied.

---

## 2. My CSS changes are not appearing

### What you see

You changed your HTML or CSS, but the browser still shows the old result.

### Try this

1. Save your files.
2. Refresh the page.
3. If the old result is still visible, perform a hard refresh.
4. Check that you are editing the file actually used by your page.

---

## 3. My custom CSS is overriding the animation

### What you see

The EaseMotion class is present, but your animation looks different or does not behave as expected.

### What to check

Your own CSS may be overriding an EaseMotion rule.

For example, adding your own `animation` or `transform` property to the same element can affect the EaseMotion animation.

Try temporarily removing the custom rule to see if the animation works normally.

---

## 4. The animation works on one page but not another

### What you see

An animation works correctly on one page but not on another.

### What to check

Make sure EaseMotion CSS is loaded on the page where the animation is being used.

If you are using a framework, check that the stylesheet is imported in the correct part of your application.

---

## 5. Scroll reveal is not working

### What you see

An element using a scroll-reveal effect does not animate when you scroll.

### What to check

Scroll-based effects may require the appropriate EaseMotion reveal script in addition to the CSS.

Check the EaseMotion documentation for the required reveal setup and make sure the script is loaded correctly.

---

## 6. Animations are not moving on my device

### What you see

Animations appear reduced or do not play.

### What to check

Your device or browser may have a reduced-motion setting enabled.

EaseMotion CSS can respect the user's `prefers-reduced-motion` preference. This is intentional because some users prefer fewer animations.

If you are testing an animation and cannot see it, check your browser or device accessibility settings.

---

## 7. I am using React or another framework

### What to check

When using a framework, make sure:

- The EaseMotion stylesheet is imported.
- The animation class is applied to the correct element.
- You use the framework's correct syntax for HTML classes.

For example, in React:

```jsx
<div className="ease-fade-in">
    Hello!
</div>
```

Remember that React uses `className` instead of `class`.

---

## Quick Checklist

Before looking for an advanced solution, check:

- [ ] Is the EaseMotion CSS file loaded?
- [ ] Is the animation class spelled correctly?
- [ ] Is the class applied to the correct element?
- [ ] Is custom CSS overriding the animation?
- [ ] Did I save and refresh the page?
- [ ] Does the effect require additional JavaScript?
- [ ] Is reduced motion enabled?
- [ ] If using a framework, is the stylesheet imported correctly?

---

## Still Having Trouble?

If these checks do not solve the problem, look at the detailed EaseMotion documentation and existing troubleshooting resources for more advanced cases.

## Why This Guide Exists

EaseMotion CSS is designed to be easy to use, but beginners can still run into small issues while getting started. This guide provides a quick first step before moving on to more detailed troubleshooting.