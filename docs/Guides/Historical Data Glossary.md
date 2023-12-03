---
title: Historical Data Glossary
slug: UaHP8qyjdifdoJgr772II
createdAt: Tue Apr 12 2022 15:25:37 GMT+0000 (Coordinated Universal Time)
updatedAt: Fri Mar 03 2023 08:27:28 GMT+0000 (Coordinated Universal Time)
---

# trades

| Column              | unit          | Precision                | description                                                                                           | Ext. Link                                                                                     |
| ------------------- | ------------- | ------------------------ | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| id                  | int           |                          |                                                                                                       |                                                                                               |
| programId           | pubkey        |                          | the on-chain program interacted with &#xA;(damm\* == drift protocol mainnet)                          |                                                                                               |
| recordId            | int           |                          | sequential count of all trades that ever occured (ensures proper ordering vs by the second timestamp) |                                                                                               |
| userAuthority       | publickey     |                          |                                                                                                       |                                                                                               |
| user                | publickey     |                          |                                                                                                       |                                                                                               |
| baseAssetAmount     | int           | 1e13                     | BASE amt of swap (e.g. SOL-PERP)                                                                      |                                                                                               |
| quoteAssetAmount    | int           | 1e6                      | USDC of swap                                                                                          |                                                                                               |
| markPriceBefore     | int           | 1e10                     |                                                                                                       |                                                                                               |
| markPriceAfter      | int           | 1e10                     |                                                                                                       |                                                                                               |
| fee                 | int           | 1e6                      | fee paid to vAMM by user for swap                                                                     |                                                                                               |
|                     |               |                          |                                                                                                       |                                                                                               |
|                     |               |                          |                                                                                                       |                                                                                               |
|                     |               |                          |                                                                                                       |                                                                                               |
| liquidation         | bool          |                          | was trade a forced liquidation                                                                        |                                                                                               |
| direction           | Long \| Short |                          | did user go Long (buy) or Short (sell) the Base amt                                                   |                                                                                               |
| blockChainTimeStamp | int           | seconds&#xA;(since 1970) | unix on-chain time stamp&#x20;                                                                        |                                                                                               |
| serverTimeStamp     | int           | seconds&#xA;(since 1970) | exchange history server off-chain time stamp &#xA;(can be delayed due to outages)                     |                                                                                               |
| marketIndex         | int           |                          | market Index in Markets Account that user swapped                                                     | [markets](https://github.com/drift-labs/protocol-v1/blob/master/sdk/src/constants/markets.ts) |
|                     |               |                          |                                                                                                       |                                                                                               |
| oraclePrice         | int           | 1e10                     | oracle price at time of swap &#xA;(provided by pyth/switchboard)                                      |                                                                                               |







