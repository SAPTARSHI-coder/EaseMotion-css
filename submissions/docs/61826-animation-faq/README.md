# FAQ for Common Animation Issues

This guide answers frequently asked questions related to animations in EaseMotion CSS. It helps developers quickly understand common animation behaviors and resolve typical configuration issues.

---

# Frequently Asked Questions

## Q1. Why is my animation not starting?

**Possible Reasons**

- The stylesheet is not loaded.
- The animation class is missing.
- The browser cache is serving an older stylesheet.

**Solution**

- Verify that the stylesheet is correctly imported.
- Check the applied class names.
- Refresh the browser cache.

---

## Q2. How do animation delays work?

Animation delays control when an animation begins after an element loads.

**Tip**

Choose a delay that improves readability without making the interface feel slow.

---

## Q3. How can I control animation duration?

Animation duration determines how long an animation takes to complete.

**Recommendation**

Use shorter durations for simple interactions and longer durations for larger visual transitions.

---

## Q4. Can animations loop continuously?

Some animation patterns can repeat continuously depending on how they are configured.

**Recommendation**

Use looping animations only when they improve the user experience and avoid excessive motion.

---

## Q5. How do I reduce animations for accessibility?

Users who prefer reduced motion should receive a simplified animation experience.

**Recommendation**

Respect the browser's reduced-motion preference where supported by the project.

---

## Q6. Why do animations behave differently across browsers?

Browser rendering engines may implement animation behavior differently.

**Recommendation**

Test animations in multiple modern browsers before deployment.

---

## Q7. My animations work locally but not after deployment.

Possible causes include:

- Incorrect stylesheet path
- Browser or CDN cache
- Missing production assets

Verify deployment configuration and clear cached files if necessary.

---

## Related Documentation

- Installation Guide
- Framework Integration
- Troubleshooting Guide
- Browser Compatibility
- Error Reference Guide

---

## Summary

This FAQ provides quick answers to common animation questions, making it easier for developers to integrate and troubleshoot EaseMotion CSS.