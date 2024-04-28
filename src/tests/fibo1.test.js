import { fibo } from "../js-homework/fibo";

describe("fibo", () => {
  test("возвращает массив, который является truthy для положительных n", () => {
    expect(fibo(5)).toBeTruthy();
  });

  test("возвращает не пустой массив для положительных n", () => {
    expect(fibo(5).length).toBeTruthy(); // Длина массива больше 0
  });

  test("возвращает массив, который является truthy даже для n = 0", () => {
    expect(fibo(0)).toBeTruthy(); // Массив с одним элементом также truthy
  });

  test("возвращает массив, который содержит truthy значения", () => {
    const results = fibo(6); // Массив [0, 1, 1, 2, 3, 5, 8]
    for (let value of results.slice(1)) {
      // Игнорируем первый элемент (0, который является falsy)
      expect(value).toBeTruthy();
    }
  });

  test("возвращает пустой массив для отрицательных n, который является falsy", () => {
    const result = fibo(-1);
    expect(result[0]).toBeFalsy(); // Отсутствующий первый элемент - является falsy
  });

  test("возвращает falsy для отрицательных n, если функция не рассчитана на такие случаи", () => {
    expect(fibo(-5)[0]).toBeFalsy(); // Отсутствующий первый элемент - является falsy
  });
});
