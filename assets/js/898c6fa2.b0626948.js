"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6840],{402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(5893),r=n(1151);const a={title:"Funding Rates",slug:"tLFN-funding-rates",createdAt:"Wed Jul 20 2022 10:32:50 GMT+0000 (Coordinated Universal Time)",updatedAt:"Fri May 19 2023 19:58:17 GMT+0000 (Coordinated Universal Time)"},s=void 0,o={id:"Drift Protocol v2 Docs/Funding Rates",title:"Funding Rates",description:"Perpetuals futures have no expiry date, final settlement, or delivery. As such, funding rate payments are used as the incentive mechanism to bring the perpetual futures' mark price in line with the oracle price.&#x20;",source:"@site/docs/Drift Protocol v2 Docs/Funding Rates.md",sourceDirName:"Drift Protocol v2 Docs",slug:"/Drift Protocol v2 Docs/tLFN-funding-rates",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/tLFN-funding-rates",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Drift Protocol v2 Docs/Funding Rates.md",tags:[],version:"current",frontMatter:{title:"Funding Rates",slug:"tLFN-funding-rates",createdAt:"Wed Jul 20 2022 10:32:50 GMT+0000 (Coordinated Universal Time)",updatedAt:"Fri May 19 2023 19:58:17 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Fee Pool",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/ocoW-fee-pool"},next:{title:"Getting Started",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/pnho-getting-started"}},d={},c=[{value:"Unrealised -&gt; Realised Funding",id:"unrealised---realised-funding",level:3},{value:"Capped Symmetric Funding",id:"capped-symmetric-funding",level:3},{value:"Oracle Resilience",id:"oracle-resilience",level:3},{value:"APR calculation",id:"apr-calculation",level:3}];function l(e){const t={a:"a",code:"code",div:"div",em:"em",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Perpetuals futures have no expiry date, final settlement, or delivery. As such, funding rate payments are used as the incentive mechanism to bring the perpetual futures' mark price in line with the oracle price. "}),"\n",(0,i.jsx)(t.p,{children:"(For instance, a user with a long position in a market whose mark price is, on average, below the oracle price will receive a payoff proportional to their position size)."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Funding Rate % Calc"}),(0,i.jsx)(t.td,{children:"1/24 * (market_twap - oracle_twap)/oracle_twap"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TWAP Parameters"}),(0,i.jsx)(t.td,{children:"EMA with span = 1 hour"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Mark TWAP Calc"}),(0,i.jsx)(t.td,{children:"(bid TWAP + ask TWAP) / 2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Frequency"}),(0,i.jsx)(t.td,{children:"End of Hour* (9:00 AM, 10:00 AM, ...)"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Note: Funding rate magnitudes are clamped at 0.12626% and are delayed at large divergences (see ",(0,i.jsx)(t.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/22EZ-oracles",children:"Oracles"}),"). Individual Market TWAP updates utilize the side of the book for trade executions, Bid and Ask TWAPs in the market are calculated and/or estimated on every trade. "]}),"\n",(0,i.jsx)(t.h3,{id:"unrealised---realised-funding",children:"Unrealised -> Realised Funding"}),"\n",(0,i.jsxs)(t.p,{children:["Funding rates are updated ",(0,i.jsx)(t.em,{children:"lazily"})," every hour*. "]}),"\n",(0,i.jsx)(t.p,{children:"Any time a user opens or closes a position, the exchange tries to update the funding rate. "}),"\n",(0,i.jsx)(t.p,{children:"The funding rate will still be updated if enough time has passed and no position has been opened or closed. "}),"\n",(0,i.jsx)(t.p,{children:"The update will reflect the premium or discount between the DAMM\u2019s mark price and the oracle\u2019s price TWAP over the previous hour. "}),"\n",(0,i.jsxs)(t.p,{children:['The cumulative funding rate is checked against user positions in case the off-chain funding rate bot does not trigger on the hour. This will show up as "Unrealised P&L" until your next user action within the market (such as a trade, deposit, withdraw etc.), see also ',(0,i.jsx)(t.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/CImq-pandl",children:"P&L"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"****"})," if no market trades and/or funding update calls occur within the first ~20 minutes of the hour, the next funding update will be delayed an additional hour.*"]}),"\n",(0,i.jsx)(t.h3,{id:"capped-symmetric-funding",children:"Capped Symmetric Funding"}),"\n",(0,i.jsx)(t.p,{children:"Drift Protocol aims to provide a symmetric funding rate to both sides of the market. When there is a long-short imbalance within the DAMM, the protocol's market-specific Rebate Pool can be used to pay (or receive) the cost delta between the longs and the shorts. "}),"\n",(0,i.jsx)(t.p,{children:"If the pool is empty or does not have enough to provide for funding (2/3 of the Rebate Pool balance available at each funding interval), then the receipts for funding will be capped to the available amount."}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"https://docs.drift.trade/funding-rates",children:"Rebates"})," for funding pool sizes where the funding paid from the Rebate Pool will be capped. This ensures that the risk is spread in the system and the Insurance Fund isn't drained by funding rates. "]}),"\n",(0,i.jsx)(t.p,{children:"Over the hour, the amount available in the Rebate Pool will increase from fees as trades occur, so any existing predicted capped rate should move closer to being balanced."}),"\n",(0,i.jsx)(t.p,{children:"**Example: **"}),"\n",(0,i.jsx)(t.p,{children:"For BTC-PERP you can check the recent history to get a better idea of what shorts will receive"}),"\n",(0,i.jsx)(t.p,{children:"Example funding calculation: "}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"1/24 * (174.643 - 174.450)/(174.450) = 0.00460% (40.27% APR)"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"example data",src:n(9842).Z+"",width:"2052",height:"332"})}),"\n",(0,i.jsx)(t.h3,{id:"oracle-resilience",children:"Oracle Resilience"}),"\n",(0,i.jsx)(t.p,{children:"Drift's on-chain calculation of a market's oracle TWAP is updated only on trades which incorporates the oracle's confidence interval and a few interpolations to provide the most accurate and resilient value. "}),"\n",(0,i.jsxs)(t.p,{children:["Read more about protective checks in ",(0,i.jsx)(t.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/22EZ-oracles",children:"Oracles"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"apr-calculation",children:"APR calculation"}),"\n",(0,i.jsx)(t.p,{children:"Funding rates can be showcased in annual terms for easier comparison."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"APR (annual percentage rate)"})," is calculated ",(0,i.jsx)(t.code,{children:"rate x 24 x 365.25"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"APY"})," would be: ",(0,i.jsx)(t.code,{children:"(1 + rate) ^ (24 x 365.25) - 1"})]}),"\n",(0,i.jsx)(t.div,{children:(0,i.jsxs)(t.p,{children:["One can approximately track ",(0,i.jsx)(t.strong,{children:"APY"})," by allocating funding receipts back into the position (excluding fees/rebates)"]})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9842:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mBFRK1HfhF-9o6IaExcW0_screen-shot-2021-12-30-at-115308-am-1ca3c01e010b5d08fc831c9684bba03e.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(7294);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);