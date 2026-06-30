# Marquee Component File Header

## What does this do?
Proposes adding a file-level documentation comment block at the top
of `components/ease-marquee.css` to match the convention used by
every other component file. Linked to issue #5578.

## How is it used?
Documentation-only change. The maintainer pastes the proposed
header into `components/ease-marquee.css`.

## Why is it useful?
`ease-marquee.css` is the only component file in the framework
without a top-of-file documentation block. The file jumps
straight into the `@layer` declaration without describing what
the file is for, which is inconsistent with `buttons.css`,
`cards.css`, `loaders.css`, and the rest of the component
folder.

## Tech Stack
- CSS (no frameworks, no JavaScript)
- Pure documentation change

## Preview
Open `style.css` in this folder to see the proposed header.

## Contribution Notes
- Documentation only, no runtime changes
- Maintainer pastes the header at the top of
  `components/ease-marquee.css`
