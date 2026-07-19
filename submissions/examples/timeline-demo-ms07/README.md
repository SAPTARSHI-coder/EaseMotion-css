# Timeline Demo (EaseMotion)

A responsive vertical timeline example showing how to build real-world
UI — education timelines, project timelines, experience/work-history
sections — using the **EaseMotion** CSS animation utility library.

## ▶️ Running the demo

1. Make sure `easemotion.css` is available at the path referenced in
   `demo.html`:
```html
   <link rel="stylesheet" href="../../../easemotion.css" />
```
   Adjust the path if your copy of EaseMotion's stylesheet lives
   elsewhere in the repo.

2. Open `demo.html` directly in a browser, or serve the folder:
```bash
   npx serve submissions/examples/timeline-demo
```

## 🧱 Structure

- **Timeline heading** — `<h1>My Learning Journey</h1>` + subheading, faded in with `em-fade-in`.
- **Five timeline events** (requirement: at least four), each with title, date, and description.
- A vertical connecting line with a circular marker per event.

## 🎛️ EaseMotion Classes Used

| Class | Applied to | Purpose |
|---|---|---|
| `em-animate` | heading, every event | Marks element as EaseMotion-controlled |
| `em-fade-in` | heading | Fade-in reveal for the page title |
| `em-slide-elastic-left` | odd events | Elastic slide-in from the left |
| `em-slide-elastic-right` | even events | Elastic slide-in from the right |
| `em-duration-450` / `600` | events / heading | Animation duration |
| `em-delay-0/100/200/300` | staggered per event | Sequenced entrance |

## 📱 Responsive behavior

| Breakpoint | Layout |
|---|---|
| `> 720px` | Two-column alternating timeline |
| `481–720px` | Single column, left-aligned line |
| `≤ 480px` | Compact single column for mobile |

## 📄 License

MIT