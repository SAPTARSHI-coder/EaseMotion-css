# Motion Choreography Designer

A motion design studio that teaches sequencing, hierarchy, and timing
by choreographing a small set of realistic UI elements — not just a
single animated shape.

## 1. What does this do?

Animates 3–8 UI elements (Logo, Heading, Navigation, Cards, Charts,
Buttons, Images, Icons) inside a live mockup, using eight sequence
presets (Dashboard Reveal, Hero Entrance, Modal Opening, Sidebar
Expansion, Notification Stack, Product Grid, Loading Screen, Card
Cascade) that each define a different entrance order suited to that
context. A **Motion Timeline** shows every element on its own track
with a ruler and synchronized playhead. A **Motion Hierarchy** panel
lists the elements in the order they draw attention and highlights
whichever one is currently animating. A **Motion Analysis** panel
reports total duration, element count, longest delay, average stagger,
sequence complexity, and motion density, alongside recommendations
tailored to the current preset. A **Good vs Poor Choreography** toggle
switches between the sequenced entrance and every element animating
simultaneously, with an explanation of why one is easier to follow.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Choose a **Sequence Preset** from the toolbar to load a different
  choreography strategy and its matching recommendations.
- Switch **Choreography** between Good (sequenced) and Poor (all at
  once) to compare directly.
- Adjust **Duration**, **Delay**, **Stagger**, **Overlap**, **Animation
  Count**, and **Easing** in the Motion Properties sidebar — the
  preview, timeline, hierarchy, and analysis panels all update
  together.
- Use **Playback Speed** to slow down or speed up the entire sequence
  without changing its relative timing.
- Use **Play**, **Pause**, **Replay**, and **Reset** to control
  playback; hover any timeline bar for its exact start and end time.

## 3. Why is it useful?

Motion tutorials usually teach individual animations in isolation,
leaving developers to guess how several of them should work together
on a real screen. This tool makes the missing piece — choreography —
the main subject: the timeline shows the actual timing relationships
between elements, the hierarchy panel makes the "what should the eye
see first" question concrete, and the direct Good-vs-Poor comparison
demonstrates, rather than just asserts, why staggered entrances read
as more intentional than simultaneous ones. The preset-specific
recommendations reinforce that the right choreography depends on
context (a modal isn't a dashboard), which is a harder and more useful
lesson than "add a stagger." The preview still respects
`prefers-reduced-motion` by falling back to a simple fade, while the
timeline, hierarchy, and analysis panels continue to function
normally.