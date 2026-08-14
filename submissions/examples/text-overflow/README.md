# Text Overflow Utilities

CSS utility classes for the `text-overflow` property.

## Usage

```html
<div class="truncate">...</div>
```

## Classes

- `.truncate` — overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
- `.text-ellipsis` — text-overflow: ellipsis;
- `.text-clip` — text-overflow: clip;
- `.text-clip-2` — -webkit-line-clamp: 2; -webkit-box-orient: vertical; display: -webkit-box; overflow: hidden;
- `.text-clip-3` — -webkit-line-clamp: 3; -webkit-box-orient: vertical; display: -webkit-box; overflow: hidden;
- `.text-clip-4` — -webkit-line-clamp: 4; -webkit-box-orient: vertical; display: -webkit-box; overflow: hidden;
- `.text-clip-5` — -webkit-line-clamp: 5; -webkit-box-orient: vertical; display: -webkit-box; overflow: hidden;
- `.text-clip-6` — -webkit-line-clamp: 6; -webkit-box-orient: vertical; display: -webkit-box; overflow: hidden;
- `.line-clamp-2` — -webkit-line-clamp: 2; -webkit-box-orient: vertical; display: -webkit-box; overflow: hidden;
- `.line-clamp-3` — -webkit-line-clamp: 3; -webkit-box-orient: vertical; display: -webkit-box; overflow: hidden;
- `.line-clamp-4` — -webkit-line-clamp: 4; -webkit-box-orient: vertical; display: -webkit-box; overflow: hidden;
- `.line-clamp-none` — -webkit-line-clamp: unset; -webkit-box-orient: unset; display: block; overflow: visible;
- `.text-overflow-clip` — text-overflow: clip;
- `.text-overflow-ellipsis` — text-overflow: ellipsis;
- `.text-overflow-inherit` — text-overflow: inherit;
- `.text-overflow-initial` — text-overflow: initial;
- `.text-overflow-unset` — text-overflow: unset;
- `.text-overflow-revert` — text-overflow: revert;
- `.text-overflow-auto` — text-overflow: auto;
- `.overflow-ellipsis` — overflow: hidden; text-overflow: ellipsis; white-space: nowrap;

## Responsive

- `sm:` prefix for 640px+
- `lg:` prefix for 1024px+

## Dark Mode

- `dark:` prefix for `prefers-color-scheme: dark`
## Reduced Motion

- `motion-safe:` prefix for `prefers-reduced-motion: reduce`
