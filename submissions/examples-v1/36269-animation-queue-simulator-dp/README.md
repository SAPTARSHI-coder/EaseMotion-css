1. What does this do?

This example is an interactive CSS animation queue simulator. It shows how rapid animation requests move through a scheduler when the selected strategy is Queue, Interrupt, Replace, Ignore, or Merge.

2. How is it used?

Open `demo.html`, choose a scheduling strategy, adjust duration, interval, and request count, then trigger single requests, bursts, or an automatic request stream. Enable comparison mode to run two strategies side by side and watch how their queues, execution metrics, and history logs diverge.

3. Why is it useful?

Animation bugs often come from unclear scheduling behavior when users click, hover, scroll, or navigate quickly. This tool makes request handling visible so developers can choose the right strategy and build more predictable motion systems.
