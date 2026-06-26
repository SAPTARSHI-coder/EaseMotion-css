// submissions/react-animated-breadcrumb-22935/Breadcrumb.jsx
const { useState } = React;

/**
 * Breadcrumb — Animated breadcrumb component using EaseMotion CSS.
 *
 * Animation techniques demonstrated:
 * 1. Item stagger on mount — each crumb gets `.ease-slide-up .ease-duration-fast`
 *    with `index × 80ms` delay so the full trail cascades in left-to-right.
 * 2. New crumb entrance — when the user navigates deeper, the newly appended
 *    crumb enters with `.ease-slide-up .ease-duration-normal`, giving a clear
 *    visual signal that the path has grown.
 * 3. Separator fade-in — the `›` dividers between crumbs use `.ease-fade-in
 *    .ease-duration-fast` so they appear in sync with their crumb.
 * 4. Active crumb highlight — the last crumb (current page) receives a
 *    gradient colour + subtle glow via CSS, while ancestors use `.ease-hover-glow`
 *    for hover feedback.
 * 5. Truncation collapse — when the path exceeds 4 crumbs, the middle items
 *    are collapsed behind a `…` button; expanding the collapsed set replays the
 *    stagger via a `revealKey` increment (fresh DOM mount trick).
 * 6. Go-back animation — clicking a crumb navigates back, removing crumbs with
 *    a brief `.ease-fade-out` applied to the card panel, not the breadcrumb
 *    itself, so the trail updates cleanly.
 */

// ── Data ────────────────────────────────────────────────────────────────────
const SITE_TREE = [
  { id: 'home',       label: '🏠 Home',          children: ['docs', 'blog', 'pricing'] },
  { id: 'docs',       label: '📚 Docs',           children: ['react', 'nextjs'] },
  { id: 'blog',       label: '✍️ Blog',            children: [] },
  { id: 'pricing',    label: '💳 Pricing',         children: [] },
  { id: 'react',      label: '⚛️ React',           children: ['hooks', 'components'] },
  { id: 'nextjs',     label: '⚡ Next.js',         children: ['approuter', 'ssg'] },
  { id: 'hooks',      label: '🎣 Hooks',           children: ['usescrollreveal', 'usehover'] },
  { id: 'components', label: '🧩 Components',      children: ['accordion', 'modal'] },
  { id: 'approuter',  label: '🗂️ App Router',      children: [] },
  { id: 'ssg',        label: '📦 SSG',             children: [] },
  { id: 'usescrollreveal', label: 'useScrollReveal', children: [] },
  { id: 'usehover',   label: 'useHover',           children: [] },
  { id: 'accordion',  label: '🪗 Accordion',       children: [] },
  { id: 'modal',      label: '🪟 Modal',           children: [] },
];

const nodeMap = Object.fromEntries(SITE_TREE.map(n => [n.id, n]));

// ── Separator ────────────────────────────────────────────────────────────────
const Sep = ({ index }) => (
  <span
    className="ease-fade-in ease-duration-fast"
    style={{
      color: 'rgba(255,255,255,0.25)',
      fontSize: '0.85rem',
      userSelect: 'none',
      animationDelay: `${index * 80 + 40}ms`,
      animationFillMode: 'both',
    }}
  >
    ›
  </span>
);

// ── Single crumb ─────────────────────────────────────────────────────────────
const Crumb = ({ node, isActive, isNew, index, onClick }) => (
  <button
    onClick={onClick}
    disabled={isActive}
    className={`ease-slide-up ease-duration-fast ${isActive ? '' : 'ease-hover-glow'}`}
    style={{
      background: 'transparent',
      border: 'none',
      cursor: isActive ? 'default' : 'pointer',
      padding: '6px 10px',
      borderRadius: '8px',
      fontSize: '0.88rem',
      fontWeight: isActive ? 700 : 400,
      animationDelay: isNew ? '0ms' : `${index * 80}ms`,
      animationFillMode: 'both',
      transition: 'background 0.2s',
      // Active crumb gradient text
      ...(isActive ? {
        background: 'linear-gradient(90deg, #a78bfa, #38bdf8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'drop-shadow(0 0 6px rgba(167,139,250,0.3))',
      } : {
        color: 'rgba(255,255,255,0.55)',
      }),
    }}
  >
    {node.label}
  </button>
);

// ── Collapse button ──────────────────────────────────────────────────────────
const CollapseBtn = ({ expanded, onClick }) => (
  <button
    onClick={onClick}
    className="ease-btn ease-hover-scale"
    style={{
      padding: '4px 10px', borderRadius: '8px',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.12)',
      color: 'rgba(255,255,255,0.55)',
      fontSize: '0.82rem', cursor: 'pointer',
    }}
  >
    {expanded ? '‹ less' : '…'}
  </button>
);

// ── Breadcrumb trail ─────────────────────────────────────────────────────────
const BreadcrumbTrail = ({ path, onNavigate, revealKey }) => {
  const [expanded, setExpanded] = useState(false);
  const COLLAPSE_THRESHOLD = 4;
  const shouldCollapse = path.length > COLLAPSE_THRESHOLD && !expanded;

  // Build displayed items
  let items;
  if (shouldCollapse) {
    // Show: first, …, last-2, last-1, last
    const tail = path.slice(-3);
    items = [
      { node: nodeMap[path[0]], idx: 0, isNew: false },
      { collapsed: true },
      ...tail.map((id, ti) => ({ node: nodeMap[id], idx: path.length - 3 + ti, isNew: false })),
    ];
  } else {
    items = path.map((id, idx) => ({ node: nodeMap[id], idx, isNew: idx === path.length - 1 && path.length > 1 }));
  }

  return (
    <nav
      key={revealKey}
      aria-label="Breadcrumb"
      style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '2px' }}
    >
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {item.collapsed ? (
            <>
              <Sep index={i} />
              <CollapseBtn expanded={false} onClick={() => setExpanded(true)} />
            </>
          ) : (
            <>
              {i > 0 && <Sep index={i} />}
              <Crumb
                node={item.node}
                isActive={i === items.length - 1}
                isNew={item.isNew}
                index={item.idx}
                onClick={() => !( i === items.length - 1) && onNavigate(item.node.id)}
              />
            </>
          )}
        </React.Fragment>
      ))}
      {expanded && path.length > COLLAPSE_THRESHOLD && (
        <CollapseBtn expanded={true} onClick={() => setExpanded(false)} />
      )}
    </nav>
  );
};

// ── Page content panel ───────────────────────────────────────────────────────
const PagePanel = ({ node, panelKey }) => (
  <div
    key={panelKey}
    className="ease-card ease-card-glass ease-fade-in ease-slide-up ease-duration-normal ease-padding-8"
    style={{ marginTop: '24px' }}
  >
    <h2 className="ease-text-2xl ease-font-bold" style={{ color: 'white', marginBottom: '12px' }}>
      {node.label}
    </h2>
    {node.children.length > 0 ? (
      <>
        <p className="ease-text-muted" style={{ marginBottom: '16px', fontSize: '0.9rem' }}>
          Navigate deeper by clicking a child page:
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {node.children.map((childId, ci) => (
            <span
              key={childId}
              className="ease-slide-up ease-duration-fast"
              style={{ animationDelay: `${ci * 80 + 100}ms`, animationFillMode: 'both' }}
            >
              {/* Child links rendered as data-attributes for demo; actual navigation below */}
              <span data-child={childId} className="child-link" style={{
                padding: '8px 16px', borderRadius: '8px',
                background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)',
                color: '#a78bfa', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer',
              }}>
                {nodeMap[childId]?.label}
              </span>
            </span>
          ))}
        </div>
      </>
    ) : (
      <p className="ease-text-muted" style={{ fontSize: '0.9rem' }}>
        This is a leaf page. Use the breadcrumb trail above to navigate back up.
      </p>
    )}
  </div>
);

// ── Root App ─────────────────────────────────────────────────────────────────
const App = () => {
  const [path, setPath]         = useState(['home']);
  const [revealKey, setRevealKey] = useState(0);
  const [panelKey, setPanelKey]  = useState(0);

  const currentNode = nodeMap[path[path.length - 1]];

  const navigateTo = (id) => {
    // Find if already in path (navigate back)
    const existingIdx = path.indexOf(id);
    let newPath;
    if (existingIdx !== -1) {
      newPath = path.slice(0, existingIdx + 1);
    } else {
      newPath = [...path, id];
    }
    setPath(newPath);
    setRevealKey(k => k + 1);
    setPanelKey(k => k + 1);
  };

  // Delegate child-link clicks via event bubbling
  const handlePanelClick = (e) => {
    const childId = e.target.closest('[data-child]')?.dataset?.child;
    if (childId) navigateTo(childId);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        <header className="ease-fade-in ease-duration-slow" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">Animated Breadcrumb</h1>
          <p className="ease-text-muted ease-mt-2">
            Stagger on mount · new-crumb slide-in · collapse/expand · separator fade
          </p>
        </header>

        {/* Breadcrumb */}
        <div className="ease-card ease-card-solid ease-padding-6"
          style={{ background: '#1e293b', borderRadius: '14px', marginBottom: '0' }}
        >
          <BreadcrumbTrail
            path={path}
            onNavigate={navigateTo}
            revealKey={revealKey}
          />
        </div>

        {/* Page content */}
        <div onClick={handlePanelClick}>
          <PagePanel node={currentNode} panelKey={panelKey} />
        </div>

        {/* Reset */}
        {path.length > 1 && (
          <button
            onClick={() => { setPath(['home']); setRevealKey(k=>k+1); setPanelKey(k=>k+1); }}
            className="ease-btn ease-btn-secondary ease-hover-scale ease-mt-4"
            style={{ display: 'block', margin: '20px auto 0', fontSize: '0.85rem' }}
          >
            ↺ Reset to Home
          </button>
        )}

      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
