# Catapult Stopwatch (Social Media Variant)

A hands-free camera recording timer mockup animated in pure CSS, inspired by social media microinteractions.

## 1. What does this do?

This component provides a pure CSS stopwatch showing minutes, seconds, and centiseconds that triggers elastic catapult animations on the record button and timer overlays when starting, pausing, or showing options.

## 2. How is it used?

Link the core `easemotion.css` library and `style.css` in the HTML document, then construct the structure inside a `<form>` container to enable zero-dependency state resets:

```html
<form class="stopwatch-dashboard-antigravity" action="javascript:void(0);">
  <!-- Checkboxes for State Management -->
  <input type="checkbox" id="timer-start-antigravity" style="display: none" />
  <input type="checkbox" id="timer-pause-antigravity" style="display: none" />

  <div class="phone-mockup-antigravity">
    <!-- Stopwatch Display -->
    <div class="hud-display-antigravity" role="timer">
      <div class="recording-indicator-antigravity"></div>
      <div class="digits-box-antigravity">
        <span class="digit-mm-antigravity"></span>:
        <span class="digit-ss-antigravity"></span>:
        <span class="digit-cs-antigravity"></span>
      </div>
    </div>

    <!-- Central Interactive Record Button -->
    <div class="btn-record-container-antigravity">
      <div class="progress-ring-antigravity">
        <div class="progress-ring-inner-antigravity"></div>
      </div>
      <div class="btn-record-antigravity">
        <!-- Interactive Labels to Toggle States -->
        <label
          for="timer-start-antigravity"
          class="label-start-antigravity"
          tabindex="0"
          role="button"
        ></label>
        <label
          for="timer-pause-antigravity"
          class="label-pause-antigravity"
          tabindex="0"
          role="button"
        ></label>
        <label
          for="timer-pause-antigravity"
          class="label-resume-antigravity"
          tabindex="0"
          role="button"
        ></label>
      </div>
    </div>

    <!-- Action Drawer Overlay -->
    <div class="action-dock-antigravity">
      <button type="reset" class="btn-reset-antigravity">Reset</button>
      <button type="submit" class="btn-share-antigravity">Post to Feed</button>
    </div>
  </div>
</form>
```

## 3. Why is it useful?

It implements a complex multi-state stopwatch with Pause, Play, Resume, and Reset capabilities entirely in CSS using `@property` integers and animation-play-state toggling. By removing JavaScript dependencies for interface transitions, it remains lightweight, performant, and perfectly aligned with EaseMotion's focus on pure CSS layouts.
