# Zero-JS Native Scroll Progress Bar (ease-progress-native-viidhii19)

### What does this do?
This component provides a top-anchored reading progress bar that scales from 0 to 100% strictly via the browser's native CSS compositor thread using the `@scroll-timeline` API, with absolutely zero JavaScript.

### How is it used?
Simply include the CSS and add a single `<div>` with the class `ease-scroll-progress-viidhii19` at the top of your `<body>`:

```html
<body>
  <div class="ease-scroll-progress-viidhii19"></div>
  
  <!-- Rest of your page content -->
</body>
```

### Why is it useful?
Article reading progress bars almost exclusively use JavaScript `window.addEventListener('scroll')` mechanics, which poll the DOM continuously, compete for resources on the main thread, and degrade page performance. By utilizing `animation-timeline: scroll()`, this solution replaces legacy JavaScript mechanics and completely eliminates main-thread blocking, resulting in a buttery smooth, hardware-accelerated experience.
