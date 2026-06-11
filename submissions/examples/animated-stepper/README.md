# 🎯 Animated Stepper / Progress Steps Component

A modern, accessible, and fully responsive animated stepper component built with pure HTML and CSS for the EaseMotion CSS library. No JavaScript required!

## 📋 Features

- ✅ **Horizontal & Vertical Layouts** - Flexible orientation for different use cases
- ✅ **Multiple Step States** - Completed, Active, and Upcoming step indicators
- ✅ **Smooth Animations** - Beautiful CSS transitions and pop-in effects
- ✅ **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Accessible** - ARIA labels, semantic HTML, keyboard navigation support
- ✅ **Pure CSS & HTML** - Zero JavaScript, lightweight and fast
- ✅ **Customizable** - Easy color and animation customization via CSS variables
- ✅ **No Dependencies** - Works standalone without external libraries
- ✅ **Modern Design** - Follows current UI/UX best practices
- ✅ **Motion Preferences** - Respects `prefers-reduced-motion` media query

## 🚀 Quick Start

### Basic HTML Structure

```html
<!-- Horizontal Stepper -->
<div class="ease-stepper">
  <div class="ease-step ease-step-completed">
    <div class="step-marker">✓</div>
    <div class="step-label">Step 1</div>
  </div>
  <div class="ease-step ease-step-active">
    <div class="step-marker">2</div>
    <div class="step-label">Step 2</div>
  </div>
  <div class="ease-step">
    <div class="step-marker">3</div>
    <div class="step-label">Step 3</div>
  </div>
</div>

<!-- Vertical Stepper -->
<div class="ease-stepper ease-stepper-vertical">
  <div class="ease-step ease-step-completed">
    <div class="step-marker">✓</div>
    <div class="step-label">Step 1</div>
  </div>
  <div class="ease-step ease-step-active">
    <div class="step-marker">2</div>
    <div class="step-label">Step 2</div>
  </div>
  <div class="ease-step">
    <div class="step-marker">3</div>
    <div class="step-label">Step 3</div>
  </div>
</div>
```

### Link the Stylesheet

```html
<link rel="stylesheet" href="style.css">
```

## 📚 CSS Classes Reference

### Container Classes

| Class | Purpose |
|-------|---------|
| `.ease-stepper` | Main container for horizontal stepper layout |
| `.ease-stepper-vertical` | Modifier class for vertical stepper layout |

### Step Classes

| Class | Purpose |
|-------|---------|
| `.ease-step` | Individual step element container |
| `.ease-step-completed` | Marks a completed step (shows checkmark) |
| `.ease-step-active` | Marks the current/active step (highlighted with pulse animation) |

### Sub-element Classes

| Class | Purpose |
|-------|---------|
| `.step-marker` | Container for step number or indicator icon |
| `.step-label` | Container for step text label |

## 🎨 Customization with CSS Variables

Customize the appearance and behavior by overriding CSS variables:

```css
:root {
  /* Primary color for active step */
  --stepper-primary-color: #667eea;
  
  /* Color for completed steps */
  --stepper-completed-color: #48bb78;
  
  /* Background color for inactive steps */
  --stepper-bg-color: #f0f4ff;
  
  /* Animation speed (default: 0.3s) */
  --stepper-animation-speed: 0.3s;
  
  /* Size of step marker circles */
  --stepper-size: 45px;
  
  /* Height of progress line */
  --stepper-line-height: 3px;
  
  /* Gap between steps */
  --stepper-spacing: 30px;
}
```

### Example: Custom Color Theme

```css
:root {
  --stepper-primary-color: #ff6b6b;
  --stepper-completed-color: #51cf66;
  --stepper-bg-color: #fff3e0;
  --stepper-animation-speed: 0.4s;
}
```

## 📱 Responsive Behavior

The component automatically adapts to different screen sizes:

- **Desktop (>768px)**: Full-size steppers with large markers
- **Tablet (481px - 768px)**: Medium-sized steppers with adjusted spacing
- **Mobile (<480px)**: Compact steppers optimized for small screens

## ♿ Accessibility Features

- **ARIA Labels**: Each step includes proper `aria-label` for screen readers
- **Semantic HTML**: Uses semantic structure for better accessibility
- **Keyboard Navigation**: Steps are focusable and keyboard navigable
- **Current Step Indicator**: Uses `aria-current="step"` to mark active step
- **Reduced Motion Support**: Respects `prefers-reduced-motion` media query
- **High Contrast Mode**: Automatically adjusts colors for better visibility
- **Focus Visible**: Clear focus indicators for keyboard users

### Example: Accessible Markup

```html
<div class="ease-step ease-step-completed" aria-label="Step 1: Profile Setup completed">
  <div class="step-marker">✓</div>
  <div class="step-label">Profile Setup</div>
</div>
<div class="ease-step ease-step-active" aria-label="Step 2: Account Verification current" aria-current="step">
  <div class="step-marker">2</div>
  <div class="step-label">Account Verification</div>
</div>
<div class="ease-step" aria-label="Step 3: Payment upcoming">
  <div class="step-marker">3</div>
  <div class="step-label">Payment</div>
</div>
```

## 🎬 Animation Details

The component includes several smooth animations:

### Pop-In Animation
Completed steps animate in with a pop effect when they receive the `.ease-step-completed` class.

### Pulse Animation
The active step continuously pulses to draw attention with a breathing effect.

### Ripple Effect
Active step marker includes a ripple animation for visual feedback.

### Smooth Transitions
All state changes include smooth transitions for a polished feel.

### Hover Effects
Upcoming steps show interactive hover states that scale and change color.

## 📊 Use Cases

- **Multi-step Forms**: Guide users through checkout processes
- **Installation Wizards**: Show progress through setup steps
- **Order Tracking**: Display order status updates
- **Project Timelines**: Visualize project phases and milestones
- **User Onboarding**: Lead users through feature introductions
- **Process Management**: Track workflow stages
- **Account Setup**: Show account creation progress

## 🔧 Implementation Examples

### Checkout Process

```html
<div class="ease-stepper">
  <div class="ease-step ease-step-completed">
    <div class="step-marker">✓</div>
    <div class="step-label">Cart Review</div>
  </div>
  <div class="ease-step ease-step-completed">
    <div class="step-marker">✓</div>
    <div class="step-label">Shipping</div>
  </div>
  <div class="ease-step ease-step-active">
    <div class="step-marker">3</div>
    <div class="step-label">Payment</div>
  </div>
  <div class="ease-step">
    <div class="step-marker">4</div>
    <div class="step-label">Confirmation</div>
  </div>
</div>
```

### Account Setup (Vertical)

```html
<div class="ease-stepper ease-stepper-vertical">
  <div class="ease-step ease-step-completed">
    <div class="step-marker">✓</div>
    <div class="step-label">Personal Information</div>
  </div>
  <div class="ease-step ease-step-completed">
    <div class="step-marker">✓</div>
    <div class="step-label">Email Verification</div>
  </div>
  <div class="ease-step ease-step-active">
    <div class="step-marker">3</div>
    <div class="step-label">Security Setup</div>
  </div>
  <div class="ease-step">
    <div class="step-marker">4</div>
    <div class="step-label">Profile Complete</div>
  </div>
</div>
```

## 🎯 Best Practices

1. **Use Semantic Step Numbers**: Start from 1 and increment sequentially
2. **Clear Labels**: Use short, descriptive step labels (1-3 words)
3. **Progress Line**: The component automatically draws a progress line
4. **Visual Hierarchy**: Keep step markers and labels clearly visible
5. **Mobile First**: Test on mobile devices to ensure responsive behavior
6. **Accessibility**: Always include `aria-label` and `aria-current="step"` attributes
7. **Color Contrast**: Ensure sufficient contrast for readability
8. **Animation Performance**: Use the default animation speed for smooth rendering

## 💾 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This component is part of the EaseMotion CSS library and follows the same license.

## 🤝 Contributing

Contributions are welcome! Please follow the EaseMotion contribution guidelines.

## 📞 Support

For issues, feature requests, or questions, please refer to the main EaseMotion repository.

---

**Built with ❤️ for the EaseMotion CSS Community**
