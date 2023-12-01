---
title: Understanding Drift Protocol
slug: OReT-understanding-drift-protocol
createdAt: Wed Jul 20 2022 07:13:35 GMT+0000 (Coordinated Universal Time)
updatedAt: Thu Aug 10 2023 13:42:39 GMT+0000 (Coordinated Universal Time)
---

# Drift Protocol

At the application level, Drift Protocol is a decentralized exchange that supports low slippage, low fees, and minimal price impact on all trades. Drift offers **four** primary products:

1.  Spot Trading - [What is Spot Margin Trading?](<../Drift Protocol v2 Docs/What is Spot Margin Trading_.md>)&#x20;

2.  Perpetuals Trading - [What are Perpetual Futures?](<../Drift Protocol v2 Docs/What are Perpetual Futures_.md>)&#x20;

3.  Borrow & Lend - [What is Borrow & Lend?](<../Drift Protocol v2 Docs/What is Borrow _ Lend_.md>)&#x20;

4.  Passive Liquidity Provision - [DLP - Drift Liquidity Provider](<../Drift Protocol v2 Docs/DLP - Drift Liquidity Provider.md>)

# The Problem

On-chain exchanges suffer from limitations associated with blockchains—namely, speed and limited computational capacity on-chain.&#x20;

Porting over existing off-chain centralised exchange infrastructure onto the blockchain results in an inefficient use of blockchains and disincentivises market-maker participation with unfavourable conditions.&#x20;

As a result, most on-chain orderbooks suffer from:&#x20;

*   slow fills;&#x20;

*   high spreads; and&#x20;

*   low liquidity.

# Our Solution

Drift has designed & developed an exchange that is robust, computationally efficient, and incentivises market maker participation, as well as liquidity provision.&#x20;

Trades on Drift are supported by three liquidity mechanisms:

1.  **Just-in-Time (JIT) Auction Liquidity**: provided by market makers prior to each transaction;

2.  **Limit Orderbook Liquidity**: provided by our decentralised orderbook (DLOB) made up of limit orders placed by takers that can be filled by makers; and

3.  **AMM Liquidity:** provided by Drift's AMM *** ***if no makers step in to provide liquidity.

### Just-in-Time Liquidity

*For a more technical breakdown, check out: *[Just-In-Time (JIT) Auctions](<../Drift Protocol v2 Docs/Just-In-Time _JIT_ Auctions.md#mFAd->)

All market trades (spot and perpetual) that are placed on Drift are routed through a short-term auction (default is \~ 5 seconds). During this period, market-makers can bid to fill the order at or better than the auction price, providing '*Just-in-Time Liquidity*' as the fulfilment is provided for the market order submitted.&#x20;

Auctions are run via a Dutch Auction (where the auction price starts at the better price and linearly moves toward a set worse end price) and market makers compete amongst themselves in speed to fulfil user orders.&#x20;

### Constant Liquidity

*For a more technical breakdown, check out: *

Drift's virtual AMM (DAMM) is the backstop designated liquidity provider for trades on the exchange if 1) market orders aren't filled by the JIT and 2) resting orders hit a trigger price that can be filled by the AMM.

The AMM provides a source of constant liquidity for all traders to *take *from. The AMM is considered constant as liquidity is available based on a constant product formula (x\*y=k) balancing the reserves. Drift's AMM features an inbuilt bid-ask spread that adjusts based on inventory held by the AMM. Users can also LP into the AMM to further collateralize.

This also means that, even without external makers, Drift Protocol can support new markets without dependence on external market makers to bootstrap liquidity (albeit with additional risks on the immediate availability of unsettled PnL). Many prudent measures in the protocol's design are in place (capped exposure, effective market making, revenue pool utilization, insurance fund rules, etc) to mitigate and isolate the risks of a single market. The AMM needs a reliable oracle of the perpetual market's spot reference asset. For instance, Drift's SOL-PERP market would refer to a SOL/USD spot oracle for a spot reference. Drift currently uses Pyth for its oracles and can arbitrarily support other sources per market.

### Limit Orderbook Liquidity

*For a more technical breakdown, check out: *[Decentralised Orderbook FAQ](<../Drift Protocol v2 Docs/Decentralised Orderbook FAQ.md>).

Drift's decentralised orderbook (DLOB) acts as its third source of liquidity.&#x20;

Limit orders are orders that trigger and execute on a particular condition. For a full breakdown of what limit orders are, visit: [Order Types](<../Drift Protocol v2 Docs/Order Types.md>).&#x20;

Limit orders are placed by users on-chain. A network of Keeper Bots ([Keeper Bots](<../Drift Protocol v2 Docs/Keeper Bots.md>)) then sorts the on-chain limit orders into an off-chain orderbook and categorises limit orders from oldest to newest, and largest to smallest.&#x20;

Each Keeper maintains its own view of the orderbook (hence the 'decentralised' aspect) and tracks new orders, AMM availability, and the oracle price. If the trigger condition of a limit order is met, the Keeper will submit the limit order and fill it against the AMM. Keepers will also match taker orders with resting limit orders if the conditions are the same.

Keepers are also incentivised to fill the oldest and largest order first. For their work, they are paid a portion of the taker fee to their Drift User Account.&#x20;

The decentralised orderbook acts as a source of 'resting' liquidity as it rests on the orderbook until either a taker takes it, or the requisite market conditions are met and it's filled against the DAMM.&#x20;

***

# More about Drift

### Decentralisation

Drift Protocol is a **decentralised** exchange, meaning:&#x20;

*   all deposits, withdraws, and trades are executed on-chain and are completely transparent;&#x20;

*   trading requires a connection to a self-custodial Solana wallet; and

*   execution of all trades is facilitated by smart contract technology with no human or third-party input to execute or fill trades.&#x20;

Decentralisation offers many benefits, including:&#x20;

*   anonymity;&#x20;

*   transparency;&#x20;

*   fairness; and

*   trustlessness.&#x20;

However, decentralisation also means that Drift is susceptible to the same limitations and shortcomings that arise from running on a blockchain, including:

*   underlying blockchain risk;

*   transaction fees;&#x20;

*   smart contract risk; and

*   network congestion.&#x20;

