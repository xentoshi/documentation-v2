---
title: "Tutorial- Bots"
slug: gss4-tutorial-bots
createdAt: Mon Feb 21 2022 08:09:26 GMT+0000 (Coordinated Universal Time)
updatedAt: Thu Apr 13 2023 03:00:39 GMT+0000 (Coordinated Universal Time)
---

### Introduction

There are two primary types of bots that run on Drift Protocol:

1.  Keeper Bots; and&#x20;

2.  Trading Bots.&#x20;

The reference implementation for all Keeper bots mentioned in these docs is available [here](https://github.com/drift-labs/keeper-bots-v2).

All bots require some amount of SOL to pay transaction fees.&#x20;

### Keeper Bots

Keeper Bots are integral to the performance of Drift Protocol. They perform automated actions as autonomous off-chain agents that are crucial to the platform.&#x20;

Keepers are rewarded depending on the duties that they perform.

The various types of keeper bots are:

| Bot Type      | Difficulty | Capital Required | Rewards | Link                                                                              |
| :------------ | :--------- | :--------------- | :------ | --------------------------------------------------------------------------------- |
| Matching Bot  | Basic      | No               | TBD     | [Tutorial: Order Matching Bot](<../Guides/Tutorial_ Order Matching Bot.md>)&#x20; |
| Order Trigger | Basic      | No               | TBD     | [Tutorial: Order Trigger Bot](<../Guides/Tutorial_ Order Trigger Bot.md>)&#x20;   |
| Liquidator    | Advanced   | Yes              | TBD     | &#x20;                                                                            |

### Trading Bots

Trading Bots are for-profit bots run on Drift Protocol for the purposes of automating particular trading strategies. In addition to the financial incentive, Trading Bots provide other users on the exchange with better, more accurate pricing and better liquidity.&#x20;

There are two primary types of trading bots that can be run on Drift Protocol. We have provided examples here:

| Bot Type      | Difficulty | Capital Required | Rewards | Link                                                                    |
| :------------ | :--------- | :--------------- | :------ | ----------------------------------------------------------------------- |
| Arbitrage Bot | Advanced   | Yes              | TBD     | [Tutorial: Arbitrage Bot](<../Guides/Tutorial_ Arbitrage Bot.md>)&#x20; |
| JIT Maker Bot | Advanced   | Yes              | TBD     | [Tutorial: JIT Maker Bot](<../Guides/Tutorial_ JIT Maker Bot.md>)       |
