import { calculateTotalPages, splitArray } from '../paginationHelper'; // Adjust the path as necessary

describe('calculateTotalPages', () => {
  it('should calculate the correct number of pages', () => {
    expect(calculateTotalPages(100)).toBe(10);
    expect(calculateTotalPages(45)).toBe(5);
    expect(calculateTotalPages(45, 5)).toBe(9);
    expect(calculateTotalPages(0)).toBe(0);
    expect(calculateTotalPages(100, 20)).toBe(5);
  });

  it('should handle edge cases', () => {
    expect(calculateTotalPages(9)).toBe(1);
    expect(calculateTotalPages(10)).toBe(1);
    expect(calculateTotalPages(11)).toBe(2);
    expect(calculateTotalPages(20, 10)).toBe(2);
  });
});

describe('splitArray', () => {
  it('should split the array into two parts', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const result = splitArray(arr);
    expect(result).toEqual({
      firstArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      secondArr: [11, 12],
    });
  });

  it('should return undefined if array length is less than 10', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = splitArray(arr);
    expect(result).toBeUndefined();
  });

  it('should handle exact 10 elements', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = splitArray(arr);
    expect(result).toEqual({
      firstArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      secondArr: [],
    });
  });

  it('should handle empty array', () => {
    const arr: any[] = [];
    const result = splitArray(arr);
    expect(result).toBeUndefined();
  });
});
