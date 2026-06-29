# ease-reading-flow — Reading Flow Utility Classes

## What does this do?

Controls CSS properties that affect reading flow and text layout — `direction`, `unicode-bidi`, `writing-mode`, `text-orientation`, and `word-break` for multilingual and vertical text support.

## How is it used?

```html
<p class="ease-dir-rtl">النص من اليمين إلى اليسار</p>
<p class="ease-writing-vertical">Vertical text</p>
<p class="ease-break-all">LongUnbrokenWordWillBreak</p>
```

### Classes

| Class | Property | Value |
|---|---|---|
| `.ease-dir-ltr` | `direction` | `ltr` |
| `.ease-dir-rtl` | `direction` | `rtl` |
| `.ease-unicode-normal` | `unicode-bidi` | `normal` |
| `.ease-unicode-embed` | `unicode-bidi` | `embed` |
| `.ease-unicode-bidi-override` | `unicode-bidi` | `bidi-override` |
| `.ease-writing-horizontal` | `writing-mode` | `horizontal-tb` |
| `.ease-writing-vertical` | `writing-mode` | `vertical-rl` |
| `.ease-writing-vertical-lr` | `writing-mode` | `vertical-lr` |
| `.ease-text-orientation-mixed` | `text-orientation` | `mixed` |
| `.ease-text-orientation-upright` | `text-orientation` | `upright` |
| `.ease-break-normal` | `word-break` | `normal` |
| `.ease-break-all` | `word-break` | `break-all` |
| `.ease-break-word` | `word-break` | `break-word` |
| `.ease-keep-all` | `word-break` | `keep-all` |
