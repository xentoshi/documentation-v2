---
title: Liquidators
slug: Bq5o-liquidators
createdAt: Wed Oct 13 2021 19:37:05 GMT+0000 (Coordinated Universal Time)
updatedAt: Thu Aug 03 2023 13:12:43 GMT+0000 (Coordinated Universal Time)
---

Liquidations act as position transfers between accounts. Liquidator accounts thus need to be collateralised in order to satisfy the transfer's initial margin requirements.

There are four instructions pertaining to liquidations:

| Instruction                    | Details                                                          |
| ------------------------------ | ---------------------------------------------------------------- |
| liquidate_perp                 | Liquidator takes over user perpetual positions at a discount.    |
| liquidate_borrow               | Liquidator takes over borrow at a discount to the deposit value. |
| liquidate_borrow_for_perp_pnl  | Liquidator takes over borrow for discount P\&L.                  |
| liquidate_perp_pnl_for_deposit | Liquidator takes over negative P\&L for discounted deposit.      |

Bankruptcy (see [Insurance Fund](<../Insurance Fund/0 Insurance Fund>) ) is possible if you still have outstanding liabilities and no further assets after liquidation.&#x20;

Liquidators are open-sourced and can be triggered by anybody running a liquidator bot. Liquidators, also known as Keepers, will have their collateral reward credited to their Drift account.

Liquidations will be triggered and positions will be liquidated based on oracle price, not the mark price of the exchange. &#x20;

The user's trade price at liquidation for a perpetual position will be based on the oracle price + the penalty / fee that is set per market.

**In the case of an oracle error (): the market will pause most fills, liquidations, and funding rate updates. **

If you would like to run a liquidator bot, see [Tutorial: Liquidation Bot](<../Guides/Tutorial_ Liquidation Bot.md>)
