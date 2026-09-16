function Hero() {
  return (
    <div className="px-4 py-12 text-center sm:px-8 sm:py-20 lg:py-28">
      <h1 className="leading-[1.1]">Працюй у Європі. Найм — без хаосу.</h1>

      <p className="mx-auto mt-4 max-w-[60ch] sm:mt-6">
        VV Work — платформа, де кандидати знаходять роботу, а роботодавці —
        надійних працівників.
      </p>

      <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
        <a
          href="#categories"
          className="w-full rounded-md bg-[var(--accent)] px-6 py-3 text-center font-medium text-(--on-accent) transition-opacity hover:opacity-90 sm:w-auto"
        >
          Знайти роботу
        </a>
        <a
          href="#employers"
          className="w-full rounded-md border border-[var(--border)] px-6 py-3 text-center font-medium text-[var(--text-h)] transition-colors hover:border-(--accent) hover:text-(--accent) sm:w-auto"
        >
          Знайти працівників
        </a>
      </div>
    </div>
  );
}

export default Hero;
