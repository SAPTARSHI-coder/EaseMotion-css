# CSS Foucault Pendulum Swing Buttons

## Overview

Issue #73255 adds a pure CSS button family inspired by the measured swing of a Foucault pendulum.

## Features

- Primary, secondary, and compact buttons
- Pendulum-inspired hover motion
- Mechanical visual reference dial
- Transform-based interaction
- Keyboard-visible focus
- Responsive layout
- Reduced-motion support

## Implementation

Buttons use a controlled keyframe swing around their top edge. The decorative dial uses a repeating conic gradient and a lightweight rotation animation to reinforce the mechanical theme.

## Accessibility

Native buttons preserve normal keyboard behavior and focus handling. Reduced-motion preferences disable the swing and dial rotation while keeping all controls functional.

## Usage

Open `demo.html` in a modern browser and reuse `.pendulum` for action controls. The `primary`, `secondary`, and `compact` variants can be combined with the existing design tokens.

## Files

- `demo.html` — expanded button examples
- `style.css` — pendulum motion, interaction states, responsive rules, and accessibility handling
- `README.md` — documentation

## Issue

EaseMotion CSS issue #73255.
