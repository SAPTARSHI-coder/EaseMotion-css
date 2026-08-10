# SCSS Truncate Mixins with Flex/Grid Fix (#71448)

Robust SCSS text truncation mixins including automatic min-width: 0 resets to ensure truncation functions properly within flexbox and CSS grid layouts.

## Features
- **Flexbox/Grid Safe:** Automatically resets min-width: 0 to prevent layout overflow bugs.
- **Single Line & Line Clamp:** Clean single-line truncation and -webkit-line-clamp multi-line truncation.
- **Soft Fade Clamp:** Decorative text truncation utilizing dynamic bottom CSS linear-gradient fades.
- **Truncate Start:** RTL-based start truncation with unicode-bidi: plaintext fix to protect punctuation rendering.

## Usage
@use "truncate" as t;

.card__title { @include t.truncate; }
.card__excerpt { @include t.line-clamp(3); }
.preview { @include t.fade-clamp(6em, 2em, #1e293b); }
.file-path { @include t.truncate-start; }
