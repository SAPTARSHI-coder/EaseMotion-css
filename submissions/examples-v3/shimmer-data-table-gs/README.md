# Glassmorphism Shimmer Data Table

### 1. What does this do?
This component provides a continuous, smooth CSS linear-gradient animation over a frosted glass container to simulate a data-loading (skeleton) state for data tables.

### 2. How is it used?
Wrap a standard HTML table in the glassmorphism wrapper, then use the shimmer block and utility width classes inside the table cells. 

```html
<div class="em-glass-table-wrapper">
    <table class="em-shimmer-table">
        <tr class="em-shimmer-row">
            <td class="em-shimmer-cell">
                <div class="em-shimmer-block em-w-70"></div>
            </td>
        </tr>
    </table>
</div>
