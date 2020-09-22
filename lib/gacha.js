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
  return Math.pow(this.inverseProb(), this.count)
}

// X回成功する確率
Gacha.prototype.SuccessProbByHit = function(hit) {
  return binomialDistribution(this.count, hit, this.prob, this.inverseProb())
}

// X回以上成功する確率
Gacha.prototype.SuccessProbByHits = function(required_hit) {
  let result = 1.0
  for (let j = 0; j < required_hit; j++) {
    result -= binomialDistribution(this.count, j, this.prob, this.inverseProb())
  }
  return result
}

// X％成功するのに必要な回数
Gacha.prototype.anySuccessCount = function(threshold) {
  return Math.ceil(Math.log(1.0 - 1.0 * threshold / 100) / Math.log(1.0 - this.prob))
}

// 逆確率
Gacha.prototype.inverseProb = function() {
  return 1.0 - this.prob
}

// 二項分布
const binomialDistribution = (n, k, p, q) => {
  return combinations(n, k) * Math.pow(p, k) * Math.pow(q, n - k)
}

module.exports = Gacha
