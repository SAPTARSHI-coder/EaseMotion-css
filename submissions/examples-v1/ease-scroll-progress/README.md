# 📊 Scroll Progress – Bar Fills as You Scroll

> A smooth, animated progress bar that fills up as you scroll down the page, showing your exact reading progress with real-time percentage updates.

---

## 📖 Description

The **Scroll Progress** component creates a smooth, animated progress bar at the top of the page that fills up as you scroll down. It shows exactly how much of the page you've read, with a real-time percentage label that updates smoothly. The bar features a gradient design that changes color as you scroll (blue → green → pink), providing visual feedback on your progress.

The component uses `requestAnimationFrame` throttling for smooth 60fps performance and calculates progress based on the scroll position relative to the total page height. The progress label appears on hover, and the bar is fully responsive.

Perfect for blogs, articles, documentation sites, and any long-form content where you want to show readers their progress. The Scroll Progress bar enhances the reading experience by providing clear, visual feedback on how much content remains.

---

## 🎯 Perfect For

- ✅ **Blogs** and articles (reading progress)
- ✅ **Documentation sites** (scroll position)
- ✅ **Long-form content** (progress tracking)
- ✅ **News websites** (article progress)
- ✅ **E-books** and online reading
- ✅ **Learning platforms** (course progress)
- ✅ **Portfolios** (project showcases)
- ✅ **Landing pages** (scroll engagement)
- ✅ **SaaS websites** (page progress)
- ✅ **Magazines** and online publications

---

## ✨ Key Highlights

| Feature | Description |
|---------|-------------|
| **Real-time Updates** | Progress updates smoothly as you scroll |
| **Percentage Display** | Shows exact progress percentage on hover |
| **Gradient Design** | Beautiful color transitions (blue → green → pink) |
| **Smooth Animation** | `requestAnimationFrame` for 60fps |
| **Fixed Position** | Stays at top of page |
| **Hover Label** | Progress percentage appears on hover |
| **Click Feedback** | Pulse animation on click |
| **Accessible** | `:focus-visible` and keyboard support |
| **Responsive** | Adapts to all screen sizes |
| **Performance Optimized** | Throttled scroll events |

---

## 🚀 Quick Start

1. Place `index.html` and `style.css` in the same folder
2. Open `index.html` in your browser
3. Scroll down to watch the progress bar fill

```bash
/scroll-progress/
├── index.html      # HTML structure + embedded JS
├── style.css       # All styles + animations
└── README.md       # Documentation (this file)