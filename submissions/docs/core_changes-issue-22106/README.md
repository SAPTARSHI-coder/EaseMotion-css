# Responsive Breakpoint Utility Classes

## What does this do?

Adds responsive breakpoint utilities to EaseMotion CSS with visibility classes (`ease-sm-only`, `ease-md-only`, `ease-lg-only`, `ease-xl-only`, `ease-2xl-only`) and responsive prefix patterns (`ease-sm:*`, `ease-md:*`, etc.) that let developers apply different styles at different screen sizes without writing media queries.

## How is it used?

**Show element only on mobile:**

```html
<div class="ease-sm-only">Visible only on small screens</div>
```

**Hide element on mobile, show on desktop:**

```html
<nav class="ease-hidden ease-md:flex">Desktop navigation</nav>
```

**Different animation at different breakpoints:**

```html
<div class="ease-fade-in ease-md:slide-in-left">
  Animates differently on mobile vs desktop
</div>
```

## Why is it useful?

Responsive design is a fundamental requirement for modern web development. Without responsive utilities, developers must write media queries for every breakpoint-specific behavior. These utilities provide the same workflow Tailwind CSS popularized — applying classes conditionally at different screen sizes — while staying true to EaseMotion CSS's utility-first philosophy.
