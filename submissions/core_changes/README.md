# Add rel="noopener noreferrer" to External Links

## What does this do?
Adds `rel="noopener noreferrer"` to all `target="_blank"` external links in `docs/index.html` to prevent tabnabbing security vulnerabilities.

## How is it used?
Before (vulnerable):
```html
<a href="https://example.com" target="_blank">Link</a>
```

After (secure):
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Link</a>
```

## Why is it useful?
When a page opens a new tab via `target="_blank"` without `rel="noopener noreferrer"`, the opened page gains partial access to the originating page's `window.opener` object. This can be exploited in tabnabbing attacks where the external page redirects the original tab to a phishing site.

The fix was applied to lines 112 and 697 in `docs/index.html`.

Fixes #12192
