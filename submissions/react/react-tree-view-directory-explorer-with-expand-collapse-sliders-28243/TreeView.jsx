import React, { useState, useRef, useEffect } from 'react';

/**
 * Tree View Directory Node (Recursive Component)
 */
const TreeNode = ({ node, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(node.defaultOpen || false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('0px');

  const hasChildren = node.children && node.children.length > 0;

  useEffect(() => {
    // Measure the actual DOM height of the children wrapper to animate to it
    if (contentRef.current) {
      if (isOpen) {
        setContentHeight(`${contentRef.current.scrollHeight}px`);
        
        // After the transition finishes, set to 'auto' so it can dynamically resize if nested children open
        const timer = setTimeout(() => {
          setContentHeight('auto');
        }, 300); // Matches the CSS transition duration
        return () => clearTimeout(timer);
      } else {
        // To animate out of 'auto', we first force it to the pixel height, then next frame set to 0
        setContentHeight(`${contentRef.current.scrollHeight}px`);
        const frame = requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setContentHeight('0px');
          });
        });
        return () => cancelAnimationFrame(frame);
      }
    }
  }, [isOpen, node.children]);

  const toggleOpen = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="ease-tree-node">
      {/* The visible row for this directory/file */}
      <div 
        className={`ease-tree-row ${isOpen ? 'is-open' : ''} ${!hasChildren ? 'is-leaf' : ''}`}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={toggleOpen}
      >
        <div className="ease-tree-icon-wrapper">
          {hasChildren ? (
            <svg 
              className="ease-tree-chevron" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          ) : (
            // Spacer for leaf nodes (files) so they align with folders
            <span className="ease-tree-spacer"></span>
          )}
          
          {/* Folder / File Icon */}
          {hasChildren ? (
            <svg className="ease-tree-folder" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          ) : (
            <svg className="ease-tree-file" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
              <polyline points="13 2 13 9 20 9"></polyline>
            </svg>
          )}
        </div>
        
        <span className="ease-tree-label">{node.name}</span>
      </div>

      {/* The animated children container */}
      {hasChildren && (
        <div 
          className="ease-tree-children-wrapper"
          ref={contentRef}
          style={{ height: contentHeight }}
          aria-hidden={!isOpen}
        >
          <div className="ease-tree-children-inner">
            {node.children.map((childNode, index) => (
              <TreeNode key={index} node={childNode} level={level + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Tree View Directory Explorer
 * 
 * @param {Array} data - Array of nested tree node objects { name, children: [] }
 */
const TreeView = ({ data = [] }) => {
  return (
    <div className="ease-tree-container">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
