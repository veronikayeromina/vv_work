import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import {
  validateMessage,
  validateName,
  validatePhoneOrTelegram,
} from "../../utils/validators";
import fakeApi from "../../api/fakeApi";

const initialValue = {
  name: "",
  telephone: "",
  message: "",
};

type initialValueType = {
  name: string;
  telephone: string;
  message: string;
};

type ErrorType = {
  name: null | string;
  telephone: null | string;
  message: null | string;
};

const initialValueError = {
  name: null,
  telephone: null,
  message: null,
};

const statusValue = {
  idle: "idle",
  success: "success",
  error: "error",
} as const;

type StatusType = keyof typeof statusValue;

function ApplicationForm() {
  const [state, setState] = useState<initialValueType>(initialValue);
  const [error, setError] = useState<ErrorType>(initialValueError);
  const [status, setStatus] = useState<StatusType>(statusValue.idle);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function onChangeState<T extends keyof initialValueType>(
    key: T,
    value: initialValueType[T],
  ) {
    setState({ ...state, [key]: value });
    setError({ ...error, [key]: null });
  }

  function submitApplication() {
    setStatus(statusValue.success);

    fakeApi(state)
      .then(() => {
        setState(initialValue);
      })
      .catch(error => {
        setSubmitError(error.message);
        setStatus(statusValue.error);
      });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = {
      name: validateName(state.name),
      telephone: validatePhoneOrTelegram(state.telephone),
      message: validateMessage(state.message),
    };

    setError(result);

    if (Object.values(result).some(value => value !== null)) {
      return;
    }
    submitApplication();
  }

  if (status === "success") {
    return (
      <div className="mt-4 flex flex-col items-center gap-2 text-center">
        <p className="text-lg font-medium text-(--text-h)">
          Дякуємо! Ми зв'яжемось з вами найближчим часом
        </p>
      </div>
    );
  }

  function onStart() {
    setStatus(statusValue.idle);
  }

  if (status === "error") {
    return (
      <div className="mt-4 flex flex-col items-center gap-3 text-center">
        <p className="text-(--text-h)">Запит не пройшов</p>
        {submitError && <p className="text-sm text-(--text)">{submitError}</p>}
        <Button onClick={onStart}>Спробувати ще раз</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 flex max-w-sm flex-col gap-4">
      <div>
        <Input
          placeholder="Ім'я"
          value={state.name}
          onChange={e => onChangeState("name", e.target.value)}
          className="w-full"
        />
        {error.name && (
          <p className="mt-1 text-sm text-red-600">{error.name}</p>
        )}
      </div>

      <div>
        <Input
          placeholder="Телефон/telegram"
          value={state.telephone}
          onChange={e => onChangeState("telephone", e.target.value)}
          className="w-full"
        />
        {error.telephone && (
          <p className="mt-1 text-sm text-red-600">{error.telephone}</p>
        )}
      </div>

      <div>
        <Input
          placeholder="Повідомлення"
          value={state.message}
          onChange={e => onChangeState("message", e.target.value)}
          className="w-full"
        />
        {error.message && (
          <p className="mt-1 text-sm text-red-600">{error.message}</p>
        )}
      </div>

      <Button className="mt-2">Надіслати</Button>
    </form>
  );
}

export default ApplicationForm;
