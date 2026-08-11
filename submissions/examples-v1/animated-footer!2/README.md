# Animated Footer with Newsletter

This is a self-contained example demonstrating how to create a modern, animated footer with newsletter signup, social links, navigation columns, and smooth hover effects using pure CSS animations and minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🎨 **Animated Background:** Floating gradient glows and moving dot pattern.
- 📧 **Newsletter Signup:** Animated input field with loading and success states.
- 🔗 **Social Media Links:** Hover effects with brand colors for each platform.
- 📋 **Multi-Column Navigation:** 4 organized navigation columns with animated links.
- 🌐 **Language Selector:** Dropdown for multi-language support.
- 💳 **Payment Icons:** Visual payment method indicators.
- ⬆️ **Back to Top Button:** Smooth scroll-to-top with fade-in animation.
- ✨ **Hover Animations:** Link slide effects, social icon lifts, and button transforms.
- ♿ **Fully Accessible:** Proper ARIA labels, keyboard navigation, and reduced motion support.
- 📱 **Responsive Design:** Adapts from desktop to mobile with adjusted layouts.
- 🚫 **Minimal JavaScript:** Only for newsletter form and back-to-top functionality.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the footer HTML structure.
4. Customize brand info, navigation links, and social media URLs.
5. Include the JavaScript for newsletter form and back-to-top button.

## HTML Structure

### Newsletter Section
```html
<div class="footer__newsletter">
  <div class="newsletter-container">
    <div class="newsletter__content">
      <h3 class="newsletter__title">Stay in the loop</h3>
      <p class="newsletter__description">Description text</p>
    </div>
    <form class="newsletter__form">
      <div class="newsletter__input-group">
        <input type="email" class="newsletter__input" placeholder="Enter your email" />
        <button type="submit" class="newsletter__btn">Subscribe</button>
      </div>
    </form>
  </div>
</div>