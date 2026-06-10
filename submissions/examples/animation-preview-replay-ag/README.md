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
