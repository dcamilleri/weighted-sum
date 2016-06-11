const { expect } = require('chai')
const { emptyData, wrongDataType, errorData, correctData } = require('./mocks')
const ponderateSum = require('../index')

describe('Ponderated Sum: Error Management', () => {
  it('Should return an empty array if data is empty', () => {
    const ps = ponderateSum(emptyData)
    expect(ps).to.be.instanceof(Array)
    expect(ps).to.be.empty
  })

  it('Should throw error if data is wrong type', () => {
    const ps = ponderateSum.bind(null, wrongDataType)
    expect(ps).to.throw(Error, 'Ponderated sum: wrong data type. Array is expected')
  })

  it('Should throw an error if a data value is not a number', () => {
    const { source, sortOptions } = errorData
    const ps = ponderateSum.bind(null, source, sortOptions)
    expect(ps).to.throw(Error, 'Ponderated sum: wrong data type for distance. Number is expected')
  })
})

describe('Ponderated Sum: Sorting', () => {
  it('Should return an array', () => {
    const { source, sortOptions } = correctData
    const ps = ponderateSum(source, sortOptions)

    expect(ps).to.be.instanceof(Array)
  })

  it('Should return a sorted array', () => {
    const { source, sortOptions, expected } = correctData
    const ps = ponderateSum(source, sortOptions)

    expect(ps.length).to.equal(expected.length)
    expect(ps).to.deep.equal(expected)
  })
})
