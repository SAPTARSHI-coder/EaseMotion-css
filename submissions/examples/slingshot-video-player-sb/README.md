# 🎯 Slingshot Video Player

A travel-inspired video player component with a playful slingshot play button animation.

## Features
- Slingshot-style play button (pull-back + release animation)
- Hover and click interactions
- Play/Pause state toggle
- Video thumbnail with duration badge
- Custom video controls (progress bar, time display)
- Responsive design
- Uses EaseMotion CSS variables

## Usage
```html
<div class="ease-video-player">
    <div class="ease-video-thumbnail">
        <img src="video-thumbnail.jpg" alt="Video thumbnail" />
        <div class="ease-play-button" id="playButton">
            <div class="ease-slingshot">
                <div class="ease-slingshot-band"></div>
                <div class="ease-slingshot-projectile">
                    <!-- Play Icon SVG -->
                </div>
            </div>
        </div>
    </div>
</div>