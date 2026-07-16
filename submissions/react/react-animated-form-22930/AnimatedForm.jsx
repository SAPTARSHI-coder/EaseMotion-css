// submissions/react-animated-form-22930/AnimatedForm.jsx
const { useState, useRef } = React;

/**
 * AnimatedForm — Animated form with inline validation feedback using EaseMotion CSS.
 *
 * Animation techniques demonstrated:
 * 1. Error messages enter with `.ease-slide-up .ease-duration-fast` — each
 *    validation message bounces in right next to its field when triggered.
 * 2. Shake animation on invalid submit — the entire form card gets a
 *    `.ease-shake` class momentarily applied via React state, then removed
 *    after the animation completes via `onAnimationEnd`.
 * 3. Field border pulse — valid fields animate their border-color to green
 *    with a CSS transition, invalid fields pulse red.
 * 4. Success state — on valid submission the form fades out (`.ease-fade-out`)
 *    and a success banner fades + slides up (`.ease-slide-up .ease-fade-in`).
 * 5. Input focus ring — `.ease-hover-glow` on the submit button for polish.
 */

// ── Validators ─────────────────────────────────────────────────────────────
const validators = {
  name: (v) => {
    if (!v.trim()) return 'Name is required.';
    if (v.trim().length < 2) return 'Name must be at least 2 characters.';
    return null;
  },
  email: (v) => {
    if (!v.trim()) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Please enter a valid email address.';
    return null;
  },
  password: (v) => {
    if (!v) return 'Password is required.';
    if (v.length < 8) return 'Password must be at least 8 characters.';
    if (!/[A-Z]/.test(v)) return 'Include at least one uppercase letter.';
    if (!/[0-9]/.test(v)) return 'Include at least one number.';
    return null;
  },
  confirm: (v, formValues) => {
    if (!v) return 'Please confirm your password.';
    if (v !== formValues.password) return 'Passwords do not match.';
    return null;
  },
};

// ── Password strength bar ──────────────────────────────────────────────────
const strengthLabel = (pw) => {
  if (!pw) return { score: 0, label: '', color: 'transparent' };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const map = [
    { label: '', color: 'transparent' },
    { label: 'Weak',   color: '#ef4444' },
    { label: 'Fair',   color: '#f59e0b' },
    { label: 'Good',   color: '#3b82f6' },
    { label: 'Strong', color: '#10b981' },
  ];
  return { score, ...map[score] };
};

// ── Field component ────────────────────────────────────────────────────────
const Field = ({ id, label, type = 'text', value, onChange, error, touched, placeholder }) => {
  const isValid = touched && !error;
  const isInvalid = touched && !!error;

  return (
    <div style={{ marginBottom: '20px' }}>
      <label
        htmlFor={id}
        style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '12px 16px',
          background: 'rgba(255,255,255,0.06)',
          border: `1.5px solid ${isInvalid ? '#ef4444' : isValid ? '#10b981' : 'rgba(255,255,255,0.15)'}`,
          borderRadius: '10px',
          color: 'white',
          fontSize: '0.95rem',
          outline: 'none',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
          boxSizing: 'border-box',
          boxShadow: isInvalid
            ? '0 0 0 3px rgba(239,68,68,0.15)'
            : isValid
            ? '0 0 0 3px rgba(16,185,129,0.15)'
            : 'none',
        }}
      />

      {/* Animated error message */}
      {isInvalid && (
        <p
          className="ease-slide-up ease-duration-fast"
          style={{ margin: '6px 0 0', fontSize: '0.8rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '5px' }}
        >
          ⚠ {error}
        </p>
      )}

      {/* Animated success tick */}
      {isValid && (
        <p
          className="ease-fade-in ease-duration-fast"
          style={{ margin: '6px 0 0', fontSize: '0.8rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '5px' }}
        >
          ✔ Looks good!
        </p>
      )}
    </div>
  );
};

// ── SuccessScreen ──────────────────────────────────────────────────────────
const SuccessScreen = ({ email }) => (
  <div
    className="ease-slide-up ease-fade-in ease-duration-normal"
    style={{ textAlign: 'center', padding: '48px 24px' }}
  >
    <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🎉</div>
    <h2 className="ease-text-2xl ease-font-bold" style={{ color: 'white', marginBottom: '12px' }}>
      Account Created!
    </h2>
    <p className="ease-text-muted" style={{ lineHeight: 1.7 }}>
      Welcome aboard! A confirmation has been sent to <strong style={{ color: 'white' }}>{email}</strong>.
    </p>
    <p className="ease-text-muted ease-mt-4" style={{ fontSize: '0.85rem' }}>
      All form animations powered by EaseMotion CSS — zero external libraries.
    </p>
  </div>
);

// ── AnimatedForm ───────────────────────────────────────────────────────────
const INITIAL = { name: '', email: '', password: '', confirm: '' };

const AnimatedForm = () => {
  const [values, setValues] = useState(INITIAL);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const formRef = useRef(null);

  const getError = (field) => {
    if (field === 'confirm') return validators.confirm(values.confirm, values);
    return validators[field]?.(values[field]) ?? null;
  };

  const errors = Object.fromEntries(
    Object.keys(INITIAL).map(f => [f, getError(f)])
  );

  const isFormValid = Object.values(errors).every(e => e === null);

  const handleChange = (field) => (e) => {
    setValues(prev => ({ ...prev, [field]: e.target.value }));
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Touch all fields to reveal all errors at once
    setTouched({ name: true, email: true, password: true, confirm: true });

    if (!isFormValid) {
      // Shake the form card
      setIsShaking(true);
      return;
    }

    // Valid — animate the form out then show success
    setIsExiting(true);
  };

  const handleFormAnimEnd = () => {
    if (isShaking) setIsShaking(false);
    if (isExiting) setSubmitted(true);
  };

  const strength = strengthLabel(values.password);

  if (submitted) return <SuccessScreen email={values.email} />;

  return (
    <div
      ref={formRef}
      className={`ease-card ease-card-solid ${
        isShaking ? 'ease-shake' : isExiting ? 'ease-fade-out ease-duration-fast' : 'ease-slide-up ease-duration-slow'
      }`}
      onAnimationEnd={handleFormAnimEnd}
      style={{ background: '#1e293b', maxWidth: '480px', margin: '0 auto', padding: '40px', borderRadius: '20px' }}
    >
      <h2 className="ease-text-2xl ease-font-bold ease-gradient-text ease-mb-2" style={{ textAlign: 'center' }}>
        Create Account
      </h2>
      <p className="ease-text-muted" style={{ textAlign: 'center', marginBottom: '28px', fontSize: '0.9rem' }}>
        All validation messages animated with EaseMotion CSS
      </p>

      <form onSubmit={handleSubmit} noValidate>

        <Field
          id="name" label="Full Name" value={values.name}
          onChange={handleChange('name')} error={errors.name}
          touched={touched.name} placeholder="Jane Doe"
        />

        <Field
          id="email" label="Email Address" type="email" value={values.email}
          onChange={handleChange('email')} error={errors.email}
          touched={touched.email} placeholder="jane@example.com"
        />

        <Field
          id="password" label="Password" type="password" value={values.password}
          onChange={handleChange('password')} error={errors.password}
          touched={touched.password} placeholder="Min 8 chars, 1 uppercase, 1 number"
        />

        {/* Password strength bar */}
        {values.password && (
          <div className="ease-fade-in ease-duration-fast" style={{ marginTop: '-12px', marginBottom: '20px' }}>
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: `${(strength.score / 4) * 100}%`,
                background: strength.color,
                borderRadius: '2px',
                transition: 'width 0.4s ease, background 0.4s ease'
              }} />
            </div>
            <p style={{ margin: '4px 0 0', fontSize: '0.75rem', color: strength.color }}>{strength.label}</p>
          </div>
        )}

        <Field
          id="confirm" label="Confirm Password" type="password" value={values.confirm}
          onChange={handleChange('confirm')} error={errors.confirm}
          touched={touched.confirm} placeholder="Re-enter your password"
        />

        <button
          type="submit"
          className="ease-btn ease-btn-primary ease-btn-lg ease-hover-scale ease-hover-glow"
          style={{ width: '100%', marginTop: '8px', cursor: 'pointer' }}
        >
          Create Account →
        </button>

      </form>
    </div>
  );
};

// ── Page ───────────────────────────────────────────────────────────────────
const App = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 24px' }}>
    <header className="ease-fade-in ease-duration-slow" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
      <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">Animated Form</h1>
      <p className="ease-text-muted ease-mt-2">Inline validation + shake + success — all EaseMotion CSS</p>
    </header>
    <AnimatedForm />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
