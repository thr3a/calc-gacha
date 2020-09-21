const Gacha = require('./lib/gacha.js')  // コンストラクタが返される

const prob = 1
const number = 100
const gacha = new Gacha(prob, number)

console.log(gacha.anySuccessProb().format())
console.log(gacha.allFailProb().format())
console.log(gacha.SuccessProbByHit(2).format())
console.log(gacha.SuccessProbByHits(2).format())
