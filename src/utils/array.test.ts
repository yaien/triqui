import { fill, clone, plain, validateIndex } from "./array";

it("Fill Should create an array with current value", () => {
  let result = fill(3, null);
  expect(result).toHaveLength(3);
  expect(result.every(item => item == null)).toBeTruthy();
});

it("Fill Should create an array with current value function", () => {
  let result = fill(3, Math.random);
  expect(result).toHaveLength(3);
  expect(result.every(item => typeof item == "number")).toBeTruthy();
});

it("Plain Should return an array of one dimension", () => {
  let matrix = fill(3, () => fill(3, null));
  let plainMatrix: number[] = plain(matrix);
  expect(plainMatrix).toHaveLength(9);
  expect(plainMatrix.some(p => Array.isArray(p))).toBeFalsy();
});

it("Plain Should return a copy of one dimension array", () => {
  let array = fill(3, { item: 3 });
  let clonedArray = plain(array);
  expect(array).not.toBe(clonedArray);
});

it("Clone Should return a copy of given array", () => {
  let matrix = fill(3, () => fill(3, null));
  let matrixClone = clone(matrix);
  expect(matrixClone).toHaveLength(matrix.length);
  expect(matrix).not.toBe(matrixClone);
  for (let index in matrix) {
    expect(matrix[index]).not.toBe(matrixClone[index]);
  }
});

it("Should validate index range", () => {
  expect(() => validateIndex(2, 1)).toThrow(RangeError);
  expect(() => validateIndex(2, 2)).not.toThrow();
  expect(() => validateIndex(-1, 2, 0)).toThrow();
});
