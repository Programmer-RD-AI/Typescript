import { expect, it } from "vitest";

type NewType = { first: number; second: number };
export const addTwoNumbers = (params: NewType) => {
  return params.first + params.second;
};
interface AddTwoNumbersArgs {
  first: number;
  second: number;
}; // Used to store objects mosotly
it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
