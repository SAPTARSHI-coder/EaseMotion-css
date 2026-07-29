# Animated Weather Widget

This is a self-contained example demonstrating how to create a modern, animated weather widget with dynamic weather conditions (sunny, cloudy, rainy, stormy, snowy), 5-day forecast, and weather details using pure CSS animations and minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- ☀️ **Sunny Weather:** Animated sun with rotating rays and pulsing core.
- ☁️ **Cloudy Weather:** Floating cloud animations with smooth movement.
- 🌧️ **Rainy Weather:** Animated raindrops falling with staggered delays.
- ⛈️ **Stormy Weather:** Lightning flashes with dramatic effect.
- 🌨️ **Snowy Weather:** Falling snowflakes with rotation and drift.
- 🌡️ **Animated Temperature:** Smooth number transitions when weather changes.
- 📊 **Weather Details:** Humidity, wind, UV index, and visibility.
- 📅 **5-Day Forecast:** Interactive forecast days with weather icons.
- 🎛️ **Weather Selector:** Switch between different weather conditions.
- ✨ **Smooth Transitions:** Fade and transform animations between states.
- ♿ **Fully Accessible:** Respects `prefers-reduced-motion` and semantic HTML.
- 📱 **Responsive Design:** Adapts to all screen sizes.
- 🚫 **Minimal JavaScript:** Only for weather state management and animations.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the weather widget HTML structure.
4. Customize weather data in the JavaScript class.
5. Include the JavaScript at the bottom of your page.
6. Initialize: `const weatherWidget = new WeatherWidget();`

## HTML Structure

### Weather Animation
```html
<div class="weather-animation weather-animation--sunny" id="weatherAnimation">
  <!-- Sun -->
  <div class="sun">
    <div class="sun__core"></div>
    <div class="sun__ray sun__ray--1"></div>
    <!-- More rays -->
  </div>
  
  <!-- Clouds -->
  <div class="cloud cloud--1">
    <div class="cloud__part cloud__part--1"></div>
    <!-- More parts -->
  </div>
  
  <!-- Rain -->
  <div class="rain">
    <div class="raindrop raindrop--1"></div>
    <!-- More drops -->
  </div>
  
  <!-- Snow -->
  <div class="snow">
    <div class="snowflake snowflake--1"></div>
    <!-- More flakes -->
  </div>
  
  <!-- Lightning -->
  <div class="lightning">
    <svg class="lightning__bolt"><!-- Lightning SVG --></svg>
  </div>
</div>