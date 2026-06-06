# EaseMotion CSS Class Naming Conventions

This document defines the naming standards for all public framework classes in EaseMotion CSS. Following these conventions ensures consistency, readability, maintainability, and predictable usage across the framework.

## Prefix

All public framework classes must use the `ease-` prefix.

Good:
- `.ease-btn`
- `.ease-card`
- `.ease-text-primary`
- `.ease-animate-fade-in`

Avoid:
- `.btn`
- `.card`
- `.fadeIn`
- `.primaryText`

## Naming Style

Use lowercase, kebab-case, human-readable names.

Good:
- `.ease-slide-in-left`
- `.ease-hover-lift`
- `.ease-card-glass`

Avoid:
- `.easeSlideInLeft`
- `.ease_sld_l`
- `.ease-x1`

## Utility Classes

Utility classes should describe their purpose clearly.

Examples:
- `.ease-padding-4`
- `.ease-margin-8`
- `.ease-rounded-lg`
- `.ease-shadow-xl`

## Component Classes

Component classes should follow:

`ease-{component}`  
`ease-{component}-{variant}`  
`ease-{component}-{state}`

Examples:
- `.ease-btn`
- `.ease-btn-primary`
- `.ease-btn-loading`
- `.ease-card`
- `.ease-card-glass`

## Animation Classes

Animation classes should follow:

`ease-{animation-name}`

Examples:
- `.ease-fade-in`
- `.ease-slide-up`
- `.ease-slide-left`
- `.ease-slide-right`
- `.ease-bounce`
- `.ease-hover-lift`

## Recommended Structure

Framework classes should follow predictable naming patterns:

- `ease-{component}`
- `ease-{component}-{variant}`
- `ease-{component}-{state}`
- `ease-{utility}-{value}`
- `ease-{animation-name}`

Examples:

- `.ease-btn`
- `.ease-btn-primary`
- `.ease-btn-disabled`
- `.ease-padding-4`
- `.ease-fade-in`

## Future Contribution Checklist

Before adding a new class:

- It starts with `ease-`
- It uses kebab-case
- It is readable without abbreviations
- It describes purpose, variant, or behavior
- It does not conflict with existing classes

## Migration Guidelines

When updating existing classes:

- Prefer renaming non-compliant classes to follow the `ease-` prefix standard.
- Avoid introducing duplicate naming patterns.
- Preserve backward compatibility where possible.
- Document breaking changes in the changelog if class names are modified.
- Existing classes should be reviewed periodically to ensure compliance with current naming standards.