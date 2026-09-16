# Full AI SaaS Landing Page (`ease-page-ai`)

A striking, dark-mode landing page template optimized for AI products, writing assistants, and next-gen SaaS tools. It relies heavily on glow effects, gradients, and typography animations.

## 🚀 Features & EaseMotion Showcase

This template uses EaseMotion to create a high-tech, futuristic aesthetic without writing custom JS for layout transitions:

- **Text Reveal Animations**: Utilizes a custom `textReveal` extension of EaseMotion principles to sweep across and reveal the hero text sequentially.
- **Pure CSS Tabs**: Implements the CSS radio-button hack (`:checked ~`) to create a fully functional, zero-JS use-case tab switcher. Content fades in using `.ease-fade-in`.
- **Pure CSS Pricing Toggle**: Another application of the radio-button hack to switch between Monthly and Yearly pricing, instantly updating the DOM state without JS.
- **Animated Gradients**: Features an infinite `.ease-gradient-pan` utility applied to backgrounds to keep the page feeling organic and "thinking".
- **CSS Typing Effect**: Incorporates a lightweight `steps()` CSS animation to simulate AI generating text in the hero mockup.
- **Staggered Reveals**: Uses staggered `.delay-*` utility classes combined with `.ease-slide-up` for waterfall effects on initial load.

## 🛠️ Usage

This demo is entirely self-contained. You can open `demo.html` directly in your browser. All required EaseMotion CSS classes have been defined at the top of the `style.css` file for immediate testing. 

If using this as a template for a real project, simply migrate the HTML structure into your application and ensure your global CSS bundle includes the `ease-*` utility classes.

## 🔗 Related Issue
Resolves Issue #14797
