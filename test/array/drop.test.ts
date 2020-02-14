import drop from '../../array/drop'

test('input ([1, 2, 3, 4], 0), output [1, 2, 3, 4]', () => {
  expect(drop([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4])
})

test('input ([1, 2, 3, 4]), output [2, 3, 4]', () => {
  expect(drop([1, 2, 3, 4])).toEqual([2, 3, 4])
})

test('input ([1, 2, 3, 4], 2), output [3, 4]', () => {
  expect(drop([1, 2, 3, 4], 2)).toEqual([3, 4])
})

test('input ([1, 2, 3, 4], 3), output [4]', () => {
  expect(drop([1, 2, 3, 4], 3)).toEqual([4])
})

test('input ([1, 2, 3, 4], 4), output []', () => {
  expect(drop([1, 2, 3, 4], 4)).toEqual([])
})

test('input ([1, 2, 3, 4], 5), output []', () => {
  expect(drop([1, 2, 3, 4], 5)).toEqual([])
})