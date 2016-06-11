const { expect } = require('chai')
const { emptyData, wrongDataType, errorData, correctData } = require('./mocks')
const weighSum = require('../index')

describe('Weighted Sum: Error Management', () => {
  it('Should return an empty array if data is empty', () => {
    const ps = weighSum(emptyData)
    expect(ps).to.be.instanceof(Array)
    expect(ps).to.be.empty
  })

  it('Should throw error if data is wrong type', () => {
    const ps = weighSum.bind(null, wrongDataType)
    expect(ps).to.throw(Error, 'Weighted sum: wrong data type. Array is expected')
  })

  it('Should throw an error if a data value is not a number', () => {
    const { source, sortOptions } = errorData
    const ps = weighSum.bind(null, source, sortOptions)
    expect(ps).to.throw(Error, 'Weighted sum: wrong data type for distance. Number is expected')
  })
})

describe('Weighted Sum: Sorting', () => {
  it('Should return an array', () => {
    const { source, sortOptions } = correctData
    const ps = weighSum(source, sortOptions)

    expect(ps).to.be.instanceof(Array)
  })

  it('Should return a sorted array', () => {
    const { source, sortOptions, expected } = correctData
    const ps = weighSum(source, sortOptions)

    expect(ps.length).to.equal(expected.length)
    expect(ps).to.deep.equal(expected)
  })
})