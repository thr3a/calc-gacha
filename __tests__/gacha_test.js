const Gacha = require('../lib/gacha')

test('出現率1%を100回行った時1回以上成功する確率', () => {
  const gacha = new Gacha(1, 100)
  expect(gacha.anySuccessProb()).toBe(0.6339676587267711)
})

test('出現率1%を100回行った時すべて失敗する確率', () => {
  const gacha = new Gacha(1, 100)
  expect(gacha.allFailProb()).toBe(0.3660323412732289)
})

test('出現率1%を100回行った時2回成功する確率', () => {
  const gacha = new Gacha(1, 100)
  expect(gacha.SuccessProbByHit(2).format()).toBe('18.49%')
})

test('出現率1%を100回行った時2回以上成功する確率', () => {
  const gacha = new Gacha(1, 100)
  expect(gacha.SuccessProbByHits(2)).toBe(0.2642380210770449)
})

test('出現率1%をX％の確率で手に入れるために必要な回数', () => {
  const gacha = new Gacha(1, 100)
  expect(gacha.anySuccessCount(50)).toBe(69)
})
