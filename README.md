# weighted-sum

Weighted sum algorithm implementation used on Mealou (https://m.me/Mealoubot | https://www.mealou.co)

Algorithm Documentation: 
- EN: [Wikipedia](https://en.wikipedia.org/wiki/Weighted_sum_model)
- FR: [Wikipedia](https://fr.wikipedia.org/wiki/M%C3%A9thode_math%C3%A9matique_d%27analyse_multicrit%C3%A8re)

## Install

[![NPM](https://nodei.co/npm/weighted-sum.png)](https://www.npmjs.com/package/weighted-sum)

[![Build Status](https://travis-ci.com/dcamilleri/weighted-sum.svg?token=aNpmikxhysGoeT5oNauy&branch=master)](https://travis-ci.com/dcamilleri/weighted-sum)

```
$ npm install weighted-sum
```

## Usage
Sorting three restaurants by `note` and `distance` fields:

```js
const weightSum = require('weighted-sum')
const data = [
  {
    id: 'restaurant 1',
    note: 4,
    distance: 626
  },
  {
    id: 'restaurant 2',
    note: 4,
    distance: 410
  },
  {
    id: 'restaurant 3',
    note: 3,
    distance: 700
  }
]

const sortOptions = {
  includeScore: false,
  note: {
    weight: 0.4,
    sort: 'asc'
  },
  distance: {
    weight: 0.6,
    sort: 'desc'
  }
}

// Output: ['restaurant 2', restaurant 1', restaurant 3]
const sortedItems = weightSum(data, sortOptions)
```

## API

### weightSum(data, sortOptions)

#### data
Type: `Array`  
- id field is **mandatory**
- Sorting criterias must be numbers

#### sortedOptions

Type: `Object`  
- `includeScore`: whether or not include sorting score in result. Default is `false`
- `weight` is **mandatory**
- sum of all `weight` must equal 1
- Default `sort` is `asc`

## License

MIT © [Dorian Camilleri](https://github.com/dcamilleri>)
