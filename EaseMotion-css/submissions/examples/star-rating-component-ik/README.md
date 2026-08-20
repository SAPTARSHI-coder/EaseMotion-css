# Star Rating & Emoji Reaction Component

## 1. What does this component do?

Provides interactive star rating (`.ease-rating-group`, `.ease-star-item`) and emoji reaction bar (`.ease-emoji-group`, `.ease-emoji-btn`) components with hover scaling, spring pop animations, and active state transitions.

## 2. How is it used?

```html
<!-- Star Rating -->
<div class="ease-rating-group">
  <button class="ease-star-item is-selected">★</button>
  <button class="ease-star-item is-selected">★</button>
  <button class="ease-star-item">★</button>
</div>

<!-- Emoji Reaction Bar -->
<div class="ease-emoji-group">
  <button class="ease-emoji-btn">😡</button>
  <button class="ease-emoji-btn is-active">😊</button>
  <button class="ease-emoji-btn">😍</button>
</div>
```

## 3. Why does it fit EaseMotion CSS?

Complements existing UI feedback components with interactive rating and sentiment inputs, utilizing spring hover transforms and pop keyframes.

## 4. Demo Instructions

Open `demo.html` in any web browser and interact with the stars and emoji reaction buttons to test hover and selection feedback.
