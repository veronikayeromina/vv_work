import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useDebounce from "./useDebounce";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("одразу повертає початкове значення", () => {
    const { result } = renderHook(() => useDebounce("перше", 500));
    expect(result.current).toBe("перше");
  });

  it("не оновлює значення, поки не минула затримка", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "перше", delay: 500 } },
    );

    rerender({ value: "друге", delay: 500 });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe("перше");
  });

  it("оновлює значення після завершення затримки", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "перше", delay: 500 } },
    );

    rerender({ value: "друге", delay: 500 });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("друге");
  });

  it("враховує лише останнє значення при швидких змінах", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "перше", delay: 500 } },
    );

    rerender({ value: "друге", delay: 500 });
    act(() => {
      vi.advanceTimersByTime(200);
    });

    rerender({ value: "третє", delay: 500 });
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("третє");
  });
});
