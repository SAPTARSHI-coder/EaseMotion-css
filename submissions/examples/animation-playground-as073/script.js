(function () {
  "use strict";

  var subject = document.getElementById("subject");
  var timelineFill = document.getElementById("timeline-fill");
  var timelineEnd = document.getElementById("timeline-end");
  var codeOutput = document.getElementById("code-output");
  var copyHint = document.getElementById("copy-hint");

  var controls = {
    type: document.getElementById("anim-type"),
    duration: document.getElementById("duration"),
    delay: document.getElementById("delay"),
    easing: document.getElementById("easing"),
    iteration: document.getElementById("iteration"),
    direction: document.getElementById("direction"),
    fillMode: document.getElementById("fill-mode"),
  };

  var readouts = {
    duration: document.getElementById("duration-readout"),
    delay: document.getElementById("delay-readout"),
  };

  var DEFAULTS = {
    type: "fade-in",
    duration: "600",
    delay: "0",
    easing: "ease-in-out",
    iteration: "1",
    direction: "normal",
    fillMode: "forwards",
  };

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var timelineTimer = null;

  function currentSettings() {
    return {
      type: controls.type.value,
      duration: parseInt(controls.duration.value, 10),
      delay: parseInt(controls.delay.value, 10),
      easing: controls.easing.value,
      iteration: controls.iteration.value,
      direction: controls.direction.value,
      fillMode: controls.fillMode.value,
    };
  }

  function updateReadouts(settings) {
    readouts.duration.textContent = settings.duration + "ms";
    readouts.delay.textContent = settings.delay + "ms";
    timelineEnd.textContent = settings.duration + "ms";
  }

  function buildAnimationShorthand(settings) {
    var keyframeName = "ease-kf-" + settings.type;
    var iteration = settings.iteration === "infinite" ? "infinite" : settings.iteration;
    return [
      keyframeName,
      settings.duration + "ms",
      settings.easing,
      settings.delay + "ms",
      iteration,
      settings.direction,
      settings.fillMode,
    ].join(" ");
  }

  function playAnimation(settings) {
    // Restart the animation reliably by clearing it first.
    subject.style.animation = "none";
    // eslint-disable-next-line no-unused-expressions
    subject.offsetHeight; // force reflow
    subject.style.animation = buildAnimationShorthand(settings);
    runTimeline(settings);
  }

  function runTimeline(settings) {
    clearTimeout(timelineTimer);
    timelineFill.style.transition = "none";
    timelineFill.style.width = "0%";

    // Force reflow so the transition below is picked up.
    // eslint-disable-next-line no-unused-expressions
    timelineFill.offsetHeight;

    if (reduceMotion) {
      timelineFill.style.width = "100%";
      return;
    }

    var totalTime = settings.delay + settings.duration;
    var isInfinite = settings.iteration === "infinite";

    timelineTimer = setTimeout(function () {
      timelineFill.style.transition = settings.duration + "ms linear";
      timelineFill.style.width = "100%";

      if (isInfinite) {
        timelineTimer = setTimeout(function () {
          timelineFill.style.transition = "none";
          timelineFill.style.width = "0%";
        }, settings.duration + 60);
      }
    }, Math.max(settings.delay, 10));

    if (!isInfinite) {
      // no-op reserved for future multi-iteration timeline visualization
    }
  }

  function generateSnippet(settings) {
    var iteration = settings.iteration === "infinite" ? "infinite" : settings.iteration;
    var html =
      '<div class="ease-kf-' +
      settings.type +
      '" style="animation-duration:' +
      settings.duration +
      "ms;\">\n" +
      "  Your content\n" +
      "</div>";

    var css =
      "@keyframes ease-kf-" +
      settings.type +
      " { /* ships with EaseMotion CSS */ }\n\n" +
      ".ease-kf-" +
      settings.type +
      " {\n" +
      "  animation-name: ease-kf-" +
      settings.type +
      ";\n" +
      "  animation-duration: " +
      settings.duration +
      "ms;\n" +
      "  animation-timing-function: " +
      settings.easing +
      ";\n" +
      "  animation-delay: " +
      settings.delay +
      "ms;\n" +
      "  animation-iteration-count: " +
      iteration +
      ";\n" +
      "  animation-direction: " +
      settings.direction +
      ";\n" +
      "  animation-fill-mode: " +
      settings.fillMode +
      ";\n" +
      "}";

    return html + "\n\n" + css;
  }

  function refresh(shouldPlay) {
    var settings = currentSettings();
    updateReadouts(settings);
    codeOutput.textContent = generateSnippet(settings);
    if (shouldPlay) {
      playAnimation(settings);
    }
  }

  function attachLiveListeners() {
    Object.keys(controls).forEach(function (key) {
      controls[key].addEventListener("input", function () {
        refresh(true);
      });
    });
  }

  function resetToDefaults() {
    controls.type.value = DEFAULTS.type;
    controls.duration.value = DEFAULTS.duration;
    controls.delay.value = DEFAULTS.delay;
    controls.easing.value = DEFAULTS.easing;
    controls.iteration.value = DEFAULTS.iteration;
    controls.direction.value = DEFAULTS.direction;
    controls.fillMode.value = DEFAULTS.fillMode;
    refresh(true);
  }

  document.getElementById("replay-btn").addEventListener("click", function () {
    refresh(true);
  });

  document.getElementById("reset-btn").addEventListener("click", resetToDefaults);

  document.getElementById("copy-btn").addEventListener("click", function () {
    var text = codeOutput.textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(function () {
          showCopyHint("Copied to clipboard.");
        })
        .catch(function () {
          showCopyHint("Could not copy — select and copy manually.");
        });
    } else {
      var textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        showCopyHint("Copied to clipboard.");
      } catch (err) {
        showCopyHint("Could not copy — select and copy manually.");
      }
      document.body.removeChild(textarea);
    }
  });

  var hintTimer = null;
  function showCopyHint(message) {
    copyHint.textContent = message;
    clearTimeout(hintTimer);
    hintTimer = setTimeout(function () {
      copyHint.textContent = "";
    }, 2200);
  }

  attachLiveListeners();
  refresh(!reduceMotion);
})();
