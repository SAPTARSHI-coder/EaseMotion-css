# Currency Input

## What does this do?

A currency field that formats live as the user types, treating input like
a calculator display — digits fill in from the right, with the value always
interpreted as cents and re-rendered as a formatted dollar amount
(`$1,234.56`) on every keystroke.

## How is it used?

```html
<input id="cif-input" type="text" inputmode="numeric" value="$0.00" oninput="cifFormat(this)" />
<input type="hidden" id="cif-hidden" name="amount" value="0.00" />
```

`cifFormat` strips all non-digit characters from the current value,
treats the remaining digit string as cents, and formats it via
`toLocaleString('en-US', { style: 'currency', currency: 'USD' })`. A
parallel hidden input holds the raw decimal value (`"12.34"`, not the
formatted display string) for actual form submission.

## Why is it useful?

Formatting a currency input live (adding commas, a currency symbol, and a
fixed two-decimal display) means the string's length and character
positions change on every keystroke — a comma appearing or disappearing as
the number crosses a thousands boundary shifts every character after it.
Naively leaving the caret wherever `setSelectionRange` last put it (or not
managing it at all) means the caret visibly jumps to the wrong position
after each reformat, making it hard to keep typing fluidly. Tracking the
caret's distance from the *end* of the string (rather than from the start)
and restoring that same distance after reformatting works reliably because
new digits are always typed at the rightmost position — the "distance from
end" stays meaningful across a reformat in a way that "distance from
start" doesn't, since characters can be inserted anywhere before the caret.

The hidden input holding a clean decimal value (`"12.34"`) exists
because the visible field's formatted text (`"$1,234.56"`) is meant for
display, not for parsing by a form handler — submitting the raw decimal
value directly avoids every consumer of the form needing to strip currency
formatting characters back out themselves.
