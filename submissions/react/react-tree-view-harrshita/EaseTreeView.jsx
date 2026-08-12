import React, { useState } from 'react';
import './style.css';

const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="ease-tree-node">
      <div className="ease-tree-label" onClick={() => setIsOpen(!isOpen)}>
        {hasChildren && (
          <span className={`ease-tree-icon ${isOpen ? 'open' : ''}`}>
            ▶
          </span>
        )}
        <span className="ease-tree-text">{node.label}</span>
      </div>
      {hasChildren && isOpen && (
        <div className="ease-tree-children">
          {node.children.map((child, idx) => (
            <TreeNode key={idx} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const EaseTreeView = ({ data }) => {
  return (
    <div className="ease-tree-container">
      {data.map((node, idx) => (
        <TreeNode key={idx} node={node} />
      ))}
    </div>
  );
};

export default EaseTreeView;
