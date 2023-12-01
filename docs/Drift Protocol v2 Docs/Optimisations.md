---
title: Optimisations
slug: VNtx-optimisations
createdAt: Thu Aug 25 2022 01:24:07 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Feb 21 2023 11:51:42 GMT+0000 (Coordinated Universal Time)
---

Drift Protocol's vAMM (DAMM) acts as the designated market maker to provide a guaranteed liquidity source for traders. To overcome latency arbitrage, adverse selection and toxic flow, a number of optimisations were made within the protocol while following particular constraints such as maximum allowable spread and minimum liquidity depth.&#x20;

:::hint{type="info"}
Drift's AMM essentially bootstraps liquidity in a perpetuals market and offers a competitive lower bound as opposed to relying fully on external liquidity providers which can freely come and go.
:::

### Auction Process

The auction process itself acts as a speedbump against latency arbitrage of the oracle and the vAMM. This helps to reduce the adverse selection faced on-chain.&#x20;

### Concentration Factor

The size of k (the constant product invariant) determines the depth of liquidity. By increasing k by a factor of \<X> but making the max/min base reserves tighter, the AMM can provide the same amount of bid and ask liquidity but it is now concentrated with a tighter price range.

### Formulaic K

After every funding rate update, if the net revenue (in terminal) increased over the hour, the vAMM will utilize the funding received to increase k (hence the depth of liquidity provided). Otherwise, if the vAMM had to pay funding over the previous hour, a portion of the payment will be utilized to reduce k (decrease liquidity offering). These updates have maximum update amounts of .1% but are used to converge toward an optimal k over time.

### Participation in the JIT Auction

Just as market makers provide active liquidity through the JIT auction process, the DAMM may also opt to participate as well in order to reduce inventory.&#x20;

### P\&L Settlement

Due to:&#x20;

*   Potential market imbalances;

*   Live-oracle based pricing; and&#x20;

*   Maximum allowable spread set by the DAMM,&#x20;

The way unrealised P\&L users can lock in from entering and exiting a trade against the DAMM is technically unbounded (e.g. if BTC goes toward infinity). 

However, whilst a user can achieve this unrealised gain, it is important to note that an offsetting loss (or sufficient fees collected) is necessary before the unrealised gain can be settled in full and withdrawable as collateral.

Until the P\&L pool is replenished by offsetting losses, winners may\* be offered discounted margin on unrealised gains. Winners will have the ability to withdraw their portion from the P\&L settlement pool as it increases. Read more about the settlement mechanism in [P\&L](<../Drift Protocol v2 Docs/P_L.md>).&#x20;

**\***: If the unrealised P\&L imbalance exceeds its per-market threshold, those unrealised gains may be discounted by the margining system (initial, not maintenance) to prevent large borrows against it. This initial margin discounting would only impact new positions being opened and would not affect a user's liquidation threshold.

These rules are systemitised and can be read more under the Margin subheading in [Cross-Collateral Deposits](<../Drift Protocol v2 Docs/Cross-Collateral Deposits.md>).&#x20;

### Terminal State Consideration

If the inventory on the vAMM is 0, all the repeg and k change operations have no terminal state costs.&#x20;

Even so, the vAMM is still fully aware of the remaining position imbalance within the market and makes decisions on its spread size and liquidity depth based on that awareness (while following its constraints as a designated market maker).&#x20;

