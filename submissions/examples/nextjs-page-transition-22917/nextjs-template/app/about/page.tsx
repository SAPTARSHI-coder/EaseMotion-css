// submissions/nextjs-page-transition-22917/nextjs-template/app/about/page.tsx
export default function About() {
  return (
    <main className="ease-padding-8 text-center" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '4rem' }}>
      
      <h1 className="ease-text-4xl ease-font-bold text-cyan" style={{ color: '#06b6d4' }}>About Page</h1>
      
      <div className="ease-card ease-card-solid ease-padding-8 ease-mt-8" style={{ background: '#1e293b' }}>
        <h2 className="ease-text-2xl ease-font-semibold text-white" style={{ color: 'white' }}>Zero JavaScript Overhead</h2>
        <p className="ease-text-muted ease-mt-4 text-white" style={{ color: '#cbd5e1' }}>
          Notice how the page perfectly animated in? The navigation layout stayed static, while the Next.js App Router swapped the route content, triggering the <code>template.tsx</code> animation.
        </p>
        <p className="ease-text-muted ease-mt-4 text-white" style={{ color: '#cbd5e1' }}>
          By orchestrating page transitions purely through CSS and native Next.js routing, we completely avoid bloated third-party animation runtimes.
        </p>
      </div>

    </main>
  );
}
