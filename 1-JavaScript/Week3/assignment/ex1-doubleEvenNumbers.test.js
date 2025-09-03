
// ! Function to be tested
function doubleEvenNumbers(numbers) {

  const filteredNumbers = numbers.filter(n => n % 2 === 0);
  const newNumbers = filteredNumbers.map(n => n * 2);
  return newNumbers;


}

// ! Unit test (using Jest)
describe('js-wk3-ex1-doubleEvenNumbers', () => {
  test('doubleEvenNumbers should take the even numbers and double them', () => {
    const actual = doubleEvenNumbers([1, 2, 3, 4]);
    const expected = [4, 8];
    expect(actual).toEqual(expected);
  });
});
