---
title: Decentralised Orderbook FAQ
slug: IvA9-decentralised-orderbook-faq
createdAt: Wed Jul 20 2022 07:20:53 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Feb 21 2023 12:02:12 GMT+0000 (Coordinated Universal Time)
---

### Is this the same as a traditional orderbook? How are the limit orders filled?&#x20;

Drift's decentralised orderbook is different to a traditional orderbook.&#x20;

Limit orders placed on Drift's decentralised orderbook are filled either:&#x20;

-   against each other (buys and sells at the same price); or&#x20;

-   against the DAMM if the trigger conditions are met.&#x20;

The orders are stored and settled on-chain. The queue is constructed by a network of off-chain Keepers that are incentivised to fill orders against the DAMM or each other based on age.

### Is the Keeper network guaranteed to execute my order?

Orders are executed 'best effort' by the network and are powered by special economic incentives designed to mimic the typical execution order seen in a Centralised Limit Order Book (CLOB).&#x20;

### How is an orderbook constructed off-chain?&#x20;

When a user submits a limit order, it is submitted onto the Solana blockchain. This is known as an on-chain order.&#x20;

Keeper Bots monitor all open limit orders placed on-chain. Similar to the way liquidator bots track all user positions to monitor liquidation eligibility; Keeper Bots monitor the eligibility of limit orders to be filled.&#x20;

To accomplish this, Keeper Bots construct an orderbook structure off-chain categorising all the open limit orders by price, age, and then position size. Once the particular requisite trigger condition is met, the Keeper Bot will fill the oldest valid order against the DAMM for a financial incentive. If two orders have the same age, the Keeper Bot will most likely fill the order that is larger in size (up to the incentive cap).&#x20;

### Why is the orderbook constructed off-chain?

Drift doesn't construct a central limit orderbook on-chain and instead opts for a flat structure to achieve cost-effective scalability.&#x20;

The network of Keepers monitor on-chain orders and constructs their own orderbooks off-chain.&#x20;

This achieves (1) decentralisation (as each Keeper stores its own copy of the orderbook); and (2) computational efficiency (as the high throughput and intensive computations are calculated off-chain).&#x20;

This should translate to better performance during periods of high network congestion.

### What are Keeper bots? How can I participate?

A Keeper will track and fill orders and earn a reward. The guide to run is listed in [Keeper Bots](<../Guides/Keeper Bots.md>). Incentive structures are listed in [Keepers & Decentralised Orderbook](<../Drift Protocol v2 Docs/Keepers _ Decentralised Orderbook.md>).
