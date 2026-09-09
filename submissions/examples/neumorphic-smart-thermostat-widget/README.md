# Neumorphic Smart Thermostat Widget

## 1. What does this do?
This contribution provides a Neumorphic Smart Thermostat Widget UI component. It features a tactile inset/outset shadow control dial, digital temperature readout, active cooling status badge, and interactive push buttons.

## 2. How is it used?
Include `style.css` in your project and wrap the thermostat dial structure using `.thermostat-card`.

```html
<link rel="stylesheet" href="style.css">

<div class="thermostat-card">
  <div class="dial-container">
    <div class="dial-outer">
      <div class="dial-inner">
        <span class="temp-readout">22.5°</span>
      </div>
    </div>
  </div>
</div>
```

## 3. Why is it useful?
Neumorphic design gives smart home dashboards and IoT interfaces a realistic, physical soft-touch feel using pure CSS box-shadows.
