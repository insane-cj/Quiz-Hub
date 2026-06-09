import { useState, useEffect, useCallback } from "react";



// ── SVG Diagrams ──────────────────────────────────────────────────────────────

const TowerDepressionDiagram = () => (

  <svg viewBox="0 0 260 160" width="220" height="130" style={{display:"block",margin:"8px auto",background:"#f0f4ff",borderRadius:8}}>

    <rect x="30" y="20" width="18" height="100" fill="#94a3b8"/>

    <line x1="48" y1="120" x2="200" y2="120" stroke="#64748b" strokeWidth="2"/>

    <line x1="48" y1="20" x2="200" y2="120" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3"/>

    <text x="100" y="115" fontSize="11" fill="#1e293b">80 m</text>

    <text x="35" y="75" fontSize="10" fill="#1e293b" transform="rotate(-90,38,75)">h</text>

    <text x="130" y="75" fontSize="11" fill="#2563eb">60°</text>

    <polygon points="48,120 80,120 65,100" fill="none" stroke="#2563eb" strokeWidth="1.5"/>

    <text x="10" y="130" fontSize="9" fill="#64748b">D</text>

    <text x="25" y="18" fontSize="9" fill="#64748b">A</text>

    <text x="195" y="133" fontSize="9" fill="#64748b">B/C</text>

  </svg>

);



const LighthouseDiagram = () => (

  <svg viewBox="0 0 280 170" width="240" height="145" style={{display:"block",margin:"8px auto",background:"#f0f4ff",borderRadius:8}}>

    <rect x="120" y="30" width="14" height="110" fill="#94a3b8"/>

    <line x1="10" y1="140" x2="255" y2="140" stroke="#64748b" strokeWidth="2"/>

    <line x1="127" y1="30" x2="10" y2="140" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3"/>

    <line x1="127" y1="30" x2="255" y2="140" stroke="#2563eb" strokeWidth="2" strokeDasharray="5,3"/>

    <text x="118" y="88" fontSize="10" fill="#1e293b">100m</text>

    <text x="25" y="135" fontSize="10" fill="#ef4444">30°</text>

    <text x="220" y="135" fontSize="10" fill="#2563eb">45°</text>

    <text x="5" y="150" fontSize="9" fill="#64748b">C</text>

    <text x="118" y="28" fontSize="9" fill="#64748b">B</text>

    <text x="250" y="150" fontSize="9" fill="#64748b">D</text>

    <text x="120" y="152" fontSize="9" fill="#64748b">A</text>

  </svg>

);



const TwoAngleTowerDiagram = () => (

  <svg viewBox="0 0 260 170" width="220" height="145" style={{display:"block",margin:"8px auto",background:"#f0f4ff",borderRadius:8}}>

    <rect x="170" y="20" width="14" height="120" fill="#94a3b8"/>

    <line x1="10" y1="140" x2="230" y2="140" stroke="#64748b" strokeWidth="2"/>

    <line x1="177" y1="20" x2="10" y2="140" stroke="#ef4444" strokeWidth="2"/>

    <line x1="177" y1="20" x2="110" y2="140" stroke="#2563eb" strokeWidth="2"/>

    <text x="25" y="135" fontSize="10" fill="#ef4444">30°</text>

    <text x="113" y="135" fontSize="10" fill="#2563eb">60°</text>

    <text x="50" y="148" fontSize="9" fill="#1e293b">←20m→</text>

    <text x="178" y="88" fontSize="10" fill="#1e293b">h</text>

    <text x="5" y="150" fontSize="9" fill="#64748b">A</text>

    <text x="100" y="150" fontSize="9" fill="#64748b">D</text>

    <text x="185" y="150" fontSize="9" fill="#64748b">B</text>

    <text x="170" y="18" fontSize="9" fill="#64748b">C</text>

  </svg>

);



const LadderWallDiagram = () => (

  <svg viewBox="0 0 200 180" width="175" height="155" style={{display:"block",margin:"8px auto",background:"#f0f4ff",borderRadius:8}}>

    <rect x="60" y="10" width="10" height="150" fill="#94a3b8"/>

    <line x1="10" y1="160" x2="180" y2="160" stroke="#64748b" strokeWidth="2"/>

    <line x1="105" y1="160" x2="65" y2="40" stroke="#c0392b" strokeWidth="3"/>

    <text x="55" y="130" fontSize="10" fill="#2563eb">60°</text>

    <text x="105" y="175" fontSize="9" fill="#1e293b">4.6m</text>

    <text x="55" y="18" fontSize="9" fill="#64748b">B</text>

    <text x="100" y="158" fontSize="9" fill="#64748b">C</text>

    <text x="60" y="158" fontSize="9" fill="#64748b">A</text>

  </svg>

);



const ShadowAngleDiagram = () => (

  <svg viewBox="0 0 220 160" width="185" height="135" style={{display:"block",margin:"8px auto",background:"#f0f4ff",borderRadius:8}}>

    <rect x="100" y="20" width="12" height="110" fill="#10b981"/>

    <line x1="10" y1="130" x2="210" y2="130" stroke="#64748b" strokeWidth="2"/>

    <line x1="106" y1="20" x2="10" y2="130" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,3"/>

    <text x="40" y="125" fontSize="10" fill="#f59e0b">θ</text>

    <text x="40" y="142" fontSize="9" fill="#1e293b">shadow = √3 × h</text>

    <text x="103" y="88" fontSize="10" fill="#1e293b">h</text>

    <text x="99" y="18" fontSize="9" fill="#64748b">B</text>

    <text x="5" y="140" fontSize="9" fill="#64748b">C</text>

    <text x="100" y="142" fontSize="9" fill="#64748b">A</text>

  </svg>

);



const TowerHeightHDiagram = () => (

  <svg viewBox="0 0 210 170" width="180" height="145" style={{display:"block",margin:"8px auto",background:"#f0f4ff",borderRadius:8}}>

    <rect x="15" y="20" width="12" height="120" fill="#94a3b8"/>

    <line x1="10" y1="140" x2="200" y2="140" stroke="#64748b" strokeWidth="2"/>

    <line x1="21" y1="20" x2="190" y2="140" stroke="#ef4444" strokeWidth="2"/>

    <text x="25" y="18" fontSize="9" fill="#64748b">R</text>

    <text x="10" y="152" fontSize="9" fill="#64748b">P</text>

    <text x="185" y="152" fontSize="9" fill="#64748b">Q</text>

    <text x="17" y="88" fontSize="10" fill="#1e293b">h</text>

    <text x="90" y="152" fontSize="9" fill="#1e293b">h</text>

    <text x="155" y="135" fontSize="10" fill="#2563eb">θ</text>

  </svg>

);



const FamilyTreeDiagram = () => (

  <svg viewBox="0 0 320 220" width="280" height="190" style={{display:"block",margin:"8px auto",background:"#f8fafc",borderRadius:8,border:"1px solid #e2e8f0"}}>

    {/* Q(+) married to R(-) */}

    <rect x="20" y="20" width="50" height="28" rx="6" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1.5"/>

    <text x="45" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">Q(+)</text>

    <line x1="70" y1="34" x2="130" y2="34" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,2"/>

    <text x="100" y="28" fontSize="8" fill="#64748b" textAnchor="middle">married to</text>

    <rect x="130" y="20" width="50" height="28" rx="6" fill="#ec4899" opacity="0.15" stroke="#ec4899" strokeWidth="1.5"/>

    <text x="155" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill="#9d174d">R(-)</text>

    {/* vertical line Q to P */}

    <line x1="45" y1="48" x2="45" y2="100" stroke="#64748b" strokeWidth="1.5"/>

    {/* P(+) married to S(-) */}

    <rect x="20" y="100" width="50" height="28" rx="6" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1.5"/>

    <text x="45" y="118" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">P(+)</text>

    <line x1="70" y1="114" x2="130" y2="114" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,2"/>

    <text x="100" y="108" fontSize="8" fill="#64748b" textAnchor="middle">married to</text>

    <rect x="130" y="100" width="50" height="28" rx="6" fill="#ec4899" opacity="0.15" stroke="#ec4899" strokeWidth="1.5"/>

    <text x="155" y="118" textAnchor="middle" fontSize="12" fontWeight="700" fill="#9d174d">S(-)</text>

    {/* S sister of T */}

    <line x1="180" y1="114" x2="220" y2="114" stroke="#64748b" strokeWidth="1.5"/>

    <text x="200" y="108" fontSize="8" fill="#64748b" textAnchor="middle">sister of</text>

    <rect x="220" y="100" width="50" height="28" rx="6" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1.5"/>

    <text x="245" y="118" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">T(+)</text>

    {/* vertical line P to U */}

    <line x1="45" y1="128" x2="45" y2="180" stroke="#64748b" strokeWidth="1.5"/>

    <rect x="20" y="180" width="50" height="28" rx="6" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1.5"/>

    <text x="45" y="198" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e40af">U(+)</text>

  </svg>

);



const DirectionDiagram = () => (

  <svg viewBox="0 0 260 280" width="220" height="240" style={{display:"block",margin:"8px auto",background:"#f8fafc",borderRadius:8,border:"1px solid #e2e8f0"}}>

    {/* Compass */}

    <text x="118" y="15" fontSize="11" fill="#64748b">N</text>

    <text x="118" y="278" fontSize="11" fill="#64748b">S</text>

    <text x="5" y="148" fontSize="11" fill="#64748b">W</text>

    <text x="240" y="148" fontSize="11" fill="#64748b">E</text>

    {/* Points */}

    {/* F at ~(120,80), E 12m east of F → (180,80) */}

    {/* G 5m south of F → (120,110) */}

    {/* L 13m south of F → (120,158) */}

    {/* I 4m west of L → (76,158) */}

    {/* P 15m north of I → (76,83) */}

    {/* J 2m south of P → (76,103) */}

    <line x1="120" y1="80" x2="76" y2="80" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,2"/>

    <line x1="120" y1="80" x2="180" y2="80" stroke="#94a3b8" strokeWidth="1.5"/>

    <text x="148" y="76" fontSize="9" fill="#64748b">12m</text>

    <line x1="120" y1="80" x2="120" y2="158" stroke="#94a3b8" strokeWidth="1.5"/>

    <text x="122" y="95" fontSize="9" fill="#64748b">5m</text>

    <text x="122" y="128" fontSize="9" fill="#64748b">13m</text>

    <line x1="76" y1="158" x2="120" y2="158" stroke="#94a3b8" strokeWidth="1.5"/>

    <text x="90" y="172" fontSize="9" fill="#64748b">4m</text>

    <line x1="76" y1="83" x2="76" y2="158" stroke="#94a3b8" strokeWidth="1.5"/>

    <text x="58" y="115" fontSize="9" fill="#64748b">15m</text>

    <text x="58" y="100" fontSize="9" fill="#64748b">2m</text>

    {/* Nodes */}

    {[["P",76,80],["J",76,103],["F",120,80],["G",120,110],["E",180,80],["L",120,158],["I",76,158]].map(([lbl,x,y])=>(

      <g key={lbl}>

        <circle cx={x} cy={y} r="7" fill="#3b82f6" opacity="0.85"/>

        <text x={x} y={y+4} textAnchor="middle" fontSize="9" fontWeight="700" fill="white">{lbl}</text>

      </g>

    ))}

  </svg>

);



const ClockDiagram = () => (

  <svg viewBox="0 0 160 160" width="140" height="140" style={{display:"block",margin:"8px auto",background:"#f8fafc",borderRadius:"50%",border:"2px solid #e2e8f0"}}>

    <circle cx="80" cy="80" r="74" fill="white" stroke="#cbd5e1" strokeWidth="2"/>

    {[12,3,6,9].map((n,i)=>{

      const angles=[270,0,90,180];

      const rad=angles[i]*Math.PI/180;

      return <text key={n} x={80+60*Math.cos(rad)-5} y={80+60*Math.sin(rad)+5} fontSize="14" fontWeight="700" fill="#1e293b">{n}</text>;

    })}

    {/* Hour hand at 6 → pointing South (at 6PM,6 points N per problem,so N is up=6,S=12,E=9,W=3) */}

    <text x="75" y="18" fontSize="11" fill="#2563eb" fontWeight="700">N</text>

    <text x="75" y="152" fontSize="11" fill="#64748b">S</text>

    <text x="8" y="85" fontSize="11" fill="#64748b">W</text>

    <text x="142" y="85" fontSize="11" fill="#64748b">E</text>

    {/* Hour hand pointing to 6 (South based on normal orientation but 6=N means pointing down=S for 6) */}

    <line x1="80" y1="80" x2="80" y2="130" stroke="#1e293b" strokeWidth="3" strokeLinecap="round"/>

    {/* Minute hand at 9:15 → points to 3 = East */}

    <line x1="80" y1="80" x2="130" y2="80" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>

    <circle cx="80" cy="80" r="4" fill="#1e293b"/>

  </svg>

);



const JayantWalkDiagram = () => (

  <svg viewBox="0 0 220 200" width="190" height="175" style={{display:"block",margin:"8px auto",background:"#f8fafc",borderRadius:8,border:"1px solid #e2e8f0"}}>

    {/* X top-right, walks west (left) to A, turns left=south, walks to B, turns left=east, walks to C, turns right=south, walks to D */}

    <text x="175" y="20" fontSize="10" fill="#1e293b" fontWeight="700">X</text>

    <line x1="170" y1="25" x2="50" y2="25" stroke="#3b82f6" strokeWidth="2"/>

    <text x="100" y="20" fontSize="9" fill="#3b82f6">15m W</text>

    <text x="42" y="20" fontSize="10" fill="#1e293b" fontWeight="700">A</text>

    <line x1="50" y1="25" x2="50" y2="105" stroke="#10b981" strokeWidth="2"/>

    <text x="28" y="70" fontSize="9" fill="#10b981">20m S</text>

    <text x="42" y="115" fontSize="10" fill="#1e293b" fontWeight="700">B</text>

    <line x1="50" y1="105" x2="170" y2="105" stroke="#f59e0b" strokeWidth="2"/>

    <text x="100" y="100" fontSize="9" fill="#f59e0b">15m E</text>

    <text x="172" y="115" fontSize="10" fill="#1e293b" fontWeight="700">C</text>

    <line x1="170" y1="105" x2="170" y2="185" stroke="#ef4444" strokeWidth="2"/>

    <text x="174" y="150" fontSize="9" fill="#ef4444">12m S</text>

    <text x="162" y="195" fontSize="10" fill="#1e293b" fontWeight="700">D</text>

    {/* Distance arrow from X to D */}

    <line x1="170" y1="25" x2="170" y2="185" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="5,3"/>

    <text x="175" y="110" fontSize="9" fill="#7c3aed">32m</text>

    <text x="155" y="25" fontSize="9" fill="#64748b">↑N</text>

  </svg>

);



// ── Question Data ─────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [

  // ── UNIT I : Partnership ──

  {id:1, unit:1, unitName:"Unit I – Partnership",

   q:"Revathi started a software business by investing Rs. 50,000. After six months, Karan joined her with a capital of Rs. 80,000. After 3 years, they earned a profit of Rs. 24,500. What was Revathi's share in the profit?",

   opts:["Rs. 10,500","Rs. 12,250","Rs. 8,750","Rs. 9,800"], ans:0},

  {id:2, unit:1, unitName:"Unit I – Partnership",

   q:"A and B invest in a business in the ratio 3:2. If 5% of the total profit goes to charity and A's share is Rs. 855, the total profit is:",

   opts:["Rs. 1,500","Rs. 1,800","Rs. 1,200","Rs. 2,000"], ans:0},

  {id:3, unit:1, unitName:"Unit I – Partnership",

   q:"A and B started a business investing Rs. 10,000 and Rs. 20,000 respectively. After six months, C joined with Rs. 30,000. What will be B's share in total profit of Rs. 42,000 earned at the end of 2 years?",

   opts:["Rs. 16,000","Rs. 14,000","Rs. 18,000","Rs. 12,000"], ans:0},

  {id:4, unit:1, unitName:"Unit I – Partnership",

   q:"A, B, C subscribe Rs. 50,000 for a business. A subscribes Rs. 4,000 more than B and B Rs. 5,000 more than C. Out of a total profit of Rs. 35,000, A receives:",

   opts:["Rs. 14,700","Rs. 12,500","Rs. 17,500","Rs. 10,500"], ans:0},

  {id:5, unit:1, unitName:"Unit I – Partnership",

   q:"P began a business with Rs. 80,000. He was joined afterwards by Q with Rs. 1,20,000. For how many months does Q join, if the profits at the end of the year are divided in the ratio 4:3?",

   opts:["6 months","8 months","4 months","9 months"], ans:0},

  {id:6, unit:1, unitName:"Unit I – Partnership",

   q:"A and B started a partnership business investing in the ratio 3:5. C joined after six months with an amount equal to that of B. In what proportion should the profit at the end of one year be distributed among A, B and C?",

   opts:["6:10:5","3:5:5","6:10:6","4:8:5"], ans:0},

  {id:7, unit:1, unitName:"Unit I – Partnership",

   q:"Tamil, Dharma and Manoj invested Rs. 24,000, Rs. 16,000 and Rs. 20,000 respectively. Tamil left after six months. If after eight months there was a gain of Rs. 54,000, what will be the share of Dharma?",

   opts:["Rs. 16,000","Rs. 18,000","Rs. 20,000","Rs. 14,000"], ans:0},

  {id:8, unit:1, unitName:"Unit I – Partnership",

   q:"A and B invest Rs. 5,000 and Rs. 7,000 in a business. Find the ratio in which they share the profit.",

   opts:["5:7","3:5","2:3","7:9"], ans:0},

  {id:9, unit:1, unitName:"Unit I – Partnership",

   q:"Mani and Charu invest in a business in the ratio 3:2. Assume that 5% of the total profit goes to charity. If Mani's share is Rs. 855, what is the total profit?",

   opts:["Rs. 1,500","Rs. 1,200","Rs. 2,000","Rs. 1,800"], ans:0},

  {id:10, unit:1, unitName:"Unit I – Partnership",

   q:"A invests Rs. 6,000 for 12 months and B invests Rs. 8,000 for 6 months. Find the profit-sharing ratio.",

   opts:["3:2","2:3","4:3","3:4"], ans:0},



  // ── UNIT II : Ratio, Proportion, Percentage, Profit & Loss ──

  {id:11, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"3 pumps, working 8 hours a day, can empty a tank in 2 days. How many hours a day must 4 pumps work to empty the tank in 1 day?",

   opts:["12","10","8","14"], ans:0},

  {id:12, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"39 persons can repair a road in 12 days, working 5 hours a day. In how many days will 30 persons, working 6 hours a day, complete the work?",

   opts:["13","15","10","12"], ans:0},

  {id:13, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"In a dairy farm, 70 cows eat 70 bags of husk in 140 days. In how many days will 2 cows eat one bag of husk?",

   opts:["70 days","140 days","35 days","100 days"], ans:0},

  {id:14, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"If a quarter kg of potato costs 60 paise, how many paise will 200 gm cost?",

   opts:["48 paise","50 paise","40 paise","56 paise"], ans:0},

  {id:15, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"If a half kg of potato costs 20 paise, how many paise will 400 gm cost?",

   opts:["25 paise","16 paise","20 paise","22 paise"], ans:0},

  {id:16, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"In a dairy farm, 40 cows eat 40 bags of husk in 40 days. In how many days will one cow eat one bag of husk?",

   opts:["40 days","20 days","80 days","60 days"], ans:0},

  {id:17, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"Running at the same constant rate, 6 identical machines can produce a total of 270 bottles per minute. At this rate, how many bottles could 10 such machines produce in 4 minutes?",

   opts:["1800","1500","1200","2000"], ans:0},

  {id:18, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"In a camp, there is a meal for 120 men or 200 children. If 150 children have taken the meal, how many men will be catered to with the remaining meal?",

   opts:["30 men","25 men","40 men","50 men"], ans:0},

  {id:19, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"A shopkeeper sold an article for Rs. 5,400 after allowing a discount of 10%. Find the marked price of the article.",

   opts:["Rs. 6,000","Rs. 5,940","Rs. 5,500","Rs. 6,300"], ans:0},

  {id:20, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"If 20% of a = b, then b% of 20 is the same as:",

   opts:["4% of a","20% of a","5% of a","2% of a"], ans:0},

  {id:21, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"The cost price of a book is Rs. 2,520. If the book is sold at a profit of 20%, find the selling price.",

   opts:["Rs. 3,024","Rs. 3,000","Rs. 2,800","Rs. 2,940"], ans:0},

  {id:22, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"A student has to obtain 33% of the total marks to pass. He got 125 marks and failed by 40 marks. The maximum marks are:",

   opts:["500","450","400","550"], ans:0},

  {id:23, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"A grandma sells 10 candies for Rs. 250, earning a profit of Rs. 50. If she wants to earn a total profit of Rs. 120, what will be the selling price of a single candy?",

   opts:["Rs. 32","Rs. 25","Rs. 28","Rs. 30"], ans:0},

  {id:24, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"The value of a refrigerator depreciates at 10% every year. It was purchased 3 years ago. If its present value is Rs. 8,748, what was the purchase price?",

   opts:["Rs. 12,000","Rs. 10,800","Rs. 11,500","Rs. 13,000"], ans:0},

  {id:25, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"A shopkeeper earned a profit of 20% when he sold an item after giving two successive discounts of 20% and 10%. If the marked price is Rs. 1,250, find the cost price.",

   opts:["Rs. 750","Rs. 800","Rs. 900","Rs. 700"], ans:0},

  {id:26, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"If the selling price of Rs. 24 results in a 20% discount on list price, what selling price would result in a 30% discount on list price?",

   opts:["Rs. 21","Rs. 18","Rs. 24","Rs. 25"], ans:0},

  {id:27, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"If a trader earns a profit of 30% on selling an article for Rs. 260, at what price should he sell it to earn a profit of 25%?",

   opts:["Rs. 250","Rs. 260","Rs. 240","Rs. 270"], ans:0},

  {id:28, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"A dishonest dealer claims to sell goods at cost price but uses a weight of 600 gm instead of 1 kg. What is the profit percentage?",

   opts:["66.67%","60%","40%","50%"], ans:0},

  {id:29, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"33.33% of 93 + 50% of 120 + 75% of 44 = ?",

   opts:["124","120","130","118"], ans:0},

  {id:30, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"Divya sold 10 pens at the cost of 12 similar pens. What % profit or loss does she make?",

   opts:["20% profit","20% loss","10% profit","25% profit"], ans:0},

  {id:31, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"50% of 24 + 28.57% of 63 + 83.33% of 48 = ?",

   opts:["70","65","75","68"], ans:0},

  {id:32, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"If Sarath buys books at 12 for Rs. 10 and sells at 10 books for Rs. 12, what will be his gain percent?",

   opts:["44%","40%","36%","48%"], ans:0},

  {id:33, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"Mangai spends 40% of her monthly salary on food and one-third of the remaining on transport. She saves Rs. 4,500, which equals half the balance after spending on food and transport. Her monthly salary is:",

   opts:["Rs. 22,500","Rs. 18,000","Rs. 20,000","Rs. 25,000"], ans:0},

  {id:34, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"A shopkeeper purchases a table and sells it for Rs. 5,400, incurring a loss of 10%. Find the cost price of the table.",

   opts:["Rs. 6,000","Rs. 5,940","Rs. 5,500","Rs. 6,500"], ans:0},

  {id:35, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"10% of voters did not cast their votes. There were only two candidates. The winner obtained 50% of the total votes and defeated his contestant by 1,100 votes. The total number of voters was:",

   opts:["11,000","10,000","12,000","9,000"], ans:0},

  {id:36, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"Brinda sells 40 shirts at the cost price of 50 shirts. Her gain percent is:",

   opts:["25%","20%","30%","15%"], ans:0},

  {id:37, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"The price of a car is Rs. 10,00,000. It was insured for 80% of its price. The car got completely damaged and the insurance company paid only 60% of the insured amount. What is the difference between the car price and the insurance received?",

   opts:["Rs. 5,20,000","Rs. 4,00,000","Rs. 4,80,000","Rs. 6,00,000"], ans:0},

  {id:38, unit:2, unitName:"Unit II – Ratio, Proportion & Profit/Loss",

   q:"12 articles were bought for Rs. 10 and sold at 10 for Rs. 12. The gain percent is:",

   opts:["44%","40%","36%","48%"], ans:0},



  // ── UNIT III : Trigonometry ──

  {id:39, unit:3, unitName:"Unit III – Heights & Distances",

   q:"The angle of depression of a point situated at a distance of 80 m from the base of a tower is 60°. What is the height of the tower?",

   diagram: <TowerDepressionDiagram/>,

   opts:["80√3 m","80 m","40√3 m","160 m"], ans:0},

  {id:40, unit:3, unitName:"Unit III – Heights & Distances",

   q:"Two ships are on the two sides of a lighthouse. The angles of elevation of the top of the 100 m high lighthouse from the ships are 30° and 45° respectively. What is the distance between the two ships?",

   diagram: <LighthouseDiagram/>,

   opts:["273 m","200 m","250 m","300 m"], ans:0},

  {id:41, unit:3, unitName:"Unit III – Heights & Distances",

   q:"On level ground, the angle of elevation of the top of a tower is 30°. On moving 20 m nearer, the angle becomes 60°. What is the height of the tower?",

   diagram: <TwoAngleTowerDiagram/>,

   opts:["10√3 m","20√3 m","10 m","15√3 m"], ans:0},

  {id:42, unit:3, unitName:"Unit III – Heights & Distances",

   q:"A man standing at point P watches the top of a tower at an angle of elevation of 30°. He walks closer and the angle becomes 60°. What is the distance between the base of the tower and point P?",

   opts:["Data Inadequate","3× tower height","2× tower height","√3 × tower height"], ans:0},

  {id:43, unit:3, unitName:"Unit III – Heights & Distances",

   q:"From a point 20 m from a tower, the angle of elevation is 30°. Find the height of the tower.",

   opts:["11.55 m","20 m","10 m","20/√3 m"], ans:0},

  {id:44, unit:3, unitName:"Unit III – Heights & Distances",

   q:"The angle of elevation of a ladder leaning against a wall is 60° and the foot of the ladder is 4.6 m away from the wall. What is the length of the ladder?",

   diagram: <LadderWallDiagram/>,

   opts:["9.2 m","4.6 m","8.0 m","10.0 m"], ans:0},

  {id:45, unit:3, unitName:"Unit III – Heights & Distances",

   q:"A 60 m tall tower casts a 60 m shadow. Find the angle of elevation of the sun.",

   opts:["45°","30°","60°","90°"], ans:0},

  {id:46, unit:3, unitName:"Unit III – Heights & Distances",

   q:"From a point P on level ground, the angle of elevation of the top of a 100 m high tower is 30°. What is the distance of point P from the foot of the tower?",

   opts:["173 m","100 m","100√3 m","200 m"], ans:0},

  {id:47, unit:3, unitName:"Unit III – Heights & Distances",

   q:"A tower is 50 m high. The angle of depression to a point is 30°. Find the distance from the tower base to that point.",

   opts:["86.6 m","50 m","100 m","50√3 m"], ans:0},

  {id:48, unit:3, unitName:"Unit III – Heights & Distances",

   q:"The angle of elevation of the sun, when the length of a tree's shadow is 3 times its height, is:",

   opts:["30°","45°","60°","90°"], ans:0},

  {id:49, unit:3, unitName:"Unit III – Heights & Distances",

   q:"From a lighthouse 60 m high, a boat is seen at an angle of depression of 45°. How far is the boat from the lighthouse base?",

   opts:["60 m","30 m","90 m","120 m"], ans:0},

  {id:50, unit:3, unitName:"Unit III – Heights & Distances",

   q:"The angle that is formed when looking from the ground up to a helicopter is called the:",

   opts:["Angle of Elevation","Angle of Depression","Reflex Angle","Bearing Angle"], ans:0},

  {id:51, unit:3, unitName:"Unit III – Heights & Distances",

   q:"Two buildings are 20 m apart. One is 30 m tall. The angle of elevation to the top of the unknown building from the top of the shorter one is 30°. Find the height of the unknown building.",

   opts:["41.55 m","50 m","35 m","30 m"], ans:0},

  {id:52, unit:3, unitName:"Unit III – Heights & Distances",

   q:"If an object travels 10 feet in 15 minutes, how many feet does it travel in 5 hours?",

   opts:["200 feet","150 feet","250 feet","300 feet"], ans:0},

  {id:53, unit:3, unitName:"Unit III – Heights & Distances",

   q:"A flagpole is on top of a 50 m tower. The shadow of the top of the pole is 30 m from the tower base. The angle of elevation from that point is 30°. The total height h = 30/√3. What is h?",

   opts:["17.32 m","15.00 m","20.00 m","10.00 m"], ans:0},

  {id:54, unit:3, unitName:"Unit III – Heights & Distances",

   q:"The angle of elevation of the sun, when the shadow of a tree is √3 times its height, is:",

   diagram: <ShadowAngleDiagram/>,

   opts:["30°","45°","60°","90°"], ans:0},

  {id:55, unit:3, unitName:"Unit III – Heights & Distances",

   q:"A tower casts a shadow equal to its height. Find the sun's angle of elevation.",

   opts:["45°","30°","60°","90°"], ans:0},

  {id:56, unit:3, unitName:"Unit III – Heights & Distances",

   q:"The angle of elevation of the top of a tower of height h from point Q is θ. The distance between Q and the base equals the height of the tower. Find θ.",

   diagram: <TowerHeightHDiagram/>,

   opts:["45°","30°","60°","90°"], ans:0},

  {id:57, unit:3, unitName:"Unit III – Heights & Distances",

   q:"Height of a tower is 100 m. The distance from the foot of the tower to a point is 100√3 m. Find the angle of elevation.",

   opts:["30°","45°","60°","90°"], ans:0},



  // ── UNIT IV : Blood Relations ──

  {id:58, unit:4, unitName:"Unit IV – Blood Relations",

   q:"A woman introduces a man as the son of the brother of her mother. How is the man related to the woman?",

   opts:["Cousin","Nephew","Uncle","Brother"], ans:0},

  {id:59, unit:4, unitName:"Unit IV – Blood Relations",

   q:"[Family tree shown] There are six members (P, Q, R, S, T and U) in a family. S, who is sister of T, is daughter-in-law of Q. Q is grandfather of U, who is nephew of T. P, who doesn't have sister-in-law, is a male member. How is P related to T?",

   diagram: <FamilyTreeDiagram/>,

   opts:["Brother-in-law","Uncle","Brother","Father"], ans:0},

  {id:60, unit:4, unitName:"Unit IV – Blood Relations",

   q:"[Same family tree as Q61] How is R related to P?",

   diagram: <FamilyTreeDiagram/>,

   opts:["Mother","Sister","Aunt","Grandmother"], ans:0},

  {id:61, unit:4, unitName:"Unit IV – Blood Relations",

   q:"[Same family tree] How many female members are there in the family of P, Q, R, S, T and U?",

   diagram: <FamilyTreeDiagram/>,

   opts:["2","3","4","1"], ans:0},

  {id:62, unit:4, unitName:"Unit IV – Blood Relations",

   q:"If A is the mother of B, B is the son of C, and C is the brother of D, how is D related to A?",

   opts:["Brother-in-law","Sister-in-law","Uncle","Nephew"], ans:0},

  {id:63, unit:4, unitName:"Unit IV – Blood Relations",

   q:"A party consists of a grandmother, father, mother, four sons and their wives and one son and two daughters to each of the sons. How many females are there?",

   opts:["14","12","10","16"], ans:0},

  {id:64, unit:4, unitName:"Unit IV – Blood Relations",

   q:"If A is the husband of B, B is the mother of C, and C is the wife of D, how is A related to D?",

   opts:["Father-in-law","Grandfather","Uncle","Brother-in-law"], ans:0},

  {id:65, unit:4, unitName:"Unit IV – Blood Relations",

   q:"Pointing towards a girl in the picture, Harshini said, 'She is the mother of Neha whose father is my son.' How is Harshini related to the girl in the picture?",

   opts:["Mother-in-law","Grandmother","Aunt","Sister-in-law"], ans:0},

  {id:66, unit:4, unitName:"Unit IV – Blood Relations",

   q:"Pointing to a photograph of a boy Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",

   opts:["Father","Uncle","Grandfather","Brother"], ans:0},



  // ── UNIT V : Direction Sense, Coding & Ranking ──

  {id:67, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"[Eight trees problem] G is 5m south of F. L is 13m south of F. I is 4m west of L. P is 15m north of I. J is 2m south of P. E is 12m east of F. What is the direction of F with respect to I?",

   diagram: <DirectionDiagram/>,

   opts:["North-East","North-West","South-East","South-West"], ans:0},

  {id:68, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"[Same 8-trees setup] What is the direction of J with respect to E?",

   diagram: <DirectionDiagram/>,

   opts:["South-West","North-West","South-East","West"], ans:0},

  {id:69, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"[Same 8-trees setup] What is the distance between J and E?",

   diagram: <DirectionDiagram/>,

   opts:["13 m","15 m","12 m","10 m"], ans:0},

  {id:70, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"Starting from X, Jayant walked 15 m west, turned left and walked 20 m, turned left and walked 15 m, then turned right and walked 12 m. How far and in which direction is Jayant from X?",

   diagram: <JayantWalkDiagram/>,

   opts:["32 m South","20 m South","32 m North","20 m East"], ans:0},

  {id:71, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"One morning after sunrise, Hardik was standing facing a pole. The shadow of the pole fell exactly to his right. In which direction is he facing?",

   opts:["South","North","East","West"], ans:0},

  {id:72, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"One morning Sujata started walking towards the Sun. After some distance she turned right, then again turned right, and after some distance turned right again. Now in which direction is she facing?",

   opts:["North","South","East","West"], ans:0},

  {id:73, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"Rahul put his timepiece on the table such that at 6 PM the hour hand points to North. In which direction will the minute hand point at 9:15 PM?",

   diagram: <ClockDiagram/>,

   opts:["East","West","North","South"], ans:0},

  {id:74, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"In a certain language: 'arrange things in order' = 'po gb ik mn'; 'order for new things' = 'bv fc po gb'; 'new places to order' = 'gb cq bv ra'; 'places in unknown country' = 'de ra hf ik'. What is the code for 'unknown'?",

   opts:["Cannot be determined","de","hf","ik"], ans:0},

  {id:75, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"[Same language code] What is the code for 'Order'?",

   opts:["gb","po","ik","bv"], ans:0},

  {id:76, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"[Same language code] Which of the following is coded as 'bv'?",

   opts:["new","order","for","places"], ans:0},

  {id:77, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"[Same language code] What is the code for 'things'?",

   opts:["po","gb","ik","mn"], ans:0},

  {id:78, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"Jay ranked 17th from the bottom in a class of 60 members. What is her rank from the top?",

   opts:["44th","43rd","45th","42nd"], ans:0},

  {id:79, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"Mohan is taller than Shyam but shorter than Ramesh. Ramesh is taller than Rajat but shorter than Gautam. If Shyam is taller than Rajat, who is the tallest among all?",

   opts:["Gautam","Ramesh","Mohan","Shyam"], ans:0},

  {id:80, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"In a certain code, 'GONE' is written as 5%2# and 'MEDAL' is written as 4#3$@. How will 'GOLD' be written in that code?",

   opts:["5%@3","5%2@","5@23","5%#3"], ans:0},

  {id:81, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"If MADRAS is coded as NBESBT, how is BOMBAY coded in that code?",

   opts:["CPNCBZ","CPMBAY","CNPCBZ","BPNCBZ"], ans:0},

  {id:82, unit:5, unitName:"Unit V – Direction, Coding & Ranking",

   q:"'Reds' are 'blues', 'blues' are 'whites', 'whites' are 'yellows', 'yellows' are 'oranges', 'oranges' are 'pinks'. What is the colour of the sky?",

   opts:["White","Blue","Yellow","Pink"], ans:0},

];



// ── Helpers ───────────────────────────────────────────────────────────────────

function shuffle(arr) {

  const a = [...arr];

  for (let i = a.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [a[i], a[j]] = [a[j], a[i]];

  }

  return a;

}



// ── Main App ──────────────────────────────────────────────────────────────────

export default function QuizApp() {

  const UNITS = [

    {id:0, label:"All Units", color:"#6366f1"},

    {id:1, label:"Unit I – Partnership", color:"#0ea5e9"},

    {id:2, label:"Unit II – Profit & Loss", color:"#10b981"},

    {id:3, label:"Unit III – Heights & Distances", color:"#f59e0b"},

    {id:4, label:"Unit IV – Blood Relations", color:"#ef4444"},

    {id:5, label:"Unit V – Direction & Coding", color:"#8b5cf6"},

  ];



  const [screen, setScreen] = useState("home"); // home | quiz | result

  const [selectedUnit, setSelectedUnit] = useState(0);

  const [shuffleQ, setShuffleQ] = useState(false);

  const [shuffleOpts, setShuffleOpts] = useState(false);

  const [questions, setQuestions] = useState([]);

  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const [optMapping, setOptMapping] = useState({});



  const unitColor = UNITS.find(u => u.id === selectedUnit)?.color || "#6366f1";



  const startQuiz = useCallback(() => {

    let qs = selectedUnit === 0 ? ALL_QUESTIONS : ALL_QUESTIONS.filter(q => q.unit === selectedUnit);

    if (shuffleQ) qs = shuffle(qs);

    const mapping = {};

    qs.forEach(q => {

      const idxs = [0,1,2,3];

      const shuffled = shuffleOpts ? shuffle(idxs) : idxs;

      mapping[q.id] = shuffled;

    });

    setQuestions(qs);

    setOptMapping(mapping);

    setAnswers({});

    setCurrent(0);

    setSubmitted(false);

    setScreen("quiz");

  }, [selectedUnit, shuffleQ, shuffleOpts]);



  const selectAnswer = (qId, displayIdx) => {

    if (submitted) return;

    setAnswers(prev => ({...prev, [qId]: displayIdx}));

  };



  const goNext = () => { if (current < questions.length - 1) setCurrent(c => c + 1); };

  const goPrev = () => { if (current > 0) setCurrent(c => c - 1); };



  const submitQuiz = () => setSubmitted(true);



  // scoring

  const score = submitted ? questions.reduce((acc, q) => {

    const map = optMapping[q.id] || [0,1,2,3];

    const chosen = answers[q.id];

    if (chosen === undefined) return acc;

    return map[chosen] === q.ans ? acc + 1 : acc;

  }, 0) : 0;



  const pct = questions.length ? Math.round(score / questions.length * 100) : 0;



  const q = questions[current];

  const map = q ? (optMapping[q.id] || [0,1,2,3]) : [];



  // ── Styles ────────────────────────────────────────────────────────────────

  const s = {

    app: {fontFamily:"'Segoe UI',system-ui,sans-serif",minHeight:"100vh",background:"#f1f5f9",color:"#0f172a"},

    header: {background:"white",borderBottom:"1px solid #e2e8f0",padding:"14px 20px",display:"flex",alignItems:"center",gap:12,position:"sticky",top:0,zIndex:10},

    logo: {width:36,height:36,borderRadius:10,background:`linear-gradient(135deg,${unitColor},#6366f1)`,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:700,fontSize:16},

    title: {fontWeight:700,fontSize:18,color:"#0f172a"},

    sub: {fontSize:12,color:"#64748b"},

    body: {maxWidth:720,margin:"0 auto",padding:"20px 16px"},

    card: {background:"white",borderRadius:16,boxShadow:"0 1px 3px rgba(0,0,0,.08)",padding:"24px"},

    unitGrid: {display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12,marginBottom:20},

    unitBtn: (active, color) => ({

      padding:"14px 16px",borderRadius:12,border:`2px solid ${active ? color : "#e2e8f0"}`,

      background: active ? `${color}18` : "white",cursor:"pointer",textAlign:"left",

      transition:"all .15s",fontWeight: active ? 700 : 500,color: active ? color : "#374151",

      fontSize:13

    }),

    toggle: (active) => ({

      display:"flex",alignItems:"center",gap:10,padding:"12px 16px",borderRadius:10,

      border:`1.5px solid ${active?"#6366f1":"#e2e8f0"}`,background: active ? "#eef2ff" : "white",

      cursor:"pointer",userSelect:"none",fontSize:14,color: active?"#4f46e5":"#374151",fontWeight: active?600:400

    }),

    pill: (color) => ({

      display:"inline-block",padding:"3px 10px",borderRadius:20,background:`${color}18`,

      color,fontSize:11,fontWeight:600,marginBottom:8

    }),

    startBtn: {

      width:"100%",padding:"14px",borderRadius:12,border:"none",

      background:`linear-gradient(135deg,${unitColor},#6366f1)`,color:"white",

      fontSize:16,fontWeight:700,cursor:"pointer",marginTop:8

    },

    progress: {height:6,background:"#e2e8f0",borderRadius:3,overflow:"hidden",marginBottom:20},

    progressBar: (pct,color) => ({height:"100%",width:`${pct}%`,background:color,borderRadius:3,transition:"width .3s"}),

    qnum: {fontSize:12,color:"#64748b",marginBottom:6,fontWeight:600},

    qtext: {fontSize:15,fontWeight:600,lineHeight:1.6,marginBottom:16,color:"#0f172a"},

    optList: {display:"flex",flexDirection:"column",gap:10,marginTop:8},

    opt: (state) => {

      const bg = state==="selected"?"#eef2ff":state==="correct"?"#dcfce7":state==="wrong"?"#fee2e2":"white";

      const border = state==="selected"?"#6366f1":state==="correct"?"#16a34a":state==="wrong"?"#dc2626":"#e2e8f0";

      return {

        padding:"12px 16px",borderRadius:10,border:`1.5px solid ${border}`,background:bg,

        cursor:state?"":(submitted?"default":"pointer"),textAlign:"left",fontSize:14,

        display:"flex",alignItems:"center",gap:12,transition:"all .12s",

        fontWeight: (state==="correct"||state==="selected") ? 600 : 400

      };

    },

    optLetter: (state) => ({

      width:28,height:28,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",

      fontSize:12,fontWeight:700,flexShrink:0,

      background: state==="correct"?"#16a34a":state==="wrong"?"#dc2626":state==="selected"?"#6366f1":"#f1f5f9",

      color: (state==="correct"||state==="wrong"||state==="selected") ? "white" : "#64748b"

    }),

    navRow: {display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:20,gap:12},

    navBtn: (disabled) => ({

      padding:"10px 20px",borderRadius:10,border:"1.5px solid #e2e8f0",background: disabled?"#f8fafc":"white",

      cursor: disabled?"not-allowed":"pointer",fontSize:13,fontWeight:600,color: disabled?"#94a3b8":"#374151"

    }),

    submitBtn: {padding:"10px 24px",borderRadius:10,border:"none",background:"#16a34a",color:"white",fontSize:14,fontWeight:700,cursor:"pointer"},

    resultCard: {textAlign:"center",padding:"32px 24px"},

    scoreBig: (color) => ({fontSize:56,fontWeight:800,color,lineHeight:1}),

    reviewList: {display:"flex",flexDirection:"column",gap:14,marginTop:20},

    reviewItem: (correct) => ({

      padding:"14px 16px",borderRadius:12,border:`1.5px solid ${correct?"#bbf7d0":"#fecaca"}`,

      background: correct?"#f0fdf4":"#fff1f2",textAlign:"left"

    }),

  };



  // ── Screens ───────────────────────────────────────────────────────────────

  if (screen === "home") return (

    <div style={s.app}>

      <div style={s.header}>

        <div style={s.logo}>Q</div>

        <div>

          <div style={s.title}>Quiz Hub</div>

          <div style={s.sub}>By சிஜே.</div>

        </div>

      </div>

      <div style={s.body}>

        <div style={s.card}>

          <h2 style={{margin:"0 0 4px",fontSize:20,fontWeight:700}}>Select Unit</h2>

          <p style={{margin:"0 0 18px",color:"#64748b",fontSize:13}}>Choose a unit or practice all 82 questions</p>



          <div style={s.unitGrid}>

            {UNITS.map(u => (

              <button key={u.id} style={s.unitBtn(selectedUnit===u.id, u.color)}

                onClick={() => setSelectedUnit(u.id)}>

                <div style={{fontSize:13,fontWeight:600}}>{u.label}</div>

                <div style={{fontSize:11,color:"#94a3b8",marginTop:3}}>

                  {u.id===0 ? `${ALL_QUESTIONS.length} questions` :

                   `${ALL_QUESTIONS.filter(q=>q.unit===u.id).length} questions`}

                </div>

              </button>

            ))}

          </div>



          <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:20}}>

            <button style={s.toggle(shuffleQ)} onClick={() => setShuffleQ(p=>!p)}>

              <span style={{fontSize:18}}>{shuffleQ}</span>

              Shuffle Questions {shuffleQ?"(ON)":"(OFF)"}

            </button>

            <button style={s.toggle(shuffleOpts)} onClick={() => setShuffleOpts(p=>!p)}>

              <span style={{fontSize:18}}>{shuffleOpts}</span>

              Shuffle Options {shuffleOpts?"(ON)":"(OFF)"}

            </button>

          </div>



          <button style={s.startBtn} onClick={startQuiz}>

            Start Quiz →

          </button>

        </div>

      </div>

    </div>

  );



  if (screen === "result") {

    const medal = pct >= 80 ? "🏆" : pct >= 60 ? "🎯" : pct >= 40 ? "📚" : "💪";

    const grade = pct >= 80 ? "#16a34a" : pct >= 60 ? "#d97706" : "#dc2626";

    return (

      <div style={s.app}>

        <div style={s.header}>

          <div style={s.logo}>Q</div>

          <div><div style={s.title}>Quiz Results</div></div>

          <button style={{marginLeft:"auto",padding:"8px 16px",borderRadius:8,border:"1.5px solid #e2e8f0",background:"white",cursor:"pointer",fontSize:13,fontWeight:600}}

            onClick={() => setScreen("home")}>← New Quiz</button>

        </div>

        <div style={s.body}>

          <div style={{...s.card,...s.resultCard,marginBottom:20}}>

            <div style={{fontSize:48,marginBottom:8}}>{medal}</div>

            <div style={s.scoreBig(grade)}>{score}/{questions.length}</div>

            <div style={{fontSize:32,fontWeight:700,color:grade,margin:"4px 0"}}>{pct}%</div>

            <div style={{color:"#64748b",fontSize:14,marginTop:8}}>

              {pct>=80?"Excellent! Well done!":pct>=60?"Good effort! Keep going!":pct>=40?"Keep studying!":"More practice needed!"}

            </div>

            <div style={{display:"flex",justifyContent:"center",gap:20,marginTop:16}}>

              <div style={{textAlign:"center"}}>

                <div style={{fontSize:22,fontWeight:700,color:"#16a34a"}}>{score}</div>

                <div style={{fontSize:11,color:"#64748b"}}>Correct</div>

              </div>

              <div style={{textAlign:"center"}}>

                <div style={{fontSize:22,fontWeight:700,color:"#dc2626"}}>{questions.length - score - Object.keys(answers).filter(k=>answers[k]===undefined).length}</div>

                <div style={{fontSize:11,color:"#64748b"}}>Wrong</div>

              </div>

              <div style={{textAlign:"center"}}>

                <div style={{fontSize:22,fontWeight:700,color:"#f59e0b"}}>{questions.length - Object.keys(answers).length}</div>

                <div style={{fontSize:11,color:"#64748b"}}>Skipped</div>

              </div>

            </div>

          </div>



          <div style={s.card}>

            <h3 style={{margin:"0 0 16px",fontSize:16,fontWeight:700}}>Answer Review</h3>

            <div style={s.reviewList}>

              {questions.map((q, idx) => {

                const m = optMapping[q.id] || [0,1,2,3];

                const chosen = answers[q.id];

                const correct = chosen !== undefined && m[chosen] === q.ans;

                const correctDisplayIdx = m.indexOf(q.ans);

                return (

                  <div key={q.id} style={s.reviewItem(correct)}>

                    <div style={{fontSize:11,color:"#64748b",marginBottom:4,fontWeight:600}}>

                      Q{idx+1} · {q.unitName} {correct?"✅":"❌"}

                    </div>

                    <div style={{fontSize:13,fontWeight:600,marginBottom:8,color:"#0f172a"}}>{q.q}</div>

                    {q.diagram && <div style={{marginBottom:8}}>{q.diagram}</div>}

                    <div style={{fontSize:12,color:"#16a34a",fontWeight:600}}>

                      ✓ {q.opts[q.ans]}

                    </div>

                    {!correct && chosen !== undefined && (

                      <div style={{fontSize:12,color:"#dc2626",marginTop:2}}>

                        ✗ You chose: {q.opts[m[chosen]]}

                      </div>

                    )}

                    {chosen === undefined && (

                      <div style={{fontSize:12,color:"#f59e0b",marginTop:2}}>⊘ Not answered</div>

                    )}

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </div>

    );

  }



  // Quiz screen

  if (!q) return null;

  const chosenDisplay = answers[q.id];

  const getOptState = (displayIdx) => {

    const realIdx = map[displayIdx];

    if (!submitted) return chosenDisplay === displayIdx ? "selected" : "";

    if (realIdx === q.ans) return "correct";

    if (chosenDisplay === displayIdx && realIdx !== q.ans) return "wrong";

    return "";

  };



  const answered = Object.keys(answers).length;

  const progressPct = ((current + 1) / questions.length) * 100;



  return (

    <div style={s.app}>

      <div style={s.header}>

        <div style={s.logo}>Q</div>

        <div style={{flex:1}}>

          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

            <div style={s.title}>{q.unitName}</div>

            <div style={{fontSize:13,fontWeight:700,color:unitColor}}>{current+1} / {questions.length}</div>

          </div>

          <div style={{...s.progress,margin:"6px 0 0"}}>

            <div style={s.progressBar(progressPct, unitColor)}/>

          </div>

        </div>

      </div>



      <div style={s.body}>

        {/* Question dot navigation */}

        <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:16}}>

          {questions.map((qx, i) => {

            const m2 = optMapping[qx.id] || [0,1,2,3];

            const a2 = answers[qx.id];

            const isCorrect = submitted && a2 !== undefined && m2[a2] === qx.ans;

            const isWrong = submitted && a2 !== undefined && m2[a2] !== qx.ans;

            const bg = i === current ? unitColor : isCorrect ? "#16a34a" : isWrong ? "#dc2626" : a2 !== undefined ? "#6366f1" : "#e2e8f0";

            return (

              <button key={qx.id} onClick={() => setCurrent(i)}

                style={{width:28,height:28,borderRadius:6,border:"none",background:bg,

                  color: bg==="#e2e8f0"?"#64748b":"white",cursor:"pointer",fontSize:11,fontWeight:700}}>

                {i+1}

              </button>

            );

          })}

        </div>



        <div style={s.card}>

          <div style={s.pill(unitColor)}>Q{current+1} of {questions.length}</div>

          <div style={s.qtext}>{q.q}</div>

          {q.diagram && <div style={{marginBottom:16}}>{q.diagram}</div>}



          <div style={s.optList}>

            {[0,1,2,3].map(di => {

              const realIdx = map[di];

              const state = getOptState(di);

              const letters = ["A","B","C","D"];

              return (

                <button key={di} style={s.opt(state)} onClick={() => selectAnswer(q.id, di)}>

                  <div style={s.optLetter(state)}>{letters[di]}</div>

                  <span>{q.opts[realIdx]}</span>

                  {submitted && state==="correct" && <span style={{marginLeft:"auto",fontSize:16}}>✓</span>}

                  {submitted && state==="wrong" && <span style={{marginLeft:"auto",fontSize:16}}>✗</span>}

                </button>

              );

            })}

          </div>



          <div style={s.navRow}>

            <button style={s.navBtn(current===0)} disabled={current===0} onClick={goPrev}>← Prev</button>

            <div style={{fontSize:12,color:"#94a3b8"}}>{answered}/{questions.length} answered</div>

            {!submitted && current === questions.length - 1 ? (

              <button style={s.submitBtn} onClick={submitQuiz}>Submit Quiz</button>

            ) : submitted && current === questions.length - 1 ? (

              <button style={{...s.submitBtn, background:"#6366f1"}} onClick={() => setScreen("result")}>View Results</button>

            ) : (

              <button style={s.navBtn(current===questions.length-1)} disabled={current===questions.length-1} onClick={goNext}>Next →</button>

            )}

          </div>

        </div>

      </div>

    </div>

  );

}
