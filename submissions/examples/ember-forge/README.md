# 🔥 Ember Forge

An interactive blacksmith forge animation where metal responds to heat, hammer impacts, cooling, sparks, deformation, and environmental effects.

Built as a lightweight, dependency-free component following the animation-first philosophy of EaseMotion CSS.

---

## 📖 Description

Ember Forge creates a miniature interactive forging experience directly in the browser.

The component simulates a piece of metal being heated inside a forge and shaped through repeated hammer impacts.

As the temperature changes, the metal gradually transitions between different visual states. Heat increases the metal's glow, strengthens the surrounding heat haze, and increases the intensity of the forge environment.

Hammering the metal creates a procedural burst of sparks, an expanding impact ripple, temporary metal deformation, and a short hammer animation.

The entire experience is implemented using vanilla HTML, CSS, and JavaScript with no external dependencies.

---

## ✨ Features

- 🔥 Dynamic metal heating
- 🌡️ 0–100% temperature control
- 🔨 Interactive hammer strikes
- ✨ Procedural spark particles
- 💥 Impact ripple animation
- 🧱 Metal deformation
- 🌫️ Heat glow and haze
- 🔥 Animated forge flames
- ❄️ Cooling interaction
- 📊 Real-time temperature state
- 🎛️ Adjustable hammer force
- ⌨️ Keyboard shortcuts
- 🖱️ Canvas interaction
- 📱 Responsive layout
- ♻️ Reset functionality
- 🚫 No external dependencies

---

## 🌡️ Temperature System

The forge contains four visual temperature states.

| Temperature | State | Behavior |
|---|---|---|
| 0–20% | Cold | Dark metallic surface |
| 21–50% | Warm | Beginning orange glow |
| 51–80% | Hot | Strong glow and heat effects |
| 81–100% | Molten | Maximum glow and environmental activity |

Temperature is smoothly interpolated rather than instantly changing.

This prevents the metal from visually jumping between states when the user moves the slider.

---

## 🔨 Hammer System

The hammer is controlled through the Strike Metal button, canvas interaction, or the Space key.

Each strike performs several actions:

1. Checks whether the metal has sufficient heat.
2. Generates a procedural spark burst.
3. Creates an impact ripple.
4. Applies temporary deformation to the metal.
5. Animates the hammer toward the metal.
6. Temporarily updates the forge status.
7. Gradually returns the metal to its original shape.

The hammer force slider controls the intensity of these effects.

Higher force results in:

- More sparks
- Faster sparks
- Greater deformation
- Stronger impact feedback

---

## ✨ Spark Particle System

Sparks are generated dynamically whenever the metal is struck.

Each spark contains:

- Position
- Horizontal velocity
- Vertical velocity
- Lifetime
- Size

The particles are updated every animation frame.

Gravity is simulated by gradually increasing the vertical velocity.

Particles fade naturally as their lifetime approaches zero.

Expired particles are removed from the active array to prevent unnecessary memory usage.

---

## 💥 Impact Ripple

Every successful strike generates an expanding impact ring.

The ripple starts close to the metal and gradually expands outward while its opacity decreases.

This creates a secondary visual cue that communicates the force of the hammer strike without requiring additional DOM elements.

---

## 🔥 Forge Flames

The forge background contains lightweight procedural flame shapes.

Flame particles are randomized across the forge area and vary in:

- Position
- Height
- Opacity

The intensity of the surrounding environment is influenced by the current heat level.

This allows the forge to feel increasingly active as the metal becomes hotter.

---

## 🌫️ Heat Effect

As temperature increases, a radial glow develops around the metal.

The glow is controlled by the current heat value.

At lower temperatures:

- The glow is almost invisible.
- The metal remains dark.

At higher temperatures:

- The glow becomes brighter.
- The illuminated area becomes larger.
- The metal appears increasingly hot.

This creates a smooth transition between temperature states.

---

## 🧱 Metal Deformation

Hammer impacts temporarily deform the metal.

The deformation value is calculated from the current hammer force.

A stronger strike produces a larger temporary deformation.

The deformation is interpolated back toward zero after each strike, producing a subtle elastic recovery.

This keeps the animation organic rather than making the metal instantly snap back.

---

## ❄️ Cooling System

The Cool button decreases the target temperature.

Cooling does not instantly change the visual state.

Instead, the target temperature is updated and the current temperature gradually approaches it through interpolation.

This allows the glow and surrounding effects to fade naturally.

---

## 🎛️ Controls

### Heat

Controls the target temperature of the metal.

Range:

```text
0–100%