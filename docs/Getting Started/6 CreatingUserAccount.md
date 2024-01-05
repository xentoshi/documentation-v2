---
title: Cost creating Subaccount
slug: PesZ-creating-subaccounts
---

## Creating a new subaccount
Creating a new subaccount requires ["rent"](https://docs.solana.com/developing/intro/rent) for the Solana network. For the `UserAccount` size, rent is roughly ~.032 SOL.

Fortunately, rent is reclaimable after closing a subaccount.

Drift Protocol also adds sybil-resistance rent measures that ultimately improves keeper network's performance quality.  

The following additional rent is only applied once subaccounts surpass a target utilization of the maximum number.

### Formula:
`(current_utilization - target_utilization)/(1 - target_utilization) * max_user_fee`

These additional lamports are tacked on as rent for the user account. Account rent is only reclaimable after 13 days of estimated account lifetime or if the account is marked idle.

### Example:
Consider a totally new user creates account 42,169.

If the maximum number of subaccounts allowable is 50,000. Target utilization is 80%.  Maximum init fee is 0.5 SOL.

Then must add an additional `(42169/50000) - .8)/(1-.8) *.5` = `0.10845 SOL` as rent for their user account.

They must also either wait until the account is idle (no asset/liabilities and inactive for sufficient duration) or 13 days before reclaiming all of this rent.
