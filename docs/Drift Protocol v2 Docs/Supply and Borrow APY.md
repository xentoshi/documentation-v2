---
title: Supply and Borrow APY
slug: 10Nl-supply-and-borrow-apy
createdAt: Wed Jul 27 2022 03:49:30 GMT+0000 (Coordinated Universal Time)
updatedAt: Tue Feb 21 2023 11:29:47 GMT+0000 (Coordinated Universal Time)
---

Drift's Borrow and Lend products allow users that deposit collateral into the platform to automatically earn interest. Interest is calculated on the sum of all collateral deposited and settled and is continually paid into user accounts.&#x20;

Users can also borrow against their collateral to initiate a withdrawal.

---

### Supply APY&#x20;

### Supply APY&#x20;

All deposits on Drift, both perpetuals and in Drift's borrow & lend markets, will earn interest. The annualised percentage yield (APY) differs per market and is displayed on the platform's UI.&#x20;

![](../../static/assets/IjPTQ7BZXMIhgNOt8IhYf_image.png)

APY is auto-compounding from the time of deposit and is calculated on the user's total settled collateral.&#x20;

Since assets supplied to Drift's borrow & lend can also be cross-margined to use for perpetual futures trading, users will earn interest on both their deposits and on their positions.

The Supply APY is a function of the utilisation ratio which is calculated: `Total Borrowed / Total Deposits`

The interest rate will slowly increase to an optimal ratio of X% and will increase above that in order to encourage the market to deposit more funds.&#x20;

### Borrow APY

Users must pay a Borrow APY to the pool when borrowing assets. This interest payment is then distributed to lenders via the Supply APY.

Drift's interest rate is calibrated to manage liquidity risk and optimise asset utilisation. The formula for the borrow interest rates can be found at [Borrow Interest Rate](<../Drift Protocol v2 Docs/Borrow Interest Rate.md>).&#x20;

The Borrow APY for each asset is shown on the UI. There is no 'deadline' for loans to be repaid. The interest owed will accrue over time and you can repay whenever you're ready.&#x20;

![](../../static/assets/y_D7XVjmDvigSgXyl_n0e_image.png)
