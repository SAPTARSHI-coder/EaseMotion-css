# Bug #7748 — Tabs Panel Toggling Fails for Tabs 7 and 8

## The bug
`components/tabs.css` defines five groups of `nth-of-type` selectors that all needed to stay in sync to support 8 tabs:

1. Focus-visible outline on labels
2. Checked label color
3. Underline translation (`translateX`)
4. **Content panel toggling (`display: block`)**
5. **Auto-width fallback active indicator (`.ease-tabs-auto`)**

Groups 4 and 5 only went up to `:nth-of-type(6)`, while the others were intended to support 8. As a result, clicking Tab 7 or Tab 8 moved the underline indicator correctly, but `.ease-tab-panel:nth-of-type(7)` and `:nth-of-type(8)` had no `display: block` rule — so the content panel stayed blank (`display: none` from the base `.ease-tab-panel` rule never got overridden).

## The fix
Extended all five selector groups consistently to `:nth-of-type(8)`:

```css
/* Content Panel toggling — now goes to 8 */
.ease-tab-input:nth-of-type(7):checked ~ .ease-tabs-content .ease-tab-panel:nth-of-type(7),
.ease-tab-input:nth-of-type(8):checked ~ .ease-tabs-content .ease-tab-panel:nth-of-type(8) {
  display: block;
}

/* Auto-width fallback indicator — now goes to 8 */
.ease-tabs-auto .ease-tab-input:nth-of-type(7):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(7),
.ease-tabs-auto .ease-tab-input:nth-of-type(8):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(8) {
  border-bottom: 2px solid var(--ease-color-primary);
}
```

Also extended the underline translation to `translateX(600%)` / `translateX(700%)` for tabs 7/8, and added the matching `focus-visible` and `:checked` color rules for tabs 7/8, so all five groups are now consistent.

## Files
- `tabs.css` — the full corrected `components/tabs.css`, ready for the maintainer to apply over the existing file
- `demo.html` — an 8-tab layout demonstrating that Tab 7 and Tab 8 now correctly show their panels with the fixed CSS

## How to verify
Open `demo.html` and click through all 8 tabs. Before the fix, Tab 7 and Tab 8 would move the underline but show no content. With this `tabs.css`, all 8 panels display correctly.

## Why it fits EaseMotion CSS
This is a direct fix for the bug reported in #7748 in `components/tabs.css`. The fix restores the framework's stated 8-tab support, which was previously broken for the last 2 of 8 tabs across two separate selector groups (content panel toggling and the auto-width fallback indicator). The corrected `tabs.css` is provided here for the maintainer to review and apply to `components/tabs.css` directly, per repo policy that contributor PRs only touch `submissions/examples/`.
