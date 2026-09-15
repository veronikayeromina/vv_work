export function validateName(value: string) {
  const trimmed = value.trim();

  if (trimmed.length >= 2) {
    return null;
  }
  return "Ім'я має містити щонайменше 2 символи";
}

const phonePattern = /^\+?[0-9 -]{10,}$/;
const telegramPattern = /^@[A-Za-z0-9_]{5,32}$/;

export function validatePhoneOrTelegram(value: string) {
  const trimmed = value.trim();
  const isPhone = phonePattern.test(trimmed);
  const isTelegram = telegramPattern.test(trimmed);

  if (isPhone || isTelegram) {
    return null;
  }
  return "Вкажіть коректний номер телефону або Telegram (@юзернейм)";
}

export function validateMessage(value: string) {
  const trimmed = value.trim();

  if (trimmed.length <= 500) {
    return null;
  }

  return "Повідомлення не повинно перевищувати 500 символів";
}
