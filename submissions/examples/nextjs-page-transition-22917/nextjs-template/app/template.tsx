// submissions/nextjs-page-transition-22917/nextjs-template/app/template.tsx
// In Next.js App Router, layout.tsx preserves state and does not re-render on navigation.
// template.tsx, however, creates a new instance on navigation! 
// This makes it the perfect place to inject our pure CSS entry animation.

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="ease-slide-up ease-duration-normal ease-curve-ease">
      {children}
    </div>
  );
}
