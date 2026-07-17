# App Landing: Specialty Coffee Brand (`ecommerce-specialty-coffee-brand-20965`)

This proposal provides a complete, copy-paste ready B2C landing page template designed for a direct-to-consumer specialty coffee roaster, built entirely with HTML/CSS and standard EaseMotion utility classes.

## 📌 Feature Overview

A specialty coffee brand requires a UI that feels refined, warm, unhurried, and highly tactile. This template achieves an organic, minimal aesthetic using earthy tones (terracotta, sage, sand, charcoal), a sophisticated serif/sans-serif typography pairing (`Lora` & `Work Sans`), and smooth, flowing animations that simulate steam and pouring liquids.

The layout includes:
- A minimalist, translucent sticky Navigation.
- A Hero section featuring abstract CSS steam rising from a CSS-rendered coffee bag.
- An Origins grid showcasing coffee bags with color-coordinated backgrounds and hover scale effects.
- A Subscription Box feature utilizing CSS 3D transforms (`perspective`, `rotateX`) to create an open box with bags popping out.
- A Roastery Story section with a continuous CSS animation simulating coffee brewing (a swaying filter and a pouring stream).
- A Brew Guides grid utilizing CSS-rendered coffee gear icons (V60, French Press, Chemex, Espresso).
- A refined editorial Reviews section.

### Showcased Classes
The template leverages standard EaseMotion animation and interaction utilities, heavily modified locally via CSS to use smooth, liquid `cubic-bezier(0.25, 0.46, 0.45, 0.94)` and `cubic-bezier(0.4, 0, 0.2, 1)` timings that convey a slow, mindful ritual:
- `.ease-slide-up-smooth` (Configured for a slow, unhurried vertical entrance).
- `.ease-fade-in-slow` (A gentle opacity fade combined with a subtle blur filter reveal).
- `.ease-rise` (A custom continuous animation mimicking rising, dissipating steam).
- `.ease-pour` (A custom continuous animation mimicking a stream of liquid pouring and stopping).
- `.ease-pop-out` (Used to animate coffee bags jumping out of the subscription box).
- `.ease-hover-underline` (A clean, expanding underline effect for links).
- `.ease-hover-lift` / `.ease-hover-tilt` (Soft, responsive hover states for buttons and icons).

## ⚙️ How to Use

To view this full-page template locally, simply open the `demo.html` file in your web browser. 

The CSS handles the warm, minimal layout architecture, the earthy palette, and the complex abstract CSS illustrations (coffee bags, brewers, steam, pouring liquid). The standard `ease-*` interaction classes are attached directly to HTML elements to provide the smooth entrance animations. The design is fully responsive and requires zero JavaScript to execute the animations or hover states.

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ecommerce-specialty-coffee-brand-20965/` directory to avoid modifying core files directly and to ensure zero deletions.*

## 🔗 Related Issue
Closes Issue #20965
