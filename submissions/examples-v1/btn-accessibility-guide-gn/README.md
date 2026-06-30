# Button Accessibility & Interaction Feedback Guide (#4563)

> **Audit result:** `components/buttons.css` already implements most of the requested CSS-level improvements:
>
> - `.ease-btn:focus-visible` — visible focus ring via `--ease-btn-focus`/`--ease-color-primary` (line 41)
> - `.ease-btn:active` — scale feedback (line 36), combined with `.ease-btn-hover:active` lift+squish (added in #3650)
> - `.ease-btn:disabled` / `.ease-btn[disabled]` / `.ease-btn-disabled` — consistent disabled styling across all interaction states (lines 189–214)
> - `.ease-btn-loading` — spinner overlay that hides button text (lines 218+)
>
> The remaining gaps in the issue's checklist (proper ARIA attributes, consistent usage across variants) are **HTML-authoring concerns**, not missing CSS. This submission is a usage guide.

1. **What does this add?** A reference `demo.html` pairing each existing `.ease-btn` state with the correct ARIA attribute:
   - **Disabled:** `disabled aria-disabled="true"`
   - **Loading:** `.ease-btn-loading` + `aria-busy="true"` + a visually-hidden `role="status" aria-live="polite"` announcement
   - **Icon-only:** `aria-label` (required since there's no visible text for screen readers)
   - **Toggle buttons:** `aria-pressed` to communicate on/off state
2. **How is it used?** Copy the markup patterns from `demo.html` — no new CSS classes are introduced.
3. **Why is it useful?** Closes the gap between "the CSS supports accessible states" and "developers know how to wire up the matching ARIA attributes" — directly addressing the issue's checklist items around ARIA and consistent behavior, without altering the existing design system (per the issue's note: "should not change the overall design system, only enhance usability and accessibility").
