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

// Diagrams are kept but with eslint-disable comments to fix the build
/* eslint-disable no-unused-vars */
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
/* eslint-enable no-unused-vars */

// ── Question Data ─────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // UNIT I – Number System, Squares, Cubes & Divisibility
  {id:1, unit:1, unitName:"NUMBER SYSTEM", q:"What is the unit digit of 2125^23569?", opts:["5","1","9","3"], ans:0},
  {id:2, unit:1, unitName:"NUMBER SYSTEM", q:"Find the face value of 8 and place value of 7 in 9785.", opts:["8, 700","8, 70","8, 7000","8, 7"], ans:0},
  {id:3, unit:1, unitName:"NUMBER SYSTEM", q:"If the side of a cube is 24 cm, what will be its volume?", opts:["13824 cm³","13824 cm²","13824 cm","1382 cm³"], ans:0},
  {id:4, unit:1, unitName:"NUMBER SYSTEM", q:"If the side of a cube is 15 cm, what will be its volume?", opts:["3375 cm³","3375 cm²","3375 cm","337 cm³"], ans:0},
  {id:5, unit:1, unitName:"NUMBER SYSTEM", q:"Find the remainder when 81^56 is divided by 82.", opts:["1","81","-1","0"], ans:0},
  {id:6, unit:1, unitName:"NUMBER SYSTEM", q:"Find the cube root value of 42875.", opts:["35","25","45","55"], ans:0},
  {id:7, unit:1, unitName:"NUMBER SYSTEM", q:"What is the value to be substituted for x in 111x so that the number is divisible by 3?", opts:["3","6","9","0"], ans:0},
  {id:8, unit:1, unitName:"NUMBER SYSTEM", q:"Simplify: (7.456³ - 5.321³) ÷ (7.456² + 5.321² + 7.456×5.321)", opts:["2.135","3.135","1.135","4.135"], ans:0},
  {id:9, unit:1, unitName:"NUMBER SYSTEM", q:"What is the unit digit of 2126^758237?", opts:["6","1","4","9"], ans:0},
  {id:10, unit:1, unitName:"NUMBER SYSTEM", q:"Find the sum of place value of 9 and place value of 8 in 58694.", opts:["1010","110","1001","1000"], ans:0},
  {id:11, unit:1, unitName:"NUMBER SYSTEM", q:"Cara has 7056 marbles that she is using to make a square formation. How many marbles should be in each row?", opts:["84","78","92","76"], ans:0},
  {id:12, unit:1, unitName:"NUMBER SYSTEM", q:"If area of square is 1024 cm², find the length of side.", opts:["32 cm","22 cm","42 cm","28 cm"], ans:0},

  // UNIT II – Arithmetic, Percentage, Ratio & Proportion
  {id:13, unit:2, unitName:"ARITHMETIC", q:"A student calculates the arithmetic mean of the following 5 numbers: 10, 15, 20, 25 and x. He found the mean is 15. Find the value of x.", opts:["5","10","15","20"], ans:0},
  {id:14, unit:2, unitName:"ARITHMETIC", q:"Solve: ∛216 - √x = 2", opts:["16","8","4","36"], ans:0},
  {id:15, unit:2, unitName:"ARITHMETIC", q:"At present, the ratio between the ages of Arun and Deepak is 4:3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present?", opts:["15 years","12 years","18 years","20 years"], ans:0},
  {id:16, unit:2, unitName:"ARITHMETIC", q:"Simplify: 80 ÷ 5 + 40 of 70 ÷ 9 = ?", opts:["1696","1669","1966","1600"], ans:0},
  {id:17, unit:2, unitName:"ARITHMETIC", q:"25% of 320 + X% of 500 = 50% of 420. Find X.", opts:["26","20","30","24"], ans:0},
  {id:18, unit:2, unitName:"ARITHMETIC", q:"What is the value to be substituted for x in 56x2 so that the number is divisible by 4?", opts:["1","2","3","4"], ans:0},
  {id:19, unit:2, unitName:"ARITHMETIC", q:"Simplify: 0.63÷0.63 + 0.37÷0.37 + 2×0.63×0.37", opts:["1","2","3","0.5"], ans:0},
  {id:20, unit:2, unitName:"ARITHMETIC", q:"A grocer mixes two varieties of rice costing ₹15 per kg and ₹25 per kg in the ratio 1:1. What is the price per kg of the resulting mixture?", opts:["₹20","₹18","₹22","₹25"], ans:0},
  {id:21, unit:2, unitName:"ARITHMETIC", q:"What is the unit digit of 616^897?", opts:["6","1","4","9"], ans:0},
  {id:22, unit:2, unitName:"ARITHMETIC", q:"Find the sum of place value of 1 and place value of 7 in 431570.", opts:["1070","1700","1007","7001"], ans:0},
  {id:23, unit:2, unitName:"ARITHMETIC", q:"Simplify: 0.35÷0.35 + 0.65÷0.65 + 2×0.35×0.65", opts:["1","2","3","0.5"], ans:0},
  {id:24, unit:2, unitName:"A  </svg>
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
  // UNIT I – Number System, Squares, Cubes & Divisibility
  {id:1, unit:1, unitName:"NUMBER SYSTEM", q:"What is the unit digit of 2125^23569?", opts:["5","1","9","3"], ans:0},
  {id:2, unit:1, unitName:"NUMBER SYSTEM", q:"Find the face value of 8 and place value of 7 in 9785.", opts:["8, 700","8, 70","8, 7000","8, 7"], ans:0},
  {id:3, unit:1, unitName:"NUMBER SYSTEM", q:"If the side of a cube is 24 cm, what will be its volume?", opts:["13824 cm³","13824 cm²","13824 cm","1382 cm³"], ans:0},
  {id:4, unit:1, unitName:"NUMBER SYSTEM", q:"If the side of a cube is 15 cm, what will be its volume?", opts:["3375 cm³","3375 cm²","3375 cm","337 cm³"], ans:0},
  {id:5, unit:1, unitName:"NUMBER SYSTEM", q:"Find the remainder when 81^56 is divided by 82.", opts:["1","81","-1","0"], ans:0},
  {id:6, unit:1, unitName:"NUMBER SYSTEM", q:"Find the cube root value of 42875.", opts:["35","25","45","55"], ans:0},
  {id:7, unit:1, unitName:"NUMBER SYSTEM", q:"What is the value to be substituted for x in 111x so that the number is divisible by 3?", opts:["3","6","9","0"], ans:0},
  {id:8, unit:1, unitName:"NUMBER SYSTEM", q:"Simplify: (7.456³ - 5.321³) ÷ (7.456² + 5.321² + 7.456×5.321)", opts:["2.135","3.135","1.135","4.135"], ans:0},
  {id:9, unit:1, unitName:"NUMBER SYSTEM", q:"What is the unit digit of 2126^758237?", opts:["6","1","4","9"], ans:0},
  {id:10, unit:1, unitName:"NUMBER SYSTEM", q:"Find the sum of place value of 9 and place value of 8 in 58694.", opts:["1010","110","1001","1000"], ans:0},
  {id:11, unit:1, unitName:"NUMBER SYSTEM", q:"Cara has 7056 marbles that she is using to make a square formation. How many marbles should be in each row?", opts:["84","78","92","76"], ans:0},
  {id:12, unit:1, unitName:"NUMBER SYSTEM", q:"If area of square is 1024 cm², find the length of side.", opts:["32 cm","22 cm","42 cm","28 cm"], ans:0},

  // UNIT II – Arithmetic, Percentage, Ratio & Proportion
  {id:13, unit:2, unitName:"ARITHMETIC", q:"A student calculates the arithmetic mean of the following 5 numbers: 10, 15, 20, 25 and x. He found the mean is 15. Find the value of x.", opts:["5","10","15","20"], ans:0},
  {id:14, unit:2, unitName:"ARITHMETIC", q:"Solve: ∛216 - √x = 2", opts:["16","8","4","36"], ans:0},
  {id:15, unit:2, unitName:"ARITHMETIC", q:"At present, the ratio between the ages of Arun and Deepak is 4:3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present?", opts:["15 years","12 years","18 years","20 years"], ans:0},
  {id:16, unit:2, unitName:"ARITHMETIC", q:"Simplify: 80 ÷ 5 + 40 of 70 ÷ 9 = ?", opts:["1696","1669","1966","1600"], ans:0},
  {id:17, unit:2, unitName:"ARITHMETIC", q:"25% of 320 + X% of 500 = 50% of 420. Find X.", opts:["26","20","30","24"], ans:0},
  {id:18, unit:2, unitName:"ARITHMETIC", q:"What is the value to be substituted for x in 56x2 so that the number is divisible by 4?", opts:["1","2","3","4"], ans:0},
  {id:19, unit:2, unitName:"ARITHMETIC", q:"Simplify: 0.63÷0.63 + 0.37÷0.37 + 2×0.63×0.37", opts:["1","2","3","0.5"], ans:0},
  {id:20, unit:2, unitName:"ARITHMETIC", q:"A grocer mixes two varieties of rice costing ₹15 per kg and ₹25 per kg in the ratio 1:1. What is the price per kg of the resulting mixture?", opts:["₹20","₹18","₹22","₹25"], ans:0},
  {id:21, unit:2, unitName:"ARITHMETIC", q:"What is the unit digit of 616^897?", opts:["6","1","4","9"], ans:0},
  {id:22, unit:2, unitName:"ARITHMETIC", q:"Find the sum of place value of 1 and place value of 7 in 431570.", opts:["1070","1700","1007","7001"], ans:0},
  {id:23, unit:2, unitName:"ARITHMETIC", q:"Simplify: 0.35÷0.35 + 0.65÷0.65 + 2×0.35×0.65", opts:["1","2","3","0.5"], ans:0},
  {id:24, unit:2, unitName:"ARITHMETIC", q:"Solve: [30 - 2(5 + 3)] + 7 = ?", opts:["10.5","21","14","7"], ans:0},

  // UNIT III – Algebraic Identities & BODMAS
  {id:25, unit:3, unitName:"ALGEBRA & BODMAS", q:"Solve: 90 - [30 - {12 × (6 - 3 - 1)}]", opts:["84","96","74","64"], ans:0},
  {id:26, unit:3, unitName:"ALGEBRA & BODMAS", q:"Simplify: (0.8)³ + (0.2)³ + 3×0.8×0.2(0.8+0.2)", opts:["1","2","3","0.5"], ans:0},
  {id:27, unit:3, unitName:"ALGEBRA & BODMAS", q:"Simplify: 0.35×0.35 + 0.65×0.65 + 2×0.35×0.65", opts:["1","2","3","0.5"], ans:0},
  {id:28, unit:3, unitName:"ALGEBRA & BODMAS", q:"If a:b = 8:5 and a:c = 8:7, find a:b:c.", opts:["8:5:7","5:8:7","8:7:5","7:5:8"], ans:0},
  {id:29, unit:3, unitName:"ALGEBRA & BODMAS", q:"Divide ₹672 in the ratio 7:5.", opts:["₹392 and ₹280","₹280 and ₹392","₹300 and ₹372","₹350 and ₹322"], ans:0},
  {id:30, unit:3, unitName:"ALGEBRA & BODMAS", q:"Solve: 78 - [24 - {16 × (5 - 4 - 1)}]", opts:["54","64","44","74"], ans:0},
  {id:31, unit:3, unitName:"ALGEBRA & BODMAS", q:"Simplify: (0.8)³ + (0.2)³ + 3×0.8×0.2(0.8+0.2)", opts:["1","2","3","0.5"], ans:0},
  {id:32, unit:3, unitName:"ALGEBRA & BODMAS", q:"A bag contains 50 paise, 20 paise, and 10 paise coins in the ratio 3:5:7, amounting to ₹96. Find the number of 20 paise coins.", opts:["150","100","200","120"], ans:0},
  {id:33, unit:3, unitName:"ALGEBRA & BODMAS", q:"Find the mean proportion of 49 and 16.", opts:["28","32","24","36"], ans:0},

  // UNIT IV – Ratio, Average & Alligation
  {id:34, unit:4, unitName:"RATIO & AVERAGE", q:"Find the mean proportion of 64 and 16.", opts:["32","28","24","36"], ans:0},
  {id:35, unit:4, unitName:"RATIO & AVERAGE", q:"A dishonest shopkeeper mixed cheaper quality rice, priced at ₹12/kg with good quality rice, priced at ₹25/kg, and sold the mixture at ₹35/kg. Find the ratio in which he mixes the two qualities of rice.", opts:["23:2","2:23","10:25","25:12"], ans:0},
  {id:36, unit:4, unitName:"RATIO & AVERAGE", q:"If a:b=2:3, b:c=3:7, c:d=1:5. Find a:b:c:d.", opts:["2:3:7:35","2:3:7:5","3:7:35:2","7:35:2:3"], ans:0},
  {id:37, unit:4, unitName:"RATIO & AVERAGE", q:"A container contains 40 litres of milk. From this container 4 litres of milk was taken out and replaced by water. This process was repeated further two times. How much milk is now contained by the container?", opts:["29.16 litres","30 litres","28 litres","32 litres"], ans:0},
  {id:38, unit:4, unitName:"RATIO & AVERAGE", q:"Find the average of first 421 even numbers.", opts:["422","421","420","400"], ans:0},
  {id:39, unit:4, unitName:"RATIO & AVERAGE", q:"What is the formula to find the average of first 'n' even numbers?", opts:["n+1","n-1","n","2n"], ans:0},
  {id:40, unit:4, unitName:"RATIO & AVERAGE", q:"Find the average of first 257 odd numbers.", opts:["257","256","258","255"], ans:0},
  {id:41, unit:4, unitName:"RATIO & AVERAGE", q:"At present, the ratio between the ages of Arun and Deepak is 4:3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present?", opts:["15 years","12 years","18 years","20 years"], ans:0},
  {id:42, unit:4, unitName:"RATIO & AVERAGE", q:"Find the average of first 849 even numbers.", opts:["850","849","848","840"], ans:0},
  {id:43, unit:4, unitName:"RATIO & AVERAGE", q:"Which of the following is the same as Chemistry, Physics, and Biology?", opts:["Science","Mathematics","English","History"], ans:0},

  // UNIT V – Logical Reasoning, Images & Quantitative Aptitude
  {id:44, unit:5, unitName:"LOGICAL REASONING", q:"The total daily salary of the writers in a company is ₹72,000. The average daily salary of a writer is ₹1,200. Find the number of writers in the company.", opts:["60","50","70","80"], ans:0},
  {id:45, unit:5, unitName:"LOGICAL REASONING", q:"Choose the alternative which closely resembles the water-image of the given combination: A1M3b", opts:["VW3P","VW3P","VW3P","VWEP"], ans:0},
  {id:46, unit:5, unitName:"LOGICAL REASONING", q:"Determine the water image of the following: monday", opts:["yadnom","yebnom","lequow","wouqsa"], ans:0},
  {id:47, unit:5, unitName:"LOGICAL REASONING", q:"A dishonest shopkeeper mixed cheaper quality rice, priced at ₹10/kg with good quality rice, priced at ₹25/kg, and sold the mixture at ₹35/kg. Find the ratio in which he mixes the two qualities of rice.", opts:["4:1","1:4","3:2","2:3"], ans:0},
  {id:48, unit:5, unitName:"LOGICAL REASONING", q:"If number of rows is equal to number of columns in auditorium, find the number of chairs if it has 45 columns.", opts:["2025","2024","2026","2040"], ans:0},
  {id:49, unit:5, unitName:"LOGICAL REASONING", q:"If number of rows is equal to number of columns in auditorium, find the number of chairs if it has 67 columns.", opts:["4489","4488","4490","4470"], ans:0},
  {id:50, unit:5, unitName:"LOGICAL REASONING", q:"If number of rows is equal to number of columns in auditorium, find the number of chairs if it has 93 columns.", opts:["8649","8648","8650","8630"], ans:0},
  {id:51, unit:5, unitName:"LOGICAL REASONING", q:"Find the value of: 40 - [20 - {14 - (16 - 6×4 - 2)}]", opts:["44","34","54","64"], ans:0},
  {id:52, unit:5, unitName:"LOGICAL REASONING", q:"If area of square is 7056 cm², find the length of side.", opts:["52 cm","54 cm","56 cm","48 cm"], ans:0},
  {id:53, unit:5, unitName:"LOGICAL REASONING", q:"If the side of a cube is 15 cm, what will be its volume?", opts:["3375 cm³","3375 cm²","3375 cm","337 cm³"], ans:0}
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
              {[0, 1, 2, 3].map((displayIdx) => {
                const opt = q.opts[map[displayIdx]];
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
