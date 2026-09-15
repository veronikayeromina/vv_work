import type { ComponentProps } from "react";

type ButtonType = ComponentProps<"button">;

function Button({ children, ...props }: ButtonType) {
  return (
    <button
      {...props}
      className={`border-2 rounded-xl p-2 w-full sm:w-auto sm:min-w-[200px] cursor-pointer transition-colors hover:border-(--accent) hover:text-(--accent) ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
