---
title: Drift AMM
slug: NU41-drift-amm
createdAt: Wed Jul 20 2022 10:15:24 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Feb 21 2023 11:50:18 GMT+0000 (Coordinated Universal Time)
---

## Introduction&#x20;

Drift uses a backstop AMM as a source of guaranteed constant liquidity for the exchange, providing constant liquidity to be taken against asynchronously.

Drift's v1 featured a Dynamic AMM (DAMM) which was an iteration on top of Perpetual Protocol's innovation - the [virtual AMM (vAMM)](https://blog.perp.fi/a-deep-dive-into-our-virtual-amm-vamm-40345c522eeb), except with configurable parameters, namely:&#x20;

-   **Peg:** a price multiplier

-   **K:** liquidity depth

-   **Fee Pool:** comprised of taker fee amounts (multiple methods for fee discounts to be implemented in the future)

-   **Fee** **Tranches:** percentage allocations from the fee pool to be distributed amongst the following operations:

    -   Adjusting Peg (alternatively, "repeg")

    -   `k` adjustments

    -   (Capped) funding payments

You can read more about Drift's v1 DAMM design [here](https://www.notion.so/driftprotocol/Drift-dAMM-deep-dive-ff154003aedb4efa83d6e7f4440cd4ab#861bdbceda8a45a38600a0d9d762ee25).&#x20;

## Drift v2 AMM&#x20;

Drift’s v2 AMM is still a vAMM using a constant product curve but now includes external [Liquidity Providers (LPs)](<../Drift Protocol v2 Docs/Liquidity Providers _LPs_.md>), a concentration factor, and dynamic spread/peg that **programmatically update prior to filling trades**.

The mechanics behind the dynamic spread and peg are:

1.  Inventory adjusted spreads

2.  Oracle live pricing/volatility

### Inventory Adjusted Spreads

In a typical constant product AMM, the AMM quotes the same price for buys/sells and charges a flat fee.&#x20;

To implicitly utilise a dynamic fee, Drift v2's AMM quotes different prices for buys and sells. The offset from the mid-price is dynamic based on the current inventory.&#x20;

To do so, there will be 3 points tracked on the constant product curve: the bid price and ask price, and a point between the reservation price.&#x20;

![](../../static/assets/K7PAJRkd_-P-t8v6RQ_nI_drift-amm-bid-ask-spreads.png)

Base long spread and short spread are currently set as:&#x20;

`bid/ask price = reservation price ± base_spread + f(inventory, balance, ...)`&#x20;

The long and short spread can be asymmetric due to changes in the underlying inventory skew and market buy/sell pressure. Ultimately, the ask - bid can never exceed the max spread (percentage calculated using the current valid oracle price).&#x20;

The bid/ask points on the curve are calculated as follows (exact efficient integer math method calculated on contract):&#x20;

> bid_quote_reserve = quote_reserve - (quote_reserve / (100%/short_spread))
> ask_quote_reserve = quote_reserve + (quote_reserve / (100%/long_spread))

The `quote_reserve` is defined as the total AMM reserves of the quote asset. Then using the same k to back out the base_reserve for the bid/ask curves as well.

### Oracle Live Pricing

The AMM's reservation price gets updated regularly through Drift's live oracle-based pricing.&#x20;

This pricing mechanism updates an asset's mark price towards its oracle price, achieving:

-   more accurate pricing; and

-   better entries and exits closer to oracle price.&#x20;

The mark price is updated each time the oracle updates its price and when the contract is interacted with.

**Oracle Live Pricing Sequence**

Every time a trader wants to fill against the AMM, the AMM will be updated in the same slot with a valid oracle price (see [Oracles](<../Drift Protocol v2 Docs/Oracles.md>)). &#x20;

The sequence is:&#x20;

1.  The AMM checks the oracle price

2.  The AMM move its peg toward the oracle price

3.  The AMM sets its bid/ask spread versus its reservation price

4.  The order will fill according to the bid/ask price if the order has lived longer than the minimum duration for AMM fills (10 slots)

The overall spread will increase if the AMM is heavily levered or in debt. The oracle price and reservation price are always within this spread. Effective leverage is a function of many market stats, including Inventory P\&L and collateral within the fee pool in the terminal state.

The reservation (AMM) price is the .
