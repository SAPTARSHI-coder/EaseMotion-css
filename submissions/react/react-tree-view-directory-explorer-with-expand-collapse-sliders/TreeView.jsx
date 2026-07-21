import React, { useState } from 'react';

/**
 * A recursive node component representing a single directory or file.
 */
const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(node.isExpanded || false);
  const hasChildren = node.children && node.children.length > 0;

  const toggleExpand = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="ease-tree-node">
      {/* Node Header */}
      <div 
        className={`ease-tree-node-header ${hasChildren ? 'is-folder' : 'is-file'}`} 
        onClick={toggleExpand}
      >
        {/* Chevron Icon for Folders */}
        <div className={`ease-tree-chevron ${hasChildren && isExpanded ? 'expanded' : ''}`}>
          {hasChildren && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          )}
        </div>
        
        {/* Icon (Folder / File) */}
        <div className="ease-tree-icon">
          {hasChildren ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
              <polyline points="13 2 13 9 20 9"></polyline>
            </svg>
          )}
        </div>
        
        <span className="ease-tree-node-label">{node.name}</span>
      </div>

      {/* Children Container (Smooth Expand/Collapse via CSS Grid) */}
      {hasChildren && (
        <div className={`ease-tree-children-wrapper ${isExpanded ? 'is-expanded' : ''}`}>
          <div className="ease-tree-children-inner">
            <div className="ease-tree-children">
              {node.children.map((child, index) => (
                <TreeNode key={index} node={child} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Tree View Directory Explorer Component
 * 
 * @param {Array} data - Array of hierarchical node objects
 */
const TreeView = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return <div className="ease-tree-empty">No directory data available.</div>;
  }

  return (
    <div className="ease-tree-container">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
