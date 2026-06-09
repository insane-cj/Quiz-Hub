import { useState, useCallback } from "react";

// ── Inject Nothing-style fonts ────────────────────────────────────────────────
const FontInjector = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #FAFAFA;
      --surface: #FFFFFF;
      --text: #0A0A0A;
      --text-secondary: #888888;
      --border: #E5E5E5;
      --red: #FF3B30;
      --red-soft: #FFF0EE;
      --green: #34C759;
      --green-soft: #EEFBF1;
      --amber: #FF9500;
      --amber-soft: #FFF8EE;
      --mono: 'Space Mono', 'SF Mono', 'Consolas', monospace;
      --sans: 'Space Grotesk', -apple-system, 'Segoe UI', sans-serif;
    }

    body {
      font-family: var(--sans);
      background: var(--bg);
      color: var(--text);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    ::selection {
      background: var(--red);
      color: white;
    }

    button { font-family: var(--sans); }
  `}</style>
);

// ── Dot Grid Pattern (Nothing signature) ─────────────────────────────────────
const DotGrid = ({ opacity = 0.3 }) => (
  <svg width="100%" height="100%" style={{position:"absolute",inset:0,pointerEvents:"none",opacity}}>
    <defs>
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="0.8" fill="#0A0A0A"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)"/>
  </svg>
);

// ── SVG Diagrams ──────────────────────────────────────────────────────────────

const TowerDepressionDiagram = () => (
  <svg viewBox="0 0 260 160" width="220" height="130" style={{display:"block",margin:"16px auto",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:2,padding:8}}>
    <rect x="30" y="20" width="18" height="100" fill="#0A0A0A"/>
    <line x1="48" y1="120" x2="200" y2="120" stroke="#0A0A0A" strokeWidth="1.5"/>
    <line x1="48" y1="20" x2="200" y2="120" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="5,3"/>
    <text x="100" y="115" fontSize="11" fill="#0A0A0A" fontFamily="var(--mono)" fontWeight="700">80m</text>
    <text x="35" y="75" fontSize="10" fill="#0A0A0A" transform="rotate(-90,38,75)" fontFamily="var(--mono)">h</text>
    <text x="130" y="75" fontSize="11" fill="var(--red)" fontFamily="var(--mono)" fontWeight="700">60°</text>
    <polygon points="48,120 80,120 65,100" fill="none" stroke="var(--red)" strokeWidth="1"/>
    <text x="10" y="130" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">D</text>
    <text x="25" y="18" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">A</text>
    <text x="195" y="133" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">B/C</text>
  </svg>
);

const LighthouseDiagram = () => (
  <svg viewBox="0 0 280 170" width="240" height="145" style={{display:"block",margin:"16px auto",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:2,padding:8}}>
    <rect x="120" y="30" width="14" height="110" fill="#0A0A0A"/>
    <line x1="10" y1="140" x2="255" y2="140" stroke="#0A0A0A" strokeWidth="1.5"/>
    <line x1="127" y1="30" x2="10" y2="140" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="5,3"/>
    <line x1="127" y1="30" x2="255" y2="140" stroke="#888" strokeWidth="1.5" strokeDasharray="5,3"/>
    <text x="118" y="88" fontSize="10" fill="#0A0A0A" fontFamily="var(--mono)" fontWeight="700">100m</text>
    <text x="25" y="135" fontSize="10" fill="var(--red)" fontFamily="var(--mono)" fontWeight="700">30°</text>
    <text x="220" y="135" fontSize="10" fill="#888" fontFamily="var(--mono)" fontWeight="700">45°</text>
    <text x="5" y="150" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">C</text>
    <text x="118" y="28" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">B</text>
    <text x="250" y="150" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">D</text>
    <text x="120" y="152" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">A</text>
  </svg>
);

const TwoAngleTowerDiagram = () => (
  <svg viewBox="0 0 260 170" width="220" height="145" style={{display:"block",margin:"16px auto",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:2,padding:8}}>
    <rect x="170" y="20" width="14" height="120" fill="#0A0A0A"/>
    <line x1="10" y1="140" x2="230" y2="140" stroke="#0A0A0A" strokeWidth="1.5"/>
    <line x1="177" y1="20" x2="10" y2="140" stroke="var(--red)" strokeWidth="1.5"/>
    <line x1="177" y1="20" x2="110" y2="140" stroke="#888" strokeWidth="1.5"/>
    <text x="25" y="135" fontSize="10" fill="var(--red)" fontFamily="var(--mono)" fontWeight="700">30°</text>
    <text x="113" y="135" fontSize="10" fill="#888" fontFamily="var(--mono)" fontWeight="700">60°</text>
    <text x="50" y="148" fontSize="9" fill="#0A0A0A" fontFamily="var(--mono)" fontWeight="700">← 20m →</text>
    <text x="178" y="88" fontSize="10" fill="#0A0A0A" fontFamily="var(--mono)">h</text>
    <text x="5" y="150" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">A</text>
    <text x="100" y="150" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">D</text>
    <text x="185" y="150" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">B</text>
    <text x="170" y="18" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">C</text>
  </svg>
);

const LadderWallDiagram = () => (
  <svg viewBox="0 0 200 180" width="175" height="155" style={{display:"block",margin:"16px auto",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:2,padding:8}}>
    <rect x="60" y="10" width="10" height="150" fill="#0A0A0A"/>
    <line x1="10" y1="160" x2="180" y2="160" stroke="#0A0A0A" strokeWidth="1.5"/>
    <line x1="105" y1="160" x2="65" y2="40" stroke="var(--red)" strokeWidth="2"/>
    <text x="55" y="130" fontSize="10" fill="var(--red)" fontFamily="var(--mono)" fontWeight="700">60°</text>
    <text x="105" y="175" fontSize="9" fill="#0A0A0A" fontFamily="var(--mono)" fontWeight="700">4.6m</text>
    <text x="55" y="18" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">B</text>
    <text x="100" y="158" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">C</text>
    <text x="60" y="158" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">A</text>
  </svg>
);

const ShadowAngleDiagram = () => (
  <svg viewBox="0 0 220 160" width="185" height="135" style={{display:"block",margin:"16px auto",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:2,padding:8}}>
    <rect x="100" y="20" width="12" height="110" fill="#0A0A0A"/>
    <line x1="10" y1="130" x2="210" y2="130" stroke="#0A0A0A" strokeWidth="1.5"/>
    <line x1="106" y1="20" x2="10" y2="130" stroke="#888" strokeWidth="1.5" strokeDasharray="4,3"/>
    <text x="40" y="125" fontSize="10" fill="#888" fontFamily="var(--mono)" fontWeight="700">θ</text>
    <text x="40" y="142" fontSize="9" fill="#0A0A0A" fontFamily="var(--mono)" fontWeight="700">shadow = √3 × h</text>
    <text x="103" y="88" fontSize="10" fill="#0A0A0A" fontFamily="var(--mono)">h</text>
    <text x="99" y="18" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">B</text>
    <text x="5" y="140" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">C</text>
    <text x="100" y="142" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">A</text>
  </svg>
);

const TowerHeightHDiagram = () => (
  <svg viewBox="0 0 210 170" width="180" height="145" style={{display:"block",margin:"16px auto",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:2,padding:8}}>
    <rect x="15" y="20" width="12" height="120" fill="#0A0A0A"/>
    <line x1="10" y1="140" x2="200" y2="140" stroke="#0A0A0A" strokeWidth="1.5"/>
    <line x1="21" y1="20" x2="190" y2="140" stroke="var(--red)" strokeWidth="1.5"/>
    <text x="25" y="18" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">R</text>
    <text x="10" y="152" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">P</text>
    <text x="185" y="152" fontSize="9" fill="#888" fontFamily="var(--mono)" fontWeight="700">Q</text>
    <text x="17" y="88" fontSize="10" fill="#0A0A0A" fontFamily="var(--mono)">h</text>
    <text x="90" y="152" fontSize="9" fill="#0A0A0A" fontFamily="var(--mono)" fontWeight="700">h</text>
    <text x="155" y="135" fontSize="10" fill="var(--red)" fontFamily="var(--mono)" fontWeight="700">θ</text>
  </svg>
);

const FamilyTreeDiagram = () => (
  <svg viewBox="0 0 320 220" width="280" height="190" style={{display:"block",margin:"16px auto",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:2}}>
    <rect x="20" y="20" width="50" height="28" rx="1" fill="var(--surface)" stroke="#0A0A0A" strokeWidth="1.5"/>
    <text x="45" y="38" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0A0A0A" fontFamily="var(--mono)">Q(+)</text>
    <line x1="70" y1="34" x2="130" y2="34" stroke="#CCC" strokeWidth="1" strokeDasharray="4,2"/>
    <text x="100" y="28" fontSize="7" fill="#888" textAnchor="middle" fontFamily="var(--mono)">married</text>
    <rect x="130" y="20" width="50" height="28" rx="1" fill="var(--surface)" stroke="var(--red)" strokeWidth="1.5"/>
    <text x="155" y="38" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--red)" fontFamily="var(--mono)">R(-)</text>
    <line x1="45" y1="48" x2="45" y2="100" stroke="#CCC" strokeWidth="1"/>
    <rect x="20" y="100" width="50" height="28" rx="1" fill="var(--surface)" stroke="#0A0A0A" strokeWidth="1.5"/>
    <text x="45" y="118" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0A0A0A" fontFamily="var(--mono)">P(+)</text>
    <line x1="70" y1="114" x2="130" y2="114" stroke="#CCC" strokeWidth="1" strokeDasharray="4,2"/>
    <text x="100" y="108" fontSize="7" fill="#888" textAnchor="middle" fontFamily="var(--mono)">married</text>
    <rect x="130" y="100" width="50" height="28" rx="1" fill="var(--surface)" stroke="var(--red)" strokeWidth="1.5"/>
    <text x="155" y="118" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--red)" fontFamily="var(--mono)">S(-)</text>
    <line x1="180" y1="114" x2="220" y2="114" stroke="#CCC" strokeWidth="1"/>
    <text x="200" y="108" fontSize="7" fill="#888" textAnchor="middle" fontFamily="var(--mono)">sister</text>
    <rect x="220" y="100" width="50" height="28" rx="1" fill="var(--surface)" stroke="#0A0A0A" strokeWidth="1.5"/>
    <text x="245" y="118" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0A0A0A" fontFamily="var(--mono)">T(+)</text>
    <line x1="45" y1="128" x2="45" y2="180" stroke="#CCC" strokeWidth="1"/>
    <rect x="20" y="180" width="50" height="28" rx="1" fill="var(--surface)" stroke="#0A0A0A" strokeWidth="1.5"/>
    <text x="45" y="198" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0A0A0A" fontFamily="var(--mono)">U(+)</text>
  </svg>
);

const DirectionDiagram = () => (
  <svg viewBox="0 0 260 280" width="220" height="240" style={{display:"block",margin:"16px auto",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:2}}>
    <text x="118" y="15" fontSize="10" fill="#888" fontFamily="var(--mono)" fontWeight="700">N</text>
    <text x="118" y="278" fontSize="10" fill="#888" fontFamily="var(--mono)" fontWeight="700">S</text>
    <text x="5" y="148" fontSize="10" fill="#888" fontFamily="var(--mono)" fontWeight="700">W</text>
    <text x="240" y="148" fontSize="10" fill="#888" fontFamily="var(--mono)" fontWeight="700">E</text>
    <line x1="120" y1="80" x2="76" y2="80" stroke="#E5E5E5" strokeWidth="1" strokeDasharray="3,2"/>
    <line x1="120" y1="80" x2="180" y2="80" stroke="#CCC" strokeWidth="1"/>
    <text x="148" y="76" fontSize="8" fill="#888" fontFamily="var(--mono)">12m</text>
    <line x1="120" y1="80" x2="120" y2="158" stroke="#CCC" strokeWidth="1"/>
    <text x="122" y="95" fontSize="8" fill="#888" fontFamily="var(--mono)">5m</text>
    <text x="122" y="128" fontSize="8" fill="#888" fontFamily="var(--mono)">13m</text>
    <line x1="76" y1="158" x2="120" y2="158" stroke="#CCC" strokeWidth="1"/>
    <text x="90" y="172" fontSize="8" fill="#888" fontFamily="var(--mono)">4m</text>
    <line x1="76" y1="83" x2="76" y2="158" stroke="#CCC" strokeWidth="1"/>
    <text x="58" y="115" fontSize="8" fill="#888" fontFamily="var(--mono)">15m</text>
    <text x="58" y="100" fontSize="8" fill="#888" fontFamily="var(--mono)">2m</text>
    {[["P",76,80],["J",76,103],["F",120,80],["G",120,110],["E",180,80],["L",120,158],["I",76,158]].map(([lbl,x,y])=>(
      <g key={lbl}>
        <circle cx={x} cy={y} r="8" fill="#0A0A0A"/>
        <text x={x} y={y+3.5} textAnchor="middle" fontSize="8" fontWeight="700" fill="white" fontFamily="var(--mono)">{lbl}</text>
      </g>
    ))}
  </svg>
);

const ClockDiagram = () => (
  <svg viewBox="0 0 160 160" width="140" height="140" style={{display:"block",margin:"16px auto",background:"var(--surface)",borderRadius:"50%",border:"1.5px solid var(--border)"}}>
    <circle cx="80" cy="80" r="74" fill="white" stroke="#E5E5E5" strokeWidth="1.5"/>
    {[12,3,6,9].map((n,i)=>{
      const angles=[270,0,90,180];
      const rad=angles[i]*Math.PI/180;
      return <text key={n} x={80+60*Math.cos(rad)-5} y={80+60*Math.sin(rad)+5} fontSize="13" fontWeight="700" fill="#0A0A0A" fontFamily="var(--mono)">{n}</text>;
    })}
    <text x="75" y="18" fontSize="10" fill="var(--red)" fontWeight="700" fontFamily="var(--mono)">N</text>
    <text x="75" y="152" fontSize="10" fill="#888" fontFamily="var(--mono)">S</text>
    <text x="8" y="85" fontSize="10" fill="#888" fontFamily="var(--mono)">W</text>
    <text x="142" y="85" fontSize="10" fill="#888" fontFamily="var(--mono)">E</text>
    <line x1="80" y1="80" x2="80" y2="130" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="square"/>
    <line x1="80" y1="80" x2="130" y2="80" stroke="var(--red)" strokeWidth="2" strokeLinecap="square"/>
    <circle cx="80" cy="80" r="3" fill="#0A0A0A"/>
  </svg>
);

const JayantWalkDiagram = () => (
  <svg viewBox="0 0 220 200" width="190" height="175" style={{display:"block",margin:"16px auto",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:2}}>
    <text x="175" y="20" fontSize="10" fill="#0A0A0A" fontFamily="var(--mono)" fontWeight="700">X</text>
    <line x1="170" y1="25" x2="50" y2="25" stroke="#0A0A0A" strokeWidth="1.5"/>
    <text x="100" y="20" fontSize="8" fill="#0A0A0A" fontFamily="var(--mono)" fontWeight="700">15m W</text>
    <text x="42" y="20" fontSize="10" fill="#0A0A0A" fontFamily="var(--mono)" fontWeight="700">A</text>
    <line x1="50" y1="25" x2="50" y2="105" stroke="#888" strokeWidth="1.5"/>
    <text x="28" y="70" fontSize="8" fill="#888" fontFamily="var(--mono)" fontWeight="700">20m S</text>
    <text x="42" y="115" fontSize="10" fill="#0A0A0A" fontFamily="var(--mono)" fontWeight="700">B</text>
    <line x1="50" y1="105" x2="170" y2="105" stroke="#888" strokeWidth="1.5"/>
    <text x="100" y="100" fontSize="8" fill="#888" fontFamily="var(--mono)" fontWeight="700">15m E</text>
    <text x="172" y="115" fontSize="10" fill="#0A0A0A" fontFamily="var(--mono)" fontWeight="700">C</text>
    <line x1="170" y1="105" x2="170" y2="185" stroke="var(--red)" strokeWidth="1.5"/>
    <text x="174" y="150" fontSize="8" fill="var(--red)" fontFamily="var(--mono)" fontWeight="700">12m S</text>
    <text x="162" y="195" fontSize="10" fill="#0A0A0A" fontFamily="var(--mono)" fontWeight="700">D</text>
    <line x1="170" y1="25" x2="170" y2="185" stroke="#E5E5E5" strokeWidth="1" strokeDasharray="5,3"/>
    <text x="175" y="110" fontSize="8" fill="#888" fontFamily="var(--mono)">32m</text>
    <text x="155" y="25" fontSize="8" fill="#888" fontFamily="var(--mono)" fontWeight="700">↑N</text>
  </svg>
);

// ── Question Data ─────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  {id:1, unit:1, unitName:"PARTNERSHIP", q:"Revathi started a software business by investing Rs. 50,000. After six months, Karan joined her with a capital of Rs. 80,000. After 3 years, they earned a profit of Rs. 24,500. What was Revathi's share in the profit?", opts:["Rs. 10,500","Rs. 12,250","Rs. 8,750","Rs. 9,800"], ans:0},
  {id:2, unit:1, unitName:"PARTNERSHIP", q:"A and B invest in a business in the ratio 3:2. If 5% of the total profit goes to charity and A's share is Rs. 855, the total profit is:", opts:["Rs. 1,500","Rs. 1,800","Rs. 1,200","Rs. 2,000"], ans:0},
  {id:3, unit:1, unitName:"PARTNERSHIP", q:"A and B started a business investing Rs. 10,000 and Rs. 20,000 respectively. After six months, C joined with Rs. 30,000. What will be B's share in total profit of Rs. 42,000 earned at the end of 2 years?", opts:["Rs. 16,000","Rs. 14,000","Rs. 18,000","Rs. 12,000"], ans:0},
  {id:4, unit:1, unitName:"PARTNERSHIP", q:"A, B, C subscribe Rs. 50,000 for a business. A subscribes Rs. 4,000 more than B and B Rs. 5,000 more than C. Out of a total profit of Rs. 35,000, A receives:", opts:["Rs. 14,700","Rs. 12,500","Rs. 17,500","Rs. 10,500"], ans:0},
  {id:5, unit:1, unitName:"PARTNERSHIP", q:"P began a business with Rs. 80,000. He was joined afterwards by Q with Rs. 1,20,000. For how many months does Q join, if the profits at the end of the year are divided in the ratio 4:3?", opts:["6 months","8 months","4 months","9 months"], ans:0},
  {id:6, unit:1, unitName:"PARTNERSHIP", q:"A and B started a partnership business investing in the ratio 3:5. C joined after six months with an amount equal to that of B. In what proportion should the profit at the end of one year be distributed among A, B and C?", opts:["6:10:5","3:5:5","6:10:6","4:8:5"], ans:0},
  {id:7, unit:1, unitName:"PARTNERSHIP", q:"Tamil, Dharma and Manoj invested Rs. 24,000, Rs. 16,000 and Rs. 20,000 respectively. Tamil left after six months. If after eight months there was a gain of Rs. 54,000, what will be the share of Dharma?", opts:["Rs. 16,000","Rs. 18,000","Rs. 20,000","Rs. 14,000"], ans:0},
  {id:8, unit:1, unitName:"PARTNERSHIP", q:"A and B invest Rs. 5,000 and Rs. 7,000 in a business. Find the ratio in which they share the profit.", opts:["5:7","3:5","2:3","7:9"], ans:0},
  {id:9, unit:1, unitName:"PARTNERSHIP", q:"Mani and Charu invest in a business in the ratio 3:2. Assume that 5% of the total profit goes to charity. If Mani's share is Rs. 855, what is the total profit?", opts:["Rs. 1,500","Rs. 1,200","Rs. 2,000","Rs. 1,800"], ans:0},
  {id:10, unit:1, unitName:"PARTNERSHIP", q:"A invests Rs. 6,000 for 12 months and B invests Rs. 8,000 for 6 months. Find the profit-sharing ratio.", opts:["3:2","2:3","4:3","3:4"], ans:0},

  {id:11, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"3 pumps, working 8 hours a day, can empty a tank in 2 days. How many hours a day must 4 pumps work to empty the tank in 1 day?", opts:["12","10","8","14"], ans:0},
  {id:12, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"39 persons can repair a road in 12 days, working 5 hours a day. In how many days will 30 persons, working 6 hours a day, complete the work?", opts:["13","15","10","12"], ans:0},
  
  // New Inserted Question 13
  {id:13, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"39 persons can repair a road in 12 days, working 5 hours a day. In how many days will 30 persons, working 6 hours a day, complete the work?", opts:["13","15","10","12"], ans:0},
  // New Inserted Question 14
  {id:14, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"3 pumps, working 8 hours a day, can empty a tank in 2 days. How many hours a day must 4 pumps work to empty the tank in 1 day?", opts:["12","10","8","14"], ans:0},

  {id:15, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"In a dairy farm, 70 cows eat 70 bags of husk in 140 days. In how many days will 2 cows eat one bag of husk?", opts:["70 days","140 days","35 days","100 days"], ans:0},
  {id:16, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"If a quarter kg of potato costs 60 paise, how many paise will 200 gm cost?", opts:["48 paise","50 paise","40 paise","56 paise"], ans:0},
  {id:17, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"If a half kg of potato costs 20 paise, how many paise will 400 gm cost?", opts:["25 paise","16 paise","20 paise","22 paise"], ans:0},
  {id:18, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"In a dairy farm, 40 cows eat 40 bags of husk in 40 days. In how many days will one cow eat one bag of husk?", opts:["40 days","20 days","80 days","60 days"], ans:0},
  {id:19, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"Running at the same constant rate, 6 identical machines can produce a total of 270 bottles per minute. At this rate, how many bottles could 10 such machines produce in 4 minutes?", opts:["1800","1500","1200","2000"], ans:0},
  {id:20, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"In a camp, there is a meal for 120 men or 200 children. If 150 children have taken the meal, how many men will be catered to with the remaining meal?", opts:["30 men","25 men","40 men","50 men"], ans:0},
  {id:21, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"A shopkeeper sold an article for Rs. 5,400 after allowing a discount of 10%. Find the marked price of the article.", opts:["Rs. 6,000","Rs. 5,940","Rs. 5,500","Rs. 6,300"], ans:0},
  {id:22, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"If 20% of a = b, then b% of 20 is the same as:", opts:["4% of a","20% of a","5% of a","2% of a"], ans:0},
  {id:23, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"The cost price of a book is Rs. 2,520. If the book is sold at a profit of 20%, find the selling price.", opts:["Rs. 3,024","Rs. 3,000","Rs. 2,800","Rs. 2,940"], ans:0},
  {id:24, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"A student has to obtain 33% of the total marks to pass. He got 125 marks and failed by 40 marks. The maximum marks are:", opts:["500","450","400","550"], ans:0},
  {id:25, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"A grandma sells 10 candies for Rs. 250, earning a profit of Rs. 50. If she wants to earn a total profit of Rs. 120, what will be the selling price of a single candy?", opts:["Rs. 32","Rs. 25","Rs. 28","Rs. 30"], ans:0},
  {id:26, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"The value of a refrigerator depreciates at 10% every year. It was purchased 3 years ago. If its present value is Rs. 8,748, what was the purchase price?", opts:["Rs. 12,000","Rs. 10,800","Rs. 11,500","Rs. 13,000"], ans:0},
  {id:27, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"A shopkeeper earned a profit of 20% when he sold an item after giving two successive discounts of 20% and 10%. If the marked price is Rs. 1,250, find the cost price.", opts:["Rs. 750","Rs. 800","Rs. 900","Rs. 700"], ans:0},
  {id:28, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"If the selling price of Rs. 24 results in a 20% discount on list price, what selling price would result in a 30% discount on list price?", opts:["Rs. 21","Rs. 18","Rs. 24","Rs. 25"], ans:0},
  {id:29, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"If a trader earns a profit of 30% on selling an article for Rs. 260, at what price should he sell it to earn a profit of 25%?", opts:["Rs. 250","Rs. 260","Rs. 240","Rs. 270"], ans:0},
  {id:30, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"A dishonest dealer claims to sell goods at cost price but uses a weight of 600 gm instead of 1 kg. What is the profit percentage?", opts:["66.67%","60%","40%","50%"], ans:0},
  {id:31, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"33.33% of 93 + 50% of 120 + 75% of 44 = ?", opts:["124","120","130","118"], ans:0},
  {id:32, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"Divya sold 10 pens at the cost of 12 similar pens. What % profit or loss does she make?", opts:["20% profit","20% loss","10% profit","25% profit"], ans:0},
  {id:33, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"50% of 24 + 28.57% of 63 + 83.33% of 48 = ?", opts:["70","65","75","68"], ans:0},
  {id:34, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"If Sarath buys books at 12 for Rs. 10 and sells at 10 books for Rs. 12, what will be his gain percent?", opts:["44%","40%","36%","48%"], ans:0},
  {id:35, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"Mangai spends 40% of her monthly salary on food and one-third of the remaining on transport. She saves Rs. 4,500, which equals half the balance after spending on food and transport. Her monthly salary is:", opts:["Rs. 22,500","Rs. 18,000","Rs. 20,000","Rs. 25,000"], ans:0},
  {id:36, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"A shopkeeper purchases a table and sells it for Rs. 5,400, incurring a loss of 10%. Find the cost price of the table.", opts:["Rs. 6,000","Rs. 5,940","Rs. 5,500","Rs. 6,500"], ans:0},
  {id:37, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"10% of voters did not cast their votes. There were only two candidates. The winner obtained 50% of the total votes and defeated his contestant by 1,100 votes. The total number of voters was:", opts:["11,000","10,000","12,000","9,000"], ans:0},
  {id:38, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"Brinda sells 40 shirts at the cost price of 50 shirts. Her gain percent is:", opts:["25%","20%","30%","15%"], ans:0},
  {id:39, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"The price of a car is Rs. 10,00,000. It was insured for 80% of its price. The car got completely damaged and the insurance company paid only 60% of the insured amount. What is the difference between the car price and the insurance received?", opts:["Rs. 5,20,000","Rs. 4,00,000","Rs. 4,80,000","Rs. 6,00,000"], ans:0},
  {id:40, unit:2, unitName:"RATIO & PROFIT/LOSS", q:"12 articles were bought for Rs. 10 and sold at 10 for Rs. 12. The gain percent is:", opts:["44%","40%","36%","48%"], ans:0},

  {id:41, unit:3, unitName:"HEIGHTS & DISTANCES", q:"The angle of depression of a point situated at a distance of 80 m from the base of a tower is 60°. What is the height of the tower?", diagram: <TowerDepressionDiagram/>, opts:["80√3 m","80 m","40√3 m","160 m"], ans:0},
  {id:42, unit:3, unitName:"HEIGHTS & DISTANCES", q:"Two ships are on the two sides of a lighthouse. The angles of elevation of the top of the 100 m high lighthouse from the ships are 30° and 45° respectively. What is the distance between the two ships?", diagram: <LighthouseDiagram/>, opts:["273 m","200 m","250 m","300 m"], ans:0},
  {id:43, unit:3, unitName:"HEIGHTS & DISTANCES", q:"On level ground, the angle of elevation of the top of a tower is 30°. On moving 20 m nearer, the angle becomes 60°. What is the height of the tower?", diagram: <TwoAngleTowerDiagram/>, opts:["10√3 m","20√3 m","10 m","15√3 m"], ans:0},
  {id:44, unit:3, unitName:"HEIGHTS & DISTANCES", q:"A man standing at point P watches the top of a tower at an angle of elevation of 30°. He walks closer and the angle becomes 60°. What is the distance between the base of the tower and point P?", opts:["Data Inadequate","3× tower height","2× tower height","√3 × tower height"], ans:0},
  {id:45, unit:3, unitName:"HEIGHTS & DISTANCES", q:"From a point 20 m from a tower, the angle of elevation is 30°. Find the height of the tower.", opts:["11.55 m","20 m","10 m","20/√3 m"], ans:0},
  {id:46, unit:3, unitName:"HEIGHTS & DISTANCES", q:"The angle of elevation of a ladder leaning against a wall is 60° and the foot of the ladder is 4.6 m away from the wall. What is the length of the ladder?", diagram: <LadderWallDiagram/>, opts:["9.2 m","4.6 m","8.0 m","10.0 m"], ans:0},
  {id:47, unit:3, unitName:"HEIGHTS & DISTANCES", q:"A 60 m tall tower casts a 60 m shadow. Find the angle of elevation of the sun.", opts:["45°","30°","60°","90°"], ans:0},
  {id:48, unit:3, unitName:"HEIGHTS & DISTANCES", q:"From a point P on level ground, the angle of elevation of the top of a 100 m high tower is 30°. What is the distance of point P from the foot of the tower?", opts:["173 m","100 m","100√3 m","200 m"], ans:0},
  {id:49, unit:3, unitName:"HEIGHTS & DISTANCES", q:"A tower is 50 m high. The angle of depression to a point is 30°. Find the distance from the tower base to that point.", opts:["86.6 m","50 m","100 m","50√3 m"], ans:0},
  {id:50, unit:3, unitName:"HEIGHTS & DISTANCES", q:"The angle of elevation of the sun, when the length of a tree's shadow is 3 times its height, is:", opts:["30°","45°","60°","90°"], ans:0},
  {id:51, unit:3, unitName:"HEIGHTS & DISTANCES", q:"From a lighthouse 60 m high, a boat is seen at an angle of depression of 45°. How far is the boat from the lighthouse base?", opts:["60 m","30 m","90 m","120 m"], ans:0},
  {id:52, unit:3, unitName:"HEIGHTS & DISTANCES", q:"The angle that is formed when looking from the ground up to a helicopter is called the:", opts:["Angle of Elevation","Angle of Depression","Reflex Angle","Bearing Angle"], ans:0},
  {id:53, unit:3, unitName:"HEIGHTS & DISTANCES", q:"Two buildings are 20 m apart. One is 30 m tall. The angle of elevation to the top of the unknown building from the top of the shorter one is 30°. Find the height of the unknown building.", opts:["41.55 m","50 m","35 m","30 m"], ans:0},
  {id:54, unit:3, unitName:"HEIGHTS & DISTANCES", q:"If an object travels 10 feet in 15 minutes, how many feet does it travel in 5 hours?", opts:["200 feet","150 feet","250 feet","300 feet"], ans:0},
  {id:55, unit:3, unitName:"HEIGHTS & DISTANCES", q:"A flagpole is on top of a 50 m tower. The shadow of the top of the pole is 30 m from the tower base. The angle of elevation from that point is 30°. The total height h = 30/√3. What is h?", opts:["17.32 m","15.00 m","20.00 m","10.00 m"], ans:0},
  {id:56, unit:3, unitName:"HEIGHTS & DISTANCES", q:"The angle of elevation of the sun, when the shadow of a tree is √3 times its height, is:", diagram: <ShadowAngleDiagram/>, opts:["30°","45°","60°","90°"], ans:0},
  {id:57, unit:3, unitName:"HEIGHTS & DISTANCES", q:"A tower casts a shadow equal to its height. Find the sun's angle of elevation.", opts:["45°","30°","60°","90°"], ans:0},
  {id:58, unit:3, unitName:"HEIGHTS & DISTANCES", q:"The angle of elevation of the top of a tower of height h from point Q is θ. The distance between Q and the base equals the height of the tower. Find θ.", diagram: <TowerHeightHDiagram/>, opts:["45°","30°","60°","90°"], ans:0},
  {id:59, unit:3, unitName:"HEIGHTS & DISTANCES", q:"Height of a tower is 100 m. The distance from the foot of the tower to a point is 100√3 m. Find the angle of elevation.", opts:["30°","45°","60°","90°"], ans:0},

  {id:60, unit:4, unitName:"BLOOD RELATIONS", q:"A woman introduces a man as the son of the brother of her mother. How is the man related to the woman?", opts:["Cousin","Nephew","Uncle","Brother"], ans:0},
  {id:61, unit:4, unitName:"BLOOD RELATIONS", q:"[Family tree shown] There are six members (P, Q, R, S, T and U) in a family. S, who is sister of T, is daughter-in-law of Q. Q is grandfather of U, who is nephew of T. P, who doesn't have sister-in-law, is a male member. How is P related to T?", diagram: <FamilyTreeDiagram/>, opts:["Brother-in-law","Uncle","Brother","Father"], ans:0},
  {id:62, unit:4, unitName:"BLOOD RELATIONS", q:"[Same family tree as Q61] How is R related to P?", diagram: <FamilyTreeDiagram/>, opts:["Mother","Sister","Aunt","Grandmother"], ans:0},
  {id:63, unit:4, unitName:"BLOOD RELATIONS", q:"[Same family tree] How many female members are there in the family of P, Q, R, S, T and U?", diagram: <FamilyTreeDiagram/>, opts:["2","3","4","1"], ans:0},
  {id:64, unit:4, unitName:"BLOOD RELATIONS", q:"If A is the mother of B, B is the son of C, and C is the brother of D, how is D related to A?", opts:["Brother-in-law","Sister-in-law","Uncle","Nephew"], ans:0},
  {id:65, unit:4, unitName:"BLOOD RELATIONS", q:"A party consists of a grandmother, father, mother, four sons and their wives and one son and two daughters to each of the sons. How many females are there?", opts:["14","12","10","16"], ans:0},
  {id:66, unit:4, unitName:"BLOOD RELATIONS", q:"If A is the husband of B, B is the mother of C, and C is the wife of D, how is A related to D?", opts:["Father-in-law","Grandfather","Uncle","Brother-in-law"], ans:0},
  {id:67, unit:4, unitName:"BLOOD RELATIONS", q:"Pointing towards a girl in the picture, Harshini said, 'She is the mother of Neha whose father is my son.' How is Harshini related to the girl in the picture?", opts:["Mother-in-law","Grandmother","Aunt","Sister-in-law"], ans:0},
  {id:68, unit:4, unitName:"BLOOD RELATIONS", q:"Pointing to a photograph of a boy Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?", opts:["Father","Uncle","Grandfather","Brother"], ans:0},

  {id:69, unit:5, unitName:"DIRECTION & CODING", q:"[Eight trees problem] G is 5m south of F. L is 13m south of F. I is 4m west of L. P is 15m north of I. J is 2m south of P. E is 12m east of F. What is the direction of F with respect to I?", diagram: <DirectionDiagram/>, opts:["North-East","North-West","South-East","South-West"], ans:0},
  {id:70, unit:5, unitName:"DIRECTION & CODING", q:"[Same 8-trees setup] What is the direction of J with respect to E?", diagram: <DirectionDiagram/>, opts:["South-West","North-West","South-East","West"], ans:0},
  {id:71, unit:5, unitName:"DIRECTION & CODING", q:"[Same 8-trees setup] What is the distance between J and E?", diagram: <DirectionDiagram/>, opts:["13 m","15 m","12 m","10 m"], ans:0},
  {id:72, unit:5, unitName:"DIRECTION & CODING", q:"Starting from X, Jayant walked 15 m west, turned left and walked 20 m, turned left and walked 15 m, then turned right and walked 12 m. How far and in which direction is Jayant from X?", diagram: <JayantWalkDiagram/>, opts:["32 m South","20 m South","32 m North","20 m East"], ans:0},
  {id:73, unit:5, unitName:"DIRECTION & CODING", q:"One morning after sunrise, Hardik was standing facing a pole. The shadow of the pole fell exactly to his right. In which direction is he facing?", opts:["South","North","East","West"], ans:0},
  {id:74, unit:5, unitName:"DIRECTION & CODING", q:"One morning Sujata started walking towards the Sun. After some distance she turned right, then again turned right, and after some distance turned right again. Now in which direction is she facing?", opts:["North","South","East","West"], ans:0},
  {id:75, unit:5, unitName:"DIRECTION & CODING", q:"Rahul put his timepiece on the table such that at 6 PM the hour hand points to North. In which direction will the minute hand point at 9:15 PM?", diagram: <ClockDiagram/>, opts:["East","West","North","South"], ans:0},
  {id:76, unit:5, unitName:"DIRECTION & CODING", q:"In a certain language: 'arrange things in order' = 'po gb ik mn'; 'order for new things' = 'bv fc po gb'; 'new places to order' = 'gb cq bv ra'; 'places in unknown country' = 'de ra hf ik'. What is the code for 'unknown'?", opts:["Cannot be determined","de","hf","ik"], ans:0},
  {id:77, unit:5, unitName:"DIRECTION & CODING", q:"[Same language code] What is the code for 'Order'?", opts:["gb","po","ik","bv"], ans:0},
  {id:78, unit:5, unitName:"DIRECTION & CODING", q:"[Same language code] Which of the following is coded as 'bv'?", opts:["new","order","for","places"], ans:0},
  {id:79, unit:5, unitName:"DIRECTION & CODING", q:"[Same language code] What is the code for 'things'?", opts:["po","gb","ik","mn"], ans:0},
  {id:80, unit:5, unitName:"DIRECTION & CODING", q:"Jay ranked 17th from the bottom in a class of 60 members. What is her rank from the top?", opts:["44th","43rd","45th","42nd"], ans:0},
  {id:81, unit:5, unitName:"DIRECTION & CODING", q:"Mohan is taller than Shyam but shorter than Ramesh. Ramesh is taller than Rajat but shorter than Gautam. If Shyam is taller than Rajat, who is the tallest among all?", opts:["Gautam","Ramesh","Mohan","Shyam"], ans:0},
  {id:82, unit:5, unitName:"DIRECTION & CODING", q:"In a certain code, 'GONE' is written as 5%2# and 'MEDAL' is written as 4#3$@. How will 'GOLD' be written in that code?", opts:["5%@3","5%2@","5@23","5%#3"], ans:0},
  {id:83, unit:5, unitName:"DIRECTION & CODING", q:"If MADRAS is coded as NBESBT, how is BOMBAY coded in that code?", opts:["CPNCBZ","CPMBAY","CNPCBZ","BPNCBZ"], ans:0},
  {id:84, unit:5, unitName:"DIRECTION & CODING", q:"'Reds' are 'blues', 'blues' are 'whites', 'whites' are 'yellows', 'yellows' are 'oranges', 'oranges' are 'pinks'. What is the colour of the sky?", opts:["White","Blue","Yellow","Pink"], ans:0},
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

const LETTERS = ["A","B","C","D"];

// ── Main App ──────────────────────────────────────────────────────────────────
export default function QuizApp() {
  const UNITS = [
    {id:0, label:"ALL UNITS", short:"ALL", count: ALL_QUESTIONS.length},
    {id:1, label:"PARTNERSHIP", short:"01", count: ALL_QUESTIONS.filter(q=>q.unit===1).length},
    {id:2, label:"RATIO & PROFIT/LOSS", short:"02", count: ALL_QUESTIONS.filter(q=>q.unit===2).length},
    {id:3, label:"HEIGHTS & DISTANCES", short:"03", count: ALL_QUESTIONS.filter(q=>q.unit===3).length},
    {id:4, label:"BLOOD RELATIONS", short:"04", count: ALL_QUESTIONS.filter(q=>q.unit===4).length},
    {id:5, label:"DIRECTION & CODING", short:"05", count: ALL_QUESTIONS.filter(q=>q.unit===5).length},
  ];

  const [screen, setScreen] = useState("home");
  const [selectedUnit, setSelectedUnit] = useState(0);
  const [shuffleQ, setShuffleQ] = useState(false);
  const [shuffleOpts, setShuffleOpts] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [optMapping, setOptMapping] = useState({});
  const [fade, setFade] = useState(true);

  const startQuiz = useCallback(() => {
    let qs = selectedUnit === 0 ? ALL_QUESTIONS : ALL_QUESTIONS.filter(q => q.unit === selectedUnit);
    if (shuffleQ) qs = shuffle(qs);
    const mapping = {};
    qs.forEach(q => { mapping[q.id] = shuffleOpts ? shuffle([0,1,2,3]) : [0,1,2,3]; });
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

  const goNext = () => {
    if (current < questions.length - 1) {
      setFade(false);
      setTimeout(() => { setCurrent(c => c + 1); setFade(true); }, 100);
    }
  };

  const goPrev = () => {
    if (current > 0) {
      setFade(false);
      setTimeout(() => { setCurrent(c => c - 1); setFade(true); }, 100);
    }
  };

  const submitQuiz = () => {
    setSubmitted(true);
  };

  const score = submitted ? questions.reduce((acc, q) => {
    const map = optMapping[q.id] || [0,1,2,3];
    const chosen = answers[q.id];
    if (chosen === undefined) return acc;
    return map[chosen] === q.ans ? acc + 1 : acc;
  }, 0) : 0;

  const pct = questions.length ? Math.round(score / questions.length * 100) : 0;
  const q = questions[current];
  const map = q ? (optMapping[q.id] || [0,1,2,3]) : [];

  // BUG FIX: define allAnswered so the submit button condition works
  const allAnswered = questions.length > 0 && Object.keys(answers).length === questions.length;

  // Shared label style
  const labelStyle = {fontSize:10,fontWeight:600,letterSpacing:2,textTransform:"uppercase",color:"#888",fontFamily:"var(--mono)"};

  // ── HOME SCREEN ───────────────────────────────────────────────────────────
  if (screen === "home") {
    return (
      <>
        <FontInjector/>
        <div style={{minHeight:"100vh",background:"var(--bg)",position:"relative"}}>
          <DotGrid opacity={0.15}/>

          <header style={{position:"relative",zIndex:2,borderBottom:"1px solid var(--border)",background:"var(--bg)"}}>
            <div style={{maxWidth:640,margin:"0 auto",padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{width:8,height:8,background:"var(--red)",borderRadius:"50%"}}/>
                <span style={{fontSize:14,fontWeight:700,letterSpacing:1,fontFamily:"var(--mono)"}}>QUIZ HUB</span>
              </div>
              <span
              style={{
                fontSize: 11,
                color: "#888",
                fontWeight: 500,
                fontFamily: "Noto Sans Tamil, Segoe UI, sans-serif",
                whiteSpace: "nowrap"
              }}
            >
              BY சிஜே.
            </span>
            </div>
          </header>

          <main style={{position:"relative",zIndex:2,maxWidth:640,margin:"0 auto",padding:"48px 24px 80px"}}>
            {/* Hero */}
            <div style={{marginBottom:56}}>
              <h1 style={{fontSize:42,fontWeight:700,lineHeight:1.05,letterSpacing:-1.5,margin:"0 0 12px",color:"var(--text)"}}>
                Aptitude<br/>
                <span style={{color:"var(--red)"}}>Practice</span>
              </h1>
              <p style={{fontSize:15,color:"#888",lineHeight:1.6,maxWidth:380,fontWeight:400}}>
                84 questions across 5 units. Select, practice, improve.
              </p>
            </div>

            {/* Unit Selection */}
            <div style={{marginBottom:40}}>
              <div style={{...labelStyle,marginBottom:16,paddingLeft:1}}>SELECT UNIT</div>
              <div style={{display:"flex",flexDirection:"column",gap:0,borderTop:"1px solid var(--border)"}}>
                {UNITS.map(u => {
                  const active = selectedUnit === u.id;
                  return (
                    <button key={u.id} onClick={() => setSelectedUnit(u.id)} style={{
                      display:"flex",alignItems:"center",gap:16,padding:"16px 4px",
                      borderBottom:"1px solid var(--border)",background:"none",borderLeft:"none",borderRight:"none",
                      cursor:"pointer",textAlign:"left",width:"100%",transition:"all .15s",
                    }}>
                      <span style={{fontFamily:"var(--mono)",fontSize:13,fontWeight:700,color: active ? "var(--red)" : "#CCC",width:28,transition:"color .15s"}}>{u.short}</span>
                      <span style={{flex:1,fontSize:15,fontWeight: active ? 700 : 400,color: active ? "var(--text)" : "#666",transition:"all .15s",letterSpacing: active ? 0.5 : 0}}>{u.label}</span>
                      <span style={{fontFamily:"var(--mono)",fontSize:11,color:"#CCC",fontWeight:400}}>{String(u.count).padStart(2,"0")}</span>
                      <span style={{width:16,height:16,borderRadius:"50%",border: active ? "none" : "1.5px solid #DDD",background: active ? "var(--red)" : "transparent",transition:"all .15s",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {active && <span style={{color:"white",fontSize:9}}>✓</span>}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Toggles */}
            <div style={{marginBottom:40}}>
              <div style={{...labelStyle,marginBottom:16,paddingLeft:1}}>PREFERENCES</div>
              <div style={{display:"flex",gap:12}}>
                {[
                  {label:"Shuffle Questions", val:shuffleQ, set:setShuffleQ},
                  {label:"Shuffle Options", val:shuffleOpts, set:setShuffleOpts},
                ].map(t => (
                  <button key={t.label} onClick={() => t.set(p => !p)} style={{
                    flex:1,padding:"14px 16px",borderRadius:2,
                    border: t.val ? "1.5px solid var(--red)" : "1.5px solid var(--border)",
                    background: t.val ? "var(--red-soft)" : "var(--surface)",cursor:"pointer",
                    display:"flex",alignItems:"center",justifyContent:"space-between",
                    transition:"all .15s",fontSize:13,fontWeight: t.val ? 600 : 400,
                    color: t.val ? "var(--red)" : "#666",
                  }}>
                    <span>{t.label}</span>
                    <span style={{
                      width:36,height:20,borderRadius:10,background: t.val ? "var(--red)" : "#E5E5E5",
                      position:"relative",transition:"background .2s",flexShrink:0,
                    }}>
                      <span style={{
                        width:16,height:16,borderRadius:"50%",background:"white",position:"absolute",top:2,
                        left: t.val ? 18 : 2,transition:"left .2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)",
                      }}/>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Start */}
            <button onClick={startQuiz} style={{
              width:"100%",padding:"18px",borderRadius:2,border:"none",
              background:"var(--red)",color:"white",
              fontSize:14,fontWeight:700,cursor:"pointer",letterSpacing:2,
              fontFamily:"var(--mono)",transition:"all .15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background="#E0342B"; }}
              onMouseLeave={e => { e.currentTarget.style.background="var(--red)"; }}
            >
              START QUIZ →
            </button>
          </main>
        </div>
      </>
    );
  }

  // ── RESULT SCREEN ─────────────────────────────────────────────────────────
  if (screen === "result") {
    const gradeColor = pct >= 80 ? "var(--green)" : pct >= 60 ? "var(--amber)" : "var(--red)";
    const gradeLabel = pct >= 80 ? "PASS" : pct >= 60 ? "AVERAGE" : "FAIL";
    const wrongCount = Object.keys(answers).filter(k => {
      const m = optMapping[Number(k)] || [0,1,2,3];
      const qx = questions.find(qx => qx.id === Number(k));
      return qx && m[answers[k]] !== qx.ans;
    }).length;
    const skippedCount = questions.length - Object.keys(answers).length;

    return (
      <>
        <FontInjector/>
        <div style={{minHeight:"100vh",background:"var(--bg)"}}>
          <header style={{borderBottom:"1px solid var(--border)",background:"var(--bg)",position:"sticky",top:0,zIndex:20}}>
            <div style={{maxWidth:640,margin:"0 auto",padding:"16px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{width:8,height:8,background:"var(--red)",borderRadius:"50%"}}/>
                <span style={{fontSize:14,fontWeight:700,letterSpacing:1,fontFamily:"var(--mono)"}}>RESULTS</span>
              </div>
              <button onClick={() => setScreen("home")} style={{
                padding:"6px 14px",borderRadius:2,border:"1.5px solid var(--border)",background:"var(--surface)",
                cursor:"pointer",fontSize:11,fontWeight:600,color:"#666",fontFamily:"var(--mono)",letterSpacing:1,transition:"all .15s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--red)"; e.currentTarget.style.color = "var(--red)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "#666"; }}
              >← BACK</button>
            </div>
          </header>

          <main style={{maxWidth:640,margin:"0 auto",padding:"40px 24px 80px"}}>
            {/* Score */}
            <div style={{textAlign:"center",marginBottom:48,paddingBottom:40,borderBottom:"1px solid var(--border)"}}>
              <div style={{...labelStyle,marginBottom:16,color:gradeColor}}>{gradeLabel}</div>
              <div style={{fontFamily:"var(--mono)",fontSize:72,fontWeight:700,lineHeight:1,color:gradeColor,letterSpacing:-4}}>
                {pct}<span style={{fontSize:24,color:"#CCC"}}>%</span>
              </div>
              <div style={{fontSize:14,color:"#888",marginTop:8,fontFamily:"var(--mono)"}}>
                {score}/{questions.length} CORRECT
              </div>

              <div style={{display:"flex",justifyContent:"center",gap:40,marginTop:32}}>
                {[
                  {label:"CORRECT",val:score,color:"var(--green)"},
                  {label:"WRONG",val:wrongCount,color:"var(--red)"},
                  {label:"SKIPPED",val:skippedCount,color:"var(--amber)"},
                ].map(s => (
                  <div key={s.label} style={{textAlign:"center"}}>
                    <div style={{fontFamily:"var(--mono)",fontSize:28,fontWeight:700,color:s.color,lineHeight:1}}>{String(s.val).padStart(2,"0")}</div>
                    <div style={{...labelStyle,fontSize:8,marginTop:6,color:s.color}}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Bar */}
              <div style={{maxWidth:300,margin:"24px auto 0",height:3,background:"#E5E5E5",borderRadius:0,overflow:"hidden"}}>
                <div style={{height:"100%",width:`${pct}%`,background:gradeColor,transition:"width .6s ease"}}/>
              </div>
            </div>

            {/* Review */}
            <div style={{...labelStyle,marginBottom:20,paddingLeft:1}}>REVIEW</div>
            <div style={{display:"flex",flexDirection:"column",gap:0}}>
              {questions.map((qx, idx) => {
                const m = optMapping[qx.id] || [0,1,2,3];
                const chosen = answers[qx.id];
                const correct = chosen !== undefined && m[chosen] === qx.ans;
                const isWrong = chosen !== undefined && !correct;
                const isSkipped = chosen === undefined;
                const borderColor = correct ? "var(--green)" : isWrong ? "var(--red)" : "var(--amber)";
                return (
                  <details key={qx.id} style={{borderBottom:"1px solid var(--border)"}}>
                    <summary style={{padding:"14px 0",cursor:"pointer",display:"flex",alignItems:"center",gap:12,fontSize:13,fontWeight:400,color:"var(--text)",listStyle:"none",userSelect:"none"}}>
                      <span style={{width:6,height:6,borderRadius:"50%",background:borderColor,flexShrink:0}}/>
                      <span style={{fontFamily:"var(--mono)",fontSize:11,color:"#CCC",fontWeight:400,width:28,flexShrink:0}}>Q{String(idx+1).padStart(2,"0")}</span>
                      <span style={{flex:1,lineHeight:1.4,color:"#444"}}>{qx.q.slice(0,70)}{qx.q.length > 70 ? "..." : ""}</span>
                      <span style={{color:"#CCC",fontSize:10,fontFamily:"var(--mono)",flexShrink:0}}>+</span>
                    </summary>
                    <div style={{padding:"0 0 16px 18px",borderLeft:"2px solid var(--border)",marginLeft:2,paddingLeft:18}}>
                      <div style={{fontSize:14,fontWeight:500,color:"var(--text)",marginBottom:12,lineHeight:1.6}}>{qx.q}</div>
                      {qx.diagram && <div style={{marginBottom:12}}>{qx.diagram}</div>}
                      <div style={{fontSize:12,color:"var(--green)",fontWeight:600,fontFamily:"var(--mono)",marginBottom:4}}>
                        ✓ {qx.opts[qx.ans]}
                      </div>
                      {isWrong && (
                        <div style={{fontSize:12,color:"var(--red)",fontWeight:600,fontFamily:"var(--mono)"}}>
                          ✗ {qx.opts[m[chosen]]}
                        </div>
                      )}
                      {isSkipped && (
                        <div style={{fontSize:12,color:"var(--amber)",fontWeight:600,fontFamily:"var(--mono)"}}>
                          — SKIPPED
                        </div>
                      )}
                    </div>
                  </details>
                );
              })}
            </div>
          </main>
        </div>
      </>
    );
  }

  // ── QUIZ SCREEN ───────────────────────────────────────────────────────────
  if (!q) return null;
  const chosenDisplay = answers[q.id];
  const getOptState = (displayIdx) => {
    const realIdx = map[displayIdx];
    if (!submitted) return chosenDisplay === displayIdx ? "selected" : "";
    if (realIdx === q.ans) return "correct";
    if (chosenDisplay === displayIdx && realIdx !== q.ans) return "wrong";
    return "";
  };
  const progressPct = ((current + 1) / questions.length) * 100;

  const optStyle = (state) => {
    const styles = {
      selected: {border:"1.5px solid var(--red)",bg:"var(--red-soft)",letterBg:"var(--red)",letterColor:"white",textColor:"var(--red)",textWeight:600},
      correct: {border:"1.5px solid var(--green)",bg:"var(--green-soft)",letterBg:"var(--green)",letterColor:"white",textColor:"var(--green)",textWeight:600},
      wrong: {border:"1.5px solid var(--red)",bg:"var(--red-soft)",letterBg:"var(--red)",letterColor:"white",textColor:"var(--red)",textWeight:600},
      "": {border:"1.5px solid var(--border)",bg:"var(--surface)",letterBg:"#F5F5F5",letterColor:"#AAA",textColor:"var(--text)",textWeight:400},
    };
    return styles[state] || styles[""];
  };

  return (
    <>
      <FontInjector/>
      <div style={{minHeight:"100vh",background:"var(--bg)"}}>
        {/* Header */}
        <header style={{borderBottom:"1px solid var(--border)",background:"var(--bg)",position:"sticky",top:0,zIndex:20}}>
          <div style={{maxWidth:640,margin:"0 auto",padding:"16px 24px"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{width:8,height:8,background:"var(--red)",borderRadius:"50%"}}/>
                <span style={{fontSize:11,fontWeight:600,letterSpacing:1.5,fontFamily:"var(--mono)",color:"#888"}}>{q.unitName}</span>
              </div>
              <span style={{fontFamily:"var(--mono)",fontSize:13,fontWeight:700,color:"var(--text)"}}>
                {String(current+1).padStart(2,"0")}<span style={{color:"#CCC"}}>/{String(questions.length).padStart(2,"0")}</span>
              </span>
            </div>
            <div style={{height:2,background:"#E5E5E5",borderRadius:0,overflow:"hidden"}}>
              <div style={{height:"100%",width:`${progressPct}%`,background:"var(--red)",transition:"width .25s ease"}}/>
            </div>
          </div>
        </header>

        <main style={{maxWidth:640,margin:"0 auto",padding:"24px 24px 120px"}}>
          {/* Dot nav */}
          <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:28}}>
            {questions.map((qx, i) => {
              const m2 = optMapping[qx.id] || [0,1,2,3];
              const a2 = answers[qx.id];
              const isCorrect = submitted && a2 !== undefined && m2[a2] === qx.ans;
              const isWrong = submitted && a2 !== undefined && m2[a2] !== qx.ans;
              let bg = "#ECECEC", fg = "#BBB";
              if (i === current) { bg = "var(--red)"; fg = "white"; }
              else if (isCorrect) { bg = "var(--green)"; fg = "white"; }
              else if (isWrong) { bg = "var(--red)"; fg = "white"; }
              else if (a2 !== undefined) { bg = "#CCC"; fg = "white"; }
              return (
                <button key={qx.id} onClick={() => setCurrent(i)} style={{
                  width:26,height:26,borderRadius:1,border:"none",background:bg,
                  color:fg,cursor:"pointer",fontSize:9,fontWeight:700,fontFamily:"var(--mono)",
                  transition:"all .1s",padding:0,
                }}>{i+1}</button>
              );
            })}
          </div>

          {/* Question */}
          <div style={{
            opacity: fade ? 1 : 0,transform: fade ? "translateY(0)" : "translateY(4px)",
            transition:"opacity .1s ease, transform .1s ease",
          }}>
            <div style={{...labelStyle,marginBottom:16}}>
              QUESTION {String(current+1).padStart(2,"0")}
            </div>

            <div style={{fontSize:17,fontWeight:600,lineHeight:1.7,color:"var(--text)",marginBottom:20,letterSpacing:-0.2}}>
              {q.q}
            </div>

            {q.diagram && <div style={{marginBottom:20}}>{q.diagram}</div>}

            {/* Options */}
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {q.opts.map((opt, displayIdx) => {
                const state = getOptState(displayIdx);
                const s = optStyle(state);
                const disabled = submitted;
                return (
                  <button key={displayIdx} onClick={() => selectAnswer(q.id, displayIdx)} disabled={disabled} style={{
                    padding:"14px 16px",borderRadius:2,border: s.border,background:s.bg,
                    cursor: disabled ? "default" : "pointer",textAlign:"left",fontSize:14,
                    display:"flex",alignItems:"center",gap:14,transition:"all .12s",
                    fontWeight: s.textWeight,color:s.textColor,width:"100%",outline:"none",
                    fontFamily:"var(--sans)",
                  }}
                    onMouseEnter={e => { if (!disabled && state === "") { e.currentTarget.style.borderColor = "#CCC"; e.currentTarget.style.background = "#FAFAFA"; }}}
                    onMouseLeave={e => { if (!disabled && state === "") { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--surface)"; }}}
                  >
                    <span style={{
                      width:26,height:26,borderRadius:2,background:s.letterBg,color:s.letterColor,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontSize:10,fontWeight:700,flexShrink:0,fontFamily:"var(--mono)",transition:"all .12s",
                    }}>
                      {state === "correct" ? "✓" : state === "wrong" ? "✗" : LETTERS[displayIdx]}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </main>

        {/* Bottom Nav */}
        <div style={{
          position:"fixed",bottom:0,left:0,right:0,
          background:"var(--bg)",borderTop:"1px solid var(--border)",
          padding:"14px 24px",zIndex:20,
        }}>
          <div style={{
            maxWidth:640,margin:"0 auto",
            display:"flex",justifyContent:"space-between",alignItems:"center",
          }}>
            {/* Prev */}
            <button onClick={goPrev} disabled={current === 0} style={{
              padding:"10px 20px",borderRadius:2,
              border:"1.5px solid var(--border)",
              background: current === 0 ? "var(--bg)" : "var(--surface)",
              cursor: current === 0 ? "not-allowed" : "pointer",
              fontSize:11,fontWeight:600,
              color: current === 0 ? "#DDD" : "#666",
              fontFamily:"var(--mono)",letterSpacing:1,
            }}>
              ← PREV
            </button>

            {/* Right side */}
            <div style={{display:"flex",gap:10}}>
              {!submitted && current < questions.length - 1 && (
                <button onClick={goNext} style={{
                  padding:"10px 20px",borderRadius:2,
                  border:"1.5px solid var(--border)",background:"var(--surface)",
                  cursor:"pointer",fontSize:11,fontWeight:600,color:"#666",
                  fontFamily:"var(--mono)",letterSpacing:1,
                }}>
                  NEXT →
                </button>
              )}

              {/* BUG FIX: allAnswered now references the variable defined above */}
              {!submitted && allAnswered && (
                <button onClick={submitQuiz} style={{
                  padding:"10px 24px",borderRadius:2,border:"none",
                  background:"var(--red)",color:"white",
                  fontSize:11,fontWeight:700,cursor:"pointer",
                  fontFamily:"var(--mono)",letterSpacing:1,
                }}>
                  SUBMIT
                </button>
              )}

              {submitted && (
                <button onClick={() => setScreen("result")} style={{
                  padding:"10px 24px",borderRadius:2,
                  border:"1.5px solid var(--red)",background:"transparent",
                  color:"var(--red)",fontSize:11,fontWeight:700,cursor:"pointer",
                  fontFamily:"var(--mono)",letterSpacing:1,
                }}>
                  VIEW RESULTS →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}