import { Link } from "react-router-dom";
import { ROUTES } from "../../app/routes";

function EmployerCTA() {
  return (
    <div
      id="employers"
      className="bg-(--accent-bg) px-4 py-12 text-center sm:px-8 sm:py-20"
    >
      <h2>Потрібні працівники?</h2>

      <p className="mx-auto mt-4 max-w-[60ch]">
        Перевірені кандидати з будівництва, логістики, виробництва,
        готельно-ресторанної сфери та інших галузей. Швидкий підбір без
        зайвої бюрократії — залиште заявку, і ми знайдемо потрібних людей.
      </p>

      <Link
        to={ROUTES.contacts}
        className="mt-8 inline-block rounded-md bg-(--accent) px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
      >
        Знайти працівника
      </Link>
    </div>
  );
}

export default EmployerCTA;
