import "./style.css";

function DartHero({
  children = "Attention Seeker",
}) {
  return (
    <section
      className="dart-hero-ds"
      role="banner"
      aria-label="Dart Hero Section"
    >
      <h1>{children}</h1>
      <p>
        A hero component with a smooth dart
        attention-seeking animation.
      </p>
    </section>
  );
}

export default DartHero;
