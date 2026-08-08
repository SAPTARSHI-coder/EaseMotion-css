# Multi-Step Form Wizard

This is a self-contained example demonstrating how to create a modern, animated multi-step form wizard with progress indicator, step transitions, validation states, and smooth animations using minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 📊 **Progress Indicator:** Visual progress bar with step circles showing current position.
- 🎬 **Smooth Transitions:** Animated panel transitions between steps.
- ✓ **Step Validation:** Visual feedback for completed steps with checkmarks.
- 🎨 **Interactive Elements:** Radio cards, checkboxes, and password strength indicator.
- 💫 **Animated Success:** Bouncing success icon on completion.
- 📋 **Summary Card:** Displays entered information before final submission.
- ♿ **Fully Accessible:** Proper labels, keyboard navigation, and reduced motion support.
- 📱 **Responsive Design:** Adapts to mobile screens with adjusted layouts.
- 🎯 **Step Navigation:** Previous/Next buttons with smooth transitions.
- 🚫 **Minimal JavaScript:** Only for step management and form interactions.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the wizard HTML structure.
4. Customize steps, form fields, and validation logic.
5. Include the JavaScript class at the bottom of your page.
6. Initialize: `const wizard = new FormWizard();`

## HTML Structure

### Progress Bar
```html
<div class="wizard-progress">
  <div class="wizard-progress__bar">
    <div class="wizard-progress__fill" id="progressFill"></div>
  </div>
  <div class="wizard-progress__steps">
    <div class="wizard-step wizard-step--active" data-step="1">
      <div class="wizard-step__circle">
        <span class="wizard-step__number">1</span>
        <span class="wizard-step__check">✓</span>
      </div>
      <span class="wizard-step__label">Step Name</span>
    </div>
    <!-- More steps -->
  </div>
</div>