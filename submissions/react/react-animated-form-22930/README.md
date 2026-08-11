# React Animated Form with Inline Validation Feedback (#22930)

This submission fulfills Issue **#22930** by building a production-quality sign-up form that uses EaseMotion CSS classes to animate every validation interaction, shake on invalid submit, and transition to a success screen.

## Animation Inventory

| Trigger | EaseMotion Class | Effect |
|---------|-----------------|--------|
| Error message appears | `.ease-slide-up .ease-duration-fast` | Error bounces up from below the input |
| Valid field confirmed | `.ease-fade-in .ease-duration-fast` | Green "Looks good!" ticks in smoothly |
| Invalid form submitted | `.ease-shake` | Entire form card shakes horizontally |
| Password strength bar | CSS `transition: width, background` | Bar grows and colour-shifts in real-time |
| Valid form submitted | `.ease-fade-out .ease-duration-fast` | Form fades away before success screen |
| Success screen entry | `.ease-slide-up .ease-fade-in` | Confirmation panel bounces into view |

## Architecture Highlights

### Touched / Dirty Tracking
Errors only render after a field has been interacted with (`touched[field] === true`). Submitting the form touches all fields simultaneously, revealing every error in one sweep.

### Shake via `onAnimationEnd`
When invalid submit is detected, `.ease-shake` is applied to the form card. `onAnimationEnd` removes it — so the class can be re-applied cleanly if the user submits again.

### Exit before Unmount
On valid submit, `.ease-fade-out` is applied and `onAnimationEnd` then flips the `submitted` flag, replacing the form with the `<SuccessScreen>` component — no jarring instant-disappear.

### Password Strength Bar
A 4-point scoring function (length, uppercase, number, symbol) drives both the bar width and its colour entirely via CSS `transition`, with no animation library.

## How to View
Double-click `demo.html` — React 18 + Babel via CDN, **no build step required**.

**Try these interactions:**
1. Click "Create Account" immediately to see all errors shake in at once
2. Type in fields to watch per-field validation messages animate
3. Type a password to watch the strength bar grow and shift colour
4. Fill all fields correctly to see the smooth form exit → success transition
