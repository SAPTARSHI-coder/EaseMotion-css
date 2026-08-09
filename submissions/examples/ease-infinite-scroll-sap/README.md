# ease-infinite-scroll-sap

A scrollable container that loads more items automatically as the user nears the bottom, each new item fading in individually with a bouncing-dots loader between batches.

## Usage
1. Include `style.css`.
2. Add markup: a scrollable container with an item list and a loader row.
3. Attach the `scroll` listener from `demo.html`, which checks proximity to the bottom and triggers `loadItems()`.

## Customization
- `loadItems(n)`: batch size per load and the simulated network delay.
- `count >= 60`: total item cap — replace with real pagination/end-of-data logic.
- `.scroll-item` fade distance/duration.

## Notes
- Scroll-bottom detection uses `scrollTop + clientHeight >= scrollHeight - 40`, a 40px threshold before the true bottom so loading feels proactive rather than delayed.
- A `loading` flag prevents duplicate simultaneous load triggers while a batch is in flight.
- Respects `prefers-reduced-motion`: item fade-in and loader dot bounce are both disabled; items simply appear.