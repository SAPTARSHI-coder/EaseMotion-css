# Animated Flip Pricing Card

## 1. What does this do?

This submission provides an interactive pricing card that performs a 3D flip on hover to reveal more details on its back side. The front displays the plan name and price, while the back shows a feature list and a call-to-action button.

## 2. How is it used?

To use this component, you can integrate the following HTML structure and apply the corresponding CSS.

```html
<div class="flip-card-container">
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h2>Basic Plan</h2>
        <p class="price">$10<span>/mo</span></p>
        <p>Perfect for getting started.</p>
      </div>
      <div class="flip-card-back">
        <h3>Features</h3>
        <ul>
          <li>10GB Storage</li>
          <li>100GB Bandwidth</li>
          <li>24/7 Support</li>
        </ul>
        <button class="cta-button">Choose Plan</button>
      </div>
    </div>
  </div>
</div>
```

## 3. Why is it useful?

This component offers a modern and space-efficient way to present pricing information. The flip animation adds an engaging user interaction that can make a standard pricing table more dynamic and interesting, encouraging users to explore the different plans. It's built with pure CSS, ensuring it's lightweight and performant.