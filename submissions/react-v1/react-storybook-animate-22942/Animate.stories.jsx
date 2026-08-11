import React from 'react';
import Animate from '../../examples/react-vite/src/components/Animate';

// Storybook default configuration
export default {
  title: 'EaseMotion/React/Animate',
  component: Animate,
  argTypes: {
    type: {
      control: 'select',
      options: ['fade-in', 'slide-up', 'slide-down', 'zoom-in', 'spin', 'bounce', 'shake'],
      description: 'The core animation effect class',
    },
    duration: {
      control: 'select',
      options: ['fast', 'medium', 'slow', 200, 500, 1000],
      description: 'Animation duration (preset string or ms)',
    },
    delay: {
      control: 'number',
      description: 'Delay before animation starts (ms)',
    },
    hover: {
      control: 'select',
      options: ['lift', 'glow', 'scale', 'shake', 'pulse'],
      description: 'Hover interaction effect',
    },
    tag: {
      control: 'text',
      description: 'HTML tag to render (e.g. div, span, button)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A robust React wrapper component for EaseMotion CSS utility classes. Maps props dynamically to underlying `.ease-animate-*` and `.ease-hover-*` classes while managing inline style overrides for duration and delay.',
      },
    },
  },
};

// Template for rendering a visual block
const Template = (args) => (
  <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
    <Animate 
      {...args} 
      style={{
        padding: '1.5rem 3rem',
        backgroundColor: '#4f46e5',
        color: '#fff',
        borderRadius: '12px',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        boxShadow: '0 10px 25px rgba(79, 70, 229, 0.4)',
        cursor: args.hover ? 'pointer' : 'default',
        ...args.style
      }}
    >
      EaseMotion
    </Animate>
  </div>
);

export const FadeIn = Template.bind({});
FadeIn.args = {
  type: 'fade-in',
  duration: 'medium',
};

export const SlideUp = Template.bind({});
SlideUp.args = {
  type: 'slide-up',
  duration: 'medium',
  delay: 200,
};

export const HoverScale = Template.bind({});
HoverScale.args = {
  hover: 'scale',
};
HoverScale.parameters = {
  docs: {
    description: {
      story: 'Hover over the element to trigger the `.ease-hover-scale` micro-interaction.',
    },
  },
};

export const HoverGlow = Template.bind({});
HoverGlow.args = {
  hover: 'glow',
};

export const CustomTiming = Template.bind({});
CustomTiming.args = {
  type: 'zoom-in',
  duration: 1500,
  delay: 500,
};
CustomTiming.parameters = {
  docs: {
    description: {
      story: 'Passing numbers directly to `duration` and `delay` dynamically sets the `animation-duration` and `animation-delay` inline styles in milliseconds.',
    },
  },
};

export const StaggeredList = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
      {items.map((item, index) => (
        <Animate
          key={index}
          type="slide-up"
          delay={index * 150} // 150ms stagger
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#1e293b',
            color: '#f8fafc',
            borderRadius: '8px',
            border: '1px solid #334155'
          }}
        >
          {item}
        </Animate>
      ))}
    </div>
  );
};
StaggeredList.parameters = {
  docs: {
    description: {
      story: 'A common pattern utilizing the `delay` prop based on array indices to create cascading staggered entrances.',
    },
  },
};
