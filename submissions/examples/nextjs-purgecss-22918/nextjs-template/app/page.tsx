// submissions/nextjs-purgecss-22918/nextjs-template/app/page.tsx
export default function Home() {
  return (
    <main className="ease-padding-8" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '4rem', textAlign: 'center' }}>
      
      <h1 className="ease-text-4xl ease-font-bold ease-fade-in ease-duration-slow">
        PurgeCSS + EaseMotion
      </h1>
      
      <div className="ease-card ease-card-glass ease-padding-8 ease-mt-8 ease-slide-up ease-duration-normal ease-delay-200">
        <h2 className="ease-text-2xl ease-font-semibold">Optimizing for Production</h2>
        <p className="ease-text-muted ease-mt-4" style={{ lineHeight: 1.6 }}>
          By adding <code>postcss.config.js</code> with the <code>@fullhuman/postcss-purgecss</code> plugin, we configure Next.js to scan all files inside our <code>app/</code> and <code>components/</code> directories for classes matching the <code>ease-</code> prefix during the build process.
        </p>
        <p className="ease-text-muted ease-mt-4" style={{ lineHeight: 1.6 }}>
          Run <code>npm run build</code>! You will notice that out of the hundreds of utility classes provided by the EaseMotion framework, only the specific ones used in this file (like <code>ease-slide-up</code> and <code>ease-card-glass</code>) are included in the final production CSS bundle, drastically reducing the size of your payload.
        </p>
      </div>

    </main>
  );
}
