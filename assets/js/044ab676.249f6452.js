"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4440],{673:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=s(5893),i=s(1151);const n={title:"Cross-Collateral Deposits",slug:"NtFm-cross-collateral-deposits",createdAt:"Wed Jul 20 2022 07:23:40 GMT+0000 (Coordinated Universal Time)",updatedAt:"Sat Oct 14 2023 10:44:04 GMT+0000 (Coordinated Universal Time)"},d=void 0,l={id:"Drift Protocol v2 Docs/Cross-Collateral Deposits",title:"Cross-Collateral Deposits",description:"Drift supports cross-collateral token deposits, specifically: USDC and SOL. These can be used for margin within the Perpetuals Markets.",source:"@site/docs/Drift Protocol v2 Docs/Cross-Collateral Deposits.md",sourceDirName:"Drift Protocol v2 Docs",slug:"/Drift Protocol v2 Docs/NtFm-cross-collateral-deposits",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/NtFm-cross-collateral-deposits",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Drift Protocol v2 Docs/Cross-Collateral Deposits.md",tags:[],version:"current",frontMatter:{title:"Cross-Collateral Deposits",slug:"NtFm-cross-collateral-deposits",createdAt:"Wed Jul 20 2022 07:23:40 GMT+0000 (Coordinated Universal Time)",updatedAt:"Sat Oct 14 2023 10:44:04 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Bug Bounty",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/mJEK-bug-bounty"},next:{title:"DLP - Drift Liquidity Provider",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/lhW0-liquidity-provision"}},o={},c=[];function a(t){const e={code:"code",div:"div",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Drift supports cross-collateral token deposits, specifically: USDC and SOL. These can be used for margin within the Perpetuals Markets."}),"\n",(0,r.jsx)(e.p,{children:"By default, markets are quoted in USD and P&L is settled in USDC. All tokens deposited within the protocol can earn yield via Borrow/Lend. Until unrealised P&L is settled into your Balances, it will not earn (if profits) or be charged (if losses) the deposit/borrow interest respectively."}),"\n",(0,r.jsx)(e.p,{children:"Below is a table of assets supported by Drift Protocol. "}),"\n",(0,r.jsx)(e.p,{children:"Each asset counts towards margin for derivatives trading and has a weight applied to account for their respective volatilities. "}),"\n",(0,r.jsx)(e.div,{children:(0,r.jsx)(e.p,{children:"For instance, depositing USDC gives users a 1:1 margin for derivatives trading, but depositing SOL (80% asset weight) means that 80% of the value of your SOL at the opening of your position will be available as margin for perpetual futures trading."})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["Margin ",(0,r.jsx)(e.strong,{children:"Parameters"})]})}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Asset"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Initial Asset Weight"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Maintenance Asset Weight"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Initial Liability Weight"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Maintenance Liability Weight"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"IMF Factor"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"USDC"}),(0,r.jsx)(e.td,{children:"100%"}),(0,r.jsx)(e.td,{children:"100%"}),(0,r.jsx)(e.td,{children:"100%"}),(0,r.jsx)(e.td,{children:"100%"}),(0,r.jsx)(e.td,{children:"0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SOL"}),(0,r.jsx)(e.td,{children:"80%"}),(0,r.jsx)(e.td,{children:"90%"}),(0,r.jsx)(e.td,{children:"120%"}),(0,r.jsx)(e.td,{children:"110%"}),(0,r.jsx)(e.td,{children:"0.003"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"mSOL"}),(0,r.jsx)(e.td,{children:"80%"}),(0,r.jsx)(e.td,{children:"90%"}),(0,r.jsx)(e.td,{children:"120%"}),(0,r.jsx)(e.td,{children:"110%"}),(0,r.jsx)(e.td,{children:"0.003"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"wBTC (portal)"}),(0,r.jsx)(e.td,{children:"80%"}),(0,r.jsx)(e.td,{children:"90%"}),(0,r.jsx)(e.td,{children:"120%"}),(0,r.jsx)(e.td,{children:"110%"}),(0,r.jsx)(e.td,{children:"0.105"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"wETH (portal)"}),(0,r.jsx)(e.td,{children:"80%"}),(0,r.jsx)(e.td,{children:"90%"}),(0,r.jsx)(e.td,{children:"120%"}),(0,r.jsx)(e.td,{children:"110%"}),(0,r.jsx)(e.td,{children:"0.025"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"USDT"}),(0,r.jsx)(e.td,{children:"90%"}),(0,r.jsx)(e.td,{children:"95%"}),(0,r.jsx)(e.td,{children:"110%"}),(0,r.jsx)(e.td,{children:"105%"}),(0,r.jsx)(e.td,{children:"0.0004"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"JitoSOL"}),(0,r.jsx)(e.td,{children:"80%"}),(0,r.jsx)(e.td,{children:"90%"}),(0,r.jsx)(e.td,{children:"120%"}),(0,r.jsx)(e.td,{children:"110%"}),(0,r.jsx)(e.td,{children:"0.00055"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"The IMF Factor acts as a discount on account size:"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Initial Asset Weight"})," on 2000 SOL Collateral (using above) would be:"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"weight = min\xa0(.80,\xa01.1\xa0/\xa0[ 1 + (0.003\xa0*\xa0sqrt(2000)]\xa0)"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"= min(.80, ~.96987) = .80"})}),"\n",(0,r.jsx)(e.p,{children:"An asset's liability weight can be converted into an LTV ratio using:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"ltv = 1 / liability weight"})}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Asset"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Initial LTV"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Max LTV"})})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SOL"}),(0,r.jsx)(e.td,{children:"83.3%"}),(0,r.jsx)(e.td,{children:"90.9%"})]})})]})]})}function h(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(a,{...t})}):a(t)}},1151:(t,e,s)=>{s.d(e,{Z:()=>l,a:()=>d});var r=s(7294);const i={},n=r.createContext(i);function d(t){const e=r.useContext(n);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:d(t.components),r.createElement(n.Provider,{value:e},t.children)}}}]);