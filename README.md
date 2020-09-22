# gacha-calc

スマホゲームなどの一般的なガチャにおいて、欲しいアイテムをGETするための確率等を簡単に計算できるライブラリ

# Installation

```
npm install -S gacha-calc
```

# Example

```javascript
const Gacha = require('calc-gacha')
const prob = 1
const number = 100
const gacha = new Gacha(prob, number)

console.log(`出現率${prob}%を${number}回行った時1回以上成功する確率:`, (gacha.anySuccessProb() * 100).toFixed(2), '%')
// => 出現率1%を100回行った時1回以上成功する確率: 63.40 %
```

# Usage

## 初期化

Gachaクラスのインスタンスクラスを生成することで使用できます。

第１引数は対象ガチャの出現率(単位%)、第２引数にはガチャを回す試行回数を渡します。

```javascript
new Gacha(prob, number)
```

なお、probとnumberは生成後に外部から変更できますが、probは処理があるので必ず `setProb(Number prob)` 経由でセットしてください。

## gacha.anySuccessProb()

1回以上成功する確率を計算します。

## gacha.allFailProb()

全て失敗する確率を計算します。

## gacha.SuccessProbByHit(Number hit)

hit回成功する確率を計算します。

## gacha.SuccessProbByHits(Number hit)

hit回以上成功する確率を計算します。

## gacha.anySuccessCount(Number threshold)

threshold%成功するのを満たす試行回数を計算します。

# Licence

MIT
