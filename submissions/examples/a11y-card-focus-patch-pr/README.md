# Accessible Card Focus Patch (-pr)

This submission resolves a critical accessibility failure in `components/cards.css` where keyboard navigators are denied the interactive 3D animations provided to mouse users.

## What does this do?

It explicitly links the `:focus-visible` pseudo-class for all interactive cards (`.ease-card-hover`, `.ease-card-glow`, `.ease-card-neumorphic`) to their respective `:hover` transforms and box-shadows.

## How is it used?

Just include the CSS! Keyboard users who press `Tab` to navigate through your cards will now trigger the exact same physical lift, glow, or neumorphic depth inversion as someone hovering over them with a mouse pointer.

## Why is it useful?

In the core framework, keyboard focus on a card only triggered a basic CSS `outline`. This violates the spirit of accessible design, which dictates that visual feedback mechanisms should be universally available regardless of the input device. This patch seamlessly grants keyboard users the full premium animation experience without breaking existing focus states!
