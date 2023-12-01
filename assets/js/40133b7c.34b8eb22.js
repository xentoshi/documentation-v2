"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4055],{7659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=r(5893),n=r(1151);const i={title:"Tutorial- Order Matching Bot",slug:"6Apm-tutorial-order-matching-bot",createdAt:"Mon Aug 15 2022 17:24:43 GMT+0000 (Coordinated Universal Time)",updatedAt:"Fri Mar 03 2023 20:40:41 GMT+0000 (Coordinated Universal Time)"},a="Introduction",l={id:"Drift Protocol v2 Docs/Tutorial_ Order Matching Bot",title:"Tutorial- Order Matching Bot",description:"Order Matching Bots (Matching Bots) are responsible for matching two orders that cross or a taker order against the DAMM. Specifically, this includes:&#x20;",source:"@site/docs/Drift Protocol v2 Docs/Tutorial_ Order Matching Bot.md",sourceDirName:"Drift Protocol v2 Docs",slug:"/Drift Protocol v2 Docs/6Apm-tutorial-order-matching-bot",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/6Apm-tutorial-order-matching-bot",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Drift Protocol v2 Docs/Tutorial_ Order Matching Bot.md",tags:[],version:"current",frontMatter:{title:"Tutorial- Order Matching Bot",slug:"6Apm-tutorial-order-matching-bot",createdAt:"Mon Aug 15 2022 17:24:43 GMT+0000 (Coordinated Universal Time)",updatedAt:"Fri Mar 03 2023 20:40:41 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Tutorial- Liquidation Bot",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/IsAx-tutorial-liquidation-bot"},next:{title:"Tutorial- Order Trigger Bot",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/I-as-tutorial-order-trigger-bot"}},s={},c=[{value:"1. Get nodes from the DLOB that are ready to be filled",id:"1-get-nodes-from-the-dlob-that-are-ready-to-be-filled",level:2},{value:"2. Filter for Fillable Nodes",id:"2-filter-for-fillable-nodes",level:2},{value:"3. Call <code>fill_order</code> on <code>DriftClient</code> ",id:"3-call-fill_order-on-driftclient-",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"Order Matching Bots (Matching Bots) are responsible for matching two orders that cross or a taker order against the DAMM. Specifically, this includes: "}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Market Orders"}),": Market Buy and Market Sell"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Limit Orders"}),": Limit Buy and Limit Sell "]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Matching Bots receive a small compensation for each order that they successfully fill."}),"\n",(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/lVe4-keepers-and-decentralised-orderbook",children:"Keepers & Decentralised Orderbook"})," for a technical explanation of how the decentralised orderbook (DLOB) and matching incentives work."]}),"\n",(0,o.jsxs)(t.p,{children:["Matching Bots are similar to ",(0,o.jsx)(t.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/I-as-tutorial-order-trigger-bot",children:"Tutorial: Order Trigger Bot"})," in that they:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"also maintain a local copy of the Decentralised Limit Orderbook (DLOB);"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"do not require the operator to manage collateral; and"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"receive a small reward for performing their duties."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsxs)(t.p,{children:["The reference implementation of the Order Matching Bot is available ",(0,o.jsx)(t.a,{href:"https://github.com/drift-labs/keeper-bots-v2/blob/master/src/bots/filler.ts",children:"here"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Follow the instructions at ",(0,o.jsx)(t.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/hfCI-keeper-bots",children:"Keeper Bots"})," to set the required environment variables and make sure a ",(0,o.jsx)(t.code,{children:"ClearingHouseUser"})," is initialized."]}),"\n",(0,o.jsx)(t.p,{children:"Start the Matching Bot:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"yarn run dev:filler\n"})}),"\n",(0,o.jsx)(t.h1,{id:"technical-explanation",children:"Technical Explanation"}),"\n",(0,o.jsx)(t.h2,{id:"1-get-nodes-from-the-dlob-that-are-ready-to-be-filled",children:"1. Get nodes from the DLOB that are ready to be filled"}),"\n",(0,o.jsxs)(t.p,{children:["Market orders that are sent on the Drift Protocol first go through the ",(0,o.jsx)(t.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/orqd-just-in-time-jit-auctions",children:"Just-In-Time (JIT) Auctions"}),". After the auction period, Matching Bots step in to fill orders for a small reward. "]}),"\n",(0,o.jsx)(t.p,{children:"The DLOB implementation includes a method for getting orders ready to be filled:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"const market = this.clearingHouse.getMarketAccounts()[0]; // get a MarketAccount\n\nconst oraclePriceData = this.driftClient.getOracleDataForMarket(marketIndex);\nconst oracleIsValid = isOracleValid(\n    market.amm,\n    oraclePriceData,\n    this.driftClient.getStateAccount().oracleGuardRails,\n    this.slotSubscriber.getSlot()\n);\n\nconst vAsk = calculateAskPrice(market, oraclePriceData);\nconst vBid = calculateBidPrice(market, oraclePriceData);\n\nconst nodesToFill = this.dlob.findNodesToFill(\n    marketIndex,\n    vBid,\n    vAsk,\n    this.slotSubscriber.getSlot(),\n    oracleIsValid ? oraclePriceData : undefined\n);\n"})}),"\n",(0,o.jsx)(t.h2,{id:"2-filter-for-fillable-nodes",children:"2. Filter for Fillable Nodes"}),"\n",(0,o.jsx)(t.p,{children:"To avoid trying to fill orders that aren't ready to be filled, filter out orders that are too small to fill"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:'if (\n    !nodeToFill.makerNode &&\n    (isVariant(nodeToFill.node.order.orderType, "limit") ||\n        isVariant(nodeToFill.node.order.orderType, "triggerLimit"))\n) {\n    const baseAssetAmountMarketCanExecute =\n        calculateBaseAssetAmountMarketCanExecute(\n            market,\n            nodeToFill.node.order,\n            oraclePriceData\n        );\n\n    if (\n        baseAssetAmountMarketCanExecute.lt(market.amm.baseAssetAmountStepSize)\n    ) {\n        // skip order\n        continue;\n    }\n}\n'})}),"\n",(0,o.jsxs)(t.h2,{id:"3-call-fill_order-on-driftclient-",children:["3. Call ",(0,o.jsx)(t.code,{children:"fill_order"})," on ",(0,o.jsx)(t.code,{children:"DriftClient"})," "]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"const user = this.userMap.get(nodeToFill.node.userAccount.toString());\nconst txSig = await this.driftClient.fillOrder(\n    nodeToFill.node.userAccount,\n    user.getUserAccount(),\n    nodeToFill.node.order,\n    undefined\n);\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>a});var o=r(7294);const n={},i=o.createContext(n);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);