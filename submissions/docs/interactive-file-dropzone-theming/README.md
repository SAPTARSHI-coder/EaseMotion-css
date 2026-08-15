# Interactive File Drag Dropzone (Theming Configuration Guide)

This guide documents how to use CSS Custom Properties (variables) to manage the visual states of an Interactive File Dropzone. Because file uploads involve multiple dynamic states (idle, drag-over, uploading, success, error), hardcoding colors into individual CSS selectors creates a maintenance nightmare.

Instead, we map all colors to CSS variables, and use modifier classes to redefine those variables on the fly.

## Theming Architecture

Define the base visual properties of the dropzone in the `:root` scope.

### Base Variables (Idle State)
```css
:root {
    --dz-border: #cbd5e1;     /* Gray dashed border */
    --dz-bg: #ffffff;         /* White background */
    --dz-text: #334155;
    --dz-icon: #94a3b8;
    
    /* Interactive States */
    --dz-border-hover: #3b82f6;
    --dz-bg-hover: #eff6ff;
    --focus-ring: #3b82f6;
}
```

Apply these variables directly to the component structure:

```css
.dropzone-label {
    border: 2px dashed var(--dz-border);
    background-color: var(--dz-bg);
    color: var(--dz-text);
}

.upload-icon {
    color: var(--dz-icon);
}
```

## Creating State Modifiers

When a user drops a file, JavaScript will evaluate it (e.g., checking file size). Based on the result, you can append a modifier class (like `.theme-success` or `.theme-error`) to the `.dropzone-label` element. 

These modifiers simply overwrite the CSS variables, instantly re-theming the entire component.

### Example: Error State Theme

```css
/* Modifier Class overrides variables */
.theme-error {
    --dz-border: #ef4444;       /* Red border */
    --dz-bg: #fef2f2;           /* Light red background */
    --dz-text: #991b1b;
    --dz-icon: #ef4444;         /* Red icon */
    
    --dz-border-hover: #dc2626;
    --dz-bg-hover: #fee2e2;
    --focus-ring: #ef4444;      /* Ensure focus ring matches the error state */
}
```

### Example: Success State Theme

For a success state, you might also want to change structural CSS, such as converting the dashed border to a solid one to signify completion.

```css
.theme-success {
    --dz-border: #10b981;       /* Green border */
    --dz-bg: #ecfdf5;
    --dz-text: #065f46;
    --dz-icon: #10b981;
    
    --focus-ring: #10b981;
    
    border-style: solid;        /* Structural override for completion */
}
```

## Accessibility Note

Notice that every theme modifier explicitly redefines the `--focus-ring` variable. This ensures that keyboard accessibility is never compromised, and the focus outline always harmonizes with the current semantic state of the component (e.g., a red outline for an error state, a green outline for a success state).

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
