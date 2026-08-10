# Bugfix: Badge Text Alignment

This submission resolves **Issue 4: Text Wrapping and Alignment Glitches for Multi-Character Labels**.

## 🐛 The Bug
The `.ease-badge` and `.em-badge` core components lacked explicit layout guards for typography. When a badge contained multiple characters (e.g., `99+ Messages`) and was placed inside a parent container with an elevated `line-height` (e.g., `line-height: 2.5`), the text inside the badge inherited that line height. This destroyed the vertical centering provided by flexbox, pushing the text down. Furthermore, if placed in a narrow container, the text could awkwardly wrap onto multiple lines, breaking the fixed 20px badge height.

## 🛠️ The Fix
Without modifying the existing library files, this submission provides a `style.css` file that patches the `@layer easemotion-components` to add two critical properties to the base badge classes:

1. `white-space: nowrap;`: This explicitly prevents the text from wrapping onto a second line, forcing the flex container to expand its width horizontally as intended.
2. `line-height: 1;`: This resets the inherited line height. By forcing the text's line height to exactly match its font size, we guarantee that the `align-items: center` flex property can perfectly center the text vertically within the fixed 20px height of the badge container, regardless of the surrounding typography context.

## 📋 Verification
Open `demo.html` to see the fix in action. The page demonstrates a multi-character badge placed inside a container with `line-height: 2.5;`. You will observe that the badge maintains its tight 20px height and the text remains perfectly centered vertically. Another example demonstrates that a badge with extremely long text placed in a narrow container will not wrap.
