"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5866],{2947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var i=r(5893),s=r(1151);const n={title:"Auction Parameters",slug:"VE-k-auction-parameters",createdAt:"Fri Nov 03 2023 11:04:50 GMT+0000 (Coordinated Universal Time)",updatedAt:"Wed Nov 15 2023 15:09:51 GMT+0000 (Coordinated Universal Time)"},o=void 0,a={id:"Drift Protocol v2 Docs/Auction Parameters",title:"Auction Parameters",description:"Drift Protocol allows orders to set custom auction parameters.&#x20;",source:"@site/docs/Drift Protocol v2 Docs/Auction Parameters.md",sourceDirName:"Drift Protocol v2 Docs",slug:"/Drift Protocol v2 Docs/VE-k-auction-parameters",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/VE-k-auction-parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Drift Protocol v2 Docs/Auction Parameters.md",tags:[],version:"current",frontMatter:{title:"Auction Parameters",slug:"VE-k-auction-parameters",createdAt:"Fri Nov 03 2023 11:04:50 GMT+0000 (Coordinated Universal Time)",updatedAt:"Wed Nov 15 2023 15:09:51 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Advanced Orders FAQ",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/p4qc-advanced-orders-faq"},next:{title:"Audits",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/bpty-audits"}},c={},l=[{value:"Auctions for Limit Orders",id:"auctions-for-limit-orders",level:3}];function d(e){const t={a:"a",div:"div",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Drift Protocol allows orders to set custom auction parameters. "}),"\n",(0,i.jsxs)(t.p,{children:["These settings allow users to customize how their orders are executed on the Drift Protocol by setting specific auction parameters. You can see the implementation of these auction settings ",(0,i.jsx)(t.a,{href:"https://github.com/drift-labs/drift-common/blob/master/common-ts/src/common-ui-utils/commonUiUtils.ts#L374",children:"here"}),"."]}),"\n",(0,i.jsx)(t.div,{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Double Check:"}),' One can always review their Auction Parameters for a particular order in the Confirmation Modal before submitting.\n(you can expand details with "Advanced" checked)']})}),"\n",(0,i.jsx)(t.p,{children:"**\nStart Price Fields: **"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Oracle Price (current oracle price of the market)"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Best Bid/Ask (use best bid/ask price)"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Est. Entry Price (price includes estimated price impact on DLOB/AMM)"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Best Overall (select best price of all of the above)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.div,{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"For Large Size:"}),' its recommended to set a longer duration, "Use Oracle Offset", and wider start, end buffers.']})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:r(6919).Z+"",width:"1236",height:"976"})}),"\n",(0,i.jsx)(t.p,{children:"With Drift Protocol, users can determine the duration of their order in 'slots', and set starting and ending prices based on the keeper network's view of the DLOB."}),"\n",(0,i.jsx)(t.p,{children:"For the given specifications above:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"the user wants the order to start at a price 0.05% better than the estimated fill price."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The order will end at a price that's the worst fill, but with a safety buffer of 0.05% slippage."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"This entire process will take place over 20 slots, which is roughly 10 seconds."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"If the order isn't fully executed within this time, any remaining amount can be filled at a price 0.5% worse than the estimated entry price up to the order's expiry. Note: By default, market orders expire after 60 slots."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Additionally, user's can specify their auctions as offsets from oracle price. This means during the auction (and at runtime) the auction is dynamically moving with the oracle prices as they update (increasing the chance of fair value fills)."}),"\n",(0,i.jsx)(t.h3,{id:"auctions-for-limit-orders",children:"Auctions for Limit Orders"}),"\n",(0,i.jsxs)(t.p,{children:["When submitted limit orders crosses local DLOB and/or vAMM, a limit order without post only flag will actually submit an auction first. The limit order uses the user defined rule for start price for its start auction param. It effectively the same as a market auction order ",(0,i.jsx)(t.strong,{children:"except the user explicitly overrides the End Price and Slippage Tolerance Limit Price."})]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6919:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/hP5UraVYsWUZWP2ntEZI1_screen-shot-2023-11-03-at-71615-am-ce8bd2277a2d6230ffa37a37bcbcb73e.png"},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>o});var i=r(7294);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);