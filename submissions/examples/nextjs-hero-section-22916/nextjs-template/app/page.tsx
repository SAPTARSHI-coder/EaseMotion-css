// submissions/nextjs-hero-section-22916/nextjs-template/app/page.tsx
export default function Home() {
  return (
    <main className="hero-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative Floating Background Elements natively using ease-float */}
      <div className="hero-floating-element ease-float ease-duration-slow" style={{ animationDelay: '0ms' }} aria-hidden="true" />
      <div className="hero-floating-element-2 ease-float ease-duration-slow" style={{ animationDelay: '1500ms' }} aria-hidden="true" />

      <section className="ease-padding-8 text-center" style={{ maxWidth: '900px', zIndex: 10 }}>
        
        {/* Staggered Badge Animation */}
        <div className="ease-slide-up ease-duration-normal">
          <span className="ease-badge ease-badge-lg ease-badge-primary ease-pulse">
            v2.0 Beta Released
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="ease-text-6xl ease-font-bold ease-gradient-text ease-mt-8 ease-slide-up ease-duration-normal ease-delay-200" style={{ lineHeight: 1.1 }}>
          Build beautiful UIs with <br /> EaseMotion & Next.js
        </h1>

        {/* Hero Subtitle */}
        <p className="ease-text-xl ease-text-muted ease-mt-6 ease-mx-auto ease-slide-up ease-duration-normal ease-delay-400" style={{ maxWidth: '600px', lineHeight: 1.6 }}>
          Experience butter-smooth, hardware-accelerated animations completely decoupled from JavaScript. Rendered perfectly on the server via React Server Components.
        </p>

        {/* Call To Action Buttons */}
        <div className="ease-stack-md ease-mt-10 ease-slide-up ease-duration-normal ease-delay-600" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          
          <button className="ease-btn ease-btn-lg ease-btn-primary ease-hover-glow ease-hover-scale" style={{ cursor: 'pointer' }}>
            Get Started Free
          </button>
          
          <button className="ease-btn ease-btn-lg ease-btn-secondary ease-hover-scale" style={{ cursor: 'pointer' }}>
            View Documentation
          </button>

        </div>
      </section>

    </main>
  );
}
