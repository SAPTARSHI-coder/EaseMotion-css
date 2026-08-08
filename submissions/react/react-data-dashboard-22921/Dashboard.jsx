// submissions/react-data-dashboard-22921/Dashboard.jsx
const { useState, useEffect } = React;

const AnimatedProgressBar = ({ label, targetValue, colorClass, delay }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate the progress bar width after the component mounts and the staggered delay completes
    const timer = setTimeout(() => {
      setWidth(targetValue);
    }, delay + 200); // Add a small buffer so the card animates in first

    return () => clearTimeout(timer);
  }, [targetValue, delay]);

  return (
    <div className="ease-mt-4">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span className="ease-text-sm ease-font-semibold">{label}</span>
        <span className="ease-text-sm ease-text-muted">{width}%</span>
      </div>
      
      {/* Background Track */}
      <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
        {/* Animated Fill - CSS transition combined with React state width */}
        <div 
          className={colorClass}
          style={{ 
            height: '100%', 
            width: `${width}%`, 
            borderRadius: '4px',
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)' 
          }} 
        />
      </div>
    </div>
  );
};

const Dashboard = () => {
  const dataStats = [
    { id: 1, title: 'Server CPU Usage', value: 78, color: 'ease-bg-primary' },
    { id: 2, title: 'Memory Allocation', value: 45, color: 'ease-bg-secondary' },
    { id: 3, title: 'Network Traffic', value: 92, color: 'ease-bg-danger' },
    { id: 4, title: 'Storage Capacity', value: 60, color: 'ease-bg-success' }
  ];

  return (
    <div className="ease-padding-8" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      
      <header className="ease-fade-in ease-duration-normal" style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">System Telemetry Dashboard</h1>
        <p className="ease-text-muted ease-mt-2">Real-time data visualization powered by React & EaseMotion</p>
      </header>

      {/* CSS Grid for the Dashboard Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '2rem' 
      }}>
        {dataStats.map((stat, index) => {
          // Calculate a staggered delay for the slide-up animation
          const staggerDelay = index * 150;

          return (
            <div 
              key={stat.id}
              className="ease-card ease-card-glass ease-padding-6 ease-slide-up ease-hover-scale"
              style={{ 
                animationDelay: `${staggerDelay}ms`, 
                animationFillMode: 'both',
                cursor: 'default'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className={stat.color} style={{ width: '12px', height: '12px', borderRadius: '50%' }} />
                <h3 className="ease-text-lg ease-font-semibold">{stat.title}</h3>
              </div>
              
              <AnimatedProgressBar 
                label="Current Load" 
                targetValue={stat.value} 
                colorClass={stat.color} 
                delay={staggerDelay} 
              />
            </div>
          );
        })}
      </div>

    </div>
  );
};

ReactDOM.render(<Dashboard />, document.getElementById('root'));
