---
title: "Tutorial- Order Trigger Bot"
slug: I-as-tutorial-order-trigger-bot
createdAt: Mon Aug 15 2022 18:33:09 GMT+0000 (Coordinated Universal Time)
updatedAt: Fri Mar 03 2023 20:40:20 GMT+0000 (Coordinated Universal Time)
---

# Introduction

Order Trigger Bots (Trigger Bots) are responsible for marking orders that satisfy the trigger condition, including:&#x20;

-   **Trigger Market Orders - **Stop Market and Take Profit&#x20;

-   **Trigger Limit Orders -** Stop Limit and Take Profit Limit

Trigger Bots receive a small compensation for each successfully marked order.

See [Keepers & Decentralised Orderbook](<../Drift Protocol v2 Docs/Keepers _ Decentralised Orderbook.md>) for a technical explanation of how the decentralised orderbook (DLOB) and matching incentives work.

Trigger Bots are similar to [Tutorial: Order Matching Bot](<../Drift Protocol v2 Docs/Tutorial_ Order Matching Bot.md>) in that they:&#x20;

-   also maintain a local copy of the [Keepers & Decentralised Orderbook](<../Drift Protocol v2 Docs/Keepers _ Decentralised Orderbook.md>);&#x20;

-   do not require the operator to manage collateral; and&#x20;

-   receive a small reward for performing their duties.

# Getting Started

The reference implementation of a Trigger Bot is available [here](https://github.com/drift-labs/keeper-bots-v2/blob/master/src/bots/trigger.ts).

Follow the instructions at [Keeper Bots](<../Drift Protocol v2 Docs/Keeper Bots.md>) to set the required environment variables and make sure a `ClearingHouseUser` is initialised.

Start the Trigger Bot:

```shell
yarn run dev:trigger
```

# Technical Explanation

## 1. Get nodes from the DLOB that are ready to be triggered

The DLOB implementation includes a method for getting orders ready to be triggered:

```typescript
const market = this.driftClient.getMarketAccounts()[0]; // get a MarketAccount

const oraclePriceData = this.driftClient.getOracleDataForMarket(marketIndex);

const nodesToTrigger = this.dlob.findNodesToTrigger(
    marketIndex,
    this.slotSubscriber.getSlot(),
    oraclePriceData.price
);
```

## 2. Call `trigger_order` on `DriftClient`&#x20;

```typescript
const user = this.userMap.get(nodeToTrigger.node.userAccount.toString());
const txSig = await this.driftClient.triggerOrder(
    nodeToTrigger.node.userAccount,
    user.getUserAccount(),
    nodeToTrigger.node.order
);
```
