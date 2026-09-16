import { describe, it, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useAsyncData from "./useAsyncData";

describe("useAsyncData", () => {
  it("починається зі статусу loading", () => {
    const fetcher = vi.fn(() => new Promise<string>(() => {}));
    const { result } = renderHook(() => useAsyncData(fetcher));

    expect(result.current.status).toBe("loading");
    expect(result.current.data).toBe(null);
  });

  it("переходить у success з отриманими даними при успішному запиті", async () => {
    const fetcher = vi.fn(() => Promise.resolve("готові дані"));
    const { result } = renderHook(() => useAsyncData(fetcher));

    await waitFor(() => {
      expect(result.current.status).toBe("success");
    });

    expect(result.current.data).toBe("готові дані");
    expect(result.current.error).toBe(null);
  });

  it("переходить у error при невдалому запиті", async () => {
    const fetcher = vi.fn(() => Promise.reject(new Error("Помилка мережі")));
    const { result } = renderHook(() => useAsyncData(fetcher));

    await waitFor(() => {
      expect(result.current.status).toBe("error");
    });

    expect(result.current.error?.message).toBe("Помилка мережі");
  });

  it("refetch повторює запит і оновлює статус на success, якщо друга спроба вдала", async () => {
    const fetcher = vi
      .fn<() => Promise<string>>()
      .mockRejectedValueOnce(new Error("Помилка мережі"))
      .mockResolvedValueOnce("готові дані");

    const { result } = renderHook(() => useAsyncData(fetcher));

    await waitFor(() => {
      expect(result.current.status).toBe("error");
    });

    result.current.refetch();

    await waitFor(() => {
      expect(result.current.status).toBe("success");
    });

    expect(result.current.data).toBe("готові дані");
    expect(fetcher).toHaveBeenCalledTimes(2);
  });
});
