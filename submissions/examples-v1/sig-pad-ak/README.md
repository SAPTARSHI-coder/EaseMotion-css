* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e3ff2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.wrapper {
    width: 100%;
    max-width: 700px;
}

.card {
    background: #ffffff;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.header {
    text-align: center;
    margin-bottom: 25px;
}

.header h1 {
    font-size: 2rem;
    color: #1e3c72;
    margin-bottom: 5px;
}

.subtitle {
    color: #777;
    font-size: 0.95rem;
}

.canvas-box {
    position: relative;
    border: 3px dashed #2a5298;
    border-radius: 12px;
    background: #fafbff;
    overflow: hidden;
    margin-bottom: 20px;
}

#sigCanvas {
    display: block;
    width: 100%;
    height: 280px;
    cursor: crosshair;
    touch-action: none;
}

.placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #aaa;
    font-size: 1.2rem;
    pointer-events: none;
    user-select: none;
}

.controls {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.color-picker, .size-picker {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    color: #444;
    font-weight: 500;
}

#penColor {
    width: 40px;
    height: 35px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

#penSize {
    width: 120px;
    accent-color: #2a5298;
}

.buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 10px 22px;
    font-size: 0.95rem;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.25s ease;
    color: white;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.btn.primary { background: linear-gradient(135deg, #11998e, #38ef7d); }
.btn.danger  { background: linear-gradient(135deg, #eb3349, #f45c43); }
.btn.secondary { background: linear-gradient(135deg, #4b6cb7, #182848); }

@media (max-width: 500px) {
    .card { padding: 20px; }
    .header h1 { font-size: 1.5rem; }
    #sigCanvas { height: 220px; }
    .btn { padding: 9px 16px; font-size: 0.85rem; }
}