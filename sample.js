const Gacha = require('./lib/gacha.js')  // コンストラクタが返される

const prob = 1
const number = 100
const gacha = new Gacha(prob, number)

console.log(gacha.anySuccessProb())
console.log(gacha.allFailProb())
console.log(gacha.SuccessProbByHit(2))
console.log(gacha.SuccessProbByHits(2))
console.log(gacha.anySuccessCount(87))
