function fakeApi<T>(data: T): Promise<T> {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * (800 - 300) + 300;

    setTimeout(() => {
      const shouldFail = Math.random() < 0.2;

      if (shouldFail) {
        reject(new Error("Не вдалося завантажити дані"));
      } else {
        resolve(data);
      }
    }, delay);
  });
}

export default fakeApi;
