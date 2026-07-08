# Book Page Turn Pagination

## What it does
A **realistic 3D book pagination component** where pages physically curl and rotate like turning a real book. Click "Next" to watch the right page fold toward you and reveal the next spread. The animation uses the classic CSS `rotateY` on a `transform-style: preserve-3d` scene.

## Animations & Techniques
- **3D Preserve-3D Scene**: The book uses `perspective: 1400px` and `transform-style: preserve-3d` to create genuine 3D depth.
- **`transform-origin: left center`**: The page-turn hinge is set to the left edge, making the right page fold inward exactly like a real book page.
- **`backface-visibility: hidden`**: Both the front and back faces of the turning page are separate `div`s — the front shows the current page, the back shows the next page. `backface-visibility: hidden` ensures only the correct face is visible at any time.
- **Easing**: Uses `cubic-bezier(0.645, 0.045, 0.355, 1.000)` for a natural, weighted paper-feel acceleration and deceleration.
- **Page Curl Shadow**: A CSS `::before` gradient on the right edge of the page simulates the shadow cast as it curls.

## Folder structure
```
animations/book-page-turn/
├── demo.html
├── style.css
└── README.md
```

## Why it fits EaseMotion CSS
- One of the most iconic 3D CSS effects, demonstrating `preserve-3d`, `backface-visibility`, and `transform-origin` together.
- Includes `prefers-reduced-motion` support.
- Real-world applicability: e-readers, comics, books, document viewers.
