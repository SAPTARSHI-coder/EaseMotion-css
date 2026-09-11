# Documentation: Glowing Audio Player Widget (Minimalist) (#85380)

Comprehensive documentation guide, markup examples, CSS token integration, and accessibility notes for the Glowing Audio Player Widget component (`#85380`).

## 🚀 Overview & Features

- **Zero JS Dependencies:** Implemented entirely in pure CSS using the checkbox state hack (`<input type="checkbox">` combined with `:checked` pseudo-class selectors).
- **Minimalist Glowing Aesthetics:** Features frosted glassmorphism surfaces, neon cyan glows, and animated sound equalizer bars.
- **Responsive Layout:** Engineered for seamless scaling across mobile, tablet, and desktop viewports.

## 📋 Copy-Paste HTML Markup

```html
<div class="em-app-container">
    <input type="checkbox" id="em-play-toggle" class="em-play-checkbox">

    <div class="em-audio-widget" role="region" aria-label="Audio Player Widget">
        <div class="em-track-info">
            <h2>Track Title</h2>
            <p>Artist Name</p>
        </div>
        <div class="em-equalizer" aria-hidden="true">
            <span class="em-bar"></span>
            <span class="em-bar"></span>
            <span class="em-bar"></span>
        </div>
        <div class="em-controls">
            <label for="em-play-toggle" class="em-play-btn" role="button" aria-label="Toggle Play">
                <span>▶</span>
            </label>
        </div>
    </div>
</div>
