<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>مملكة الفقيه - sabriFX Edition</title>
    <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700;800&family=Tajawal:wght@500;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            --primary: #1e4d2b;
            --primary-dark: #153a20;
            --gold: #d4af37;
            --gold-light: #f4d03f;
            --bg: #f8faf9;
            --white: #ffffff;
            --danger: #e74c3c;
            --correct: #28a745;
            --shadow: 0 10px 40px rgba(0,0,0,0.15);
            --shadow-gold: 0 8px 30px rgba(212, 175, 55, 0.25);
        }

        * { box-sizing: border-box; }

        body {
            font-family: 'Almarai', 'Tajawal', sans-serif;
            background: linear-gradient(135deg, #f0f4f3 0%, #e8f5e9 100%);
            margin: 0; padding: 0;
            overflow-x: hidden;
            user-select: none;
            color: #333;
            min-height: 100vh;
        }

        /* ✨ تأثير الخلفية الإسلامية */
        body::before {
            content: "";
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: 
                radial-gradient(circle at 20% 80%, rgba(212,175,55,0.08) 0%, transparent 25%),
                radial-gradient(circle at 80% 20%, rgba(30,77,43,0.08) 0%, transparent 25%),
                radial-gradient(circle at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 35%);
            pointer-events: none;
            z-index: -1;
        }

        .game-header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);            min-height: 200px;
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            padding: 15px 10px 20px;
            box-shadow: var(--shadow);
            position: sticky; top: 0; z-index: 100;
            backdrop-filter: blur(10px);
        }

        .logo-container {
            width: 85px; height: 85px;
            background: white;
            border-radius: 50%;
            padding: 4px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.25), 0 0 0 3px var(--gold);
            margin-bottom: 12px;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }

        .logo-container img {
            width: 100%; height: 100%;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--gold);
        }

        .stats-bar {
            width: 100%;
            max-width: 500px;
            display: flex;
            justify-content: space-around;
            margin-top: 8px;
            padding: 0 5px;
            gap: 8px;
        }

        .stat-box { 
            text-align: center; 
            background: rgba(255,255,255,0.15);
            padding: 8px 12px;            border-radius: 15px;
            min-width: 75px;
            backdrop-filter: blur(5px);
            transition: transform 0.2s;
        }
        
        .stat-box:hover { transform: translateY(-3px); background: rgba(255,255,255,0.25); }
        
        .stat-box i { color: var(--gold); font-size: 18px; margin-bottom: 4px; display: block; }
        .stat-val { display: block; font-weight: 800; font-size: 18px; color: white; }
        .stat-label { font-size: 11px; color: rgba(255,255,255,0.9); margin-top: 2px; font-weight: 500; }

        .lives i { animation: pulse 1.5s infinite; }
        @keyframes pulse { 
            0%, 100% { transform: scale(1); opacity: 1; } 
            50% { transform: scale(1.2); opacity: 0.8; } 
        }

        .rank-display { 
            text-align: center; 
            margin-top: 12px; 
            background: rgba(212,175,55,0.2);
            padding: 6px 20px;
            border-radius: 25px;
            border: 1px solid var(--gold);
        }
        
        .rank-name { 
            font-weight: 800; 
            font-size: 16px; 
            color: var(--gold-light); 
            display: flex;
            align-items: center;
            gap: 6px;
            justify-content: center;
        }
        
        .rank-label { font-size: 10px; color: rgba(255,255,255,0.85); margin-top: 3px; }

        .progress-bar {
            width: 100%;
            max-width: 500px;
            height: 8px;
            background: rgba(255,255,255,0.2);
            border-radius: 10px;
            margin-top: 10px;
            overflow: hidden;
        }
        
        .progress-fill {            height: 100%;
            background: linear-gradient(90deg, var(--gold), var(--gold-light));
            border-radius: 10px;
            transition: width 0.5s ease;
            width: 0%;
        }

        .map-container {
            padding: 30px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 22px;
            padding-bottom: 110px;
            max-width: 600px;
            margin: 0 auto;
        }

        .level-node {
            width: 100%;
            max-width: 450px;
            background: var(--white);
            padding: 22px 25px;
            border-radius: 28px;
            display: flex;
            align-items: center;
            gap: 20px;
            box-shadow: var(--shadow);
            position: relative;
            cursor: pointer;
            transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 2px solid transparent;
            overflow: hidden;
        }
        
        .level-node::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; height: 4px;
            background: linear-gradient(90deg, var(--primary), var(--gold));
        }
        
        .level-node.locked { 
            opacity: 0.7; 
            filter: grayscale(0.8); 
            cursor: not-allowed; 
            transform: none !important;
        }
        
        .level-node.locked:hover { transform: none !important; }        
        .level-node.active { 
            border-color: var(--gold); 
            transform: scale(1.025); 
            box-shadow: var(--shadow-gold);
            animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
            from { box-shadow: 0 15px 35px rgba(212, 175, 55, 0.15); }
            to { box-shadow: 0 15px 45px rgba(212, 175, 55, 0.35); }
        }
        
        .level-node.completed { 
            border-color: var(--correct); 
            background: linear-gradient(135deg, #fff 70%, #e8f5e9 100%);
        }
        
        .level-node.completed::before {
            background: linear-gradient(90deg, var(--correct), #4caf50);
        }

        .node-icon {
            width: 70px; height: 70px;
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            border-radius: 22px;
            display: flex; align-items: center; justify-content: center;
            color: var(--gold); font-size: 28px;
            box-shadow: 0 8px 25px rgba(30,77,43,0.3);
            flex-shrink: 0;
            position: relative;
            overflow: hidden;
        }
        
        .node-icon::after {
            content: "";
            position: absolute;
            top: -50%; left: -50%; width: 200%; height: 200%;
            background: radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%);
            animation: rotate 4s linear infinite;
        }
        
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .node-info { flex: 1; min-width: 0; }
        .node-info h3 { 
            margin: 0 0 6px 0; 
            font-size: 18px; 
            color: var(--primary); 
            font-weight: 800;             line-height: 1.4;
        }
        .node-info span { 
            font-size: 13px; 
            color: #666; 
            display: block;
            font-weight: 500;
        }
        
        .node-meta {
            display: flex;
            gap: 12px;
            margin-top: 8px;
            font-size: 12px;
            color: #777;
        }
        
        .node-meta i { color: var(--gold); margin-left: 4px; }

        .lock-icon { 
            position: absolute; 
            left: 25px; 
            color: #aaa; 
            font-size: 22px; 
            z-index: 2;
            text-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .completed-icon { 
            position: absolute; 
            left: 25px; 
            color: var(--correct); 
            font-size: 24px; 
            z-index: 2;
            animation: bounce 0.6s ease;
        }
        
        @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
        }

        .quiz-overlay {
            position: fixed; inset: 0; 
            background: linear-gradient(135deg, rgba(30,77,43,0.95), rgba(21,58,32,0.98));
            z-index: 200; 
            display: none; 
            flex-direction: column;
            animation: slideUp 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            backdrop-filter: blur(5px);        }

        @keyframes slideUp { 
            from { transform: translateY(100%); opacity: 0; } 
            to { transform: translateY(0); opacity: 1; } 
        }

        .quiz-header {
            background: linear-gradient(135deg, var(--primary-dark), var(--primary));
            height: 75px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: white;
            padding: 0 22px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.3);
            position: relative;
        }
        
        .quiz-header::after {
            content: "";
            position: absolute;
            bottom: 0; left: 0; right: 0; height: 2px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        .quiz-body { 
            padding: 25px 20px; 
            flex: 1; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            overflow-y: auto; 
            background: var(--bg);
        }

        .question-card {
            background: var(--white);
            width: 100%; max-width: 550px;
            padding: 40px 30px; 
            border-radius: 32px;
            text-align: center; 
            box-shadow: var(--shadow);
            margin-bottom: 25px;
            border: 1px solid rgba(0,0,0,0.05);
            position: relative;
            overflow: hidden;
        }
        
        .question-card::before {            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; height: 5px;
            background: linear-gradient(90deg, var(--primary), var(--gold), var(--correct));
        }
        
        .question-card h2 { 
            margin: 0; 
            font-size: 22px; 
            font-weight: 800; 
            line-height: 1.6; 
            color: #2c3e50; 
            position: relative;
            z-index: 2;
        }
        
        .question-number {
            display: inline-block;
            background: var(--gold);
            color: var(--primary);
            padding: 4px 14px;
            border-radius: 20px;
            font-weight: 800;
            font-size: 14px;
            margin-bottom: 15px;
        }

        .options-container { 
            width: 100%; 
            max-width: 550px; 
            display: flex; 
            flex-direction: column; 
            gap: 14px; 
        }
        
        .option-item {
            background: var(--white);
            padding: 20px 22px;
            border-radius: 22px; 
            font-weight: 700;
            display: flex; 
            align-items: center;
            cursor: pointer; 
            transition: all 0.25s;
            border: 2px solid #e8f4e9;
            font-size: 16px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }        
        .option-item:hover {
            border-color: var(--gold);
            transform: translateX(5px);
            box-shadow: 0 6px 20px rgba(212,175,55,0.15);
        }
        
        .option-item::before {
            content: attr(data-num);
            position: absolute;
            right: 20px;
            width: 28px; height: 28px;
            background: var(--primary);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 800;
        }

        .option-item.correct { 
            background: linear-gradient(135deg, #d4edda, #c3e6cb); 
            border-color: var(--correct); 
            color: #155724; 
            animation: correctAnim 0.4s ease;
        }
        
        .option-item.wrong { 
            background: linear-gradient(135deg, #f8d7da, #f5c6cb); 
            border-color: var(--danger); 
            color: #721c24; 
            animation: shake 0.5s; 
        }
        
        @keyframes correctAnim {
            0% { transform: scale(1); }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); }
        }

        @keyframes shake { 
            0%, 100% { transform: translateX(0); } 
            25% { transform: translateX(-12px); } 
            75% { transform: translateX(12px); } 
        }

        .info-box {
            background: linear-gradient(135deg, #fff9e6, #fff3cd);            border-right: 5px solid var(--gold);
            padding: 20px; 
            border-radius: 18px;
            margin-top: 20px; 
            width: 100%; 
            max-width: 550px;
            display: none; 
            text-align: right; 
            font-size: 15px;
            line-height: 1.6;
            box-shadow: 0 5px 20px rgba(212,175,55,0.15);
            animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .info-box strong { 
            color: var(--primary); 
            display: block; 
            margin-bottom: 8px;
            font-size: 16px;
        }

        .btn-next {
            background: linear-gradient(135deg, var(--gold), var(--gold-light));
            color: var(--primary-dark);
            border: none; 
            padding: 18px 30px; 
            width: 100%; 
            max-width: 550px;
            border-radius: 22px; 
            font-weight: 800; 
            font-size: 17px;
            margin-top: 25px; 
            cursor: pointer; 
            display: none;
            box-shadow: 0 8px 25px rgba(212,175,55,0.4);
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
        }
        
        .btn-next:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(212,175,55,0.6);
        }
                .btn-next:active {
            transform: translateY(1px);
        }
        
        .btn-next::after {
            content: "";
            position: absolute;
            top: -50%; left: -50%; width: 200%; height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .btn-next:hover::after {
            opacity: 1;
        }

        .result-overlay {
            position: fixed; inset: 0; 
            background: rgba(0,0,0,0.92);
            z-index: 300; 
            display: none; 
            justify-content: center; 
            align-items: center;
            backdrop-filter: blur(10px);
            animation: fadeIn 0.4s ease;
        }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        
        .win-card {
            background: var(--white); 
            padding: 45px 40px; 
            border-radius: 35px;
            text-align: center; 
            max-width: 450px; 
            width: 92%;
            box-shadow: 0 25px 80px rgba(0,0,0,0.4);
            position: relative;
            animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            70% { transform: scale(1.05); }
            100% { transform: scale(1); opacity: 1; }
        }
        
        .win-card::before {
            content: "";            position: absolute;
            top: 0; left: 0; right: 0; height: 6px;
            background: linear-gradient(90deg, var(--primary), var(--gold), var(--correct));
            border-radius: 35px 35px 0 0;
        }
        
        .win-card i { 
            font-size: 80px; 
            color: var(--gold); 
            margin-bottom: 25px; 
            display: block;
            animation: bounce 1s ease infinite alternate;
        }
        
        .win-card h1 {
            margin: 0 0 15px 0;
            color: var(--primary);
            font-size: 28px;
            font-weight: 800;
        }
        
        .win-card p {
            color: #555;
            font-size: 17px;
            line-height: 1.6;
            margin-bottom: 25px;
        }
        
        .points-earned {
            background: linear-gradient(135deg, var(--gold), var(--gold-light));
            color: var(--primary-dark);
            padding: 12px 25px;
            border-radius: 25px;
            font-weight: 800;
            font-size: 18px;
            display: inline-block;
            margin: 15px 0;
            box-shadow: 0 5px 20px rgba(212,175,55,0.4);
        }

        .footer-brand {
            position: fixed; bottom: 0; width: 100%;
            background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,249,0.98));
            padding: 14px 20px; 
            text-align: center;
            border-top: 1px solid rgba(0,0,0,0.08); 
            z-index: 50;
            font-size: 15px;
            box-shadow: 0 -3px 20px rgba(0,0,0,0.08);
        }        
        .footer-brand strong { 
            color: var(--primary); 
            font-weight: 800;
            position: relative;
        }
        
        .footer-brand strong::after {
            content: "";
            position: absolute;
            bottom: -3px; left: 0; right: 0; height: 2px;
            background: var(--gold);
            border-radius: 2px;
        }

        /* 🎯 تأثيرات النقاط */
        .points-popup {
            position: fixed;
            font-weight: 800;
            font-size: 20px;
            color: var(--gold);
            pointer-events: none;
            animation: floatUp 1s ease-out forwards;
            z-index: 1000;
            text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        
        @keyframes floatUp {
            0% { opacity: 1; transform: translateY(0) scale(1); }
            100% { opacity: 0; transform: translateY(-50px) scale(1.3); }
        }

        /* 📱 تحسينات الجوال */
        @media (max-width: 480px) {
            .game-header { min-height: 210px; border-radius: 0 0 40px 40px; }
            .logo-container { width: 75px; height: 75px; }
            .stat-val { font-size: 16px; }
            .stat-label { font-size: 10px; }
            .rank-name { font-size: 14px; }
            .node-info h3 { font-size: 16px; }
            .question-card { padding: 30px 20px; }
            .question-card h2 { font-size: 19px; }
            .option-item { padding: 16px 18px; font-size: 15px; }
            .btn-next { padding: 16px; font-size: 16px; }
            .win-card { padding: 35px 25px; }
            .win-card i { font-size: 65px; }
        }

        /* ✨ تأثير التحميل */
        .loading {            position: fixed;
            inset: 0;
            background: var(--bg);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            transition: opacity 0.4s;
        }
        
        .loading.hidden {
            opacity: 0;
            pointer-events: none;
        }
        
        .loading-spinner {
            width: 60px;
            height: 60px;
            border: 5px solid rgba(30,77,43,0.1);
            border-top-color: var(--gold);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
        }
        
        @keyframes spin { to { transform: rotate(360deg); } }
        
        .loading-text {
            color: var(--primary);
            font-weight: 700;
            font-size: 18px;
        }

        /* 🔔 إشعارات */
        .toast {
            position: fixed;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: var(--white);
            padding: 15px 25px;
            border-radius: 20px;
            box-shadow: var(--shadow);
            font-weight: 700;
            z-index: 500;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: transform 0.3s ease;            border-right: 4px solid var(--gold);
        }
        
        .toast.show {
            transform: translateX(-50%) translateY(0);
        }
        
        .toast.success { border-color: var(--correct); }
        .toast.error { border-color: var(--danger); }
        .toast i { font-size: 20px; }
    </style>
</head>
<body>

<!-- شاشة التحميل -->
<div class="loading" id="loadingScreen">
    <div class="loading-spinner"></div>
    <div class="loading-text">جاري تحميل مملكة الفقيه...</div>
</div>

<!-- رأس اللعبة -->
<div class="game-header">
    <div class="logo-container">
        <img src="https://i.postimg.cc/zGSvxgCn/1775323811617.png" alt="مملكة الفقيه">
    </div>
    <div class="stats-bar">
        <div class="stat-box lives">
            <i class="fas fa-heart"></i>
            <span class="stat-val" id="livesCont">30</span>
            <span class="stat-label">قلوب</span>
        </div>
        <div class="stat-box">
            <i class="fas fa-star"></i>
            <span class="stat-val" id="pointsCont">0</span>
            <span class="stat-label">نقاطك</span>
        </div>
        <div class="stat-box">
            <i class="fas fa-medal"></i>
            <span class="stat-val" id="rankName">مبتدئ</span>
            <span class="stat-label">رتبتك</span>
        </div>
    </div>
    <div class="rank-display">
        <span class="rank-name" id="rankDisplay">🌱 مبتدئ</span>
        <div class="rank-label">مرحلتك العلمية</div>
    </div>
    <div class="progress-bar">
        <div class="progress-fill" id="rankProgress"></div>
    </div>
</div>
<!-- خريطة المراحل -->
<div class="map-container" id="gameMap"></div>

<!-- شاشة الأسئلة -->
<div class="quiz-overlay" id="quizOverlay">
    <div class="quiz-header">
        <button onclick="confirmCloseQuiz()" style="background:none; border:none; color:white; font-size:24px; cursor:pointer; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; transition:0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='none'">
            <i class="fas fa-times"></i>
        </button>
        <h2 id="stageTitle" style="margin:0; font-size:18px; font-weight:800; text-align:center; flex:1;">اسم المرحلة</h2>
        <div style="width:40px; text-align:left; font-weight:700; color:var(--gold);" id="questionCounter">1/10</div>
    </div>
    <div class="quiz-body">
        <div class="question-card">
            <span class="question-number">سؤال <span id="currentQNum">1</span></span>
            <h2 id="questionText">السؤال يظهر هنا؟</h2>
        </div>
        <div class="options-container" id="optionsCont"></div>
        <div id="infoBox" class="info-box">
            <strong>💡 فائدة علمية:</strong> <span id="expText">الشرح يظهر هنا.</span>
        </div>
        <button id="nextBtn" class="btn-next" onclick="nextStep()">المتابعة <i class="fas fa-arrow-left" style="margin-right:8px;"></i></button>
    </div>
</div>

<!-- شاشة النتيجة -->
<div id="resultOverlay" class="result-overlay">
    <div class="win-card">
        <i class="fas fa-crown"></i>
        <h1>🎉 مبارك الإنجاز!</h1>
        <p>لقد أتممت هذه المرحلة بنجاح، وزاد علمك ونورك. استمر في الرحلة!</p>
        <div class="points-earned">+<span id="earnedPoints">100</span> نقطة</div>
        <button class="btn-next" style="display:block; margin:10px auto;" onclick="closeResult()">العودة للخريطة <i class="fas fa-map" style="margin-right:8px;"></i></button>
        <button class="btn-next" style="display:block; margin:5px auto; background:linear-gradient(135deg, #28a745, #20c997);" onclick="nextStage()">المرحلة التالية <i class="fas fa-arrow-left" style="margin-right:8px;"></i></button>
    </div>
</div>

<!-- التذييل -->
<div class="footer-brand">
    <span>تطوير وإشراف </span><strong>sabriFX</strong> <span>• مملكة الفقيه</span>
</div>

<!-- إشعارات عائمة -->
<div class="toast" id="toast">
    <i class="fas fa-info-circle"></i>
    <span id="toastMsg">رسالة الإشعار</span>
</div>

<script>    // ========================================
    // 📊 بيانات اللعبة - المراحل والأسئلة
    // ========================================
    
    const stagesData = [
        {
            id: 0, 
            title: "المرحلة الأولى: فقه الطهارة", 
            icon: "fa-faucet",
            type: "fiqh",
            color: "#1e4d2b",
            questions: [
                { q: "ما هو حكم السواك عند الوضوء؟", opts: ["واجب", "سنة مؤكدة", "مكروه"], ans: 1, exp: "السواك سنة مؤكدة ثبتت عن النبي ﷺ في أحاديث كثيرة، وهو من أسباب مرضاة الرب." },
                { q: "كم عدد فروض الوضوء؟", opts: ["أربعة", "ستة", "ثمانية"], ans: 1, exp: "فروض الوضوء ستة: غسل الوجه، اليدين إلى المرفقين، مسح الرأس، غسل الرجلين إلى الكعبين، الترتيب، والموالاة." },
                { q: "الماء الذي خالطته نجاسة فغيرت طعمه أو لونه أو رائحته هو ماء:", opts: ["طهور", "طاهر", "نجس"], ans: 2, exp: "الإجماع على أن الماء إذا تغيرت إحدى صفاته الثلاث بنجاسة أصبح نجساً لا يجوز التطهر به." },
                { q: "ما هو الترتيب الصحيح في التيمم؟", opts: ["مسح الوجه ثم الكفين", "مسح الكفين ثم الوجه", "غسل اليدين"], ans: 0, exp: "التيمم ضربة واحدة للوجه والكفين معاً، يمسح بها الوجه أولاً ثم الكفين إلى الرسغين." },
                { q: "غسل أعضاء الوضوء أكثر من ثلاث مرات يعتبر:", opts: ["مستحب", "مباح", "مكروه"], ans: 2, exp: "الزيادة على ثلاث في الوضوء من الاعتداء في الطهور، وهو مكروه عند جمهور العلماء." },
                { q: "ما الذي ينقض الوضوء من الأمور التالية؟", opts: ["مسح الرأس", "خروج ريح", "المس دون شهوة"], ans: 1, exp: "خروج الريح من أحد السبيلين من نواقض الوضوء المتفق عليها بين العلماء." },
                { q: "هل يشترط النية في الوضوء؟", opts: ["لا يشترط", "يشترط عند جمهور العلماء", "يشترط فقط في الغسل"], ans: 1, exp: "النية ركن في العبادات القلبية، والوضوء عبادة فلا يصح بدون نية التقرب إلى الله." },
                { q: "ما حكم المسح على الخفين؟", opts: ["حرام", "جائز بشروط", "واجب"], ans: 1, exp: "المسح على الخفين جائز بثبوت السنة الصحيحة، وبشروط: أن يلبسا على طهارة، وأن يكونا ساترين لمحل الفرض." },
                { q: "كم مدة المسح على الخفين للمقيم؟", opts: ["ثلاثة أيام", "يوم وليلة", "أسبوع"], ans: 1, exp: "للمقيم يوم وليلة، وللمسافر ثلاثة أيام بلياليهن من أول مسح بعد الحدث." },
                { q: "ما هو الماء الطهور؟", opts: ["الماء النقي فقط", "الماء الطاهر في نفسه المطهر لغيره", "مياه الأنهار فقط"], ans: 1, exp: "الماء الطهور هو الباقي على طهوريته الذي لم يخالطه ما يغيره من النجاسات، فيطهر الحدث والخبث." }
            ]
        },
        {
            id: 1, 
            title: "المرحلة الثانية: فقه الصلاة والصيام", 
            icon: "fa-mosque",
            type: "fiqh",
            color: "#2e7d32",
            questions: [
                { q: "أي مما يلي يعتبر من شروط صحة الصلاة وليس من أركانها؟", opts: ["الركوع", "استقبال القبلة", "السجود"], ans: 1, exp: "الشرط يسبق الصلاة (كالقبلة والوقت والطهارة)، أما الركن فهو جزء من الصلاة لا تصح بدونه." },
                { q: "ما هي الصلاة التي ليس لها ركوع ولا سجود؟", opts: ["الكسوف", "الجنازة", "الاستسقاء"], ans: 1, exp: "صلاة الجنازة أربع تكبيرات فقط بدون ركوع أو سجود، والدعاء فيها للميت." },
                { q: "حكم قراءة الفاتحة للمأموم في الصلاة الجهرية؟", opts: ["واجبة", "سنة", "محل خلاف بين العلماء"], ans: 2, exp: "اختلف العلماء: فبعضهم يرى وجوبها، والبعض يرى أن قراءة الإمام قراءة له، والأحوط قراءتها في السكتات." },
                { q: "سجود السهو إذا كان عن نقص في الصلاة يكون:", opts: ["قبل السلام", "بعد السلام", "مخير"], ans: 0, exp: "السنة أن يكون سجود السهو لنقص الصلاة قبل السلام، وللزيادة بعده، وللشك فيهما." },
                { q: "من نسي الركوع وتذكره وهو في السجود، ماذا يفعل؟", opts: ["يكمل صلاته ويسجد للسهو", "يرجع فوراً للركوع", "تبطل ركعته"], ans: 1, exp: "يجب العودة للركن الذي نسيه فوراً لأن الركن لا يسقط بالسهو، ثم يكمل صلاته." },
                { q: "كم عدد ركعات صلاة الفجر؟", opts: ["ثلاث", "أربع", "ركعتان"], ans: 2, exp: "صلاة الفجر ركعتان فرضاً، وهما من أثقل الصلوات على المنافقين، وفيهما تقرأ سورة طويلة." },
                { q: "ما هو وقت صلاة العصر؟", opts: ["من زوال الشمس", "من حين ظل كل شيء مثله", "بعد المغرب"], ans: 1, exp: "وقت العصر من حين ظل كل شيء مثله بعد ظل الزوال، إلى اصفرار الشمس أو غروبها عند بعض العلماء." },
                { q: "حكم ترك الصلاة عمداً؟", opts: ["معصية فقط", "كفر أكبر عند جمهور العلماء", "مكروه"], ans: 1, exp: "جمهور العلماء على أن تارك الصلاة عمداً جحوداً أو تكاسلاً كافر كفراً مخرجاً عن الملة، والعياذ بالله." },
                { q: "متى يمسك الصائم عن الطعام؟", opts: ["أذان الفجر الأول", "أذان الفجر الصادق", "شروق الشمس"], ans: 1, exp: "الإمساك يبدأ مع طلوع الفجر الصادق المستطير في الأفق، وهو وقت دخول صلاة الفجر." },
                { q: "من أكل ناسياً في نهار رمضان فما حكمه؟", opts: ["عليه القضاء", "صيامه صحيح", "عليه الكفارة"], ans: 1, exp: "من أكل ناسياً فإنما أطعمه الله وسقاه، وصيامه صحيح ولا قضاء عليه، وليتم صومه." },
                { q: "ما هي الركعات التي تجب فيها القراءة بالفاتحة؟", opts: ["الأولى فقط", "الأولى والثانية", "جميع الركعات"], ans: 2, exp: "تجب قراءة الفاتحة في كل ركعة من ركعات الصلاة عند جمهور العلماء، وهي ركن من أركان الصلاة." },
                { q: "حكم صلاة الجماعة للرجال؟", opts: ["سنة", "واجبة", "مستحبة"], ans: 1, exp: "صلاة الجماعة واجبة على الرجال عند جمهور العلماء، وهي أفضل من صلاة الفذ بسبع وعشرين درجة." },
                { q: "ما هو أقل ما يصح به المسح على الخفين؟", opts: ["مسح ظاهرهما", "مسح باطنهما", "مسح جميعهما"], ans: 0, exp: "يكفي مسح ظاهر الخفين، ولا يشترط استيعابهما بالمسح، بل يكفي المسح على معظم ظاهرهما." },
                { q: "متى تبطل الصلاة؟", opts: ["بالكلام العمد", "بالحركة القليلة", "بالتثاؤب"], ans: 0, exp: "تبطل الصلاة بالكلام العمد لغير مصلحة الصلاة، أما الحركة القليلة والتثاؤب فلا يبطلانها." },
                { q: "ما حكم صلاة المسافر؟", opts: ["يجب عليه القصر", "يجوز له القصر", "لا يجوز له القصر"], ans: 1, exp: "يجوز للمسافر قصر الرباعية إلى ركعتين، وهو رخصة من الله، وليس واجباً عند أكثر العلماء." },
                { q: "ما هي النية في الصيام؟", opts: ["تكفي نية واحدة للشهر", "تجب لكل يوم", "تستحب فقط"], ans: 1, exp: "تجب النية لكل يوم من أيام رمضان عند جمهور العلماء، وتكون من الليل قبل طلوع الفجر." },
                { q: "من أفطر في رمضان لعذر شرعي، فماذا عليه؟", opts: ["الكفارة فقط", "القضاء فقط", "لا شيء"], ans: 1, exp: "من أفطر لعذر شرعي (مرض، سفر، حيض) فعليه قضاء الأيام التي أفطرها فقط، ولا كفارة عليه." },
                { q: "ما حكم صلاة التراويح؟", opts: ["واجبة", "سنة مؤكدة", "مكروهة"], ans: 1, exp: "صلاة التراويح سنة مؤكدة في رمضان، صلاها النبي ﷺ بأصحابه ثم تركها خشية أن تفرض عليهم." },
                { q: "كم عدد ركعات الوتر؟", opts: ["ركعة واحدة", "ثلاث ركعات", "أكثر من ذلك"], ans: 2, exp: "الوتر ركعة واحدة أو ثلاث أو خمس أو أكثر، وأقله ركعة، وأكمله إحدى عشرة أو ثلاث عشرة ركعة." },                { q: "ما هو وقت صلاة الوتر؟", opts: ["بعد العشاء فقط", "من بعد العشاء إلى الفجر", "قبل الفجر فقط"], ans: 1, exp: "وقت الوتر من بعد صلاة العشاء إلى طلوع الفجر، والأفضل تأخيره إلى آخر الليل لمن وثق باستيقاظه." }
            ]
        },
        {
            id: 2, 
            title: "المرحلة الثالثة: السيرة النبوية", 
            icon: "fa-book-open",
            type: "islamic",
            color: "#388e3c",
            questions: [
                { q: "في أي عام ولد النبي محمد ﷺ؟", opts: ["عام الفيل", "عام الحزن", "عام الهجرة"], ans: 0, exp: "وُلد النبي ﷺ في عام الفيل الموافق 571م تقريباً، وهو العام الذي حاول فيه أبرهة هدم الكعبة." },
                { q: "ما اسم والدة النبي ﷺ؟", opts: ["آمنة بنت وهب", "حليمة السعدية", "فاطمة بنت أسد"], ans: 0, exp: "والدة النبي ﷺ هي آمنة بنت وهب من بني زهرة، توفيت والأبواب في الأبواء والنبي ﷺ ابن ست سنين." },
                { q: "ما اسم الغار الذي كان يتعبد فيه النبي ﷺ؟", opts: ["غار حراء", "غار ثور", "غار أحد"], ans: 0, exp: "غار حراء في جبل النور هو مكان تعبد النبي ﷺ قبل البعثة، وفيه نزل عليه الوحي لأول مرة." },
                { q: "من أول من آمن من الرجال بالنبي ﷺ؟", opts: ["عمر بن الخطاب", "أبو بكر الصديق", "علي بن أبي طالب"], ans: 1, exp: "أبو بكر الصديق رضي الله عنه أول من آمن من الرجال البالغين، وكان نعم الصديق والنصير." },
                { q: "من أول من آمن من النساء بالنبي ﷺ؟", opts: ["عائشة رضي الله عنها", "خديجة رضي الله عنها", "فاطمة رضي الله عنها"], ans: 1, exp: "خديجة بنت خويلد رضي الله عنها أول من آمن من النساء، وكانت أول من أسلم من الناس جميعاً." },
                { q: "من أول من آمن من الصبيان بالنبي ﷺ؟", opts: ["عبد الله بن الزبير", "علي بن أبي طالب", "أسامة بن زيد"], ans: 1, exp: "علي بن أبي طالب رضي الله عنه أول من آمن من الصبيان، وكان في العاشرة من عمره حين أسلم." },
                { q: "كم سنة لبث النبي ﷺ في مكة بعد البعثة؟", opts: ["10 سنوات", "13 سنة", "15 سنة"], ans: 1, exp: "لبث النبي ﷺ في مكة بعد البعثة 13 سنة، يدعو الناس سراً ثم جهراً، ثم أذن له بالهجرة إلى المدينة." },
                { q: "ما اسم النقابة التي عقدت مع الأنصار في العقبة الأولى؟", opts: ["بيعة الرضوان", "بيعة العقبة الأولى", "بيعة الشجرة"], ans: 1, exp: "بيعة العقبة الأولى كانت مع 12 رجلاً من الأنصار، بايعوا النبي ﷺ على عدم الشرك والسرقة والزنا." },
                { q: "في أي سنة كانت الهجرة النبوية؟", opts: ["620م", "622م", "624م"], ans: 1, exp: "كانت الهجرة النبوية في سنة 622م، وهي بداية التقويم الهجري، وأعظم حدث في تاريخ الأمة الإسلامية." },
                { q: "ما اسم المسجد الذي صلى فيه النبي ﷺ أول جمعة في المدينة؟", opts: ["مسجد قباء", "المسجد النبوي", "مسجد بني سالم"], ans: 2, exp: "صلى النبي ﷺ أول جمعة في مسجد بني سالم بن عوف، ثم واصل مسيره إلى المدينة." },
                { q: "من هو الذي آخى النبي ﷺ بينه وبين نفسه؟", opts: ["أبو بكر", "علي", "عمر"], ans: 1, exp: "آخى النبي ﷺ بين علي بن أبي طالب وبين نفسه، فقال: 'أنت مني بمنزلة هارون من موسى'." },
                { q: "ما اسم الغزوة الأولى في الإسلام؟", opts: ["غزوة بدر", "غزوة أحد", "غزوة الأبواء"], ans: 2, exp: "غزوة الأبواء (ودان) هي أول غزوة غزاها النبي ﷺ في السنة الثانية للهجرة، ولم يحدث فيها قتال." },
                { q: "في أي غزوة كسرت رباعية النبي ﷺ؟", opts: ["بدر", "أحد", "الخندق"], ans: 1, exp: "في غزوة أحد كسرت رباعية النبي ﷺ، وشج في جبهته، وقال: 'كيف يفلح قوم خضبوا وجه نبيهم وهو يدعوهم إلى ربهم'." },
                { q: "ما اسم المرأة التي حاولت تسميم النبي ﷺ؟", opts: ["هند بنت عتبة", "زينب بنت الحارث", "أم جميل"], ans: 1, exp: "زينب بنت الحارث اليهودية حاولت تسميم النبي ﷺ في خيبر، فمات من تناول من الصحابة من ذلك السم." },
                { q: "في أي سنة كانت عمرة القضاء؟", opts: ["6هـ", "7هـ", "8هـ"], ans: 1, exp: "كانت عمرة القضاء في السنة السابعة للهجرة، بعد صلح الحديبية، حيث اعتمر النبي ﷺ وأصحابه." },
                { q: "ما اسم الفتح الذي قال عنه النبي ﷺ: 'اليوم يوم الملحمة'؟", opts: ["فتح مكة", "فتح خيبر", "فتح القسطنطينية"], ans: 1, exp: "قال النبي ﷺ يوم فتح خيبر: 'لأعطين الراية غداً رجلاً يحب الله ورسوله، ويحبه الله ورسوله'، فأعطاها علياً." },
                { q: "في أي سنة كانت حجة الوداع؟", opts: ["9هـ", "10هـ", "11هـ"], ans: 1, exp: "كانت حجة الوداع في السنة العاشرة للهجرة، وفيها نزل: 'اليوم أكملت لكم دينكم'، ثم توفي النبي ﷺ بعدها بثلاثة أشهر." },
                { q: "متى توفي النبي ﷺ؟", opts: ["12 ربيع الأول 11هـ", "2 ربيع الأول 11هـ", "1 ربيع الأول 11هـ"], ans: 0, exp: "توفي النبي ﷺ يوم الاثنين 12 ربيع الأول سنة 11هـ، في حجر عائشة رضي الله عنها، وعمره 63 سنة." },
                { q: "من هو آخر من مات من أزواج النبي ﷺ؟", opts: ["عائشة", "أم سلمة", "ميمونة"], ans: 1, exp: "آخر من مات من أزواج النبي ﷺ أم سلمة رضي الله عنها، توفيت سنة 59هـ، وعاشت بعده طويلاً." },
                { q: "ما اسم الناقة التي ركبها النبي ﷺ في الهجرة؟", opts: ["العضباء", "القصواء", "سبأ"], ans: 1, exp: "القصواء هي الناقة التي ركبها النبي ﷺ في الهجرة، وهي نفسها التي بركت عند موضع المسجد النبوي." },
                { q: "من هو الذي نام في فراش النبي ﷺ ليلة الهجرة؟", opts: ["أبو بكر", "علي", "زيد بن حارثة"], ans: 1, exp: "نام علي بن أبي طالب رضي الله عنه في فراش النبي ﷺ ليلة الهجرة، ليُظن أن النبي ﷺ فيه، فنجى الله نبيه." },
                { q: "ما اسم الغار الذي اختبأ فيه النبي ﷺ وأبو بكر؟", opts: ["غار حراء", "غار ثور", "غار أحد"], ans: 1, exp: "غار ثور هو الذي اختبأ فيه النبي ﷺ وأبو بكر ثلاثة أيام، ونزلت فيه: 'إلا تنصروه فقد نصره الله'." },
                { q: "من هو الذي دل النبي ﷺ على طريق الهجرة؟", opts: ["عبد الله بن أريقط", "عامر بن فهيرة", "أسماء بنت أبي بكر"], ans: 0, exp: "عبد الله بن أريقط الليثي كان دليلاً ماهراً، استأجره النبي ﷺ ليدله على طريق الهجرة، وكان مشركاً أميناً." },
                { q: "ما اسم البئر التي شرب منها النبي ﷺ في الهجرة؟", opts: ["بئر ميمونة", "بئر أبي عنبة", "بئر رومة"], ans: 1, exp: "بئر أبي عنبة هي التي شرب منها النبي ﷺ وتوضأ، ثم دعا لها بالبركة، فكانت لا تنضب." },
                { q: "في أي مكان نزل النبي ﷺ عند وصوله المدينة؟", opts: ["مسجد قباء", "دار أبي أيوب", "السقيفة"], ans: 1, exp: "نزل النبي ﷺ عند وصوله المدينة في دار أبي أيوب الأنصاري، حتى اكتمل بناء المسجد النبوي وحجره." }
            ]
        },
        {
            id: 3, 
            title: "المرحلة الرابعة: الصحابة والسنة", 
            icon: "fa-users",
            type: "islamic",
            color: "#43a047",
            questions: [
                { q: "من هو خليفة النبي ﷺ الأول؟", opts: ["عمر", "عثمان", "أبو بكر"], ans: 2, exp: "أبو بكر الصديق رضي الله عنه أول خليفة للمسلمين بعد النبي ﷺ، بايعه الناس في سقيفة بني ساعدة." },
                { q: "من هو صاحب سر النبي ﷺ؟", opts: ["علي", "حذيفة", "أبو بكر"], ans: 1, exp: "حذيفة بن اليمان رضي الله عنه كان صاحب سر النبي ﷺ في المنافقين، لا يخبر بهم أحداً حتى لا يقتلوا." },
                { q: "من هو الذي جمع القرآن في عهد أبي بكر؟", opts: ["علي بن أبي طالب", "زيد بن ثابت", "أبي بن كعب"], ans: 1, exp: "زيد بن ثابت الأنصاري رضي الله عنه هو الذي كلفه أبو بكر بجمع القرآن بعد استشهاد كثير من القراء في اليمامة." },
                { q: "من هو الذي قال: 'لو كان الوحي ينزل عليّ لما زدت على ما زاد'؟", opts: ["أبو بكر", "عمر", "عثمان"], ans: 0, exp: "قالها أبو بكر الصديق رضي الله عنه تواضعاً، وإشارة إلى كمال الوحي وعدم الحاجة للزيادة عليه." },
                { q: "من هو الذي بشر بالجنة وهو يمشي على الأرض؟", opts: ["أبو بكر", "عمر", "عثمان"], ans: 2, exp: "بشر النبي ﷺ عثمان بن عفان رضي الله عنه بالجنة، وبشره بالبلاء بعد ذلك، فصبر واحتسب." },
                { q: "من هو الذي لقب بـ 'أسد الله'؟", opts: ["حمزة", "علي", "خالد"], ans: 1, exp: "علي بن أبي طالب رضي الله عنه لُقب بأسد الله، لشجاعته وبلائه في الغزوات، وخاصة في غزوة خيبر." },                { q: "من هي التي لُقبت بـ 'أم المساكين'؟", opts: ["عائشة", "زينب بنت جحش", "فاطمة"], ans: 1, exp: "زينب بنت جحش رضي الله عنها لُقبت بأم المساكين، لكثرة صدقتها وإطعامها للفقراء." },
                { q: "من هو الذي قال: 'اللهم إني أسألك حبك وحب من يحبك'؟", opts: ["أبو بكر", "عمر", "بلال"], ans: 2, exp: "بلال بن رباح رضي الله عنه كان يردد هذا الدعاء، وهو من أعظم الأدعية الجامعة لمحبة الله ومحبة أوليائه." },
                { q: "من هو الذي كان يُسمى 'الأمين' قبل البعثة؟", opts: ["أبو بكر", "عمر", "محمد ﷺ"], ans: 2, exp: "كان النبي ﷺ يُسمى 'الأمين' في قريش قبل البعثة، لصدقه وأمانته، حتى أن خديجة استأمنته على مالها في التجارة." },
                { q: "من هي التي كانت تُسمى 'الطاهرة'؟", opts: ["خديجة", "عائشة", "فاطمة"], ans: 0, exp: "خديجة رضي الله عنها كانت تُسمى 'الطاهرة' في الجاهلية، ثم كانت أول من آمن بالنبي ﷺ." },
                { q: "من هو الذي كان يُكنى بـ 'أبي عبد الله'؟", opts: ["أبو بكر", "عمر", "عثمان"], ans: 0, exp: "أبو بكر الصديق رضي الله عنه كان يُكنى بأبي عبد الله، وهو من أشهر كناه." },
                { q: "من هو الذي قال: 'والله لو أنكم تضعونني في يميني لألقيتكم في بحركم هذا'؟", opts: ["خالد بن الوليد", "سعد بن أبي وقاص", "عمرو بن العاص"], ans: 0, exp: "قالها خالد بن الوليد رضي الله عنه في فتح مكة، حينما كاد بعض المشركين أن يعتدوا على المسلمين." },
                { q: "من هو الذي فتح مصر؟", opts: ["عمرو بن العاص", "خالد بن الوليد", "عقبة بن نافع"], ans: 0, exp: "فتح عمرو بن العاص رضي الله عنه مصر في عهد عمر بن الخطاب، وأسس مدينة الفسطاط." },
                { q: "من هو الذي قال: 'إنما الأعمال بالنيات'؟", opts: ["النبي ﷺ", "أبو بكر", "عمر"], ans: 0, exp: "حديث 'إنما الأعمال بالنيات' من أعظم أحاديث النبي ﷺ، وهو أول حديث في صحيح البخاري." },
                { q: "من هو الذي جمع بين البصر والبصيرة؟", opts: ["ابن عباس", "ابن مسعود", "ابن عمر"], ans: 0, exp: "عبد الله بن عباس رضي الله عنهما كان يُسمى 'حبر الأمة' و'ترجمان القرآن'، جمع بين علم الظاهر والباطن." },
                { q: "من هي التي كانت تُسمى 'الحميراء'؟", opts: ["عائشة", "حفصة", "جويرية"], ans: 0, exp: "عائشة رضي الله عنها كانت تُسمى 'الحميراء' لبياض بشرتها وإشراقها، وهي أحب أزواج النبي ﷺ إليه." },
                { q: "من هو الذي كان يُسمى 'ذو النورين'؟", opts: ["أبو بكر", "عمر", "عثمان"], ans: 2, exp: "عثمان بن عفان رضي الله عنه لُقب بذي النورين، لأنه تزوج ابنتي النبي ﷺ: رقية ثم أم كلثوم." },
                { q: "من هو الذي كان يُسمى 'الفاروق'؟", opts: ["أبو بكر", "عمر", "علي"], ans: 1, exp: "عمر بن الخطاب رضي الله عنه لُقب بالفاروق، لأنه فرق بين الحق والباطل، وأظهر الإسلام بعد خفائه." },
                { q: "من هو الذي كان يُسمى 'سيد الشهداء'؟", opts: ["حمزة", "جعفر", "مصعب"], ans: 0, exp: "حمزة بن عبد المطلب رضي الله عنه سيد الشهداء، قُتل في غزوة أحد، ومثّل به المشركون." },
                { q: "من هو الذي كان يُسمى 'طيار الجنة'؟", opts: ["جعفر بن أبي طالب", "زيد بن حارثة", "عبد الله بن جحش"], ans: 0, exp: "جعفر بن أبي طالب رضي الله عنه لُقب بطيار الجنة، لأنه قُطعت يداه في مؤتة، فأبدله الله جناحين يطير بهما في الجنة." },
                { q: "من هو الذي كان يُسمى 'أمين هذه الأمة'؟", opts: ["أبو عبيدة", "معاذ بن جبل", "أبو ذر"], ans: 0, exp: "أبو عبيدة عامر بن الجراح رضي الله عنه لُقب بأمين هذه الأمة، بأمر من النبي ﷺ." },
                { q: "من هو الذي قال: 'اللهم اجعل رزقي كفافاً'؟", opts: ["أبو ذر", "بلال", "سلمان"], ans: 0, exp: "أبو ذر الغفاري رضي الله عنه كان زاهداً، يدعو بهذا الدعاء، ويكتفي بالقليل من الدنيا." },
                { q: "من هي التي كانت تُسمى 'البتول'؟", opts: ["فاطمة", "عائشة", "خديجة"], ans: 0, exp: "فاطمة الزهراء رضي الله عنها لُقبت بالبتول، لانقطاعها عن الدنيا وإقبالها على الآخرة." },
                { q: "من هو الذي كان يُسمى 'حبر الأمة'؟", opts: ["ابن عباس", "ابن مسعود", "أبي بن كعب"], ans: 0, exp: "عبد الله بن عباس رضي الله عنهما لُقب بحبر الأمة، لسعة علمه وفقهه في الدين." },
                { q: "من هو الذي كان يُسمى 'فارس الإسلام'؟", opts: ["خالد بن الوليد", "عمرو بن العاص", "سعد بن أبي وقاص"], ans: 0, exp: "خالد بن الوليد رضي الله عنه لُقب بفارس الإسلام، لسرعة حركته وبراعته في القتال." },
                { q: "من هو الذي كان يُسمى 'كاتب الوحي'؟", opts: ["زيد بن ثابت", "معاوية", "عبد الله بن سعد"], ans: 0, exp: "زيد بن ثابت رضي الله عنه كان من كتاب الوحي، وهو الذي جمع القرآن في عهد أبي بكر وعثمان." },
                { q: "من هي التي كانت تُسمى 'أم المؤمنين'؟", opts: ["جميع أزواج النبي ﷺ", "خديجة فقط", "عائشة فقط"], ans: 0, exp: "جميع أزواج النبي ﷺ أمهات للمؤمنين، قال الله تعالى: 'وأزواجه أمهاتهم'." },
                { q: "من هو الذي كان يُسمى 'الصدّيق'؟", opts: ["أبو بكر", "عمر", "عثمان"], ans: 0, exp: "أبو بكر رضي الله عنه لُقب بالصدّيق، لتصديقه للنبي ﷺ في كل ما جاء به، وخاصة في حادثة الإسراء." },
                { q: "من هو الذي كان يُسمى 'المرجوح'؟", opts: ["بلال", "عمار", "صهيب"], ans: 1, exp: "عمار بن ياسر رضي الله عنه كان يُسمى 'المرجوح' لكثرة ما لاقى من التعذيب في الله، وهو من السابقين الأولين." },
                { q: "من هو الذي كان يُسمى 'صاحب سر النبي'؟", opts: ["حذيفة", "أبو هريرة", "أنس"], ans: 0, exp: "حذيفة بن اليمان رضي الله عنه كان صاحب سر النبي ﷺ في المنافقين، لا يخبر بهم أحداً." },
                { q: "من هو الذي كان يُسمى 'أبو تراب'؟", opts: ["علي", "حمزة", "جعفر"], ans: 0, exp: "علي بن أبي طالب رضي الله عنه لُقب بأبي تراب، حينما رآه النبي ﷺ نائماً في المسجد وقد سقط رداؤه عن ظهره، فمسح التراب عنه." },
                { q: "من هو الذي كان يُسمى 'ذو البجادين'؟", opts: ["معاذ بن جبل", "عبد الله بن عمرو", "عبد الله بن عمر"], ans: 0, exp: "معاذ بن جبل رضي الله عنه لُقب بذي البجادين، لأنه هاجر ببردتين (بجادين)." },
                { q: "من هو الذي كان يُسمى 'الحواري'؟", opts: ["الزبير بن العوام", "أبو عبيدة", "سعد بن أبي وقاص"], ans: 0, exp: "الزبير بن العوام رضي الله عنه لُقب بحواري رسول الله ﷺ، كما أن عيسى ﷺ كان له حواريون." },
                { q: "من هو الذي كان يُسمى 'الأمين' من الصحابة؟", opts: ["أبو عبيدة", "زيد بن ثابت", "أبو موسى"], ans: 0, exp: "أبو عبيدة عامر بن الجراح رضي الله عنه كان يُسمى الأمين، بأمر من النبي ﷺ." },
                { q: "من هو الذي كان يُسمى 'خطيب الأنصار'؟", opts: ["كعب بن مالك", "حسان بن ثابت", "أسيد بن حضير"], ans: 0, exp: "كعب بن مالك رضي الله عنه كان خطيب الأنصار، وشاعراً فصيماً، وهو من الثلاثة الذين خُلفوا في غزوة تبوك." }
            ]
        },
        {
            id: 4, 
            title: "المرحلة الخامسة: الثقافة الإسلامية", 
            icon: "fa-graduation-cap",
            type: "islamic",
            color: "#66bb6a",
            questions: [
                { q: "كم عدد سور القرآن الكريم؟", opts: ["112", "114", "116"], ans: 1, exp: "عدد سور القرآن 114 سورة بالاتفاق، أولها الفاتحة وآخرها الناس." },
                { q: "ما هي أطول سورة في القرآن؟", opts: ["آل عمران", "البقرة", "النساء"], ans: 1, exp: "سورة البقرة هي أطول سورة في القرآن بـ 286 آية، وهي مدنية." },
                { q: "ما هي أقصر سورة في القرآن؟", opts: ["الإخلاص", "الكوثر", "العصر"], ans: 1, exp: "سورة الكوثر هي أقصر سورة في القرآن، ثلاث آيات فقط، وهي مكية." },
                { q: "كم عدد أجزاء القرآن؟", opts: ["28", "30", "32"], ans: 1, exp: "القرآن الكريم مقسم إلى 30 جزءاً، لتسهيل تلاوته وختمه في شهر." },
                { q: "ما هي السورة التي تسمى 'قلب القرآن'؟", opts: ["يس", "الرحمن", "الملك"], ans: 0, exp: "سورة يس تسمى قلب القرآن، كما في الحديث: 'إن لكل شيء قلباً، وقلب القرآن يس'." },
                { q: "ما هي السورة التي تعدل ثلث القرآن؟", opts: ["الإخلاص", "الفاتحة", "الكوثر"], ans: 0, exp: "سورة الإخلاص تعدل ثلث القرآن، كما في الحديث الصحيح: 'أيعجز أحدكم أن يقرأ ثلث القرآن في ليلة'." },
                { q: "ما هي أول سورة نزلت من القرآن؟", opts: ["الفاتحة", "العلق", "المزمل"], ans: 1, exp: "أول ما نزل من القرآن قوله تعالى: 'اقرأ باسم ربك الذي خلق'، من سورة العلق." },
                { q: "ما هي آخر سورة نزلت من القرآن؟", opts: ["النصر", "المائدة", "التوبة"], ans: 1, exp: "آخر ما نزل من القرآن آية الربا من سورة البقرة، وآخر سورة كاملة هي سورة النصر عند بعضهم." },
                { q: "كم عدد آيات القرآن؟", opts: ["6236", "6348", "6666"], ans: 2, exp: "عدد آيات القرآن 6666 آية على المشهور، وقيل غير ذلك، والأمر في ذلك واسع." },
                { q: "ما هي السورة التي لا تبدأ بالبسملة؟", opts: ["التوبة", "الأنفال", "براءة"], ans: 0, exp: "سورة التوبة (براءة) هي السورة الوحيدة التي لا تبدأ بالبسملة، لأن البسملة براءة والتوبة براءة، فلا يجتمعان." },
                { q: "ما هي السورة التي ذكرت فيها البسملة مرتين؟", opts: ["النمل", "الفاتحة", "البقرة"], ans: 0, exp: "سورة النمل هي الوحيدة التي ذكرت فيها البسملة مرتين: في أولها، وفي قوله تعالى على لسان سليمان: 'إنه من سليمان وإنه بسم الله الرحمن الرحيم'." },
                { q: "ما هي السورة التي تسمى 'العرائس'؟", opts: ["الرحمن", "يس", "الواقعة"], ans: 0, exp: "سورة الرحمن تسمى سورة العرائس، لحسنها وجمال معانيها، وكثرة ذكر نعم الله فيها." },                { q: "ما هي السورة التي تسمى 'المبثوثة'؟", opts: ["الحشر", "الصف", "الجمعة"], ans: 0, exp: "سورة الحشر تسمى المبثوثة، لكثرة ما فيها من أسماء الله الحسنى وصفاته العلى." },
                { q: "كم عدد أسماء الله الحسنى؟", opts: ["97", "99", "101"], ans: 1, exp: "أسماء الله الحسنى 99 اسماً، من أحصاها دخل الجنة، كما في الحديث الصحيح." },
                { q: "ما هو اسم الله الأعظم؟", opts: ["الله", "الرحمن", "اختلف العلماء"], ans: 2, exp: "اختلف العلماء في تعيين اسم الله الأعظم، والأرجح أنه الله، أو الحي القيوم، أو ذو الجلال والإكرام." },
                { q: "ما هي أركان الإيمان؟", opts: ["5", "6", "7"], ans: 1, exp: "أركان الإيمان ستة: الإيمان بالله، وملائكته، وكتبه، ورسله، واليوم الآخر، والقدر خيره وشره." },
                { q: "ما هي أركان الإسلام؟", opts: ["4", "5", "6"], ans: 1, exp: "أركان الإسلام خمسة: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وصوم رمضان، وحج البيت." },
                { q: "ما هي أفضل الأعمال؟", opts: ["الصلاة", "الإيمان بالله", "الجهاد"], ans: 1, exp: "أفضل الأعمال الإيمان بالله وحده، ثم الجهاد في سبيله، كما في الحديث: 'أفضل الأعمال إيمان بالله وجهاد في سبيله'." },
                { q: "ما هي أفضل الصدقات؟", opts: ["صدقة السر", "صدقة في رمضان", "الصدقة على ذي الرحم"], ans: 2, exp: "أفضل الصدقات الصدقة على ذي الرحم الكاره، كما في الحديث: 'الصدقة على المسكين صدقة، وعلى ذي الرحم اثنتان: صدقة وصلة'." },
                { q: "ما هي أفضل الأيام؟", opts: ["يوم الجمعة", "يوم عرفة", "يوم النحر"], ans: 2, exp: "أفضل الأيام يوم النحر (عيد الأضحى)، ثم يوم عرفة، ثم أيام التشريق، كما في الحديث." },
                { q: "ما هي أفضل الليالي؟", opts: ["ليلة القدر", "ليلة النصف من شعبان", "ليلة الجمعة"], ans: 0, exp: "أفضل الليالي ليلة القدر، هي خير من ألف شهر، من حرم خيرها فقد حرم." },
                { q: "ما هي أفضل الشهور؟", opts: ["رمضان", "المحرم", "ذو الحجة"], ans: 0, exp: "أفضل الشهور رمضان، فيه نزل القرآن، وفيه تفتح أبواب الجنة، وتغلق أبواب النار." },
                { q: "ما هي أفضل البقاع؟", opts: ["المسجد الحرام", "المسجد النبوي", "المسجد الأقصى"], ans: 0, exp: "أفضل البقاع المسجد الحرام، ثم المسجد النبوي، ثم المسجد الأقصى، كما في الحديث." },
                { q: "ما هي أفضل الصلاة بعد الفريضة؟", opts: ["صلاة الليل", "صلاة الضحى", "صلاة التراويح"], ans: 0, exp: "أفضل الصلاة بعد الفريضة صلاة الليل، كما في الحديث: 'أفضل الصلاة بعد الفريضة صلاة الليل'." },
                { q: "ما هي أفضل الصيام بعد رمضان؟", opts: ["صيام الاثنين والخميس", "صيام ستة من شوال", "صيام يوم عرفة"], ans: 0, exp: "أفضل الصيام بعد رمضان صيام المحرم، ثم صيام الاثنين والخميس، كما في الحديث." },
                { q: "ما هي أفضل الذكر؟", opts: ["لا إله إلا الله", "سبحان الله", "الله أكبر"], ans: 0, exp: "أفضل الذكر لا إله إلا الله، كما في الحديث: 'أفضل ما قلت أنا والنبيون من قبلي: لا إله إلا الله وحده لا شريك له'." },
                { q: "ما هي أفضل الدعوة؟", opts: ["دعوة الوالد لولده", "دعوة الصائم", "دعوة المظلوم"], ans: 2, exp: "أفضل الدعوة دعوة المظلوم، فإنها ترفع إلى الله فوق الغمام، وتفتح لها أبواب السماء." },
                { q: "ما هي أفضل الجهاد؟", opts: ["جهاد النفس", "جهاد المال", "كلمة حق عند سلطان جائر"], ans: 2, exp: "أفضل الجهاد كلمة حق عند سلطان جائر، كما في الحديث الصحيح." },
                { q: "ما هي أفضل الهجرة؟", opts: ["هجرة البدن", "هجرة السوء", "هجرة الأهل"], ans: 1, exp: "أفضل الهجرة هجرة السوء، أن يهجر العبد ما نهى الله عنه، كما في الحديث." },
                { q: "ما هي أفضل الجهاد في سبيل الله؟", opts: ["القتال", "الدعوة", "الإنفاق"], ans: 0, exp: "أفضل الجهاد في سبيل الله أن يُجاهد المرء بنفسه وماله، كما في الحديث: 'أفضل الجهاد أن يُجاهد الرجل نفسه وهواه في طاعة الله'." },
                { q: "ما هي أفضل الأعمال التي لا تنقطع بعد الموت؟", opts: ["الصدقة الجارية", "العلم النافع", "الولد الصالح"], ans: 2, exp: "أفضل ما يلحق المؤمن بعد موته ولد صالح يدعو له، كما في الحديث: 'إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له'." },
                { q: "ما هي أفضل الصفات؟", opts: ["الصدق", "الصبر", "الشكر"], ans: 1, exp: "أفضل الصفات الصبر، كما في الحديث: 'وما أعطي أحد عطاءً خيراً وأوسع من الصبر'." },
                { q: "ما هي أفضل الأخلاق؟", opts: ["الحلم", "الكرم", "التواضع"], ans: 0, exp: "أفضل الأخلاق الحلم، كما في الحديث: 'إن الله رفيق يحب الرفق في الأمر كله'." },
                { q: "ما هي أفضل العبادة؟", opts: ["الصلاة", "قراءة القرآن", "ذكر الله"], ans: 2, exp: "أفضل العبادة ذكر الله، كما في الحديث: 'ألا أنبئكم بخير أعمالكم، وأزكاها عند مليككم، وأرفعها في درجاتكم، وخير لكم من إنفاق الذهب والفضة، ومن أن تلقوا عدوكم فتضربوا أعناقهم ويضربوا أعناقكم؟' قالوا: بلى يا رسول الله، قال: 'ذكر الله تعالى'." },
                { q: "ما هي أفضل الكلمة؟", opts: ["لا إله إلا الله", "سبحان الله وبحمده", "أستغفر الله"], ans: 1, exp: "أفضل الكلمة سبحان الله وبحمده، كما في الحديث: 'كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله وبحمده، سبحان الله العظيم'." },
                { q: "ما هي أفضل السور؟", opts: ["الفاتحة", "البقرة", "الإخلاص"], ans: 0, exp: "أفضل السور سورة الفاتحة، وهي أعظم سورة في القرآن، كما في الحديث: 'الحمد لله رب العالمين هي السبع المثاني، والقرآن العظيم الذي أوتيته'." },
                { q: "ما هي أفضل الآيات؟", opts: ["آية الكرسي", "آخر آيتين من البقرة", "آية النور"], ans: 0, exp: "أفضل الآيات آية الكرسي، كما في الحديث: 'من قرأ آية الكرسي دبر كل صلاة لم يمنعه من دخول الجنة إلا أن يموت'." },
                { q: "ما هي أفضل الأدعية؟", opts: ["دعاء يوم عرفة", "دعاء الاستفتاح", "دعاء القنوت"], ans: 0, exp: "أفضل الأدعية دعاء يوم عرفة، وأفضل ما قلت أنا والنبيون من قبلي: لا إله إلا الله وحده لا شريك له." },
                { q: "ما هي أفضل الصدقة؟", opts: ["صدقة السر", "صدقة في رمضان", "الصدقة على اليتيم"], ans: 0, exp: "أفضل الصدقة صدقة السر، كما في الحديث: 'صدقة السر تطفئ غضب الرب'." },
                { q: "ما هي أفضل الجهاد؟", opts: ["جهاد النفس", "جهاد المال", "الجهاد بالسيف"], ans: 0, exp: "أفضل الجهاد جهاد النفس، أن يجاهد المرء نفسه على طاعة الله، كما في الحديث." },
                { q: "ما هي أفضل الهجرة؟", opts: ["هجرة البدن", "هجرة السوء", "الهجرة إلى المدينة"], ans: 1, exp: "أفضل الهجرة هجرة السوء، أن يهجر العبد ما نهى الله عنه، كما في الحديث." },
                { q: "ما هي أفضل الصلوات؟", opts: ["صلاة الفجر", "صلاة العصر", "صلاة الليل"], ans: 2, exp: "أفضل الصلاة بعد الفريضة صلاة الليل، كما في الحديث: 'أفضل الصلاة بعد الفريضة صلاة الليل'." },
                { q: "ما هي أفضل الأيام عند الله؟", opts: ["يوم الجمعة", "يوم عرفة", "أيام العشر"], ans: 2, exp: "أفضل الأيام عند الله أيام العشر من ذي الحجة، كما في الحديث: 'ما من أيام العمل الصالح فيهن أحب إلى الله من هذه الأيام العشر'." },
                { q: "ما هي أفضل الليالي؟", opts: ["ليلة القدر", "ليلة النصف من شعبان", "ليلة الجمعة"], ans: 0, exp: "أفضل الليالي ليلة القدر، هي خير من ألف شهر، من حرم خيرها فقد حرم." },
                { q: "ما هي أفضل الشهور؟", opts: ["رمضان", "المحرم", "ذو الحجة"], ans: 0, exp: "أفضل الشهور رمضان، فيه نزل القرآن، وفيه تفتح أبواب الجنة، وتغلق أبواب النار." },
                { q: "ما هي أفضل البقاع؟", opts: ["المسجد الحرام", "المسجد النبوي", "المسجد الأقصى"], ans: 0, exp: "أفضل البقاع المسجد الحرام، ثم المسجد النبوي، ثم المسجد الأقصى، كما في الحديث." },
                { q: "ما هي أفضل الصدقة؟", opts: ["صدقة السر", "صدقة في رمضان", "الصدقة على ذي الرحم"], ans: 2, exp: "أفضل الصدقة الصدقة على ذي الرحم الكاره، كما في الحديث." },
                { q: "ما هي أفضل الكلمة؟", opts: ["لا إله إلا الله", "سبحان الله وبحمده", "أستغفر الله"], ans: 1, exp: "أفضل الكلمة سبحان الله وبحمده، كما في الحديث." },
                { q: "ما هي أفضل العبادة؟", opts: ["الصلاة", "قراءة القرآن", "ذكر الله"], ans: 2, exp: "أفضل العبادة ذكر الله، كما في الحديث." },
                { q: "ما هي أفضل الجهاد؟", opts: ["جهاد النفس", "جهاد المال", "كلمة حق عند سلطان جائر"], ans: 2, exp: "أفضل الجهاد كلمة حق عند سلطان جائر، كما في الحديث." }
            ]
        }
    ];

    // ========================================
    // 🎮 نظام الرتب الدينية
    // ========================================
    const ranks = [
        { name: "مبتدئ", minPoints: 0, maxPoints: 99, icon: "🌱", color: "#81c784", desc: "بداية الرحلة العلمية" },
        { name: "طالب علم", minPoints: 100, maxPoints: 299, icon: "📖", color: "#4caf50", desc: "يسعى في طلب العلم" },
        { name: "حافظ", minPoints: 300, maxPoints: 599, icon: "🧠", color: "#388e3c", desc: "حفظ من العلم ما ينفع" },
        { name: "فقيه", minPoints: 600, maxPoints: 999, icon: "⚖️", color: "#2e7d32", desc: "تفقه في الدين" },        { name: "عالم", minPoints: 1000, maxPoints: 1599, icon: "🕌", color: "#1b5e20", desc: "نشر العلم وعلم الناس" },
        { name: "شيخ الإسلام", minPoints: 1600, maxPoints: 2499, icon: "👳", color: "#004d00", desc: "مرجعية علمية" },
        { name: "إمام الأمة", minPoints: 2500, maxPoints: Infinity, icon: "👑", color: "#d4af37", desc: "قدوة الأمة في العلم والعمل" }
    ];

    // ========================================
    // 💾 حالة اللعبة ونظام الحفظ
    // ========================================
    const STORAGE_KEY = 'sabriFX_kingdom_state_v2';
    
    let gameState = {
        points: 0,
        lives: 30,
        unlockedStages: [0],
        completedStages: [],
        stageScores: {}, // { stageId: { correct: 0, total: 0 } }
        lastSaved: null
    };

    // تحميل البيانات المحفوظة
    function loadGame() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                // دمج البيانات القديمة مع الجديدة لتجنب فقدان التقدم
                gameState = { ...gameState, ...parsed };
                // التأكد من أن القلوب 30 كبداية جديدة فقط
                if (!parsed.lastSaved && gameState.lives < 30) {
                    gameState.lives = 30;
                }
                showToast('تم تحميل تقدمك السابق ✨', 'success');
            }
        } catch (e) {
            console.error('خطأ في تحميل البيانات:', e);
            showToast('تم البدء بلعبة جديدة 🎮', 'success');
        }
    }

    // حفظ البيانات مع التحقق
    function saveGame() {
        try {
            gameState.lastSaved = new Date().toISOString();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
        } catch (e) {
            console.error('خطأ في الحفظ:', e);
            showToast('⚠️ تعذر حفظ التقدم', 'error');
        }
    }
    // حفظ تلقائي دوري كل 30 ثانية
    setInterval(saveGame, 30000);

    // ========================================
    // 🎯 وظائف الواجهة والتحديث
    // ========================================
    
    function updateStats() {
        document.getElementById('pointsCont').innerText = gameState.points;
        document.getElementById('livesCont').innerText = gameState.lives;
        updateRank();
    }

    function updateRank() {
        let currentRank = ranks[0];
        let nextRank = ranks[1];
        
        for (let i = 0; i < ranks.length; i++) {
            if (gameState.points >= ranks[i].minPoints) {
                currentRank = ranks[i];
                nextRank = ranks[i+1] || ranks[i];
            }
        }
        
        document.getElementById('rankName').innerText = currentRank.name;
        document.getElementById('rankDisplay').innerHTML = `${currentRank.icon} ${currentRank.name}`;
        
        // تحديث شريط التقدم للرتبة التالية
        const progress = nextRank.minPoints === Infinity ? 100 : 
            Math.min(100, ((gameState.points - currentRank.minPoints) / (nextRank.minPoints - currentRank.minPoints)) * 100);
        document.getElementById('rankProgress').style.width = `${progress}%`;
    }

    function renderMap() {
        const map = document.getElementById('gameMap');
        map.innerHTML = '';
        
        stagesData.forEach((stage, index) => {
            const isLocked = !gameState.unlockedStages.includes(index);
            const isCompleted = gameState.completedStages.includes(index);
            const isActive = !isLocked && !isCompleted;
            const stageScore = gameState.stageScores[index] || { correct: 0, total: stage.questions.length };
            const accuracy = stage.total ? Math.round((stageScore.correct / stageScore.total) * 100) : 0;

            const node = document.createElement('div');
            node.className = `level-node ${isLocked ? 'locked' : ''} ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
            if(!isLocked) node.onclick = () => startStage(index);

            node.innerHTML = `
                <div class="node-icon"><i class="fas ${stage.icon}"></i></div>                <div class="node-info">
                    <h3>${stage.title}</h3>
                    <span>${stage.questions.length} أسئلة • ${stage.type === 'fiqh' ? 'فقه' : 'ثقافة إسلامية'}</span>
                    <div class="node-meta">
                        ${isCompleted ? `<span><i class="fas fa-check"></i> مكتملة</span>` : ''}
                        ${stageScore.correct > 0 ? `<span><i class="fas fa-star"></i> ${accuracy}% دقة</span>` : ''}
                    </div>
                </div>
                ${isLocked ? '<i class="fas fa-lock lock-icon"></i>' : (isCompleted ? '<i class="fas fa-check-circle completed-icon"></i>' : '<i class="fas fa-play lock-icon"></i>')}
            `;
            map.appendChild(node);
        });
    }

    // ========================================
    // ❓ نظام الأسئلة والاختبار
    // ========================================
    
    function startStage(index) {
        if(gameState.lives <= 0) { 
            showToast("❤️ انتهت محاولاتك! ستشحن القلوب قريباً", "error");
            return; 
        }
        gameState.currentStageIndex = index;
        gameState.currentQIndex = 0;
        gameState.isQuizActive = true;
        document.getElementById('quizOverlay').style.display = 'flex';
        document.getElementById('stageTitle').innerText = stagesData[index].title;
        updateQuestionCounter();
        showQuestion();
        saveGame();
    }

    function updateQuestionCounter() {
        const stage = stagesData[gameState.currentStageIndex];
        document.getElementById('questionCounter').innerText = `${gameState.currentQIndex + 1}/${stage.questions.length}`;
        document.getElementById('currentQNum').innerText = gameState.currentQIndex + 1;
    }

    function showQuestion() {
        const stage = stagesData[gameState.currentStageIndex];
        const q = stage.questions[gameState.currentQIndex];
        
        document.getElementById('questionText').innerText = q.q;
        document.getElementById('expText').innerText = q.exp;
        
        const cont = document.getElementById('optionsCont');
        cont.innerHTML = '';
        document.getElementById('infoBox').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'none';
        // خلط الخيارات مع الحفاظ على الإجابة الصحيحة
        const shuffled = q.opts.map((opt, i) => ({ opt, i }))
            .sort(() => Math.random() - 0.5);

        shuffled.forEach(({ opt, i: originalIndex }, idx) => {
            const div = document.createElement('div');
            div.className = 'option-item';
            div.dataset.originalIndex = originalIndex;
            div.dataset.num = idx + 1;
            div.setAttribute('data-num', idx + 1);
            div.innerHTML = `<span style="margin-left:15px; color:var(--gold); font-weight:800;">${idx + 1}.</span> ${opt}`;
            div.onclick = () => checkAns(originalIndex, q.ans, div);
            cont.appendChild(div);
        });
    }

    function checkAns(selected, correct, el) {
        const items = document.querySelectorAll('.option-item');
        items.forEach(item => item.style.pointerEvents = 'none');

        if(selected === correct) {
            el.classList.add('correct');
            gameState.points += 25;
            showPointsPopup('+25', el);
            showToast('✅ إجابة صحيحة! بارك الله فيك', 'success');
        } else {
            el.classList.add('wrong');
            gameState.lives--;
            showToast('❌ إجابة خاطئة، لا بأس حاول مرة أخرى', 'error');
            // إظهار الإجابة الصحيحة
            items.forEach(item => {
                if (parseInt(item.dataset.originalIndex) === correct) {
                    item.classList.add('correct');
                }
            });
        }
        
        // تحديث نتيجة المرحلة
        if (!gameState.stageScores[gameState.currentStageIndex]) {
            gameState.stageScores[gameState.currentStageIndex] = { correct: 0, total: 0 };
        }
        gameState.stageScores[gameState.currentStageIndex].total++;
        if (selected === correct) {
            gameState.stageScores[gameState.currentStageIndex].correct++;
        }
        
        updateStats();
        saveGame();
        if(gameState.lives <= 0 && selected !== correct) {
            setTimeout(() => { 
                showToast("❤️ انتهت القلوب! ركز في المرة القادمة", "error");
                closeQuiz(); 
            }, 1500);
            return;
        }
        
        setTimeout(() => {
            document.getElementById('infoBox').style.display = 'block';
            document.getElementById('nextBtn').style.display = 'block';
        }, 400);
    }

    function showPointsPopup(text, element) {
        const popup = document.createElement('div');
        popup.className = 'points-popup';
        popup.innerText = text;
        
        const rect = element.getBoundingClientRect();
        popup.style.left = `${rect.left + rect.width/2}px`;
        popup.style.top = `${rect.top}px`;
        
        document.body.appendChild(popup);
        
        setTimeout(() => popup.remove(), 1000);
    }

    function nextStep() {
        gameState.currentQIndex++;
        const stage = stagesData[gameState.currentStageIndex];
        
        if(gameState.currentQIndex < stage.questions.length) {
            updateQuestionCounter();
            showQuestion();
        } else {
            winStage();
        }
    }

    function winStage() {
        gameState.isQuizActive = false;
        
        if (!gameState.completedStages.includes(gameState.currentStageIndex)) {
            gameState.completedStages.push(gameState.currentStageIndex);
            const nextIdx = gameState.currentStageIndex + 1;
            if(nextIdx < stagesData.length && !gameState.unlockedStages.includes(nextIdx)) {
                gameState.unlockedStages.push(nextIdx);
                showToast(`🔓 تم فتح ${stagesData[nextIdx].title}`, 'success');
            }        }
        
        // مكافأة إتمام المرحلة
        const bonus = 100 + (gameState.currentStageIndex * 25);
        gameState.points += bonus;
        document.getElementById('earnedPoints').innerText = bonus;
        
        updateStats();
        saveGame();
        
        document.getElementById('quizOverlay').style.display = 'none';
        document.getElementById('resultOverlay').style.display = 'flex';
    }

    function closeResult() {
        document.getElementById('resultOverlay').style.display = 'none';
        renderMap();
    }
    
    function nextStage() {
        closeResult();
        const nextIdx = gameState.currentStageIndex + 1;
        if (nextIdx < stagesData.length && gameState.unlockedStages.includes(nextIdx)) {
            startStage(nextIdx);
        }
    }

    function confirmCloseQuiz() {
        if(confirm("⚠️ هل تريد الخروج؟ ستخسر تقدمك في هذه المرحلة")) {
            closeQuiz();
        }
    }

    function closeQuiz() {
        gameState.isQuizActive = false;
        document.getElementById('quizOverlay').style.display = 'none';
        renderMap();
    }

    // ========================================
    // 🔔 نظام الإشعارات
    // ========================================
    function showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        const msg = document.getElementById('toastMsg');
        
        msg.innerText = message;
        toast.className = `toast ${type} show`;
        
        if (type === 'success') {            toast.querySelector('i').className = 'fas fa-check-circle';
        } else if (type === 'error') {
            toast.querySelector('i').className = 'fas fa-exclamation-circle';
        } else {
            toast.querySelector('i').className = 'fas fa-info-circle';
        }
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // ========================================
    // 🚀 التهيئة والتشغيل
    // ========================================
    function init() {
        // إخفاء شاشة التحميل بعد تحميل البيانات
        setTimeout(() => {
            loadGame();
            updateStats();
            renderMap();
            document.getElementById('loadingScreen').classList.add('hidden');
            showToast('🎉 أهلاً بك في مملكة الفقيه!', 'success');
        }, 1200);
        
        // منع السلوك الافتراضي لبعض الأحداث لتحسين تجربة الجوال
        document.addEventListener('touchmove', (e) => {
            if (gameState.isQuizActive) {
                e.preventDefault();
            }
        }, { passive: false });
    }

    // بدء اللعبة عند تحميل الصفحة
    window.addEventListener('load', init);
    
    // حفظ عند إغلاق الصفحة
    window.addEventListener('beforeunload', saveGame);
</script>
</body>
</html>
