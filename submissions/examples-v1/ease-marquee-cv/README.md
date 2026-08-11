# Marquee (cv variant)

## What does this do?
A smooth scrolling marquee component with support for multiple directions (left, right), speed variants (slow, normal, fast), and optional fade edges. Perfect for announcement bars, brand logo carousels, news tickers, and continuous content displays.

## How is it used?

### Basic Usage:

```html
<div class="ease-marquee-cv ease-marquee-cv-left">
    <div class="ease-marquee-cv-content">
        <span>Your scrolling content here  •  More content  •</span>
        <!-- Duplicate the content for seamless loop -->
        <span>Your scrolling content here  •  More content  •</span>
    </div>
</div>

<!-- Scroll from right to left -->
<div class="ease-marquee-cv ease-marquee-cv-left">...</div>

<!-- Scroll from left to right -->
<div class="ease-marquee-cv ease-marquee-cv-right">...</div>

<!-- Slow (40s duration) -->
<div class="ease-marquee-cv ease-marquee-cv-left ease-marquee-cv-slow">...</div>

<!-- Normal (20s - default) -->
<div class="ease-marquee-cv ease-marquee-cv-left">...</div>

<!-- Fast (10s duration) -->
<div class="ease-marquee-cv ease-marquee-cv-left ease-marquee-cv-fast">...</div>

<div class="ease-marquee-cv ease-marquee-cv-left ease-marquee-cv-fade">
    <div class="ease-marquee-cv-content">
        <span>Content with faded edges</span>
        <span>Content with faded edges</span>
    </div>
</div>

<div class="ease-marquee-cv ease-marquee-cv-left ease-marquee-cv-fade">
    <div class="ease-marquee-cv-content">
        <img src="logo1.png" alt="Brand 1">
        <img src="logo2.png" alt="Brand 2">
        <img src="logo3.png" alt="Brand 3">
        <!-- Duplicate for seamless loop -->
        <img src="logo1.png" alt="Brand 1">
        <img src="logo2.png" alt="Brand 2">
        <img src="logo3.png" alt="Brand 3">
    </div>
</div>