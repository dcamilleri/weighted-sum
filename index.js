module.exports = (input, sortOptions) => {
  if (!input) {
    return []
  }

  if (input instanceof Array === false) {
    throw new Error('Weighted sum: wrong data type. Array is expected')
  }

  const criteriaSum = input
    .map((data) => {
      return Object
        .keys(data)
        .filter((row) => row !== 'id')
        .reduce((prev, next) => prev + data[next], 0)
    })

  return input
    .map((data, i) => {
      const _s = Object
        .keys(data)
        .filter((row) => row !== 'id')
        .reduce((prev, next) => {
          const { weight, type = 'asc' } = sortOptions[next]
          const nextRow = data[next]

          if (!nextRow || isNaN(nextRow)) {
            throw new Error(`Weighted sum: wrong data type for ${next}. Number is expected`)
          }

          const rowValue = type === 'asc' ? nextRow : 1 / nextRow
          const res = rowValue / criteriaSum[i] * weight
          return prev + res
        }, 0)

      return {
        _s,
        id: data.id
      }
    })
    .sort((prev, next) => next._s - prev._s)
    .map((res) => res.id)
}
