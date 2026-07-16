# LandingPage

A self-contained hero + feature-grid landing page section built with EaseMotion CSS.

## Description

`LandingPage` renders a hero block (title, subtitle, call-to-action button) followed by a responsive feature card grid. It's meant as a realistic, drop-in demonstration of EaseMotion's entrance (`ease-fade-in`, `ease-slide-up`) and hover (`ease-hover-lift`, `ease-hover-scale`) utilities used together on real marketing-page content, rather than an isolated single-element demo.

## Props

| Prop        | Type       | Default                              | Description                                    |
| ----------- | ---------- | ------------------------------------- | ----------------------------------------------- |
| `title`     | `string`   | `"Build motion-first interfaces"`     | Hero headline text.                             |
| `subtitle`  | `string`   | *(see source)*                        | Supporting text under the headline.             |
| `ctaLabel`  | `string`   | `"Get Started"`                       | Text shown on the call-to-action button.        |
| `onCtaClick`| `function` | `undefined`                           | Handler fired when the CTA button is clicked.   |
| `features`  | `Array<{title, desc}>` | 3 default items          | Feature cards rendered below the hero.          |

## Usage

```jsx
import LandingPage from "./LandingPage";

function App() {
  return (
    <LandingPage
      title="Ship animations without the boilerplate"
      subtitle="Utility classes for motion, done right."
      ctaLabel="Try it now"
      onCtaClick={() => console.log("CTA clicked")}
      features={[
        { title: "Fast", desc: "Zero JS runtime cost." },
        { title: "Flexible", desc: "Works with any framework." },
      ]}
    />
  );
}
```

## Why this is useful

New contributors and users often want to see EaseMotion classes applied to a full page section, not just an isolated button or card. This component gives a realistic, copy-pasteable starting point for a marketing/landing page that already wires up multiple EaseMotion utilities correctly together.
