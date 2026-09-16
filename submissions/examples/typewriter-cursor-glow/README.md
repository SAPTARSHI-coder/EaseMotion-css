# Typewriter Cursor Glow

## What it does
A **terminal-style typewriter effect** that reveals text character-by-character using `steps()` timing, followed by a glowing blinking cursor.

## Animations & Techniques
- **Typewriter reveal**: `width: 0 → 30ch` with `steps(30, end)`.
- **Glowing cursor**: `box-shadow` glow with `step-end` blink animation.
- **Delayed cursor**: Cursor appears only after typing completes.

## Folder structure
```
animations/typewriter-cursor-glow/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS
Classic `steps()` timing demonstration — essential for typewriter, sprite, and frame-by-frame effects in EaseMotion's educational catalog.
