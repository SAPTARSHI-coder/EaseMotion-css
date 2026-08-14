# Side-by-side Diff

## What does this do?

A two-column code diff that collapses to a stacked layout on narrow screens, with
additions and deletions marked by gutter glyphs.

## How is it used?

```html
<div class="dsb">
  <div class="dsb-side"><h2>Before</h2>
    <pre><code><span class="dsb-l dsb-l--del">removed line</span></code></pre></div>
  <div class="dsb-side"><h2>After</h2>
    <pre><code><span class="dsb-l dsb-l--add">added line</span></code></pre></div>
</div>
```

## Why is it useful?

Side-by-side diffs are the standard way to present a code change in documentation,
and they are usually laid out as two fixed-width columns that become unreadable
below about 40rem — two 20-character code columns convey nothing. Collapsing to a
single stacked column at that breakpoint keeps the change legible on a phone,
which is where a lot of code review actually happens.

`min-width: 0` on the columns is required rather than decorative: grid items
default to `min-width: auto`, so a `<pre>` with long lines refuses to shrink and
blows out the whole grid instead of scrolling inside its own column.

Marking change type with `+` and `−` gutter glyphs rather than background colour
alone means the diff is readable with colour vision deficiency, and it is the only
thing that survives `forced-colors`, where the tints are replaced and the inset
shadow is not painted at all — the fallback swaps to a real `border-left`.

The glyphs are pseudo-element content, so copying the code does not pick up diff
punctuation.
