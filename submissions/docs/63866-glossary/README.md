# EaseMotion CSS Glossary

This glossary explains common terms used throughout the EaseMotion CSS documentation. It is intended to help new users understand the framework and CSS concepts more quickly.

---

# Glossary

## Utility Class

A small, single-purpose CSS class that applies one specific style or behavior, such as spacing, alignment, or animation.

**Example**

```css
.animate-fade-in
```

---

## Design Token

A reusable design value such as a color, spacing unit, font size, or animation duration used to maintain consistency across components.

**Examples**

- Primary color
- Border radius
- Animation duration

---

## Cascade Layer

A CSS feature that helps organize styles into layers, making it easier to control style precedence and avoid conflicts.

**Benefits**

- Better organization
- Predictable styling
- Easier maintenance

---

## CSS Variable

A reusable custom property defined with the `--` prefix.

**Example**

```css
--primary-color: #4f46e5;
```

CSS variables improve consistency and simplify theme customization.

---

## Keyframe

A sequence of animation steps created using the `@keyframes` rule.

**Example**

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

---

## Animation Utility

A predefined utility class that applies a specific animation without requiring custom CSS.

**Benefits**

- Quick implementation
- Consistent animations
- Reusable styles

---

# Why This Glossary Matters

- Helps beginners understand terminology.
- Makes documentation easier to follow.
- Reduces confusion when reading examples.
- Improves onboarding for new contributors.

---

# Summary

This glossary provides clear definitions of common EaseMotion CSS terminology to improve the overall developer experience.