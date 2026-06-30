# Ease Basilisk Stare Animation

1. What does this do? Creates a "petrification" animation where an element emits a brief eerie green glow before hardening into high-contrast grayscale stone and shrinking slightly under its new weight.
2. How is it used? Apply `.ease-basilisk-ps` for an immediate one-time petrification, or `.ease-basilisk-hover-ps` to trigger the transformation when the user hovers over the element.
3. Why is it useful? It's a fantastic thematic animation for game UIs, creative disabled states (e.g. turning a button to "stone" when it becomes inactive), or storytelling elements. It utilizes pure CSS filters (`grayscale`, `contrast`, `sepia`, `drop-shadow`) leaving the main thread unblocked.
