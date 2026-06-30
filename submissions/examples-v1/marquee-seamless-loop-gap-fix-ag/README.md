# [BUG FIX] .ease-marquee seamless loop gap alignment

## What does this do?
Resolves loop stutters in infinite scroll marquees by correcting translation offset math for gaps.

## How is it used?
```html
<div class="ease-marquee"><div class="ease-marquee-track">...</div></div>
```

## Why is it useful?
Aligns horizontal scrolling animation frames correctly for tickers and logo grids.

## Fixes
Fixes #10972
