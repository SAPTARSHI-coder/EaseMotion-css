# Catapult Stopwatch

A cockpit launch-control stopwatch animated in pure CSS, inspired by Space design patterns.

## 1. What does this do?

This component provides a pure CSS stopwatch displaying minutes, seconds, and centiseconds that triggers an elastic catapult launch animation (winding back and snapping forward) on the second hand whenever it is started or paused.

## 2. How is it used?

Link to both the core `easemotion.css` library and `style.css`, then construct the HTML with the following pattern inside a `<form>` container to enable zero-JS resets:

```html
<form action="javascript:void(0);">
  <!-- Toggle Checkboxes -->
  <input type="checkbox" id="safety-toggle-ag" style="display: none;" />
  <input type="checkbox" id="timer-start-ag" style="display: none;" />

  <!-- Console container -->
  <div class="launch-console-ag">
    <!-- Stopwatch Dial and Digital HUD -->
    <div class="stopwatch-dial-ag">
      <div class="hand-sec-container-ag">
        <div class="hand-sec-ag"></div>
      </div>
    </div>

    <div class="digital-hud-ag">
      <span class="digit-mm-ag"></span>: <span class="digit-ss-ag"></span>:
      <span class="digit-cs-ag"></span>
    </div>

    <!-- Safety Lid and Launch Lever controls -->
    <div class="safety-cover-system-ag">
      <label
        for="safety-toggle-ag"
        class="safety-lid-ag"
        tabindex="0"
        role="button"
      ></label>
      <div class="launch-lever-well-ag">
        <label
          for="timer-start-ag"
          class="lever-switch-ag"
          tabindex="0"
          role="button"
        >
          <div class="lever-handle-ag"></div>
        </label>
      </div>
    </div>

    <!-- Reset Trigger -->
    <button type="reset" class="btn-reset-ag">Reset</button>
  </div>
</form>
```

---

## 3. Why is it useful?

Timing triggers and countdown indicators are frequently needed elements for dashboard panels, workflow step monitoring, and telemetry readouts. By implementing the numeric counting logic in pure CSS via custom properties (`@property`) and using form resets for status changes, this stopwatch requires zero JavaScript to run, keeping the codebase lightweight, highly performant, and fully compliant with EaseMotion's zero-dependency philosophy.
