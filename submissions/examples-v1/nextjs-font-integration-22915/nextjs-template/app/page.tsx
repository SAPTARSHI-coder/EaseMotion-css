// submissions/nextjs-font-integration-22915/nextjs-template/app/page.tsx
export default function Home() {
  return (
    <main className="ease-padding-8 ease-stack-xl" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '4rem' }}>
      
      <header className="ease-fade-in ease-duration-slow text-center">
        {/* Notice how beautiful the Inter font renders here alongside EaseMotion classes! */}
        <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">Next.js Fonts + EaseMotion</h1>
        <p className="ease-text-lg ease-text-muted ease-mt-4">
          Zero Layout Shift. Zero FOUT. Perfect typographical harmony.
        </p>
      </header>

      <section className="ease-slide-up ease-duration-normal ease-delay-200">
        
        <div className="ease-card ease-card-glass ease-padding-8 text-center">
          <h2 className="ease-text-2xl ease-font-semibold">The Power of `next/font`</h2>
          <p className="ease-text-muted ease-mt-4">
            By injecting the Google Font as a CSS variable (<code>--font-inter</code>) into the Next.js Root Layout, EaseMotion's UI components automatically inherit the highly-optimized typeface. This provides a buttery smooth rendering experience across all browsers without conflicting with EaseMotion's core styling engine!
          </p>
        </div>

      </section>

    </main>
  );
}
