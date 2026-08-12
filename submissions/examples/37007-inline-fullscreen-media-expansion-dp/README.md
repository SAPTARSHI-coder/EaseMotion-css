# Context-Preserving Inline-to-Fullscreen Media Expansion

## Overview

A fullscreen media expansion built entirely with HTML and CSS using
the `:target` pseudo-class instead of JavaScript. Clicking a media
card transitions it into an overlay that scales and fades in from the
same position, so expanding a thumbnail feels like a continuation of
the card rather than an abrupt jump to a new screen. Implemented using
only HTML and CSS — no JavaScript, no libraries.

## Features

- Responsive media gallery with six cards
- CSS-only fullscreen expansion using `:target`
- Smooth scale, translate, and opacity transition
- Dimmed, blurred backdrop while expanded
- Close button plus click-outside-to-close
- Fully responsive layout
- CSS custom properties for timing and color

## File Structure

- `demo.html`
- `style.css`
- `README.md`

## How It Works

Each media card is an anchor linking to a unique `id` (e.g.
`#media-1`). The matching overlay is hidden by default and revealed
when its `id` matches the URL fragment via `:target`, triggering a
CSS transition from a scaled-down state to full size. The backdrop and
close button link back to `#`, un-matching `:target` and reversing the
transition. No JavaScript is involved — only anchor navigation and CSS.

## Example Use Cases

- Photo galleries and portfolio websites
- Social media feeds with expandable posts
- Media dashboards
- Product galleries

## Why This Example?

An abrupt cut to fullscreen breaks the user's sense of where content
came from. A short, connected transition communicates continuity
instead. This fits EaseMotion CSS's CSS-first philosophy by achieving
a typically JavaScript-driven pattern with only anchors, `:target`,
and CSS transitions — a production-inspired technique with no script
required.
