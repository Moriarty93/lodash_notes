/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position. A negative index will be treated as an offset from the end. 
 * @param {number} [end=array.length] The end position. A negative index will be treated as an offset from the end. 
 * @returns {Array} Returns the slice of `array`.
 */
function slice(array, start, end) {
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  console.log(start)
  console.log(end)
  start = start == null ? 0 : start
  end = end === undefined ? length : end
  console.log(start)
  console.log(end)

  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  // >>>的作用就是把一个数字，变成一个无符号的32位的整数，那么num >>> 0的作用，就是把num变成一个无符号的32位的整数，不论num是负数还是小数。而且我们还需要知道，JavaScript的数组的最大长度是2^32-1，所以这样做也避免了数组的索引超出界限
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  console.log(length + '==')
  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

// export default slice