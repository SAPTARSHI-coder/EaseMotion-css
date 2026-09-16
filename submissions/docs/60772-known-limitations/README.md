# Known Limitations

This document outlines the current limitations and unsupported scenarios of EaseMotion CSS. Understanding these limitations helps developers make informed decisions before integrating the framework into their projects.

---

# Unsupported Browsers

The following browsers may not fully support modern CSS animations:

- Internet Explorer
- Legacy mobile browsers
- Outdated browser versions without modern CSS support

**Recommendation:** Use the latest versions of Chrome, Firefox, Edge, or Safari.

---

# Modern CSS Requirements

Some animations rely on modern CSS features, including:

- CSS Variables
- Keyframe Animations
- Transform & Transition properties

Older browsers may ignore these features.

---

# CSS-only Animation Limitations

EaseMotion CSS is primarily a CSS framework.

Therefore it cannot provide:

- Scroll-triggered animations
- Element visibility detection
- Dynamic animation sequencing
- User interaction logic beyond CSS capabilities

These features require JavaScript.

---

# JavaScript Required

For advanced behavior, JavaScript may be needed for:

- Scroll animations
- Animation replay
- Dynamic class switching
- Intersection Observer based effects

---

# Experimental Features

Some upcoming features may still be experimental.

Developers should verify compatibility before using them in production.

---

# Framework Compatibility Notes

Although EaseMotion CSS works with modern frameworks such as React, Vue, Next.js, Astro, and Svelte, integration depends on:

- Correct stylesheet import
- Proper project configuration
- Supported build tools

---

# Best Practices

- Test animations across multiple browsers.
- Keep dependencies updated.
- Follow the official documentation.
- Verify compatibility before upgrading.

---

## Summary

Knowing the current limitations helps avoid unexpected behavior and improves the integration experience for developers.