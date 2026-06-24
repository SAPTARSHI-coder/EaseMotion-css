# Fix: Deprecate .em-badge Legacy Prefix in badges.css

## Problem

`components/badges.css` exported both `.em-badge` and `.ease-badge` for every badge variant with no documentation indicating that `.em-*` is a legacy prefix. The entire rest of the framework uses `.ease-*` exclusively — the dual prefix caused confusion about which class to use.

## Solution

Document `.em-*` selectors as deprecated with `/* @deprecated */` inline comments and a deprecation notice block, while keeping them functional for backward compatibility. Reorder selectors to put `.ease-*` first (canonical) in every rule.

## Usage

**Use the canonical `.ease-badge` class:**

```html
<span class="ease-badge">New</span>
<span class="ease-badge ease-badge-danger">Error</span>
<span class="ease-badge ease-badge-success">Done</span>
<span class="ease-badge ease-badge-sm">Tiny</span>
<span class="ease-badge ease-badge-lg">Large</span>
```

**Avoid the deprecated `.em-badge` prefix in new code:**

```html
<!-- ❌ Deprecated — will be removed in v2.0 -->
<span class="em-badge">New</span>
```

## Why it fits EaseMotion CSS

EaseMotion CSS uses a single `.ease-*` naming convention for consistency and discoverability. Undocumented legacy prefixes create confusion and unnecessary CSS weight. Deprecation comments allow tooling to surface warnings at usage sites.

Fixes #10244
