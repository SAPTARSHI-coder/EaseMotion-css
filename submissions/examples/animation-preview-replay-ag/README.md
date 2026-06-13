# Animation Preview Replay on Click

## What does this do?

This contribution enables CSS animations in preview cards to be re-triggered and replayed when the user clicks on the card, without requiring a page refresh.

## How is it used?

Add a click event listener to the wrapper card or preview container to temporarily remove and re-add the animation class after forcing a layout reflow:

```javascript
card.addEventListener("click", () => {
  const previewBox = card.querySelector(".preview-box");
  const animClass = "your-animation-class";

  // 1. Remove the animation class
  previewBox.classList.remove(animClass);

  // 2. Trigger reflow to clear the animation state
  void previewBox.offsetWidth;

  // 3. Re-add the animation class to replay the animation
  previewBox.classList.add(animClass);
});
```

## Why is it useful?

EaseMotion CSS is built around creating highly interactive, fluid, and intuitive animations. If a user can only watch an animation play once upon initial page render, it makes browsing and comparing animations on preview tools extremely frustrating. By enabling user-triggered interactive replays via clicking, developers and designers can test, observe, and adjust animations multiple times, enhancing the accessibility and user experience of EaseMotion documentation tools.

## Tech Stack

- HTML
- CSS
- JavaScript (for triggering the layout reflow and animation reset)

## Preview

Open `demo.html` directly in your browser to verify that clicking on any of the preview cards restarts and replays its corresponding animation.

## Contribution Notes

- Maintainer will integrate this click trigger into the core documentation scripts before releasing the feature.
