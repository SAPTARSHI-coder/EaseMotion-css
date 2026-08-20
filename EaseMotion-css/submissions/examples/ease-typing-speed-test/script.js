(function () {
  "use strict";

  var prompts = [
    "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump.",
    "The five boxing wizards jump quickly. Sphinx of black quartz, judge my vow. Waltz, bad nymph, for quick jigs vex.",
    "Two driven jocks help fax my big quiz. Quick, zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz.",
    "When zombies arrive, quickly fax Judge Pat. A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent.",
    "Jaded zombies acted quaintly but kept driving their oxen forward. A quick movement of the enemy will jeopardize six gunboats."
  ];

  var els = {
    prompt: document.getElementById("prompt"),
    input: document.getElementById("input"),
    timer: document.getElementById("timer"),
    timerRing: document.getElementById("timer-ring"),
    wpm: document.getElementById("wpm"),
    accuracy: document.getElementById("accuracy"),
    actionBtn: document.getElementById("action-btn"),
    results: document.getElementById("results"),
    finalWpm: document.getElementById("final-wpm"),
    finalAccuracy: document.getElementById("final-accuracy"),
    finalChars: document.getElementById("final-chars"),
    finalRaw: document.getElementById("final-raw")
  };

  var state = {
    running: false,
    finished: false,
    timeLeft: 60,
    totalTime: 60,
    timerId: null,
    promptText: "",
    correctChars: 0,
    totalTyped: 0,
    startTime: 0
  };

  var CIRCUMFERENCE = 2 * Math.PI * 18;

  function pickPrompt() {
    return prompts[Math.floor(Math.random() * prompts.length)];
  }

  function displayPrompt(text) {
    state.promptText = text;
    els.prompt.innerHTML = "";
    for (var i = 0; i < text.length; i++) {
      var span = document.createElement("span");
      span.className = "pending";
      span.textContent = text[i] === " " ? "\u00A0" : text[i];
      if (i > 0 && text[i] === " ") span.style.marginRight = "0.15em";
      els.prompt.appendChild(span);
    }
  }

  function updateStats() {
    var elapsed = Math.max(1, (Date.now() - state.startTime) / 1000 / 60);
    var wpm = Math.round((state.correctChars / 5) / elapsed);
    var accuracy = state.totalTyped > 0 ? Math.round((state.correctChars / state.totalTyped) * 100) : 100;
    els.wpm.textContent = wpm;
    els.accuracy.textContent = accuracy + "%";
  }

  function updateTimer() {
    els.timer.textContent = Math.ceil(state.timeLeft);
    var offset = CIRCUMFERENCE * (1 - state.timeLeft / state.totalTime);
    els.timerRing.setAttribute("stroke-dashoffset", Math.max(0, offset));
    if (state.timeLeft <= 10) {
      els.timerRing.setAttribute("stroke", "var(--ease-color-danger)");
    } else if (state.timeLeft <= 30) {
      els.timerRing.setAttribute("stroke", "var(--ease-color-warning)");
    }
  }

  function endTest() {
    state.running = false;
    state.finished = true;
    clearInterval(state.timerId);
    els.input.disabled = true;
    els.actionBtn.textContent = "Try Again";

    var elapsed = Math.max(1, (Date.now() - state.startTime) / 1000 / 60);
    var rawWpm = Math.round((state.totalTyped / 5) / elapsed);
    var wpm = Math.round((state.correctChars / 5) / elapsed);
    var accuracy = state.totalTyped > 0 ? Math.round((state.correctChars / state.totalTyped) * 100) : 100;

    els.finalWpm.textContent = wpm;
    els.finalAccuracy.textContent = accuracy + "%";
    els.finalChars.textContent = state.correctChars;
    els.finalRaw.textContent = "Raw WPM: " + rawWpm;
    els.results.classList.remove("ease-hidden");
  }

  function checkInput() {
    var val = els.input.value;
    var chars = els.prompt.querySelectorAll("span");
    state.correctChars = 0;
    state.totalTyped = 0;

    for (var i = 0; i < chars.length; i++) {
      if (i < val.length) {
        state.totalTyped++;
        var expected = state.promptText[i];
        var typed = val[i];
        if (typed === expected) {
          chars[i].className = "correct";
          state.correctChars++;
        } else {
          chars[i].className = "incorrect";
        }
      } else if (i === val.length) {
        chars[i].className = "current";
      } else {
        chars[i].className = "pending";
      }
    }

    updateStats();

    if (val.length >= state.promptText.length) {
      endTest();
    }
  }

  function countdown() {
    state.timeLeft--;
    updateTimer();
    if (state.timeLeft <= 0) {
      endTest();
    }
  }

  function startTest() {
    state.running = true;
    state.finished = false;
    state.timeLeft = 60;
    state.correctChars = 0;
    state.totalTyped = 0;
    state.startTime = Date.now();

    els.results.classList.add("ease-hidden");
    els.prompt.classList.remove("ease-hidden");
    els.timerRing.setAttribute("stroke", "var(--ease-color-primary)");

    displayPrompt(pickPrompt());
    els.input.value = "";
    els.input.disabled = false;
    els.input.focus();
    els.actionBtn.textContent = "Testing\u2026";
    els.actionBtn.disabled = true;
    els.wpm.textContent = "0";
    els.accuracy.textContent = "100%";
    updateTimer();

    checkInput();
    state.timerId = setInterval(countdown, 1000);
  }

  function resetTest() {
    clearInterval(state.timerId);
    state.running = false;
    state.finished = false;
    state.timeLeft = 60;
    state.correctChars = 0;
    state.totalTyped = 0;

    els.results.classList.add("ease-hidden");
    els.input.disabled = true;
    els.actionBtn.textContent = "Start Test";
    els.actionBtn.disabled = false;
    els.wpm.textContent = "0";
    els.accuracy.textContent = "100%";
    els.timer.textContent = "60";
    els.timerRing.setAttribute("stroke-dashoffset", "0");
    els.timerRing.setAttribute("stroke", "var(--ease-color-primary)");
    displayPrompt(pickPrompt());
    els.input.value = "";
  }

  els.actionBtn.addEventListener("click", function () {
    if (state.running) return;
    if (state.finished) resetTest();
    setTimeout(startTest, 100);
  });

  els.input.addEventListener("input", checkInput);

  displayPrompt(pickPrompt());
})();
