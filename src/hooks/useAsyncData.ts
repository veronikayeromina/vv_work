import { useCallback, useEffect, useState } from "react";

const STATUS = {
  loading: "loading",
  success: "success",
  error: "error",
} as const;

type StatusType = keyof typeof STATUS;

function useAsyncData<T>(fetcher: () => Promise<T>) {
  const [status, setStatus] = useState<StatusType>(STATUS.loading);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const load = useCallback(() => {
    fetcher()
      .then(result => {
        setData(result);
        setStatus(STATUS.success);
      })
      .catch(err => {
        setError(err);
        setStatus(STATUS.error);
      });
  }, [fetcher]);

  useEffect(() => {
    load();
  }, [load]);

  function refetch() {
    setStatus(STATUS.loading);
    setError(null);
    load();
  }

  return { data, status, error, refetch };
}

export default useAsyncData;
