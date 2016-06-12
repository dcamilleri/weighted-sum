const { expect } = require('chai')
const { emptyData, wrongType, wrongDataType, errorData, correctData } = require('./mocks')
const weightSum = require('../index')

describe('Weighted Sum: Error Management', () => {
  it('Should return an empty array if data is empty', () => {
    const ws = weightSum(emptyData)
    expect(ws).to.be.instanceof(Array)
    expect(ws).to.be.empty
  })

  it('Should throw error if data is wrong type', () => {
    const ws = weightSum.bind(null, wrongType)
    expect(ws).to.throw(Error, 'Weighted sum error: wrong data type. Array is expected')
  })

  it('Should throw an error if a data value is not a number', () => {
    const { source, sortOptions } = errorData
    const ws = weightSum.bind(null, source, sortOptions)
    expect(ws).to.throw(Error, 'Weighted sum error: wrong data type for distance. Number is expected')
  })

  it('Should throw an error if sum of all sortedOptions weights are not 1', () => {
    const { source, sortOptions } = wrongDataType
    const ws = weightSum.bind(null, source, sortOptions)
    expect(ws).to.throw(Error, 'Weighted sum error: sum of all weights must equal 1')
  })
})

describe('Weighted Sum: Sorting', () => {
  it('Should return an array', () => {
    const { source, sortOptions } = correctData
    const ws = weightSum(source, sortOptions)

    expect(ws).to.be.instanceof(Array)
  })

  it('Should return a sorted array', () => {
    const { source, sortOptions, expected } = correctData
    const ws = weightSum(source, sortOptions)

    expect(ws.length).to.equal(expected.length)
    expect(ws).to.deep.equal(expected)
  })

  it('Should return a sorted array including score if specified in options', () => {
    const { source, sortOptions, expected } = correctData
    sortOptions.includeScore = true

    const ws = weightSum(source, sortOptions)
    const ids = ws.map((res) => res.id)
    const scores = ws.map((res) => res.score)

    expect(ws.length).to.equal(expected.length)
    expect(ids).to.deep.equal(expected)

    expect(scores[0]).to.be.above(scores[1])
    expect(scores[1]).to.be.above(scores[2])
    expect(scores[4]).to.be.below(scores[0])
  })
})
