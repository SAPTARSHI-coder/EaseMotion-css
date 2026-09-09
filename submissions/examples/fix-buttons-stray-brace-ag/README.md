# Fix: Stray Closing Brace in buttons.css (Issue #11738)

**What does this do?**
This submission reproduces and demonstrates the impact of the stray unmatched `}` at line 330 of `components/buttons.css` (reported in Issue #11738), and provides a corrected standalone CSS reference that bundlers and Stylelint can parse cleanly.

**How is it used?**
```html
<button class="ease-btn ease-btn-primary ease-btn-hover">Primary</button>
<button class="ease-btn ease-btn-success">Success</button>
<button class="ease-btn ease-btn-danger">Danger</button>
<button class="ease-btn ease-btn-outline">Outline</button>
<button class="ease-btn ease-btn-loading">Loading</button>
<button class="ease-btn" disabled>Disabled</button>
```

**Why is it useful?**
The stray `}` at the end of `components/buttons.css` is a CSS syntax error that:

1. Causes Stylelint to report `Unexpected closing brace` — breaking CI validation
2. Can cause CSS bundlers/minifiers to silently misparse the file when it is concatenated into `easemotion.min.css`, potentially dropping rules after concatenation
3. Is an invalid construct per the CSS specification

This submission provides a clean, corrected copy of the button CSS for the maintainer to use as a reference when applying the one-line fix (removing the orphan `}` from line 330 of `components/buttons.css`).

## Reproduction

Run Stylelint against the original file to see the error:
```bash
npx stylelint components/buttons.css
# → Unexpected closing brace (CssSyntaxError) at line 330
```

## Fix

Remove the lone `}` on line 330 of `components/buttons.css`:

```diff
 }
-}
```

## References

- Issue: https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/11738
- Affected file: `components/buttons.css` line 330
