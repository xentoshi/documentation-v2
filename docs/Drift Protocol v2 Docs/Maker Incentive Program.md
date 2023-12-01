---
title: Maker Incentive Program
slug: sxi0CugfCTt2J9SNfn7YM
createdAt: Tue Mar 07 2023 09:10:18 GMT+0000 (Coordinated Universal Time)
updatedAt: Fri Nov 17 2023 14:39:26 GMT+0000 (Coordinated Universal Time)
---

**_Last updated: 11 Aug 2023_**

## Introduction

---

To encourage market makers to provide liquidity on Drift, makers orders of all tiers earn a **2 bps rebate **on all volume. Additionally, **qualified market makers who opt into the Incentive Program will split reward pool up to 3000 USDC each week.**

### Who Can Join?

Anyone that can programmatically market make on Drift is invited to apply for the Program. Check out our [protocol’s SDK, ](https://github.com/drift-labs/protocol-v2/tree/master/sdk)our [open sourced market making bots](https://github.com/drift-labs/keeper-bots-v2/blob/master/src/bots/floatingMaker.ts) and our [technical documentation](https://drift-labs.github.io/v2-teacher) to get started.

Eligible market makers will be qualified on application. Reach out to (https://t.me/cindyleow) to apply.

### Program Length

1.  The Program will run each week starting on Monday, 00:00 UTC and concluding on Sunday, 23:59 UTC (”Program Period”).

2.  Drift will notify participating market makers if the Program is paused for any particular week.

### Rewards

The rewards for this program are split into a Volume Reward and a Score Reward.

**Volume Reward: $1,500 USDC**

**Score Reward: $1,500 USDC**

## Reward Calculations

---

### Volume Reward

All participating market makers make their pro-rata split of **$1,500 USDC **based on their relative maker volume **_across all markets_**, according to:&#x20;

```tex
\mathrm{MMVolumeReward = \frac{MM_{volume}}{\sum\limits_{Maker} MM_{volume}} * VolumeRewardPool}
```

### Score Reward

All participating market makers make their pro-rata split of **$1,500 USDC** based on their relative liquidity score within each market, according to:&#x20;

```tex
\mathrm{MMScoreReward_{mkt} = \frac{MMScore_{mkt}}{\sum\limits_{makers} MMScore_{mkt}} * ScoreRewardPool_{mkt}}
```

This equation can be broken down into:&#x20;

**1. MM Score over period**

This is the score for the market maker in a specific market with n snapshots over the period.

```tex
\mathrm{MMScore_{mkt} = avg(\sum_{i=1}^{n}{MM_{OrderScore,mkt})}}
```

**2. MM Order Score per snapshot**

The MM Order Score calculates the weighted sum of the size of the market maker's ask orders at various price levels. It takes into account the quantity (Q) of lower of liquidity available at that bid, ask bracket.

```tex
\mathrm{MM_{OrderScore, mkt}} =
(MM_{OrderScore, mkt, bid}
+ MM_{OrderScore, mkt, ask}) * 100
```

```tex
MM_{OrderScore, mkt, side} = 4*\frac{ l_A}{Q_{A}}+2*\frac{l_B}{Q_{B}} + 0.75*\frac{ l_C}{Q_{C}}+0.4*\frac{ l_D}{Q_{D}}+0.3*\frac{ l_E}{Q_{E}}+0.2*\frac{ l_F}{Q_{F}}
```

```tex
\mathrm {l_{bracket,side}}
```

an individual MM’s liquidity within a bracket for a side (bid or ask)

```tex
\mathrm {L_{bracket,side}}
```

all liquidity within a bracket for a side (bid or ask)

```tex
\mathrm {Q_{bracket}}
```

largest of an individual bracket’s bid liquidity, ask liquidity, or $5000 worth of liquidity

| Bracket | Distance from best order on side |
| ------- | -------------------------------- |
| A       | within 0 - 1 bps                 |
| B       | within 1 - 5 bps                 |
| C       | within 5 - 10 bps                |
| D       | within 10 - 20 bps               |
| E       | within 20 - 50 bps               |
| F       | within 50 - 100 bps              |

| Term | Distance from best order on side         |
| ---- | ---------------------------------------- |
| Qa   | `max(L_{A,bid}, L_{A,ask}, $5000/price)` |
| Qb   | `max(L_{B,bid}, L_{B,ask}, $5000/price)` |
| Qc   | `max(L_{C,bid}, L_{C,ask}, $5000/price)` |
| Qd   | `max(L_{D,bid}, L_{D,ask}, $5000/price)` |
| Qe   | `max(L_{E,bid}, L_{E,ask}, $5000/price)` |
| Qf   | `max(L_{F,bid}, L_{F,ask}, $5000/price)` |

:::hint{type="info"}
**_Note:_** if a single market maker provided a best bid and ask with $5000 worth of liquidity, that would be a score of 400. If another MM provided the remaining liquidity of $5000\*5=$25k at all the other brackets that would be a score of 2+.75+.4+.3+.2 \* 100 = 365.&#x20;

**_Scoring incentivises orders at the top of the book. Orders within 1bp of the best bid/ask have a weighting of 4x._**
:::

```tex
\mathrm {{ScoreRewardPool_{mkt}}}
```

| mkt      | ScoreRewardPool          |
| -------- | ------------------------ |
| SOL-PERP | 500                      |
| BTC-PERP | 500                      |
| ETH-PERP | 500                      |
| SUI-PERP | 0 (as of August 14 2023) |
| ARB-PERP | 0 (as of August 14 2023) |

## Notes

---

This Program is an early iteration of an on-chain liquidity provisioning program the DriftDAO will eventually oversee.&#x20;

Rewards will change as we move towards DriftDAO.&#x20;

## Additional Terms

---

1.  Any wash trading or self matching is strictly prohibited. If wash trading or self matching is observed in order to manipulate market share, then the incentives for that month are forfeited. This is at the sole discretion of Drift Protocol.

2.  Market makers will be able to track their performance here: [[Drift ](https://driftv2.streamlit.app/?tab=MM)Maker Performance](https://driftv2.streamlit.app/?tab=MM)

## Payment Options

---

1.  Qualified Market Makers will receive their payments in USDC.

2.  Payouts will conclude the week following the end of the Program.&#x20;
