# Engine Container Query Responsive Animation Compiler

## What does this do?
Enables container-query-responsive animation syntax `em="@cq-<size>:<animation>"` in the EaseMotion DSL.

## How is it used?
```html
<div em="@cq-sm:slide-up @cq-lg:fade-in">Container Query Element</div>
```

## Why is it useful?
Tailors animation triggers to the component's local container width rather than global viewport media queries.
