type PropsType = {
  className?: string;
};

function Skeleton({ className }: PropsType) {
  return (
    <div
      className={`animate-pulse rounded-md bg-(--border) ${className ?? ""}`}
    />
  );
}

export default Skeleton;
