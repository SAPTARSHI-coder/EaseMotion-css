// submissions/react-stepper-wizard-22931/StepperWizard.jsx
const { useState, useRef } = React;

/**
 * StepperWizard — Animated multi-step progress wizard using EaseMotion CSS.
 *
 * Animation techniques demonstrated:
 * 1. Progress connector bar — CSS `width` transition from 0% → ((step-1)/(total-1))*100%
 *    driven by React state, creating a smooth crawling fill between step nodes.
 * 2. Step node pulse — completed nodes get `.ease-pulse` briefly via a
 *    temporary state class, then settle into a ✔ state.
 * 3. Panel direction-aware slide — moving FORWARD applies `.ease-slide-up`
 *    on the new panel; moving BACKWARD applies `.ease-slide-down` (or a
 *    reverse variant). Direction is tracked in a ref to avoid stale closures.
 * 4. Step label fade — active label fades in with `.ease-fade-in` each time
 *    it becomes the current step.
 * 5. Completion burst — on final step submission the entire wizard fades out
 *    and a confetti-style success banner slides up with `.ease-slide-up .ease-fade-in`.
 */

// ── Step definitions ────────────────────────────────────────────────────────
const STEPS = [
  {
    id: 0,
    label: 'Account',
    icon: '👤',
    heading: 'Account Details',
    desc: 'Tell us who you are so we can personalise your experience.',
    fields: [
      { id: 'username', label: 'Username', placeholder: 'e.g. easemotion_dev', type: 'text' },
      { id: 'email',    label: 'Email',    placeholder: 'you@example.com',    type: 'email' },
    ],
  },
  {
    id: 1,
    label: 'Profile',
    icon: '🎨',
    heading: 'Your Profile',
    desc: 'Customise how others see you on the platform.',
    fields: [
      { id: 'display', label: 'Display Name', placeholder: 'Jane Doe',          type: 'text' },
      { id: 'bio',     label: 'Short Bio',    placeholder: 'A few words…',      type: 'text' },
    ],
  },
  {
    id: 2,
    label: 'Prefs',
    icon: '⚙️',
    heading: 'Preferences',
    desc: 'Choose your default animation settings and theme.',
    fields: [
      { id: 'theme',  label: 'Theme',           placeholder: 'dark / light',   type: 'text' },
      { id: 'speed',  label: 'Default Speed',   placeholder: 'normal / fast',  type: 'text' },
    ],
  },
  {
    id: 3,
    label: 'Review',
    icon: '✅',
    heading: 'Review & Submit',
    desc: 'Everything looks good? Hit Submit to complete your setup!',
    fields: [],
  },
];

// ── Progress bar + step nodes ───────────────────────────────────────────────
const StepRail = ({ current, total, completedPulse }) => {
  const progressPct = ((current) / (total - 1)) * 100;

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '2.5rem' }}>

      {/* Track */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: '50%', transform: 'translateY(-50%)',
        height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', zIndex: 0,
      }} />

      {/* Animated fill */}
      <div style={{
        position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
        height: '3px', background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
        borderRadius: '2px', zIndex: 1,
        width: `${progressPct}%`,
        transition: 'width 0.55s cubic-bezier(0.4,0,0.2,1)',
      }} />

      {/* Step nodes */}
      {STEPS.map((step, idx) => {
        const isDone    = idx < current;
        const isActive  = idx === current;
        const isPulsing = completedPulse === idx;

        return (
          <div
            key={step.id}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 }}
          >
            {/* Circle */}
            <div
              className={isPulsing ? 'ease-pulse' : isActive ? 'ease-fade-in ease-duration-fast' : ''}
              style={{
                width: '40px', height: '40px',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: isDone ? '1rem' : '1.1rem',
                fontWeight: 700,
                background: isDone
                  ? 'linear-gradient(135deg, #6366f1, #06b6d4)'
                  : isActive
                  ? 'rgba(99,102,241,0.3)'
                  : 'rgba(255,255,255,0.06)',
                border: isActive
                  ? '2px solid #6366f1'
                  : isDone
                  ? '2px solid transparent'
                  : '2px solid rgba(255,255,255,0.15)',
                color: 'white',
                transition: 'background 0.4s ease, border-color 0.4s ease',
                boxShadow: isActive ? '0 0 0 4px rgba(99,102,241,0.2)' : 'none',
              }}
            >
              {isDone ? '✔' : step.icon}
            </div>

            {/* Label */}
            <span
              style={{
                marginTop: '8px',
                fontSize: '0.75rem',
                fontWeight: isActive ? 700 : 400,
                color: isActive ? 'white' : isDone ? '#a5b4fc' : 'rgba(255,255,255,0.35)',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

// ── Step panel ─────────────────────────────────────────────────────────────
const StepPanel = ({ step, direction, formData, onChange }) => {
  // direction: 'forward' → ease-slide-up, 'backward' → ease-slide-down (simulated via ease-fade-in)
  const animClass = direction === 'forward'
    ? 'ease-slide-up ease-fade-in ease-duration-normal'
    : 'ease-fade-in ease-duration-normal';

  return (
    <div className={animClass} style={{ minHeight: '220px' }}>
      <h2 className="ease-text-2xl ease-font-bold" style={{ color: 'white', marginBottom: '8px' }}>
        {step.icon} {step.heading}
      </h2>
      <p className="ease-text-muted" style={{ marginBottom: '24px', lineHeight: 1.6, fontSize: '0.92rem' }}>
        {step.desc}
      </p>

      {step.fields.map(field => (
        <div key={field.id} style={{ marginBottom: '16px' }}>
          <label
            htmlFor={field.id}
            style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}
          >
            {field.label}
          </label>
          <input
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.id] ?? ''}
            onChange={e => onChange(field.id, e.target.value)}
            style={{
              width: '100%',
              padding: '11px 14px',
              background: 'rgba(255,255,255,0.07)',
              border: '1.5px solid rgba(255,255,255,0.15)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '0.92rem',
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border-color 0.2s',
            }}
          />
        </div>
      ))}

      {/* Review panel summary */}
      {step.id === 3 && (
        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '16px' }}>
          {Object.entries(formData).filter(([, v]) => v).map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.88rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'capitalize' }}>{k}</span>
              <span style={{ color: 'white', fontWeight: 600 }}>{v}</span>
            </div>
          ))}
          {Object.values(formData).every(v => !v) && (
            <p className="ease-text-muted" style={{ textAlign: 'center', fontSize: '0.85rem' }}>No data entered yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

// ── Success screen ──────────────────────────────────────────────────────────
const SuccessScreen = () => (
  <div className="ease-slide-up ease-fade-in ease-duration-slow" style={{ textAlign: 'center', padding: '48px 16px' }}>
    <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🎊</div>
    <h2 className="ease-text-2xl ease-font-bold ease-gradient-text ease-mb-4">Setup Complete!</h2>
    <p className="ease-text-muted" style={{ lineHeight: 1.7 }}>
      You've successfully completed the animated stepper wizard.<br />
      Every step transition, progress bar fill, and panel slide was powered purely by EaseMotion CSS.
    </p>
  </div>
);

// ── Wizard root ─────────────────────────────────────────────────────────────
const StepperWizard = () => {
  const [current, setCurrent]         = useState(0);
  const [formData, setFormData]       = useState({});
  const [direction, setDirection]     = useState('forward');
  const [completedPulse, setCompleted]= useState(null);
  const [done, setDone]               = useState(false);
  const [panelKey, setPanelKey]       = useState(0); // force re-mount to replay animation

  const totalSteps = STEPS.length;

  const navigate = (delta) => {
    const next = current + delta;
    if (next < 0 || next >= totalSteps) return;
    setDirection(delta > 0 ? 'forward' : 'backward');

    if (delta > 0) {
      setCompleted(current);
      setTimeout(() => setCompleted(null), 700);
    }

    setPanelKey(k => k + 1);
    setCurrent(next);
  };

  const handleSubmit = () => {
    setCompleted(current);
    setTimeout(() => setDone(true), 600);
  };

  const handleChange = (fieldId, value) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  };

  if (done) return <SuccessScreen />;

  return (
    <>
      <StepRail current={current} total={totalSteps} completedPulse={completedPulse} />

      <div key={panelKey}>
        <StepPanel
          step={STEPS[current]}
          direction={direction}
          formData={formData}
          onChange={handleChange}
        />
      </div>

      {/* Navigation buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', gap: '12px' }}>
        <button
          onClick={() => navigate(-1)}
          disabled={current === 0}
          className="ease-btn ease-btn-secondary ease-hover-scale"
          style={{ flex: 1, cursor: current === 0 ? 'not-allowed' : 'pointer', opacity: current === 0 ? 0.4 : 1 }}
        >
          ← Back
        </button>

        {current < totalSteps - 1 ? (
          <button
            onClick={() => navigate(1)}
            className="ease-btn ease-btn-primary ease-hover-glow ease-hover-scale"
            style={{ flex: 1, cursor: 'pointer' }}
          >
            Next →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="ease-btn ease-btn-primary ease-hover-glow ease-hover-scale"
            style={{ flex: 1, cursor: 'pointer', background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}
          >
            Submit ✔
          </button>
        )}
      </div>

      {/* Step counter */}
      <p className="ease-text-muted ease-fade-in ease-duration-fast" style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.8rem' }}>
        Step {current + 1} of {totalSteps}
      </p>
    </>
  );
};

// ── App ─────────────────────────────────────────────────────────────────────
const App = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
    <header className="ease-fade-in ease-duration-slow" style={{ textAlign: 'center', marginBottom: '2.5rem', maxWidth: '560px' }}>
      <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">Stepper Wizard</h1>
      <p className="ease-text-muted ease-mt-2">Multi-step progress wizard — progress bar, panel slides & step pulses via EaseMotion CSS</p>
    </header>

    <div className="ease-card ease-card-solid ease-slide-up ease-duration-slow"
      style={{ background: '#1e293b', width: '100%', maxWidth: '560px', padding: '40px', borderRadius: '20px' }}
    >
      <StepperWizard />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
