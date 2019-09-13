import Header from './app/header'
import Sum from './app/sum'

import './styles/scss/main.scss'

console.log('This is loading from index.js')

let header = new Header()
let firstHeading = header.insertFirstHeading()
console.log(firstHeading)

let sum = new Sum()
let simpleSum = sum.simpleSum()
console.log(simpleSum)
