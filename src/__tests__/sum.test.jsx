import Sum from "../components/Sum";

it('sums numbers', () => {
  expect(Sum(1, 2)).toEqual(3);
  expect(Sum(2, 2)).toEqual(4);
});