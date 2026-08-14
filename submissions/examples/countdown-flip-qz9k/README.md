# Countdown

## What does this do?

An hours:minutes:seconds countdown where each digit's text is generated CSS
content, read from a per-unit custom property (`--cd-content`) that the
script updates once per tick.

## How is it used?

```html
<span class="cd-unit" id="cd-h"><span class="cd-num"></span><span class="cd-label">hrs</span></span>
```

```js
el.style.setProperty('--cd-content', '"' + text + '"');
```

`.cd-num::before { content: var(--cd-content, "00"); }` renders the digits;
the script never sets `textContent` on the unit — only the custom property.

## Why is it useful?

A countdown ticking every second is a sustained, repeating DOM write; doing
that via `textContent` on a real text node works fine, but every popular
"animated flip" variant of a countdown tends to rebuild inner markup
(nested spans for old/new digit) on every tick, which means new DOM nodes
created and discarded once per second for as long as the countdown runs.
Routing the digit through a CSS custom property read by generated content
means each tick is a single `style.setProperty` call — no nodes created,
no `innerHTML` parsing, just the browser's cheapest possible content update.

The `cdSet` helper also bails out early if the formatted value hasn't
actually changed (`data-value` compared before writing), so a tick where
the number is unchanged (impossible for seconds, but relevant if this
pattern is reused for a slower-ticking unit) touches nothing at all.
