const emptyData = null
const wrongDataType = 'foo'

const errorData = {
  source: [
    {
      id: 'Restaurant 1',
      note: 4,
      distance: 626
    },
    {
      id: 'Restaurant 2',
      note: 4,
      distance: 'foo'
    }
  ],
  sortOptions: {
    note: {
      weight: 0.4,
      type: 'asc'
    },
    distance: {
      weight: 0.6,
      type: 'desc'
    }
  },
  expected: [
    'Restaurant 1',
    'Restaurant 2'
  ]
}

const correctData = {
  source: [
    {
      id: 'Restaurant 1',
      note: 4,
      distance: 626
    },
    {
      id: 'Restaurant 2',
      note: 4,
      distance: 410
    },
    {
      id: 'Restaurant 3',
      note: 3,
      distance: 700
    },
    {
      id: 'Restaurant 4',
      note: 3.5,
      distance: 292
    },
    {
      id: 'Restaurant 5',
      note: 5,
      distance: 580
    }
  ],
  sortOptions: {
    note: {
      weight: 0.4
    },
    distance: {
      weight: 0.6,
      type: 'desc'
    }
  },
  expected: [
    'Restaurant 4',
    'Restaurant 2',
    'Restaurant 5',
    'Restaurant 1',
    'Restaurant 3'
  ]
}

module.exports = {
  emptyData,
  wrongDataType,
  errorData,
  correctData
}
