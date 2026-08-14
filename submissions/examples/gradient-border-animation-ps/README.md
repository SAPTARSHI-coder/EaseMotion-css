# Gradient Border Animation Component

1. What does this do? Creates a sleek card with a continuously spinning, multi-colored gradient border.
2. How is it used? Apply `.gradient-border-card-ps` to a container element. The CSS handles the inner padding, border width (via `inset`), and background colors entirely through pseudo-elements.
3. Why is it useful? It provides a highly requested premium UI aesthetic (often used to highlight pricing tiers or special features) without relying on heavy JavaScript or modern CSS properties that lack legacy support (like `@property`). It relies on standard `conic-gradient` and absolute positioning for maximum browser compatibility.
