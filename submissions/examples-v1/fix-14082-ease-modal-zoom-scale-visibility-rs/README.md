# Fix for Issue #14082: ease-modal-zoom scale visibility

## The Bug
The `.ease-modal-zoom` animation variant (along with `.ease-modal-slide` and `.ease-modal-fade`) defines a `transition` that explicitly includes `opacity`, but these modifier classes lacked the actual `opacity: 0` initial state and `opacity: 1` active state properties.

When used strictly alongside the base `.ease-modal` class, the animations work because `.ease-modal` provides the missing opacity properties. However, if a user applies `.ease-modal-zoom` to a standalone custom element (like a custom dialog box, an image, or a custom container) within the overlay, the opacity transition fails. As a result, the element abruptly pops into full visibility and only scales, breaking the smooth fade-in visual design.

## The Fix
This fix adds the missing `opacity: 0` property to the base animation variant classes, and the `opacity: 1` property to their respective active states. This ensures that the elements always fade in smoothly alongside their scale/translate transforms, regardless of whether they are attached to a base `.ease-modal` or functioning as standalone components.

## How to Verify Locally
1. Open `demo.html` in your browser.
2. Under the **Before (Broken)** section, click the "Toggle Active" button. Notice that the custom container instantly pops into full opacity and only the scale animation is visible (abrupt zoom).
3. Under the **After (Fixed)** section, click the "Toggle Active" button. Notice that the custom container now smoothly fades in while scaling up, successfully completing both the scale and visibility transitions.
