# Card Footer Overflow Fix

A fix for card footer action buttons overflowing outside the card
boundary on smaller screens.

## 1. What does this do?

Fixes the card footer layout so that multiple action buttons (e.g.
Edit / Preview / Download / Share) wrap onto additional rows instead
of overflowing past the card's edge when the available width is too
narrow to fit them all on one line.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step or server
required. It shows two cards side by side:

- **Broken**: reproduces the original issue using the exact markup
  from the bug report — a `.card-footer-broken` with no `flex-wrap`,
  so the buttons overflow past the card edge.
- **Fixed**: the corrected version using `.card-footer` with
  `flex-wrap: wrap` on the container and `flex: 1 1 auto; min-width: 0;`
  on each button, so buttons wrap onto a new row and shrink instead of
  spilling outside the card.

To apply the fix in your own project, give the footer container
`display: flex; flex-wrap: wrap; gap: <spacing>;` and give each footer
button `flex: 1 1 auto; min-width: 0;` so buttons can shrink and wrap
instead of forcing horizontal overflow.

## 3. Why is it useful?

Cards with multiple footer actions are a common UI pattern, and this
overflow bug breaks usability on any narrow viewport — buttons become
partially hidden or impossible to tap. The fix keeps every action
visible and reachable at any screen size without changing the visual
design of the buttons themselves, which fits EaseMotion CSS's goal of
components that stay usable and consistent across breakpoints.

Fixes #55659.
