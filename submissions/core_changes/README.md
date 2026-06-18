# Remove Empty src="" Attribute on Image

## What does this do?
Removes the empty `src=""` attribute on an `<img>` element in `team-availability-board-zt/demo.html` and replaces it with text initials (RG), matching the convention used by other avatars in the same file.

## How is it used?
Before (line 36):
```html
<div class="avatar"><img src="" alt="" aria-hidden="true"></div>
```
After:
```html
<div class="avatar">RG</div>
```

## Why is it useful?
An empty `src=""` triggers a faulty browser request to the current directory, causing network errors and console warnings. Using text initials keeps the design consistent with the other avatars (AL, DN, OM, CI).

Fixes #12199
