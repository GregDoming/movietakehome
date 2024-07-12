// utils.test.ts
import { calculateTotalPages, splitArray } from '../paginationHelper';

describe('calculateTotalPages', () => {
  test('calculates total pages correctly', () => {
    expect(calculateTotalPages(100, 10)).toBe(10);
    expect(calculateTotalPages(95, 10)).toBe(10);
    expect(calculateTotalPages(105, 10)).toBe(11);
    expect(calculateTotalPages(0, 10)).toBe(0);
    expect(calculateTotalPages(50)).toBe(5); // Default resultsPerPage is 10
  });

  test('handles edge cases', () => {
    expect(calculateTotalPages(0, 10)).toBe(0);
    expect(calculateTotalPages(10, 0)).toBe(Infinity); // Division by zero case
  });
});

describe('splitArray', () => {
  test('splits array correctly when length is 10 or more', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const result = splitArray(arr);
    expect(result).toEqual({
      firstArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      secondArr: [11, 12],
    });
  });

  test('returns undefined for arrays with less than 10 elements', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(splitArray(arr)).toBeUndefined();
  });

  test('handles empty arrays', () => {
    const arr: any[] = [];
    expect(splitArray(arr)).toBeUndefined();
  });

  test('handles exactly 10 elements', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = splitArray(arr);
    expect(result).toEqual({
      firstArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      secondArr: [],
    });
  });
});
