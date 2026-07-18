# Card Stack Swipe

## What it does
A **Tinder-style swipeable card stack** where cards fly off left or right with rotation, and remaining cards spring into place.

## Animations & Techniques
- **Stack depth**: CSS custom property `--i` controls scale and vertical offset.
- **Swipe exit**: `translateX + rotate` with opacity fade.
- **Spring settle**: Remaining cards animate to new positions via transition.

## Folder structure
```
animations/card-stack-swipe/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS
Classic gesture-driven UI pattern — CSS handles all visible motion; JS only toggles classes.
