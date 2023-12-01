"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2565],{986:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(5893),n=i(1151);const s={title:"Risk Parameters",slug:"VWEs-risk-parameters",createdAt:"Sun Aug 21 2022 00:57:47 GMT+0000 (Coordinated Universal Time)",updatedAt:"Sat Apr 22 2023 15:39:49 GMT+0000 (Coordinated Universal Time)"},a=void 0,o={id:"Drift Protocol v2 Docs/Risk Parameters",title:"Risk Parameters",description:"These risk parameters are relevant to perpetual futures. Further risk parameters are also set out in and Risk Parameters",source:"@site/docs/Drift Protocol v2 Docs/Risk Parameters.md",sourceDirName:"Drift Protocol v2 Docs",slug:"/Drift Protocol v2 Docs/VWEs-risk-parameters",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/VWEs-risk-parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Drift Protocol v2 Docs/Risk Parameters.md",tags:[],version:"current",frontMatter:{title:"Risk Parameters",slug:"VWEs-risk-parameters",createdAt:"Sun Aug 21 2022 00:57:47 GMT+0000 (Coordinated Universal Time)",updatedAt:"Sat Apr 22 2023 15:39:49 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Revenue Pool",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/diSR-revenue-pool"},next:{title:"Risks",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/CkcJ-risks"}},l={},c=[{value:"Price Bands",id:"price-bands",level:3},{value:"Collateral Weight",id:"collateral-weight",level:3},{value:"Price Manipulation Prevention",id:"price-manipulation-prevention",level:3},{value:"Order/Execution Limits",id:"orderexecution-limits",level:3},{value:"Unbounded P&amp;L and Market Delisting",id:"unbounded-pl-and-market-delisting",level:3}];function d(e){const r={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["These risk parameters are relevant to perpetual futures. Further risk parameters are also set out in and ****",(0,t.jsx)(r.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/VWEs-risk-parameters",children:"Risk Parameters"})]}),"\n",(0,t.jsx)(r.h3,{id:"price-bands",children:"Price Bands"}),"\n",(0,t.jsx)(r.p,{children:"In Drift v2, to prevent market manipulation and protect users during volatile events, markets will prevent users from sending orders if the oracle-mark price breaches the 10% band of the oracle's 5-minute time-weighted average price (TWAP). If the mark and the 5-minute oracle TWAP diverge by 10%, markets will prevent orders from filling until the price reverts back within this band."}),"\n",(0,t.jsx)(r.p,{children:"These formulas are defined below: "}),"\n",(0,t.jsxs)(r.p,{children:["Oracle-mark divergence = ",(0,t.jsx)(r.code,{children:"(mark - oracle) * max_spread"})]}),"\n",(0,t.jsxs)(r.p,{children:["Oracle-TWAP-mark band = ",(0,t.jsx)(r.code,{children:"within 10% of mark - oracle_twap_{5 minutes}"})]}),"\n",(0,t.jsx)(r.h3,{id:"collateral-weight",children:"Collateral Weight"}),"\n",(0,t.jsx)(r.p,{children:"To guard against concentration risk from a single whale, when assets exceed a certain size, their asset weights can be discounted."}),"\n",(0,t.jsxs)(r.p,{children:["Size Weightage = ",(0,t.jsx)(r.code,{children:"1.1 / (weight * sqrt{size} * imf_factor)"})]}),"\n",(0,t.jsx)(r.p,{children:"Additionally, liabilities (borrows, perp positions, etc) can have premiums applied."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"max(.8 * wgt + sqrt(size) * imf_factor, wgt)"})}),"\n",(0,t.jsx)(r.h3,{id:"price-manipulation-prevention",children:"Price Manipulation Prevention"}),"\n",(0,t.jsx)(r.p,{children:"The Clearinghouse will also pause risk-increasing trades that further increase large oracle-mark divergence. Closing/reducing a position that further breaches this divergence is also not allowed (unless the divergence has already been breached)."}),"\n",(0,t.jsx)(r.h3,{id:"orderexecution-limits",children:"Order/Execution Limits"}),"\n",(0,t.jsxs)(r.p,{children:["An individual user sub-account can have up to 32 outstanding orders at any one time. A Market Order sent has limits ",(0,t.jsx)(r.em,{children:"within each instruction"})," (so may be filled iteratively). "]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["exceed 2% price impact (set by the market's ",(0,t.jsx)(r.code,{children:"max_slippage_ratio"})," )"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Market Orders have the possibility of only being partially filled before expiration if any of the following limits occur:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"exceeds its slippage tolerance implied limit price"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"exceeds its active time limit (for market orders, the Clearinghouse sets this at 30 seconds)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Within a single transaction, orders can be filled up by the ",(0,t.jsx)(r.code,{children:"max_base_asset_amount"})," against the AMM. This maximum is set per market and calling of multiple fill instructions may work. For example, if the maximum amount was 10,000 SOL, an order for 100,000 SOL can be filled against the AMM in 10 instruction calls."]}),"\n",(0,t.jsx)(r.p,{children:"The following conditions will also expire/cancel the remainder(s) of orders:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Out of favour oracle price divergence from maker's set limit price (post only orders)"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"oracle's price is 2.5% above the maker's ask limit price "}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"oracle's price is 2.5% below the maker's bid limit price"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"order fill would reduce free collateral below 0 (for taker orders)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Note that whenever a user's orders are cancelled, fillers receive a small reward for the user they filled, if they did not receive payment otherwise."}),"\n",(0,t.jsx)(r.h3,{id:"unbounded-pl-and-market-delisting",children:"Unbounded P&L and Market Delisting"}),"\n",(0,t.jsxs)(r.p,{children:["This risk is addressed in ",(0,t.jsx)(r.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/CkcJ-risks",children:"Risks "}),"and ",(0,t.jsx)(r.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/CImq-pandl",children:"P&L"}),". "]}),"\n",(0,t.jsx)(r.p,{children:"Users can technically achieve unbounded unrealised P&L from entering and exiting a trade against the AMM. Further, as the AMM allows for asynchronous trading; there may not be an offsetting loss within the system to account for the gain made by particular users.  "}),"\n",(0,t.jsx)(r.p,{children:"As such, even if the user can achieve unbounded unrealised gains - those gains cannot be settled and withdrawable as collateral until there is a dollar of offsetting loss to account for the dollar of gain."}),"\n",(0,t.jsxs)(r.p,{children:["In a circumstance where the majority of participants are in extreme positive unrealised P&L and the unrealised P&L cannot be settled; the market may be eligible for settlement through the ",(0,t.jsx)(r.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/1v5N-delisting-process",children:"Delisting Process"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,r,i)=>{i.d(r,{Z:()=>o,a:()=>a});var t=i(7294);const n={},s=t.createContext(n);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);