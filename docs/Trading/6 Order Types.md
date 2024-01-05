---
title: Order Types
slug: EUrr-order-types
createdAt: Wed Jul 20 2022 10:40:24 GMT+0000 (Coordinated Universal Time)
updatedAt: Fri Nov 03 2023 11:04:50 GMT+0000 (Coordinated Universal Time)
---

Drift supports the following order types:&#x20;

-   market orders;

-   limit orders; and&#x20;

-   advanced conditional orders.&#x20;

## Market Orders

A **Market Order** is an order to buy or sell an asset immediately at the current Market Price.

Users can set a maximum **slippage tolerance**. A slippage tolerance sets an upper bound for the price that the order can be filled at, which is effectively a limit price versus the current market price.&#x20;

For instance, if the mark price of SOL-PERP is $100.00 and a user goes long, a user can set a maximum slippage tolerance of 0.1%. As such, the worst price that a user can fill at is $100.10. The order will fail if the quoted price exceeds the limit price (with slippage tolerance) for makers.&#x20;

Market Orders will trigger a Just-In-Time auction, where market makers will be able to participate in a 5-second Dutch auction to fill the user's orders. As the 5-second JIT auction finishes, the user's orders will be completed if the price is within their slippage tolerance limit order. If no market maker steps in during the JIT Auction, the remaining order will be filled against Drift's DAMM.

Executing a Market Order does not mean the order will execute at exactly the price displayed as the mark price of an asset may change before the JIT Auction is complete. &#x20;

:::hint{type="info"}
The fee paid depends on whether the order is a taker order or a maker order.&#x20;

Maker orders are Limit orders with a 'Post' flag.

See [Trading Fees](<./9 Trading Fees>) and [Advanced Orders FAQ](<./7 Advanced Orders FAQ>) for more information.
:::

## **Limit Orders**

The Drift DEX supports a number of queued order types.&#x20;

These orders take against the DAMM and are executed by a decentralised network of keepers, see[Decentralised Orderbook FAQ](<../0 About Drift v2/2 Decentralised Orderbook FAQ>), once certain conditions are met (i.e. the mark price crosses the specified trigger/limit price).

These orders are executed **'best effort'** by the network with special economic incentives designed to mimic the typical execution order seen in a Centralised Limit Order Book (CLOB).

A Limit Order is an order to buy or sell a given asset at a specified price.

Users can specify a Limit Price they wish to be filled at.&#x20;

If or when the mark price of an asset moves to cross the Limit Price, the order will partially fill up to this Limit Price every time a keeper executes it.&#x20;

For taker orders, a user's resulting Entry Price is guaranteed to be equal to or better than the Limit Price specified.&#x20;

If the "Post" order flag is set, then the order will be filled at the specified limit price with a variable rebate. This variable rebate comes from the liquidity surplus from the taker fills that cross after accounting for the filler reward (which is capped at 5bps).

## Advanced Orders

### Stop Market

A Stop Market Order is an order to close the position of a given asset if its Oracle Price reaches the specified Trigger Price. If this happens, the position is closed at Market Price.&#x20;

Users can specify a Trigger Price, and once (or if) the of the asset reaches the specified Trigger Price and a keeper executes it, a Market Order to sell the asset will be executed.

### Stop Limit

A Stop Limit Order will only execute where the Oracle Price of a given asset reaches the Trigger Price. If this happens, a Limit Order at the specified Limit Price will be placed. Once triggered, the resulting Limit Order may be immediately filled or may rest until the specified Limit Price is reached and executed by a decentralised keeper.&#x20;

Users can specify a Trigger Price and a Limit Price, and once (or if) the mark price of the asset reaches the specified Trigger Price and a keeper executes it, a Limit Order will be placed at the specified Limit Price.&#x20;

Stop Limit Orders also serve as a maximum slippage tolerance for the Stop Order.

| Current Position | Order Type             | Trade Direction | Trigger Condition | Reduce Only&#x20; |
| ---------------- | ---------------------- | --------------- | ----------------- | ----------------- |
| Long             | Stop (Market If Touch) | Buy             | Below             | False             |
| **Long**         | **Stop**               | **Sell**        | **Below**         | **True/False**    |
| **Short**        | **Stop**               | **Buy**         | **Above**         | **True/False**    |
| Short            | Stop (Market If Touch) | Sell            | Above             | False             |

### Take Profit Market

A Take Profit Order is an order to close the position of a given asset if its Oracle Price reaches the specified Trigger Price. If this happens, the position is closed at Market Price.&#x20;

Users can specify a Trigger Price, and once (or if) the oracle price of the asset reaches the specified Trigger Price and a keeper executes it, a Market Order to sell the asset will be executed.

### Take Profit Limit

A Take Profit Limit Order will only execute where the Oracle Price of a given asset reaches the Trigger Price. If this happens, a Limit Order at the specified Limit Price will be placed. Once triggered, the resulting Limit Order may be immediately filled or may rest until the specified Limit Price is reached and executed by a decentralised keeper.&#x20;

Users can specify a Trigger Price and a Limit Price, and once (or if) the oracle price of the asset reaches the specified Trigger Price and a keeper executes it, a Limit Order will be placed at the specified Limit Price.&#x20;

Take Profit Limit Orders also serve as a max slippage tolerance for the Stop Order.

| Current Position | Order Type                    | Trade Direction | Trigger Condition | Reduce Only    |
| ---------------- | ----------------------------- | --------------- | ----------------- | -------------- |
| Long             | Take Profit (Market If Touch) | Buy             | Above             | False          |
| **Long**         | **Take Profit**               | **Sell**        | **Above**         | **True/False** |
| **Short**        | **Take Profit**               | **Buy**         | **Below**         | **True/False** |
| Short            | Take Profit (Market If Touch) | Sell            | Below             | False          |

:::hint{type="info"}
**If Trigger Price < Limit Price:** order starts getting filled once the price is below the trigger price.

**If Limit Price < Trigger Price: **order starts getting filled once the price is below the limit price.
:::

:::hint{type="warning"}
One limitation is that the protocol can only detect that a Trigger Price has been hit if the order has already been or can be partially filled. This means it does not allow for some order configurations to be placed:

TriggerIsAbove | DirectionIsLong | LimitPrice
\------------------------------------------------
True | True | Must be above trigger
True | False | Ok
False | True | Ok &#x20;
False | False | Must be below trigger

*Example:&#x20;
*If Trigger Price is >$140 and a Long is placed with a Limit Price = $135, there is no way the order can know that $140 was hit before you try to long when the price falls $5.

In the other scenario, if Trigger Price is < $140 and a Long is placed with a Limit Price = $135, we will know that $140 (AND $135) must have been hit since you were partially filled.

### Order Flags

Additionally, orders can include flags that specify execution parameters. The protocol allows for three additional order flags, as written below:

-   **Reduce-Only: **Enforces that the order will never increase or reverse the current position (go from long to short, or short to long).

-   **Post-Only**: Enforces that the order is a maker order that can provide liquidity to the pool for a reduced exchange fee (0%). Without this flag, orders that don't execute immediately are not post-only.

-   **Immediate or cancel (IOC)**: An order that is placed and potentially partially filled. The remainder that is not filled immediately is then cancelled.
