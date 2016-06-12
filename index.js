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

  const sortedOutput =
    input
      .map((data, i) => {
        const score = Object
          .keys(data)
          .filter((row) => row !== 'id')
          .reduce((prev, next) => {
            const { weight, sort = 'asc' } = sortOptions[next]
            const nextRow = data[next]

            if (!nextRow || isNaN(nextRow)) {
              throw new Error(`Weighted sum: wrong data type for ${next}. Number is expected`)
            }

            const rowValue = sort === 'asc' ? nextRow : 1 / nextRow
            const res = rowValue / criteriaSum[i] * weight
            return prev + res
          }, 0)

        return {
          score,
          id: data.id
        }
      })
    .sort((prev, next) => next.score - prev.score)

  if (sortOptions.includeScore) {
    return sortedOutput
  }

  return sortedOutput.map((res) => res.id)
}
