# Claymorphism UI Component (`claymorphism-ui`)

A soft, 3D plastic-like user interface card component featuring multi-layered inner shadows, outer drop highlights, and integrated micro-interactions.

## Properties Reference

| Prop Name | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `"Claymorphism Card"` | Title heading text of the card. |
| `description` | `string` | `"A soft, 3D plastic-like UI component..."` | Body content explaining the feature. |
| `buttonText` | `string` | `"Explore"` | Label displayed inside the call-to-action button. |
| `className` | `string` | `""` | Supplementary framework or layout utility utility classes. |

## Usage Example

```jsx
import React from 'react';
import { ClayCard } from './claymorphism-ui/claymorphism';
import './claymorphism-ui/style.css';

function App() {
  return (
    <div className="container-layout">
      <ClayCard 
        title="Smart Control Dashboard"
        description="Monitor full-stack performance with intuitive tactile feedback interfaces."
        buttonText="Initialize"
        className="ease-fade-in"
      />
    </div>
  );
}

export default App;