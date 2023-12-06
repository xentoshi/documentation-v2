"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4033],{1102:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=i(5893),t=i(1151);const s={title:"Protocol Guard Rails",slug:"mqjG-protocol-guard-rails",createdAt:"Thu Sep 22 2022 14:59:57 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Feb 21 2023 12:06:15 GMT+0000 (Coordinated Universal Time)"},l=void 0,o={id:"Drift Protocol v2 Docs/Protocol Guard Rails",title:"Protocol Guard Rails",description:"Oracle Validity",source:"@site/docs/Drift Protocol v2 Docs/Protocol Guard Rails.md",sourceDirName:"Drift Protocol v2 Docs",slug:"/Drift Protocol v2 Docs/mqjG-protocol-guard-rails",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/mqjG-protocol-guard-rails",draft:!1,unlisted:!1,editUrl:"https://github.com/drift-labs/documentation-v2/blob/master/docs/Drift Protocol v2 Docs/Protocol Guard Rails.md",tags:[],version:"current",frontMatter:{title:"Protocol Guard Rails",slug:"mqjG-protocol-guard-rails",createdAt:"Thu Sep 22 2022 14:59:57 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Feb 21 2023 12:06:15 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Program/Vault Addresses",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/_EqA-programvault-addresses"},next:{title:"Revenue Pool",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/diSR-revenue-pool"}},a={},c=[{value:"Oracle Validity",id:"oracle-validity",level:3},{value:"Oracle Divergence",id:"oracle-divergence",level:3},{value:"Exchange &amp; Market Status",id:"exchange--market-status",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"oracle-validity",children:"Oracle Validity"}),"\n",(0,r.jsx)(n.p,{children:"Drift Protocol's dependence on external oracle accounts requires thoughtful consideration of the data point in the streams received."}),"\n",(0,r.jsxs)(n.p,{children:["In the program ",(0,r.jsx)(n.a,{href:"https://github.com/drift-labs/protocol-v2/blob/e04139e49e41dbbbaecbd5af9f038f6ce194f591/programs/clearing_house/src/math/oracle.rs#L15",children:"[code]"}),", this is encoded as a spectrum from Valid to Invalid, with a few different categories of questionability that depend on the action taken (ordered by severity):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Invalid"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"TooVolatile"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"TooUncertain"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"InsufficientDataPoints"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"StaleForMargin"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"StaleForAMM"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valid"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The processing of new data is as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"retrieve new data point"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"sanitize new data point"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"updates state variables"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"check the validity of unsanitized new data point v.s. updated state "}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Processing data this way is meant to prevent a single new data point from creating a shock to the state variables (i.e. TWAP). A complete list of block conditions for actions is described"}),"\n",(0,r.jsx)(n.p,{children:"Notes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The on-chain oracle TWAP calculation will also be shrunk proportional to the duration of the invalid period to avoid erroneous funding payment magnitudes. "}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Blocking on InsufficientDataPoints can help improve resiliency against oracle manipulation."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"oracle-divergence",children:"Oracle Divergence"}),"\n",(0,r.jsxs)(n.p,{children:["For perpetuals markets, there are checks to ",(0,r.jsx)(n.code,{children:"validate_market_within_price_band"})," for the following actions:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"fill_order"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"settle_pnl"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"resolve_perp_pnl_deficit"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The check validates that the 5-minute oracle twap vs amm reserve price is within ~10% (see ",(0,r.jsx)(n.code,{children:"PriceDivergenceGuardRails"})," for exact parameters). "]}),"\n",(0,r.jsx)(n.p,{children:"Its important to note that:"}),"\n",(0,r.jsx)(n.p,{children:"1) amm reserve price always update with valid oracle data for amm and; "}),"\n",(0,r.jsxs)(n.p,{children:["2) new data points for 5-minute oracle twap are sanitized to be within 10, 20, or 50% of the last twap value (depending on the ",(0,r.jsx)(n.code,{children:"ContractTier"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Thus, it may take multiple intervals to bypass these circuit breakers for sufficiently large price moves."}),"\n",(0,r.jsx)(n.p,{children:"For spot markets, there are safety initial margin requirement checks for the following actions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"place_order"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"withdraw"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A user's asset / liabilities when calculating total collateral for initial margin checks for withdraws and placing orders will be the lesser / greater (respectively) of the 5-minute oracle twap and current oracle price. This lowers leverage extended by the protocol to users with positions in volatile markets."}),"\n",(0,r.jsx)(n.h3,{id:"exchange--market-status",children:"Exchange & Market Status"}),"\n",(0,r.jsxs)(n.p,{children:["ExchangeStatus and MarketStatus can be updated to prevent certain actions when specific issues are identified (described ",(0,r.jsx)(n.a,{href:"https://github.com/drift-labs/protocol-v2/blob/8b46cfc628f317e4f07cd62f111dd73fabff8a96/programs/clearing_house/src/state/state.rs#L35",children:"here"}),"). These actions can include:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"funding rate updates;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"liquidations;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"AMM fills;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"any fills; and"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"withdraws"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var r=i(7294);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);