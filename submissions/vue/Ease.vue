<template>
  <component
    :is="as"
    :class="computedClasses"
    :style="computedStyles"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Ease',
  props: {
    animation: {
      type: String,
      default: 'fade-in'
    },
    trigger: {
      type: Boolean,
      default: undefined
    },
    loop: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 0
    },
    speed: {
      type: String,
      default: 'normal',
      validator: (val) => ['fast', 'normal', 'slow'].includes(val)
    },
    hover: {
      type: Boolean,
      default: false
    },
    as: {
      type: String,
      default: 'div'
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    computedClasses() {
      const animationClass = `ease-${this.animation}`;
      
      const modifiers = [];
      if (this.loop) modifiers.push('ease-loop');
      if (this.hover) modifiers.push('ease-hover');
      if (this.speed === 'fast') modifiers.push('ease-fast');
      if (this.speed === 'slow') modifiers.push('ease-slow');
      
      // Determine if we should show animation
      // If trigger is provided, we respect that. If not, and it's not a hover animation, it's active.
      let currentlyActive = false;
      if (this.trigger !== undefined) {
        currentlyActive = this.trigger;
      } else if (!this.hover) {
        currentlyActive = this.isActive;
      } else {
        currentlyActive = this.isActive;
      }

      const activeClass = (currentlyActive || this.hover) ? animationClass : '';

      return [activeClass, ...modifiers].filter(Boolean).join(' ');
    },
    computedStyles() {
      if (this.delay > 0) {
        return { animationDelay: `${this.delay}ms` };
      }
      return {};
    }
  },
  watch: {
    trigger(newVal) {
      if (newVal !== undefined) {
        this.isActive = newVal;
      }
    }
  },
  mounted() {
    if (this.trigger === undefined && !this.hover) {
      // Trigger animation on mount
      this.isActive = true;
    }
  },
  methods: {
    onMouseEnter() {
      if (this.hover) {
        this.isActive = true;
      }
    },
    onMouseLeave() {
      if (this.hover) {
        this.isActive = false;
      }
    }
  }
};
</script>
