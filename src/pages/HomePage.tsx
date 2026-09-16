import CategoriesBlock from "../components/home/CategoriesBlock";
import EmployerCTA from "../components/home/EmployerCTA";
import Hero from "../components/home/Hero";
import usePageMeta from "../hooks/usePageMeta";

function HomePage() {
  usePageMeta(
    "VV Work — Знайди роботу в Європі",
    "VV Work — платформа, де кандидати знаходять роботу в Європі, а роботодавці — надійних працівників.",
  );

  return (
    <div>
      <Hero />
      <CategoriesBlock />
      <EmployerCTA />
    </div>
  );
}

export default HomePage;
