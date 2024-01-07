---
title: Market Maker Participation
slug: JJR7-market-maker-participation
createdAt: Tue Nov 22 2022 07:23:58 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Mar 07 2023 09:09:24 GMT+0000 (Coordinated Universal Time)
---

_For more information on incentive programs for Market Makers, see _[Maker Rebate Fees](<./1 Maker Rebate Fees>)

# Introduction

Any user can participate as a Market Maker on the platform. Market Makers can provide liquidity through either:&#x20;

1.  Just-in-Time Liquidity (see [Just-In-Time (JIT) Auctions](<../About Drift v2/6 Just-In-Time _JIT_ Auctions.md>)); or

2.  Post-Only Orders on the decentralised orderbook (see [Keepers & Decentralised Orderbook](<../About Drift v2/4 Keepers _ Decentralised Orderbook.md>)).

## Just-in-Time Liquidity&#x20;

Makers can participate in the JIT auction and provide just-in-time liquidity as Taker flow comes in.&#x20;

This will provide Makers with an opportunity to see retail flow five seconds before it hits the market.&#x20;

Market Makers can participate in the JIT system by running a JIT Maker Bot. For more information, check out [Tutorial: JIT Maker Bot](<../Guides/Tutorial_ JIT Maker Bot.md>)

For more information on the Just-in-Time Liquidity system, check out [Just-In-Time (JIT) Auctions](<../About Drift v2/6 Just-In-Time _JIT_ Auctions.md>)

## Decentralised Orderbook&#x20;

Makers can also provide liquidity to Drift's decentralised orderbook by quoting via the UI or programmatically through the [SDK Documentation](<../Guides/SDK Documentation.md>)&#x20;

### (a) providing liquidity via the UI

Placing 'Post-Only' limit orders via Drift's UI qualifies the order as a maker order.&#x20;

This order won't be executed against the AMM or go through the JIT. It will sit in the decentralised orderbook until a taker for that price comes along.&#x20;

![The 'POST' flag is toggled on here.](../../static/assets/S3njjazK500hoUw5o2v6z_image.png)

### (b) programmatic market making with a floating maker bot

Drift has an open-sourced bot that programmatically quotes bids and asks around the oracle price. These quotes are automatically updated as the oracle price moves.&#x20;

In practice, the floating maker bot will quote above and below the oracle to provide liquidity around the oracle price. Makers that run the bot will be able to collect the spread as the price moves.&#x20;

Drift currently runs this bot, along with some additional risk parameters, on the platform for-profit. We've open-sourced the build here for any user to run something similar.&#x20;

**Floating Maker Bot - Github Link: **[**https://github.com/drift-labs/keeper-bots-v2/blob/master/src/bots/floatingMaker.ts**](https://github.com/drift-labs/keeper-bots-v2/blob/master/src/bots/floatingMaker.ts)\*\*\*\*
