import { describe, it, expect } from "vitest";
import {
  validateName,
  validatePhoneOrTelegram,
  validateMessage,
} from "./validators";

describe("validateName", () => {
  it("повертає null, якщо ім'я валідне (2+ символи)", () => {
    expect(validateName("Марія")).toBe(null);
  });

  it("повертає текст помилки, якщо ім'я закоротке", () => {
    expect(validateName("А")).not.toBe(null);
  });

  it("обрізає пробіли перед перевіркою довжини", () => {
    expect(validateName("  А  ")).not.toBe(null);
  });
});

describe("validatePhoneOrTelegram", () => {
  it("повертає null для валідного номера телефону", () => {
    expect(validatePhoneOrTelegram("+380441234567")).toBe(null);
  });

  it("повертає null для валідного telegram-юзернейму", () => {
    expect(validatePhoneOrTelegram("@my_username")).toBe(null);
  });

  it("повертає текст помилки для рядка, що не схожий ні на що з цього", () => {
    expect(validatePhoneOrTelegram("abc")).not.toBe(null);
  });

  it("повертає текст помилки для закороткого telegram-юзернейму", () => {
    expect(validatePhoneOrTelegram("@abc")).not.toBe(null);
  });
});

describe("validateMessage", () => {
  it("повертає null для порожнього повідомлення (поле опційне)", () => {
    expect(validateMessage("")).toBe(null);
  });

  it("повертає null для звичайного короткого повідомлення", () => {
    expect(validateMessage("Хочу дізнатись більше про вакансії")).toBe(null);
  });

  it("повертає текст помилки, якщо довжина більше 500 символів", () => {
    expect(validateMessage("а".repeat(501))).not.toBe(null);
  });
});
