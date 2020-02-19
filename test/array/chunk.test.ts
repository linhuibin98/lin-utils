import { chunk } from '../../index'

let arr = [1, 2, 3, 4, 5, 6]

test('input (arr), output [[1], [2], [3], [4], [5], [6]]', () => {
  expect(chunk(arr)).toEqual([[1], [2], [3], [4], [5], [6]])
})

test('input (arr, 2), output [[1, 2], [3, 4], [5, 6]]', () => {
  expect(chunk(arr, 2)).toEqual([[1, 2], [3, 4], [5, 6]])
})

test('input (arr, 3), output [[1, 2, 3], [4, 5, 6]]', () => {
  expect(chunk(arr, 3)).toEqual([[1, 2, 3], [4, 5, 6]])
})

test('input (arr, 4), output [[1, 2, 3, 4], [5, 6]]', () => {
  expect(chunk(arr, 4)).toEqual([[1, 2, 3, 4], [5, 6]])
})

test('input (arr, 5), output [[1, 2, 3, 4, 5], [6]]', () => {
  expect(chunk(arr, 5)).toEqual([[1, 2, 3, 4, 5], [6]])
})