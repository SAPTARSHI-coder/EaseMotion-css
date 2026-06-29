 
# Voice Message Recording UI (ease-voice-message)

Voice message recording UI component with waveform animation, timer, and recording indicator.

## Files

- demo.html - Interactive demo
- style.css - Voice message styles
- README.md - Documentation

## Features

- 🎤 Microphone icon + recording dot (ease-ping)
- 📊 Animated waveform bars during recording
- ⏱️ Recording timer display
- ⏹️ Stop and cancel controls
- ▶️ Playback for recorded messages
- 📋 Recorded messages list

## Usage

```html
<div class="recording-controls">
    <button class="record-btn" id="recordBtn">
        <span class="mic-icon">🎤</span>
        <span class="record-label">Tap to Record</span>
    </button>
</div>
<div class="recording-status" id="recordingStatus">
    <div class="recording-indicator">
        <span class="recording-dot"></span>
        <span class="recording-text">Recording...</span>
    </div>
    <div class="waveform" id="waveform">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
    <div class="recording-timer">00:00</div>
    <div class="recording-actions">
        <button class="stop-btn">Stop</button>
        <button class="cancel-btn">Cancel</button>
    </div>
</div>