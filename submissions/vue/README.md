# EaseMotion-css Vue Wrapper

A simple Vue component wrapper for EaseMotion CSS, allowing you to trigger animations seamlessly using Vue state, props, and events.

## Installation

First, ensure you have included `easemotion-css` in your project via CDN or npm.

Copy the `Ease.vue` file into your Vue project's `components` directory.

## Usage

```vue
<template>
  <div>
    <button @click="show = !show">Toggle Animation</button>

    <!-- Basic animation on mount -->
    <Ease animation="fade-in">
      <h1>Welcome!</h1>
    </Ease>

    <!-- State triggered animation -->
    <Ease animation="bounce" :trigger="show">
      <div class="card">I bounce when you click!</div>
    </Ease>

    <!-- Hover animation with a delay and speed modifier -->
    <Ease animation="pulse" hover speed="fast" :delay="100">
      <button>Hover Me</button>
    </Ease>
  </div>
</template>

<script>
import Ease from './Ease.vue';

export default {
  components: {
    Ease
  },
  data() {
    return {
      show: false
    };
  }
};
</script>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `animation` | `String` | `'fade-in'` | The EaseMotion animation name (e.g. `'slide-up'`, `'bounce'`). |
| `trigger` | `Boolean` | `undefined` | Triggers the animation based on state. If omitted, animates on mount. |
| `loop` | `Boolean` | `false` | Adds the loop modifier if applicable. |
| `delay` | `Number` | `0` | Animation delay in milliseconds. |
| `speed` | `String` | `'normal'` | Animation speed modifier (`'fast'`, `'normal'`, `'slow'`). |
| `hover` | `Boolean` | `false` | If true, animation only plays on mouse hover. |
| `as` | `String` | `'div'` | The HTML tag to render as the root wrapper. |
