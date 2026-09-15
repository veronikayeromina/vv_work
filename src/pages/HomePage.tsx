import CategoriesBlock from "../components/home/CategoriesBlock";
import EmployerCTA from "../components/home/EmployerCTA";
import Hero from "../components/home/Hero";

function HomePage() {
  return (
    <div>
      <Hero />
      <CategoriesBlock />
      <EmployerCTA />
    </div>
  );
}

export default HomePage;
