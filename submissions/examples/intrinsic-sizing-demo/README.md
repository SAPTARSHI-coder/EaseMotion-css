# Intrinsic Sizing Demo

## What it does

Compares the three CSS intrinsic sizing keywords — `min-content`, `max-content`, and `fit-content` — side by side on `width` across four content types: a short word, a medium phrase, a long sentence, and a single long word. Each cell shows the actual computed width via a coloured left border and a background label.

## How to use it

Open `demo.html`. Each row represents a different content length. The three columns apply the three sizing keywords. Notice that `min-content` collapses to the longest word, `max-content` expands to fit the full unwrapped text, and `fit-content` stays within its parent while wrapping naturally.

## Why it fits EaseMotion CSS

Intrinsic sizing is critical for responsive motion layouts — container queries, card animations, and dynamic component sizing all depend on understanding these keywords. This example provides a clear visual reference, helping contributors and users reason about how EaseMotion CSS components will size themselves in different contexts.
