# EaseMotion CSS — Emoji Feedback Rating (`ease-rating-feedback-emoji-ik`)

Interactive customer feedback rating component (`ease-emoji-rating`) featuring scale-bounce emoji micro-animations (`transform: scale(1.2)`), glowing halo rings, and radio input accessibility.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a satisfaction feedback rating selector component (`ease-emoji-rating`) that animates emoji selection buttons (`emoji-icon`) with spring scale bounces (`scale(1.2)`) and glowing halo highlights.

---

## 2. How is it used?

Include the emoji rating structure in your feedback form:

```html
<div class="ease-emoji-rating">
  <label class="emoji-option">
    <input type="radio" name="feedback" value="amazing">
    <span class="emoji-icon">😍</span>
    <span class="emoji-label">Amazing</span>
  </label>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS emphasizes engaging user feedback micro-interactions. The Emoji Feedback Rating component delivers 60fps GPU compositor spring bounce dynamics (`cubic-bezier(0.34, 1.56, 0.64, 1)`) while maintaining native HTML radio input keyboard accessibility.
