# Add Hover Elevation Effect to Shadow Card

## Description

This pull request enhances the **Shadow Card** component by introducing a hover elevation effect. Previously, the `ease-card-shadow` utility did not provide any noticeable visual feedback when interacting with the card, making it appear nearly identical to the Base Card.

With this update, the Shadow Card now lifts slightly and displays a stronger shadow on hover, creating a clear sense of depth and improving the overall user experience.

---

## Motivation

The documentation describes the Shadow Card as:

> **"Adds depth using the `ease-card-shadow` utility."**

However, the card did not visually communicate this effect during interaction. Since shadow-based components are intended to convey elevation, adding a hover animation makes the utility more intuitive and aligns it with modern UI design patterns.

This enhancement improves visual clarity while maintaining the existing appearance of the component.

---

## What Changed

- Added a smooth hover transition for the Shadow Card.
- Increased the shadow intensity on hover.
- Added a slight upward movement using `transform: translateY(...)`.
- Added smooth CSS transitions for shadow and transform.
- Preserved the original design and layout.
- Improved the visual distinction between the Base Card and the Shadow Card.

---

## Before

- Shadow Card appeared almost identical to the Base Card.
- Hovering over the card produced little or no visual feedback.
- The elevation effect described in the documentation was difficult to notice.

---

## After

- Hovering over the Shadow Card creates a noticeable elevation effect.
- The card smoothly lifts upward.
- A stronger box-shadow is applied.
- The interaction feels more responsive and modern.
- The purpose of the `ease-card-shadow` utility becomes immediately apparent.

---

## Implementation Details

The enhancement is implemented entirely in CSS.

The hover state includes:

- Smooth transitions
- Increased shadow opacity
- Slight upward translation
- Improved visual depth

No JavaScript was required.

---

## Benefits

- Improves user experience.
- Better demonstrates the purpose of the Shadow Card utility.
- Provides clear visual feedback during interaction.
- Makes the documentation examples more engaging.
- Follows modern UI/UX best practices.
- Maintains backward compatibility.

---

## Testing

The changes were tested by:

- Hovering over the Shadow Card.
- Comparing the Shadow Card with the Base Card.
- Ensuring smooth animations.
- Verifying there are no layout shifts.
- Checking responsiveness across different viewport sizes.

---

## Browser Compatibility

Tested on:

- Google Chrome
- Microsoft Edge

The implementation uses standard CSS properties that are supported by all modern browsers.

---

## Screenshots

### Before

- Shadow Card displayed little or no elevation.
- Minimal distinction from the Base Card.

### After

- Card lifts slightly on hover.
- Stronger shadow is applied.
- Improved visual depth and interaction.

---

## Why This Fits EaseMotion CSS

EaseMotion CSS focuses on creating human-readable, animation-first UI utilities.

Adding a hover elevation effect to the Shadow Card aligns with this philosophy by making interactions more expressive without introducing complexity. The enhancement keeps the API simple while providing a more polished and intuitive user experience.

---

## Checklist

- [x] Hover elevation effect implemented
- [x] Existing functionality preserved
- [x] Responsive behavior maintained
- [x] No breaking changes introduced
- [x] Tested in modern browsers
- [x] Documentation behavior matches the visual output

---

## Impact

This is a **non-breaking UI enhancement**.

No existing APIs or classes have been modified, and no migration is required. Existing users can continue using the component without any changes while benefiting from an improved interactive experience.