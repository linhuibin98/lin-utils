import dropRight from '../../array/dropRight'

test('input ([1, 2, 3, 4], 0), output [1, 2, 3, 4]', () => {
  expect(dropRight([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4])
})

test('input ([1, 2, 3, 4]), output [1, 2, 3]', () => {
  expect(dropRight([1, 2, 3, 4])).toEqual([1, 2, 3])
})

test('input ([1, 2, 3, 4], 2), output [1, 2]', () => {
  expect(dropRight([1, 2, 3, 4], 2)).toEqual([1, 2])
})

test('input ([1, 2, 3, 4], 3), output [1]', () => {
  expect(dropRight([1, 2, 3, 4], 3)).toEqual([1])
})

test('input ([1, 2, 3, 4], 4), output []', () => {
  expect(dropRight([1, 2, 3, 4], 4)).toEqual([])
})

test('input ([1, 2, 3, 4], 5), output []', () => {
  expect(dropRight([1, 2, 3, 4], 5)).toEqual([])
})