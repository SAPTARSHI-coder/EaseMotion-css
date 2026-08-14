# Aurora Drag Drop Zone

Resolves #42403.

### What does this do?
Adds an Aurora Drag Drop Zone component to EaseMotion CSS tailored for Neumorphic design interfaces. It uses a combination of inset `box-shadow` for the classic neumorphic carved-out look, and a rotating, blurred `conic-gradient` (`aurora-bg`) that appears on hover to simulate an aurora borealis effect inside the drop zone.

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the design layout. It requires a soft background color (like `#e0e5ec`) for the neumorphic shadows to work correctly. The invisible `<input type="file">` sits over the entire zone, handling actual file drops natively.

### Why is it useful?
Provides a stunning, organic visual feedback mechanism for drag-and-drop file uploaders without needing JavaScript or heavy canvas animations.
