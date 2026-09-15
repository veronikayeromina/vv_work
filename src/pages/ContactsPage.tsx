import ApplicationForm from "../components/application-form/ApplicationForm";

function ContactsPage() {
  return (
    <div className="px-4 py-12 sm:px-8">
      <h1>Контакти</h1>

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-16">
        <div>
          <p className="text-sm text-(--text)">Телефон</p>
          <a
            href="tel:+380441234567"
            className="text-(--text-h) transition-colors hover:text-(--accent)"
          >
            +380 44 123 45 67
          </a>
        </div>

        <div>
          <p className="text-sm text-(--text)">Email</p>
          <a
            href="mailto:hello@vvwork.com"
            className="text-(--text-h) transition-colors hover:text-(--accent)"
          >
            hello@vvwork.com
          </a>
        </div>

        <div>
          <p className="text-sm text-(--text)">Офіс</p>
          <p className="text-(--text-h)">Київ, Україна</p>
        </div>

        <div>
          <p className="text-sm text-(--text)">Графік роботи</p>
          <p className="text-(--text-h)">Пн–Пт, 9:00–18:00</p>
        </div>
      </div>

      <div className="mt-12 border-t border-(--border) pt-12">
        <h2>Залишити заявку</h2>
        <ApplicationForm />
      </div>
    </div>
  );
}

export default ContactsPage;
