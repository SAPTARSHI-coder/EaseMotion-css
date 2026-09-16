# Day Night Theme Toggle

## What it does
An animated **sun/moon theme switch** that slides its thumb and morphs icons while the entire page transitions between light and dark CSS custom properties.

## Animations & Techniques
- **Thumb slide**: Spring `translateX` with overshoot easing.
- **Icon morph**: Sun rotates out, moon rotates in with scale.
- **Theme transition**: CSS variables swap on `body.dark` with smooth background/color transitions.

## Folder structure
```
animations/day-night-theme-toggle/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS
Theme toggles are universal UI — this demonstrates coordinated multi-element animation with CSS variables.
