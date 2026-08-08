# Component: Announce Bar Pattern Library (5 Variants)

This submission implements the Announce Bar Pattern Library for GSSoC issue **#44483**.

## Description

A collection of 5 reusable announcement bar patterns using EaseMotion CSS animation classes.

## 5 Pattern Variants

### 1. Sticky Promo Bar
Fixed top announcement with slide-down entrance. Perfect for sales, promotions, and special offers.

### 2. Dismissible Slide-down
Alert bar with close button and slide-down entrance. Great for feature announcements and notices.

### 3. Rotating Messages Bar
Multiple announcements cycling through automatically. Ideal for news tickers and rotating updates.

### 4. Sale Countdown Strip
Countdown timer with urgency messaging. Perfect for flash sales and limited-time offers.

### 5. Cookie Consent Bar
Info bar with accept and settings buttons. Essential for GDPR compliance and user consent.

## Usage

### Sticky Promo Bar
```html
<div class="ease-announce-bar promo-bar ease-slide-down">
  <div class="announce-content">
    <span>🎉 Summer Sale! Get 30% off</span>
    <a href="#">Shop Now →</a>
  </div>
</div>
```

### Dismissible Alert Bar
```html
<div class="ease-announce-bar alert-bar ease-slide-down" id="alertBar">
  <div class="announce-content">
    <span>⚠️ New feature available!</span>
  </div>
  <button class="announce-close" onclick="dismissBar('alertBar')">×</button>
</div>
```

### Cookie Consent Bar
```html
<div class="ease-announce-bar cookie-bar ease-slide-up" id="cookieBar">
  <div class="announce-content">
    <span>🍪 We use cookies to improve your experience</span>
  </div>
  <div class="cookie-actions">
    <button>Settings</button>
    <button onclick="dismissBar('cookieBar')">Accept</button>
  </div>
</div>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.ease-announce-bar` | Base announce bar component |
| `.ease-slide-down` | Slide down entrance animation |
| `.ease-slide-up` | Slide up entrance animation |
| `.ease-fade-in` | Fade in entrance animation |

## Features

- 5 reusable pattern variants
- Slide-down, slide-up, and fade-in animations
- Dismissible with close animation
- Rotating messages with auto-cycle
- Live countdown timer
- Cookie consent actions
- Copy-ready HTML snippets
- Responsive design
- `prefers-reduced-motion` support

## Acceptance Criteria

- ✅ Sticky promo bar pattern
- ✅ Dismissible slide-down bar
- ✅ Rotating messages bar
- ✅ Sale countdown strip
- ✅ Cookie-style info bar
- ✅ Entrance animations
- ✅ Copy-ready HTML snippets
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
