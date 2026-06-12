# Troubleshooting Guide

## Overview

This example provides a troubleshooting guide for common issues that developers may encounter while working with EaseMotion animation utilities.

The goal is to help users quickly identify and resolve setup, configuration, and compatibility problems without needing extensive debugging experience.

---

## Common Issues Covered

### 1. Animations Not Triggering

#### Symptoms

- Animation classes are applied but no animation is visible.
- Elements remain static after page load.
- Expected transitions do not occur.

#### Possible Causes

- Incorrect animation class name.
- Animation duration set to zero.
- Conflicting CSS rules overriding animations.
- Missing stylesheet import.

#### Solution

- Verify the animation class name.
- Confirm EaseMotion CSS is properly loaded.
- Inspect the element using browser developer tools.
- Check for conflicting styles.

---

### 2. CSS Import Problems

#### Symptoms

- Animation classes have no effect.
- Browser developer tools show missing stylesheet resources.

#### Possible Causes

- Incorrect import path.
- Missing build configuration.
- Stylesheet not included in the project entry file.

#### Solution

- Verify the CSS file path.
- Confirm the stylesheet is included in the project.
- Restart the development server after configuration changes.
- Check browser network logs for loading errors.

---

### 3. Build Tool Configuration Issues

#### Symptoms

- Animations work in development but fail in production.
- Build process removes animation-related classes.

#### Possible Causes

- CSS optimization removing unused classes.
- Incorrect framework configuration.
- Missing content paths in build tooling.

#### Solution

- Verify build tool settings.
- Ensure animation classes are included in scanned content files.
- Test production builds locally before deployment.

---

### 4. Browser Compatibility Concerns

#### Symptoms

- Animations behave differently across browsers.
- Some animation effects fail to render.

#### Possible Causes

- Unsupported CSS features.
- Older browser versions.
- Browser-specific rendering differences.

#### Solution

- Test across multiple browsers.
- Use standard CSS animation properties.
- Review browser compatibility documentation.
- Provide graceful fallbacks when necessary.

---

## Accessibility Considerations

- Respect user motion preferences using `prefers-reduced-motion`.
- Avoid excessive or distracting animation effects.
- Ensure content remains usable when animations are disabled.

---

## Benefits

- Faster debugging and issue resolution.
- Reduced support requests.
- Improved developer onboarding experience.
- Better overall documentation quality.

---

## Files Included

- `demo.html`
- `style.css`
- `README.md`

---

## Testing

The troubleshooting examples were reviewed to ensure that each documented issue includes a practical explanation and a clear resolution path.

This guide can serve as a reference for both new and experienced users when diagnosing common EaseMotion integration problems.
