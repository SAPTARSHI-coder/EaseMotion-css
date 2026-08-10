# pricing-card

1. What does this do?
   A complete animated pricing card component with hover lift,
   shimmer effect, glowing popular badge, animated checkmark
   features list, and a pulsing CTA button. Three variants
   included: Basic, Pro (popular), and Enterprise.

2. How is it used?
   Wrap cards in `.pricing-grid` and apply `.pricing-card`:
```html
   <div class="pricing-grid">

     <!-- Basic card -->
     <div class="pricing-card">
       <h3 class="pricing-tier">Basic</h3>
       <div class="pricing-amount">
         <span class="pricing-currency">$</span>
         <span class="pricing-price">9</span>
         <span class="pricing-period">/mo</span>
       </div>
       <ul class="pricing-features">
         <li class="pricing-feature">Feature one</li>
         <li class="pricing-feature">Feature two</li>
       </ul>
       <button class="pricing-btn pricing-btn-default">
         Get Started
       </button>
     </div>

     <!-- Popular card -->
     <div class="pricing-card pricing-card-popular">
       <div class="pricing-badge">✦ Most Popular</div>
       ...
       <button class="pricing-btn pricing-btn-popular">
         Get Started
       </button>
     </div>

   </div>
```
   Add `.pricing-feature-disabled` to grey out unavailable features.

3. Why is it useful?
   Pricing cards are one of the most commonly built UI components
   in web development — used on every SaaS product. EaseMotion CSS
   has basic card variants but nothing close to a production-ready
   animated pricing card. This fills that gap with hover lift,
   shimmer sweep, badge pulse, and button glow — all pure CSS,
   perfectly matching EaseMotion CSS's animation-first philosophy.