// submissions/nextjs-page-transition-22917/nextjs-template/app/page.tsx
export default function Home() {
  return (
    <main className="ease-padding-8 text-center" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '4rem' }}>
      
      <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">Home Page</h1>
      
      <div className="ease-card ease-card-glass ease-padding-8 ease-mt-8">
        <h2 className="ease-text-2xl ease-font-semibold">Welcome to the Transition Showcase</h2>
        <p className="ease-text-muted ease-mt-4">
          Because of the <code>app/template.tsx</code> file, every time you navigate to a new route, Next.js natively unmounts and remounts the template boundary. We've attached the <code>ease-slide-up</code> class directly to it!
        </p>
        <p className="ease-text-muted ease-mt-4">
          Click the "About" link in the navigation bar above to see the seamless CSS page transition in action.
        </p>
      </div>

    </main>
  );
}
