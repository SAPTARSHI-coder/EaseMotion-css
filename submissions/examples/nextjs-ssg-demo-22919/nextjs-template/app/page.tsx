// submissions/nextjs-ssg-demo-22919/nextjs-template/app/page.tsx
export default function Home() {
  return (
    <main className="ease-padding-8" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '4rem', textAlign: 'center' }}>
      
      <h1 className="ease-text-4xl ease-font-bold ease-fade-in ease-duration-slow">
        Static Site Generation (SSG)
      </h1>
      
      <div className="ease-card ease-card-glass ease-padding-8 ease-mt-8 ease-slide-up ease-duration-normal ease-delay-200">
        <h2 className="ease-text-2xl ease-font-semibold">Zero Node.js Runtime Required</h2>
        <p className="ease-text-muted ease-mt-4" style={{ lineHeight: 1.6 }}>
          By adding <code>output: 'export'</code> to our <code>next.config.js</code>, Next.js compiles this entire application into pure, static HTML/CSS/JS files during the build process.
        </p>
        <p className="ease-text-muted ease-mt-4" style={{ lineHeight: 1.6 }}>
          Because EaseMotion relies 100% on CSS utility classes rather than heavy React animation runtimes, these animations will execute flawlessly when hosted on static CDN providers like AWS S3, GitHub Pages, or Cloudflare Pages.
        </p>
        
        <div className="ease-mt-8">
          <button className="ease-btn ease-btn-lg ease-btn-primary ease-hover-scale ease-hover-glow" style={{ cursor: 'pointer' }}>
            Hover Me
          </button>
        </div>
      </div>

    </main>
  );
}
