# ease-text-overflow — Text Overflow Utility Classes

## What does this do?

Controls how text behaves when it overflows its container — truncation, ellipsis, clip, and word-break utilities.

## How is it used?

```html
<p class="ease-truncate">Long text gets ellipsis…</p>
<p class="ease-text-clip">Overflow is clipped</p>
<p class="ease-break-all">LongWordThatBreaks</p>
```

### Classes

| Class                       | Property                                                  | Use Case               |
| --------------------------- | --------------------------------------------------------- | ---------------------- |
| `.ease-truncate`            | `text-overflow: ellipsis` + `overflow: hidden` + `nowrap` | Single-line truncation |
| `.ease-text-clip`           | `text-overflow: clip` + `overflow: hidden`                | Hard clip              |
| `.ease-break-normal`        | `word-break: normal`                                      | Default                |
| `.ease-break-all`           | `word-break: break-all`                                   | Break any character    |
| `.ease-break-keep`          | `word-break: keep-all`                                    | No CJK breaks          |
| `.ease-break-word`          | `overflow-wrap: break-word`                               | Break long words       |
| `.ease-whitespace-normal`   | `white-space: normal`                                     | Default wrapping       |
| `.ease-whitespace-nowrap`   | `white-space: nowrap`                                     | No wrapping            |
| `.ease-whitespace-pre`      | `white-space: pre`                                        | Preserve whitespace    |
| `.ease-whitespace-pre-wrap` | `white-space: pre-wrap`                                   | Preserve + wrap        |
