.qpe-container {

&#x20;   width: 440px;

&#x20;   padding: 3rem;

&#x20;   border-radius: 2.5rem;

&#x20;   background: rgba(3, 7, 18, 0.95);

&#x20;   backdrop-filter: blur(30px);

&#x20;   border: 1px solid rgba(14, 165, 233, 0.5);

}.qpe-screen {

&#x20;   position: relative;

&#x20;   width: 340px;

&#x20;   height: 340px;

&#x20;   border-radius: 50%;

&#x20;   background: radial-gradient(circle, #0284c7 0%, #0f172a 50%, #030712 100%);

&#x20;   border: 1px solid #0ea5e9;

&#x20;   overflow: hidden;

&#x20;   margin: 0 auto 3rem auto;

&#x20;   box-shadow: inset 0 0 80px rgba(14, 165, 233, 0.4), 0 0 40px rgba(2, 132, 199, 0.3);

}.qpe-flux {

&#x20;   position: absolute;

&#x20;   width: 280px;

&#x20;   height: 280px;

&#x20;   background: conic-gradient(from 0deg, transparent, #0ea5e9, transparent);

&#x20;   border-radius: 50%;

&#x20;   animation: ease-qpe-spin 12s linear infinite;

}.flux-qpe-b { 

&#x20;   animation-direction: reverse; 

&#x20;   animation-duration: 16s; 

&#x20;   filter: hue-rotate(60deg); 

}.qpe-boundary-ring {

&#x20;   position: absolute;

&#x20;   width: 175px;

&#x20;   height: 175px;

&#x20;   border: 2px dashed #bae6fd;

&#x20;   border-radius: 50%;

&#x20;   box-shadow: 0 0 25px rgba(14, 165, 233, 0.6);

&#x20;   animation: ease-qpe-warp 4.5s ease-in-out infinite alternate;

}.qpe-core {

&#x20;   position: absolute;

&#x20;   width: 60px;

&#x20;   height: 60px;

&#x20;   border-radius: 50%;

&#x20;   background: radial-gradient(circle, #ffffff 0%, #0ea5e9 50%, #0f172a 100%);

&#x20;   box-shadow: 0 0 55px #0ea5e9, 0 0 95px #bae6fd;

&#x20;   animation: ease-qpe-breathe 1.5s ease-in-out infinite alternate;

}@keyframes ease-qpe-spin { 

&#x20;   from { transform: rotate(0deg); } 

&#x20;   to { transform: rotate(360deg); } 

}@keyframes ease-qpe-warp { 

&#x20;   0% { transform: scale(0.87) rotate(0deg); opacity: 0.4; } 

&#x20;   100% { transform: scale(1.17) rotate(180deg); opacity: 0.95; } 

}@keyframes ease-qpe-breathe { 

&#x20;   0% { transform: scale(0.82); box-shadow: 0 0 35px #0ea5e9; } 

&#x20;   100% { transform: scale(1.22); box-shadow: 0 0 80px #bae6fd; } 

}

