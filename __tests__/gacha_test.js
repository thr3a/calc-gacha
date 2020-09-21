const Gacha = require('../lib/gacha');

test('1%の確率を100回行った時1回以上成功する確率', () => {
  const gacha = new Gacha(1, 100);
  expect(gacha.anySuccessProb().format()).toBe('63.40%');
});

test('1%の確率を100回行った時すべて失敗する確率', () => {
  const gacha = new Gacha(1, 100);
  expect(gacha.allFailProb().format()).toBe('36.60%');
});

test('1%の確率を100回行った時2回成功する確率', () => {
  const gacha = new Gacha(1, 100);
  expect(gacha.SuccessProbByHit(2).format()).toBe('18.49%');
});

test('1%の確率を100回行った時2回以上成功する確率', () => {
  const gacha = new Gacha(1, 100);
  expect(gacha.SuccessProbByHits(2).format()).toBe('26.42%');
});

