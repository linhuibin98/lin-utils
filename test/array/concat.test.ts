import concat from '../../array/concat'

test('concat 1, [3, 4, 5], 1 to equal [1, 3, 4, 5, 1]', () => {
  expect(concat(1, [3, 4, 5], 1)).toEqual([1, 3, 4, 5, 1])
})

test('concat 1, 2, 3 to equal [1, 2, 3]', () => {
  expect(concat(1, 2, 3)).toEqual([1, 2, 3])
})

test('concat [1], [2], [3] to equal [1, 2, 3]', () => {
  expect(concat([1], [2], [3])).toEqual([1, 2, 3])
})