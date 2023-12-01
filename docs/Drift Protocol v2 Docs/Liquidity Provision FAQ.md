---
title: Liquidity Provision FAQ
slug: 4EF9-liquidity-provision-faq
createdAt: Tue Aug 30 2022 06:22:58 GMT+0000 (Coordinated Universal Time)
updatedAt: Sat Jun 24 2023 16:58:10 GMT+0000 (Coordinated Universal Time)
---

### Is there any cost associated with being an LP?

There is no protocol-level fee to add or remove LP shares, aside from a rounding fee when liquidity is removed (burning LP shares).

Burning LP Shares (analogous to cancelling open orders), will automatically settle positions acquired through being an LP to the user account.&#x20;

Given the LP may acquire a base amount that differs from the market's minimum step size (e.g. 0.1 SOL), the cost basis will be rounded on any residual remainder value below this size. This means **the minimum remove liquidity fee is zero while the maximum is the quote value (using oracle) of the minimum step size in the market**. This amount is determined by the remainder base asset amount in the LP position.

