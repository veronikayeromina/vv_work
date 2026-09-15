import Button from "./Button";

type PropsType = {
  message?: string;
  onRetry: () => void;
};

function RetryBlock({ message, onRetry }: PropsType) {
  return (
    <div className="flex flex-col items-center gap-3 py-8 text-center">
      <p className="text-(--text)">
        {message ?? "Щось пішло не так. Спробуйте ще раз."}
      </p>
      <Button onClick={onRetry}>Спробувати ще раз</Button>
    </div>
  );
}

export default RetryBlock;
