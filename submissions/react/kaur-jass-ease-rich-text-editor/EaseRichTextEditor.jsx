import React, { useState, useRef, useEffect } from 'react';
import './style.css';

export default function EaseRichTextEditor({ 
  initialValue = '<h2>Welcome to <b>EaseRichTextEditor</b>! ✨</h2><p>Select any text to apply formatting options or inspect the live generated HTML output below.</p>',
  onChange 
}) {
  const editorRef = useRef(null);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [showHtml, setShowHtml] = useState(false);
  const [htmlCode, setHtmlCode] = useState(initialValue);
  const [copied, setCopied] = useState(false);

  // Synchronize stats and HTML string
  const updateStats = () => {
    if (!editorRef.current) return;
    const text = editorRef.current.innerText || '';
    const rawHtml = editorRef.current.innerHTML;

    const chars = text.replace(/\s/g, '').length;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

    setCharCount(chars);
    setWordCount(words);
    setHtmlCode(rawHtml);

    if (onChange) {
      onChange(rawHtml);
    }
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = initialValue;
      updateStats();
    }
  }, [initialValue]);

  // Execute formatting command
  const handleCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      editorRef.current.focus();
    }
    updateStats();
  };

  // Clear editor content
  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear the editor content?')) {
      if (editorRef.current) {
        editorRef.current.innerHTML = '<p><br></p>';
        updateStats();
      }
    }
  };

  // Copy HTML string to clipboard
  const handleCopyHtml = () => {
    navigator.clipboard.writeText(htmlCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="ease-editor-wrapper">
      <div className="editor-card">
        {/* Toolbar */}
        <div className="editor-toolbar" role="toolbar" aria-label="Rich Text Controls">
          <div className="toolbar-group">
            <button type="button" className="tool-btn" onClick={() => handleCommand('bold')} title="Bold"><b>B</b></button>
            <button type="button" className="tool-btn" onClick={() => handleCommand('italic')} title="Italic"><i>I</i></button>
            <button type="button" className="tool-btn" onClick={() => handleCommand('underline')} title="Underline"><u>U</u></button>
            <button type="button" className="tool-btn" onClick={() => handleCommand('strikeThrough')} title="Strikethrough"><s>S</s></button>
          </div>

          <div className="toolbar-divider" />

          <div className="toolbar-group">
            <button type="button" className="tool-btn" onClick={() => handleCommand('justifyLeft')} title="Align Left">←</button>
            <button type="button" className="tool-btn" onClick={() => handleCommand('justifyCenter')} title="Align Center">↔</button>
            <button type="button" className="tool-btn" onClick={() => handleCommand('justifyRight')} title="Align Right">→</button>
          </div>

          <div className="toolbar-divider" />

          <div className="toolbar-group">
            <button type="button" className="tool-btn" onClick={() => handleCommand('insertUnorderedList')} title="Bullet List">• List</button>
            <button type="button" className="tool-btn" onClick={() => handleCommand('insertOrderedList')} title="Numbered List">1. List</button>
            <button type="button" className="tool-btn" onClick={() => handleCommand('formatBlock', 'blockquote')} title="Quote">“”</button>
          </div>

          <div className="toolbar-divider" />

          <div className="toolbar-group">
            <button type="button" className="tool-btn danger-btn" onClick={handleClear} title="Clear content">Clear</button>
          </div>
        </div>

        {/* Editable Content Workspace */}
        <div 
          ref={editorRef}
          className="editor-content" 
          contentEditable
          suppressContentEditableWarning
          onInput={updateStats}
          onKeyUp={updateStats}
          role="textbox"
          aria-multiline="true"
          aria-label="Rich text editor canvas"
        />

        {/* Footer Statistics Bar */}
        <footer className="editor-footer">
          <div className="stats-group">
            <span>Words: {wordCount}</span>
            <span className="dot-separator">•</span>
            <span>Chars: {charCount}</span>
          </div>
          <button 
            type="button" 
            className="html-toggle-btn" 
            onClick={() => setShowHtml(!showHtml)}
          >
            {showHtml ? 'Hide HTML Output' : 'View HTML Output'}
          </button>
        </footer>
      </div>

      {/* HTML Drawer */}
      {showHtml && (
        <section className="html-drawer">
          <div className="drawer-header">
            <h3>Generated HTML Output</h3>
            <button type="button" className="copy-btn" onClick={handleCopyHtml}>
              {copied ? 'Copied!' : 'Copy HTML'}
            </button>
          </div>
          <pre><code>{htmlCode}</code></pre>
        </section>
      )}
    </div>
  );
}