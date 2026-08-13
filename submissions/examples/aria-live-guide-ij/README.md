# ARIA Live Region Usage Guide

1. What does this do? A practical demo showing how to use `aria-live` regions alongside EaseMotion animations — covering toast notifications (`aria-live="polite"`), loading states (`aria-live="polite"` with `role="status"`), and error alerts (`aria-live="assertive"` with `role="alert"`).

2. How is it used? Open `demo.html` and use each button to trigger announcements:
   - **Toast**: `aria-live="polite" aria-atomic="true"` — screen reader announces after finishing current speech
   - **Loading**: `role="status" aria-live="polite"` with a `.sr-only` text element that updates
   - **Error**: `role="alert" aria-live="assertive"` — screen reader interrupts to announce immediately
   - Test with NVDA, VoiceOver, or JAWS to verify announcement timing

3. Why is it useful? Fills a critical accessibility documentation gap — contributors learn when to use `polite` vs `assertive`, how to pair live regions with animated content, and common screen reader gotchas like redundant announcements.
