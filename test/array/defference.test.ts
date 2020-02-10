import difference from '../../array/difference'

test('input ([1, 2, 3, 4], [1], [2]) output [3, 4]', () => {
  expect(difference([1, 2, 3, 4], [1], [2])).toEqual([3, 4])
})

test('input ([1, 2, 3, 4], [1], [2, 4]) output [3]', () => {
  expect(difference([1, 2, 3, 4], [1], [2, 4])).toEqual([3])
})

test('input ([1, 2, 3, 4], [1]) output [2, 3, 4]', () => {
  expect(difference([1, 2, 3, 4], [1])).toEqual([2, 3, 4])
})