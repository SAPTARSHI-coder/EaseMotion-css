# Real-Time Clock

### 1. What does this do?
A live-updating digital clock display with a blinking colon separator and a subtle fade/flash transition whenever a digit changes, supporting both 24-hour and 12-hour (AM/PM) formats.

### 2. How is it used?
\`\`\`html
<div class="real-time-clock" data-format="24">
  <span class="rtc-segment" data-unit="hours">00</span>
  <span class="rtc-colon">:</span>
  <span class="rtc-segment" data-unit="minutes">00</span>
  <span class="rtc-colon">:</span>
  <span class="rtc-segment" data-unit="seconds">00</span>
</div>
\`\`\`
- Set \`data-format="12"\` on the container to switch to 12-hour format and include a \`<span class="rtc-meridiem" data-unit="meridiem">\` element to display AM/PM.
- Add the \`is-compact\` class for a smaller footprint (e.g. in a navbar or widget).
- A small inline script reads the current time each second and updates only the segments whose value changed, applying a brief \`rtc-flash\` transition class.

### 3. Why is it useful?
Clocks are a common UI element (dashboards, headers, kiosks) and this component adds motion-driven feedback — a blinking separator and a soft flash on digit change — instead of a static, jarring re-render, fitting EaseMotion's animation-first philosophy while staying framework-free and self-contained.
