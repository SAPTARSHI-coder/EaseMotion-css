# Motion Usage Analytics Dashboard

Relates to feature request **#41435**.

## 1. What does this do?

Introduces a developer dashboard that analyzes a project's HTML and summarizes how EaseMotion utilities are being used. The dashboard parses HTML to report the most frequently used animation classes, identify duplicated motion patterns, and suggest opportunities for creating reusable presets.

## 2. Why is this useful for EaseMotion CSS?

As projects scale, animation usage often becomes inconsistent. A usage analytics dashboard helps teams:
- Understand their motion system usage at a glance.
- Identify redundant patterns (e.g., using `ease-fade ease-scale` repeatedly).
- Encourage consistent animation practices across large codebases without changing existing workflows.
- Keep their bundle sizes optimized by extracting common patterns into single classes.

## 3. How it Works

1. **Parser**: A JavaScript engine scans the provided HTML input for `class="..."` attributes and filters out any classes starting with `ease-`.
2. **Frequency Map**: It counts individual class usage to build a "most used" bar chart.
3. **Combinatorics Map**: It groups classes used on the same element to find duplicates (e.g., `<div class="ease-fade ease-slide-up">`).
4. **Preset Generator**: Based on the duplicates, it suggests optimized CSS code snippets to convert the repeated utilities into a single custom class.

## 4. Example Dashboard Output (matches the issue's snippet exactly)

**HTML Snippet**
```html
<div class="ease-card ease-fade ease-scale">
  Dashboard Example
</div>

<div class="ease-card ease-slide-up">
  Another Animated Card
</div>
```

**Dashboard Analysis**
The dashboard will extract:
- `ease-card` (2 uses)
- `ease-fade` (1 use)
- `ease-scale` (1 use)
- `ease-slide-up` (1 use)

It will also flag combinations if repeated across multiple elements.

## 5. Features Included

- **Interactive Code Editor**: Paste raw HTML directly into the dashboard.
- **KPI Cards**: Quick metrics at a glance (Total Usages, Unique Classes, Duplicate Patterns, Preset Suggestions).
- **Usage Bar Chart**: A visual ranking of the most frequently used classes in the project.
- **Duplicate Finder**: Lists specific combinations of utility classes that are repeated across the codebase.
- **Preset Suggestions**: Automatically generates `.ease-preset-*` CSS snippets based on duplicated patterns, showing how many repetitions could be saved.
- **Sample Loader**: A "Load Sample Project" button to quickly demonstrate the dashboard's capabilities on a mock codebase.
