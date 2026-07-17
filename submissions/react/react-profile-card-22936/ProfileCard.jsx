// submissions/react-profile-card-22936/ProfileCard.jsx
const { useState } = React;

/**
 * ProfileCard — Animated avatar/profile card with zoom-in entry using EaseMotion CSS.
 *
 * Animation techniques demonstrated:
 * 1. Zoom-in card entry — `.ease-zoom-in .ease-duration-normal` applied on mount
 *    for the primary card, giving a satisfying scale-from-center entrance.
 * 2. Avatar ring pulse — the avatar border uses `.ease-pulse` for a continuous
 *    heartbeat glow, drawing the eye immediately to the profile photo.
 * 3. Staggered stat/info reveal — each stat block inside the card applies
 *    `.ease-slide-up` at `index × 100ms` so they cascade in after the card settles.
 * 4. `.ease-hover-scale` on the card + `.ease-hover-glow` for the follow button.
 * 5. Skill badge cascade — skill tags enter with `.ease-slide-up .ease-duration-fast`
 *    at `index × 60ms` so they waterfall in as a last-layer animation.
 * 6. Follow toggle — clicking Follow flips a state, fading the button label via
 *    a React `key` change to trigger `.ease-fade-in .ease-duration-fast`.
 */

// ── Profile data ─────────────────────────────────────────────────────────────
const PROFILES = [
  {
    id: 1,
    name: 'Ava Thompson',
    handle: '@ava_codes',
    role: 'Senior Frontend Engineer',
    company: 'Vercel',
    avatar: '👩‍💻',
    avatarBg: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    bio: 'Building delightful UIs with React and EaseMotion. Open-source contributor. Coffee-powered.',
    stats: [
      { label: 'Projects',  value: '128' },
      { label: 'Followers', value: '4.2K' },
      { label: 'Following', value: '318' },
    ],
    skills: ['React', 'Next.js', 'CSS', 'TypeScript', 'EaseMotion'],
    links: ['🐙 GitHub', '🐦 Twitter', '💼 LinkedIn'],
  },
  {
    id: 2,
    name: 'Marcus Lee',
    handle: '@mlee_design',
    role: 'Design Systems Lead',
    company: 'Stripe',
    avatar: '👨‍🎨',
    avatarBg: 'linear-gradient(135deg, #10b981, #06b6d4)',
    bio: 'Turning Figma tokens into production-ready CSS. Design × Engineering intersection. Cat person.',
    stats: [
      { label: 'Projects',  value: '92' },
      { label: 'Followers', value: '7.8K' },
      { label: 'Following', value: '204' },
    ],
    skills: ['Figma', 'CSS', 'Storybook', 'Tokens', 'EaseMotion'],
    links: ['🐙 GitHub', '🎨 Dribbble', '💼 LinkedIn'],
  },
  {
    id: 3,
    name: 'Priya Nair',
    handle: '@priya_builds',
    role: 'Staff Engineer',
    company: 'Shopify',
    avatar: '👩‍🔬',
    avatarBg: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    bio: 'Full-stack thinker. Performance obsessive. Author of "CSS at Scale". She/her.',
    stats: [
      { label: 'Projects',  value: '214' },
      { label: 'Followers', value: '12K' },
      { label: 'Following', value: '487' },
    ],
    skills: ['Ruby', 'React', 'GraphQL', 'Perf', 'EaseMotion'],
    links: ['🐙 GitHub', '✍️ Blog', '💼 LinkedIn'],
  },
];

// ── Follow button ─────────────────────────────────────────────────────────────
const FollowButton = ({ following, onToggle }) => (
  <button
    onClick={onToggle}
    className={`ease-btn ease-btn-lg ease-hover-scale ${following ? '' : 'ease-hover-glow'}`}
    style={{
      width: '100%',
      background: following
        ? 'rgba(255,255,255,0.08)'
        : 'linear-gradient(135deg, #6366f1, #06b6d4)',
      border: following ? '1px solid rgba(255,255,255,0.2)' : 'none',
      color: 'white',
      fontWeight: 700,
      cursor: 'pointer',
      padding: '12px',
      borderRadius: '12px',
      transition: 'background 0.3s, border 0.3s',
    }}
  >
    {/* Key change fires ease-fade-in on each toggle */}
    <span key={String(following)} className="ease-fade-in ease-duration-fast">
      {following ? '✔ Following' : '+ Follow'}
    </span>
  </button>
);

// ── Stat block ─────────────────────────────────────────────────────────────────
const Stat = ({ label, value, index }) => (
  <div
    className="ease-slide-up ease-duration-fast"
    style={{
      textAlign: 'center', flex: 1,
      animationDelay: `${300 + index * 100}ms`,
      animationFillMode: 'both',
    }}
  >
    <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>
      {value}
    </p>
    <p style={{ margin: '2px 0 0', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
      {label}
    </p>
  </div>
);

// ── Skill badge ────────────────────────────────────────────────────────────────
const SkillBadge = ({ skill, index }) => (
  <span
    className="ease-slide-up ease-duration-fast"
    style={{
      fontSize: '0.75rem', fontWeight: 700,
      padding: '4px 12px', borderRadius: '999px',
      background: 'rgba(99,102,241,0.18)',
      border: '1px solid rgba(99,102,241,0.35)',
      color: '#a78bfa',
      animationDelay: `${500 + index * 60}ms`,
      animationFillMode: 'both',
    }}
  >
    {skill}
  </span>
);

// ── Profile card ─────────────────────────────────────────────────────────────
const ProfileCard = ({ profile, staggerIndex }) => {
  const [following, setFollowing] = useState(false);

  return (
    <div
      className="ease-zoom-in ease-duration-normal ease-hover-scale"
      style={{
        background: 'rgba(30,41,59,0.95)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '24px',
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        animationDelay: `${staggerIndex * 200}ms`,
        animationFillMode: 'both',
        boxShadow: '0 20px 40px -12px rgba(0,0,0,0.5)',
      }}
    >
      {/* Avatar */}
      <div style={{ textAlign: 'center' }}>
        <div
          className="ease-pulse"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '88px',
            height: '88px',
            borderRadius: '50%',
            background: profile.avatarBg,
            fontSize: '3rem',
            boxShadow: '0 0 0 4px rgba(255,255,255,0.08), 0 0 20px rgba(99,102,241,0.3)',
          }}
        >
          {profile.avatar}
        </div>
      </div>

      {/* Name + handle */}
      <div
        className="ease-fade-in ease-duration-normal"
        style={{ textAlign: 'center', animationDelay: '150ms', animationFillMode: 'both' }}
      >
        <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: 'white' }}>{profile.name}</h3>
        <p style={{ margin: '2px 0', fontSize: '0.82rem', color: '#a78bfa', fontWeight: 600 }}>{profile.handle}</p>
        <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>
          {profile.role} · {profile.company}
        </p>
      </div>

      {/* Bio */}
      <p
        className="ease-fade-in ease-duration-slow"
        style={{
          margin: 0, fontSize: '0.85rem', lineHeight: 1.65,
          color: 'rgba(255,255,255,0.65)', textAlign: 'center',
          animationDelay: '250ms', animationFillMode: 'both'
        }}
      >
        {profile.bio}
      </p>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '16px 0' }}>
        {profile.stats.map((s, i) => <Stat key={s.label} {...s} index={i} />)}
      </div>

      {/* Skills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
        {profile.skills.map((skill, i) => <SkillBadge key={skill} skill={skill} index={i} />)}
      </div>

      {/* Social links */}
      <div
        className="ease-fade-in ease-duration-normal"
        style={{
          display: 'flex', justifyContent: 'center', gap: '8px',
          animationDelay: '600ms', animationFillMode: 'both'
        }}
      >
        {profile.links.map(link => (
          <button
            key={link}
            className="ease-btn ease-hover-scale"
            style={{
              fontSize: '0.75rem', padding: '6px 12px', borderRadius: '8px',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
            }}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Follow CTA */}
      <FollowButton following={following} onToggle={() => setFollowing(f => !f)} />
    </div>
  );
};

// ── App ───────────────────────────────────────────────────────────────────────
const App = () => (
  <div style={{ minHeight: '100vh', padding: '60px 24px' }}>
    <header className="ease-fade-in ease-duration-slow" style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">Profile Cards</h1>
      <p className="ease-text-muted ease-mt-2">
        Zoom-in entry · avatar pulse · staggered stats · skill cascade · follow toggle
      </p>
    </header>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem',
      maxWidth: '1000px',
      margin: '0 auto',
    }}>
      {PROFILES.map((profile, idx) => (
        <ProfileCard key={profile.id} profile={profile} staggerIndex={idx} />
      ))}
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
