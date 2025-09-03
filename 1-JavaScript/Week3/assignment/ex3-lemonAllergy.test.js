
const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

const allergy = "lemon";

// ! Function under test
function sanitizeFruitBasket(fruitBasket, allergy) {
  const basket = fruitBasket.filter(f => f !== allergy);
  return basket;
}

console.log(sanitizeFruitBasket(fruitBasket, allergy));
// ! Unit tests (using Jest)
describe('js-wk3-ex3-lemonAllergy', () => {
  test('sanitizeFruitBasket should take two parameters', () => {
    expect(sanitizeFruitBasket.length).toBe(2);
  });

  test('sanitizeFruitBasket should not modify the original `fruitBasket` array', () => {
    // Save the original contents of the fruit basket
    const originalFruitBasketContents = [...fruitBasket];

    expect(fruitBasket).toEqual(originalFruitBasketContents);
  });

  test('sanitizeFruitBasket should return a new array that does not include the unwanted `lemon`', () => {
const basket = sanitizeFruitBasket(fruitBasket, allergy)
    expect(basket).toEqual(['apple', 'grapefruit', 'banana', 'watermelon']);
  });
});
