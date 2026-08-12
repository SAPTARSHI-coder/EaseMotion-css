// submissions/nextjs-integration-22913/nextjs-template/app/page.tsx
export default function Home() {
  return (
    <main className="ease-padding-8 ease-stack-xl" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '4rem' }}>
      
      <header className="ease-fade-in ease-duration-slow">
        <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">Next.js + EaseMotion</h1>
        <p className="ease-text-lg ease-text-muted ease-mt-4">
          Server-Side Rendering (SSR) safely integrated with EaseMotion CSS utility classes.
        </p>
      </header>

      <section className="ease-grid ease-grid-cols-2 ease-gap-6 ease-slide-up ease-duration-normal ease-delay-200">
        
        {/* Next.js Features Card */}
        <div className="ease-card ease-card-glass ease-padding-6">
          <h2 className="ease-text-xl ease-font-semibold">App Router Ready</h2>
          <p className="ease-text-muted ease-mt-2">
            Because EaseMotion is highly optimized pure CSS, you can safely inject classes into React Server Components (RSC) without shipping any client-side JavaScript overhead!
          </p>
        </div>

        {/* EaseMotion Hover Card */}
        <div className="ease-card ease-card-solid ease-padding-6 ease-hover-glow" style={{ cursor: 'pointer' }}>
          <h2 className="ease-text-xl ease-font-semibold text-white">Hover Me</h2>
          <p className="ease-text-muted ease-mt-2 text-white">
            This card leverages the native EaseMotion `.ease-hover-glow` class. It works flawlessly in SSR!
          </p>
        </div>

      </section>

    </main>
  );
}
