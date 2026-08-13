# Fix Chip and Badge Text Overflow (Issue #9805)

1. **What does this do?**  
   Adds truncation rules (`overflow: hidden`, `text-overflow: ellipsis`, `white-space: nowrap`) to `.ease-chip` and `.ease-badge` to prevent long text from breaking layouts.

2. **How is it used?**  
   Add these properties to the base `.ease-chip` and `.ease-badge` classes. Also apply `min-width: 0` to flex contexts if needed.

3. **Why is it useful?**  
   Resolves bug #9805, ensuring these components remain visually intact even when displaying dynamic or unexpectedly long strings.
