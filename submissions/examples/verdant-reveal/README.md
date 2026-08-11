# 🌿 Verdant Reveal

### A Living Plant That Grows With Interaction

Verdant Reveal is an interactive botanical animation where a tiny seed gradually transforms into a complete blooming plant.

The component turns plant growth into a visual interaction.

Instead of displaying every element immediately, the animation progressively introduces the seed, stem, leaves, flower bud, petals, and pollen as the user increases the growth percentage.

Built with vanilla HTML, CSS, and JavaScript, the component requires no external dependencies and can be previewed by opening `demo.html` directly in a browser.

---

## 📖 Description

Verdant Reveal simulates a complete plant growth cycle through a single interactive component.

At 0%, the experience begins with a small seed hidden beneath the soil.

As the user increases the growth level:

- The seed gradually emerges.
- The stem extends upward.
- Leaves unfold from different positions.
- A flower bud develops.
- Petals gradually open.
- Pollen particles begin floating around the flower.
- The completed plant gently sways in the environment.

The animation intentionally uses interpolation rather than instantly changing between states.

This creates a more natural feeling of continuous growth.

---

## 🎯 Core Features

### 🌰 Seed Stage

The experience begins with a small seed positioned underneath the soil.

The seed progressively moves upward as the growth value increases.

### 🌿 Progressive Stem Growth

The stem is dynamically sized according to the current growth value.

Rather than instantly appearing, it smoothly grows toward its final height.

### 🍃 Organic Leaves

Six leaves are positioned at different points along the stem.

Each leaf has an individual growth threshold, creating a staggered unfolding effect.

### 🌸 Flower Bloom

The flower begins appearing during the budding stage.

The flower scales from a small bud into a complete bloom.

### ✨ Pollen System

At high growth levels, floating pollen particles appear around the flower.

Each particle has an independent animation delay, creating a less repetitive effect.

### 🌱 Growth Stages

The component contains five visual stages:

| Stage | Range | Description |
|---|---:|---|
| Seed | 0-15% | Seed remains beneath the soil |
| Sprout | 15-35% | Small stem emerges |
| Growing | 35-65% | Stem extends and leaves unfold |
| Budding | 65-85% | Flower bud develops |
| Bloom | 85-100% | Flower opens completely |

---

## 🎛️ Controls

### Growth Slider

The main slider controls the target growth value.

The range is:

```text
0% → 100%