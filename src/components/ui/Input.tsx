import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`border-2 rounded-xl p-2 ${props.className ?? ""}`}
    ></input>
  );
}

export default Input;
