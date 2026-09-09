# Tag Input Chips

1. What does this do? An input where typed tags turn into removable chips that pop in and whose remove buttons rotate on hover.
2. How is it used? Build a `.tag-input-chips` label as a flex-wrap container holding `.tag-input-chips__chip` spans (each with a `.tag-input-chips__remove` button) followed by the `.tag-input-chips__field` text input. The newest chip marked `.is-new` gets the pop-in entrance; `:focus-within` highlights the whole field. The chip/tag rendering itself is CSS; JS would handle typing-to-chip conversion.
3. Why is it useful? It presents a polished tag-entry affordance with pure CSS chip styling, entrance animation, and focus ring, plus `prefers-reduced-motion` support.
