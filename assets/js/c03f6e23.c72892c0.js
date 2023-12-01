"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9627],{9097:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var n=i(5893),s=i(1151);const t={title:"Keepers & Decentralised Orderbook",slug:"lVe4-keepers-and-decentralised-orderbook",createdAt:"Mon Feb 21 2022 02:33:18 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Feb 21 2023 12:00:24 GMT+0000 (Coordinated Universal Time)"},o=void 0,d={id:"Drift Protocol v2 Docs/Keepers _ Decentralised Orderbook",title:"Keepers & Decentralised Orderbook",description:"Overview",source:"@site/docs/Drift Protocol v2 Docs/Keepers _ Decentralised Orderbook.md",sourceDirName:"Drift Protocol v2 Docs",slug:"/Drift Protocol v2 Docs/lVe4-keepers-and-decentralised-orderbook",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/lVe4-keepers-and-decentralised-orderbook",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Drift Protocol v2 Docs/Keepers _ Decentralised Orderbook.md",tags:[],version:"current",frontMatter:{title:"Keepers & Decentralised Orderbook",slug:"lVe4-keepers-and-decentralised-orderbook",createdAt:"Mon Feb 21 2022 02:33:18 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Feb 21 2023 12:00:24 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Keeper Incentives",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/xVZ3-keeper-incentives"},next:{title:"Liquidations",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/uyaD-liquidations"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Keeper Bots",id:"keeper-bots",level:2},{value:"Keeper Rewards",id:"keeper-rewards",level:2},{value:"Build Philosophy",id:"build-philosophy",level:2}];function c(e){const r={a:"a",code:"code",div:"div",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(r.p,{children:["Drift's decentralised orderbook is powered by our network of ",(0,n.jsx)(r.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/hfCI-keeper-bots",children:"Keeper Bots"}),".  "]}),"\n",(0,n.jsx)(r.p,{children:"The Keeper Bots match open orders with various on-chain liquidity mechanisms once they cross or their trigger condition is met. These scenarios include:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Taker auction against Taker auction;"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Taker/Maker limit orders against Taker auction;"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Maker limit orders against Taker limit orders;"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Taker/Maker orders against the Drift's AMM."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"_Note: (1) two post only maker orders cannot be crossed; (2) maker orders that fill against the vAMM are not eligible for rebate reward; and (3) limit orders can be filled by market orders that go through the JIT auction. _"}),"\n",(0,n.jsx)(r.p,{children:"Keepers earn rewards that incentivise:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"providing the best execution for takers (relative to the oracle price) and;"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"following First-Come-First-Serve execution ordering"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.div,{children:(0,n.jsx)(r.p,{children:"While a robust Keepers network improves throughput/usability, the protocol's core functionality is not crunched upon it. Existing trading bots (JIT makers and resting order takers) implicitly fulfil the role of Keepers."})}),"\n",(0,n.jsx)(r.h2,{id:"keeper-bots",children:"Keeper Bots"}),"\n",(0,n.jsx)(r.p,{children:"Keeper Bots listen, store, sort and fill valid limit orders. Keepers do this by compiling all valid open orders found on-chain and organising them into an off-chain orderbook. These orders are sorted by price and age, and if two orders have the same age, they\u2019re then sorted by position size."}),"\n",(0,n.jsxs)(r.p,{children:["Each Keeper holds its own orderbook (hence '",(0,n.jsx)(r.em,{children:"decentralised"})," orderbook'). "]}),"\n",(0,n.jsx)(r.p,{children:"Keepers then listen to trigger conditions and match crossing orders and limit orders against the DAMM when the users\u2019 trigger or limit price is met."}),"\n",(0,n.jsx)(r.p,{children:"For performing this critical duty, the Keepers earn a fee for every trade they execute. Similar to liquidation bots, Keepers will compete for fees in a decentralised system; with the most profitable Keepers being:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"the fastest;"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"the best price improvement for takers; and"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"the ones that fulfil orders in the protocol\u2019s desired sequence \u2014 oldest and largest first."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Reference implementations for the filler and trigger Keepers are provided: ",(0,n.jsx)(r.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/hfCI-keeper-bots",children:"Keeper Bots"}),". "]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:i(6225).Z+"",width:"2206",height:"1230"})}),"\n",(0,n.jsx)(r.h2,{id:"keeper-rewards",children:"Keeper Rewards"}),"\n",(0,n.jsxs)(r.p,{children:["Currently, the USDC reward function for keepers (",(0,n.jsx)(r.em,{children:"f_keeper"}),") is designed as:"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://archbee.imgix.net/ps_9Ff-LBbQB7IaXI3f3F/7X0tYmUqT218-A0gfXSz-_image.png",alt:""})}),"\n",(0,n.jsxs)(r.p,{children:["where:\n",(0,n.jsx)(r.em,{children:"t_order"})," is seconds since the order was placed\n",(0,n.jsx)(r.em,{children:"f_user"})," is the taker fee paid by the user who placed the order"]}),"\n",(0,n.jsxs)(r.p,{children:["This reward is subject to evolve to incentivise CLOB-like execution ordering. See ",(0,n.jsx)(r.a,{href:"https://github.com/drift-labs/protocol-v1/blob/c748c64fcfa6d7fd5aba72f7021218dd6aaa02f0/programs/clearing_house/src/math/fees.rs#L257",children:"[source code]"})," for the on-chain calculation."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"plot of filler rewards (given user fee)",src:i(1978).Z+"",width:"1164",height:"450"})}),"\n",(0,n.jsxs)(r.p,{children:["A Keeper reward multiplier (for taker price improvement) is applied to the keeper's minimum time-based reward component in the function above. Any percent improvement versus the baseline ",(0,n.jsx)(r.code,{children:"oracle +/- 10bps"}),", increases this multiplier."]}),"\n",(0,n.jsx)(r.h2,{id:"build-philosophy",children:"Build Philosophy"}),"\n",(0,n.jsx)(r.p,{children:"The decentralised orderbook is designed with two core values in mind:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"*decentralisation**"}),";*\xa0and"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.em,{children:"computational efficiency"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.em,{children:"Decentralisation"})}),"\xa0is achieved through our network of hybrid off-chain Keepers that anyone can build and run \u2014 similar to liquidator bots."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.em,{children:"Computational efficiency"})}),"\xa0is achieved by leaving the order-filling logic \u2014 the part that requires the most computational power \u2014 off-chain, and filling them on-chain upon a trigger."]}),"\n",(0,n.jsxs)(r.p,{children:["Hence, Drift\u2019s unique limit order system is a\xa0",(0,n.jsx)(r.strong,{children:"_hybrid\xa0_"}),"system that uses a combination off-chain Keepers and on-chain settlement."]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},6225:(e,r,i)=>{i.d(r,{Z:()=>n});const n=i.p+"assets/images/_7EXFtBAy_tQDOSdL_VIL_image-e531e28e6d8e1d145839254fee903041.png"},1978:(e,r,i)=>{i.d(r,{Z:()=>n});const n=i.p+"assets/images/fE8crUZ8eZ9vqRg8SShhi_newplot-24-bb5afa8897eca108a33ed136c17ec8e5.png"},1151:(e,r,i)=>{i.d(r,{Z:()=>d,a:()=>o});var n=i(7294);const s={},t=n.createContext(s);function o(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);