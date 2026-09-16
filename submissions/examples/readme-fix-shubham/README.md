# Fix: Unclosed Code Block in Animations Section

This submission resolves Issue #2982 by isolating and providing the corrected markdown structure for the core documentation layout.

## The Bug
The fenced code block starting under `### Animations` lacked a closing triple-backtick token, causing the `### Duration Helpers` heading and its content to render as raw text inside the code box.

## The Solution
By appending the closing backticks (` ``` `) directly after the final `</div>` of the staggered sequence list, the code blocks terminate cleanly and preserve the correct layout hierarchy.