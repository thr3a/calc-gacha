const { combinations } = require('mathjs')

function Gacha(prob, count) {
  this.setProb(prob)
  this.count = count
}

Gacha.prototype.setProb = function (prob) {
  this.prob = prob / 100.0
}

// 1回以上成功する確率
Gacha.prototype.anySuccessProb = function () {
  return 1 - this.allFailProb()
}

// 全て失敗する確率
Gacha.prototype.allFailProb = function () {
  return Math.pow(1.0 - this.prob, this.count)
}

// X回成功する確率
Gacha.prototype.SuccessProbByHit = function(hit) {
  return binomialDistribution(this.count, hit, this.prob, 1.0 - this.prob)
}

// X回以上成功する確率
Gacha.prototype.SuccessProbByHits = function(required_hit) {
  let result = 1.0
  var inverse_prob = 1.0 - this.prob
  for (let j = 0; j < required_hit; j++) {
    result -= combinations(this.count, j) * Math.pow(this.prob, j) * Math.pow(inverse_prob, this.count - j)
  }
  return result
}

// X％成功する回数
Gacha.prototype.anySuccessCount = function() {
}

Number.prototype.format = function(){
  const p = this * 100
  return `${(p < 100) ? p.toFixed(2) : 99.99}%`
}

const binomialDistribution = (n, k, p, q) => {
  return combinations(n, k) * Math.pow(p, k) * Math.pow(q, n - k)
}

module.exports = Gacha
