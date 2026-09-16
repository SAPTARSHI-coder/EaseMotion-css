# ease-card-stack-swipe

A Tinder-style stacked card deck — drag the top card left/right to swipe it away, revealing the next card underneath.

## Usage
1. Include `style.css`.
2. Stack cards in DOM order (first child = top card):
```html
   <div class="card-stack">
     <div class="stack-card">Card 1</div>
     <div class="stack-card">Card 2</div>
     <div class="stack-card">Card 3</div>
   </div>
```
3. Attach the drag handling from `demo.html` to each card.

## Customization
- `:nth-child(2)`/`:nth-child(3)` scale/translateY/opacity: how much the stacked-behind cards peek out.
- Swipe threshold (`100` in JS): how far a drag must travel to count as a swipe vs. snap back.
- `swipe-out-left`/`-right` transform distance and rotation for exit style.

## Notes
- Only the top card (`:nth-child(1)`) is draggable in this demo; cards behind it automatically become "top" once the card above is removed, since CSS `:nth-child` recalculates on DOM changes.
- During active drag, `transition: none` is applied so the card tracks the cursor/finger 1:1; on release, the transition returns for the snap-back or swipe-out animation.
- Supports both mouse and touch input via parallel event listeners.