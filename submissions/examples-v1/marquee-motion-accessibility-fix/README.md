# Fix: `.ease-marquee-fade-edges` under `prefers-reduced-motion`

**Fixes issue:** #4248

## Problem
The existing `prefers-reduced-motion` block only stopped `.ease-marquee-track`
scroll animation. The `-webkit-mask-image` fade and any transitions on the
container and child elements remained active — still triggering for users
with vestibular disorders.

## Fix
Expanded the media query to suppress all animations and transitions on
`.ease-marquee` and every descendant element.

## Files
- `style.css` — the fix
- `demo.html` — visual test page

## Testing
1. Open `demo.html` in a browser
2. Enable reduced motion: System Settings → Accessibility → Reduce Motion
3. Reload the page
4. Confirm: no scrolling, no fade edge animation, no hover transitions

## Proposed class integration
Merge into `components/ease-marquee.css` under the existing
`prefers-reduced-motion` block.