# Bounce Animation File Header

## What does this do?

Proposes adding a file-level documentation comment block at the top
of `easemotion/bounce.css` to match the convention used by other
animation files in the framework. Linked to issue #5569.

## How is it used?

Documentation-only change. The maintainer will paste the proposed
header into `easemotion/bounce.css`.

## Why is it useful?

Most files in `easemotion/` and `components/` start with a comment
block that describes the file's purpose. `bounce.css` was the only
holdout in `easemotion/` — it jumped straight from the file-purpose
line into the `@layer` declaration with no header banner. Adding
the banner improves discoverability and consistency.

## Tech Stack

- CSS (no frameworks, no JavaScript)
- Pure documentation change

## Preview

Open `style.css` in this folder to see the proposed header, or
compare against `easemotion/zoom.css` and `easemotion/rotate.css`
in the framework.

## Contribution Notes

- Documentation only, no runtime changes
- Maintainer pastes the header at the top of `easemotion/bounce.css`
