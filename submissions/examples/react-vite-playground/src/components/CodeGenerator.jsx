import React from 'react';
import { Copy } from 'lucide-react';

function CodeGenerator({ config }) {
  const { type, duration, timingCurve, hoverLift, hoverScale, hoverGlow } = config;

  let styleString = '';
  if (timingCurve === 'linear') {
    styleString = ` style={{ '--ease-ease': 'linear' }}`;
  } else if (timingCurve === 'elastic-bounce') {
    styleString = ` style={{ '--ease-ease': 'var(--ease-ease-bounce)' }}`;
  }

  // Construct JSX string
  let innerJsx = `  <Animate type="${type}" duration={${duration}}${styleString}>\n    <div className="card">EaseMotion</div>\n  </Animate>`;

  if (hoverGlow) {
    innerJsx = `  <Hover type="glow">\n  ${innerJsx.replace(/\n/g, '\n  ')}\n  </Hover>`;
  }
  if (hoverScale) {
    innerJsx = `  <Hover type="scale">\n  ${innerJsx.replace(/\n/g, '\n  ')}\n  </Hover>`;
  }
  if (hoverLift) {
    innerJsx = `  <Hover type="lift">\n  ${innerJsx.replace(/\n/g, '\n  ')}\n  </Hover>`;
  }

  const fullCode = `import { Animate, Hover } from './wrappers';

export default function MyComponent() {
  return (
${innerJsx}
  );
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullCode);
  };

  return (
    <div className="code-panel">
      <button className="copy-btn" onClick={copyToClipboard} aria-label="Copy code">
        <Copy size={16} /> Copy
      </button>
      <pre className="code-block">
        <code>{fullCode}</code>
      </pre>
    </div>
  );
}

export default CodeGenerator;
