# Glowing Neon Outline Input Field with Animated Floating Label (Vibrant Gradient Version)

1. **What does this do?** 
   A state-of-the-art interactive input field designed for dark mode interfaces. When unfocused, it sits cleanly in the layout. On focus, a vibrant pink-to-purple-to-blue neon gradient border instantly illuminates, casting a soft, expansive glow around the field. Simultaneously, the placeholder text elegantly floats upward and shrinks, transforming into an active label.

2. **How is it used?** 
   Simply drop the HTML block from `demo.html` into your project and link the `style.css`. It relies purely on CSS pseudo-classes (`:focus` and `:not(:placeholder-shown)`) for the animations—there is absolute zero JavaScript required! It utilizes layered `z-index` trickery combined with absolute positioning to perfectly overlay the dark input field atop the glowing gradient background.

3. **Why is it useful?** 
   Forms and inputs are traditionally boring. This component injects life and energy into a simple interaction, perfectly fitting the "Micro-Animations" category of EaseMotion CSS. It demonstrates how to achieve complex glowing lighting effects using only native CSS gradients, `filter: blur()`, and scale transforms.
