---
title: Liquidations
slug: uyaD-liquidations
createdAt: Wed Oct 13 2021 19:37:05 GMT+0000 (Coordinated Universal Time)
updatedAt: Wed Aug 23 2023 13:41:18 GMT+0000 (Coordinated Universal Time)
---

:::hint{type="warning"}
Trading on leverage can be risky. Make sure you are aware of the liquidation rules outlined below before applying margin.
:::

# What are Liquidations?&#x20;

Liquidations are a part of leveraged trading. Traders that elect to use leverage are using the collateral they deposited as margin to borrow money from the protocol. Traders may choose to do this in order to open a larger position and have more exposure to a particular asset, i.e. *leveraged exposure*.&#x20;

When this occurs, the protocol must protect itself by ensuring that there is enough margin for the position to settle any losses that occur. There is a prescribed minimum ratio between a position's value and its margin for each asset (**Minimum Maintenance Margin**).

If a position drops below its Minimum Maintenance Margin, liquidators are incentivized by the protocol to take over positions so a user's remaining collateral may settle the losses that have occurred. Read[Insurance Fund](<../Drift Protocol v2 Docs/Insurance Fund.md>) for what happens when prices move rapidly and/or liquidations don't happen in time.&#x20;

# How do Liquidations work?&#x20;

In the Drift v2 margin system, all positions within a subaccount (deposits, borrows, and perpetuals positions) are cross-margined.

As such, liquidations are calculated based on your account level leverage rather than isolated to the leverage present in your perpetuals and/or borrow account.&#x20;

You can be liquidated when your `totalCollateral` becomes less than your`maintenanceMarginRequirement`. Your total collateral is the weighted value of your deposits and perp pnl. Your margin requirement is the weighted value of your borrows and perp positions.&#x20;

Once your total collateral value falls below your margin requirement, liquidations will first cancel any open orders + LP positions. After this, until your account's total collateral is above the `maintenanceMarginRequirement + liqBufferRatio` liquidators can iteratively liquidate any portion of assets and liabilities over a throttled time window (to avoid single price instance from a heavily deleveraging account). The `liqBufferRatio` is set on the Drift State Account and is meant to sufficiently bring an account away from the liquidation boundary but heavily punish users.&#x20;

The `Health` measure on the user page can help visualise how close a user is to liquidation territory. At 0 Health, a user can get liquidated.

`Health = 100% - maint. margin / total collateral`

The user's trade price at liquidation for a perpetual position will be based on the oracle price. The penalty / fee that is set per market, likely above the normal taker fee, in order to give the liquidator a rebate.&#x20;

Liquidations triggered and positions will be liquidated using margin engine prices.

**In the case of an extreme oracle error (): the market will pause most fills, liquidations, and funding rate updates. **

# Example

*Example: *

*   *You deposit 500 USDC and you long 200 SOL-PERP at $25*

*   *Your position value is $5000 USDC and your margin/collateral is $500 USDC, you have 10x leverage*

Note that the Minimum Maintenance Margin for a SOL-PERP is 5% (see Minimum Maintenance Margin for assets here: [Margin](<../Drift Protocol v2 Docs/Margin.md>)

Your total collateral is `$500 * 1.00 = $500` and your margin requirement is `$5000 * .05 = 250`

You are liquidated if the price of SOL decreases by 5.28% to $23.6825. This is because your perp pnl is `200 * $25 * -.0527 = -263.5` and thus your total collateral is `$500 - 263.5 = $236.5`while your margin requirement is `$23.6825 * 200 * .05 = $236.825`.

# Being a Liquidator

Read [Liquidators](<../Drift Protocol v2 Docs/Liquidators.md>) if you want to learn more about being a liquidator on the platform. Liquidators earn a fee for their services.&#x20;

