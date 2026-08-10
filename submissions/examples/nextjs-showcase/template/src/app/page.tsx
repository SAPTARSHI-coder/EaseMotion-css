import TimelineItem from '@/components/TimelineItem';

export default function Home() {
  const events = [
    {
      title: 'Zero Dependencies',
      description: 'EaseMotion is a pure CSS framework without external JS dependencies. Ideal for React Server Components.',
      delayMs: 100,
    },
    {
      title: 'Flawless Hydration',
      description: 'Server renders HTML smoothly while Client Components elegantly hydrate into view via IntersectionObserver.',
      delayMs: 300,
    },
    {
      title: 'CSS Purging Ready',
      description: 'Since it relies on static class strings, tools like PostCSS PurgeCSS can perfectly optimize the production bundle.',
      delayMs: 500,
    },
  ];

  return (
    <main className="container">
      <header className="header ease-fade-in" style={{ animationDuration: 'var(--ease-speed-slow)' }}>
        <h1>EaseMotion Timeline</h1>
        <p>A Next.js App Router Showcase utilizing Server Components</p>
      </header>

      <section className="timeline">
        {events.map((event, index) => (
          <TimelineItem 
            key={index}
            title={event.title}
            description={event.description}
            delayMs={event.delayMs}
          />
        ))}
      </section>
    </main>
  );
}
