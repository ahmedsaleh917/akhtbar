<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>مملكة الفقيه - sabriFX Edition</title>
    <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700;800&family=Tajawal:wght@500;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <style>
        :root {
            --primary: #1e4d2b;
            --gold: #d4af37;
            --bg: #f0f4f3;
            --white: #ffffff;
            --danger: #e74c3c;
            --correct: #28a745;
        }

        body {
            font-family: 'Almarai', sans-serif;
            background-color: var(--bg);
            margin: 0; padding: 0;
            overflow-x: hidden;
            user-select: none;
        }

        .game-header {
            background: var(--primary);
            height: 190px;
            border-bottom-left-radius: 60px;
            border-bottom-right-radius: 60px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            padding: 20px 10px 10px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.25);
            position: sticky; top: 0; z-index: 100;
        }

        .logo-container {
            width: 80px; height: 80px;
            background: white;
            border-radius: 50%;
            padding: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            margin-bottom: 10px;
        }        .logo-container img {
            width: 100%; height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }

        .stats-bar {
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin-top: 10px;
            padding: 0 10px;
        }

        .stat-box { text-align: center; }
        .stat-box i { color: var(--gold); font-size: 16px; margin-bottom: 3px; }
        .stat-val { display: block; font-weight: 800; font-size: 16px; }
        .stat-label { font-size: 10px; color: rgba(255,255,255,0.85); margin-top: 2px; }

        .lives i { color: var(--danger); animation: pulse 1.5s infinite; }
        @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.15); } 100% { transform: scale(1); } }

        .rank-display { text-align: center; margin-top: 8px; }
        .rank-name { font-weight: 800; font-size: 15px; color: var(--gold); }
        .rank-label { font-size: 9px; color: rgba(255,255,255,0.8); }

        .map-container {
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            padding-bottom: 100px;
        }

        .level-node {
            width: 100%;
            max-width: 380px;
            background: var(--white);
            padding: 20px;
            border-radius: 25px;
            display: flex;
            align-items: center;
            gap: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
            position: relative;
            cursor: pointer;
            transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 2px solid transparent;
        }        .level-node.locked { opacity: 0.5; filter: grayscale(1); cursor: not-allowed; }
        .level-node.active { border-color: var(--gold); transform: scale(1.03); box-shadow: 0 15px 35px rgba(212, 175, 55, 0.15); }
        .level-node.completed { border-color: var(--correct); }

        .node-icon {
            width: 65px; height: 65px;
            background: var(--primary);
            border-radius: 20px;
            display: flex; align-items: center; justify-content: center;
            color: var(--gold); font-size: 26px;
        }

        .node-info h3 { margin: 0; font-size: 17px; color: var(--primary); font-weight: 800; }
        .node-info span { font-size: 12px; color: #888; }

        .lock-icon { position: absolute; left: 20px; color: #ccc; font-size: 18px; }
        .completed-icon { position: absolute; left: 20px; color: var(--correct); font-size: 20px; }

        .quiz-overlay {
            position: fixed; inset: 0; background: var(--bg);
            z-index: 200; display: none; flex-direction: column;
            animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        .quiz-header {
            background: var(--primary);
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: white;
            padding: 0 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .quiz-body { padding: 30px 20px; flex: 1; display: flex; flex-direction: column; align-items: center; overflow-y: auto; }

        .question-card {
            background: var(--white);
            width: 100%; max-width: 500px;
            padding: 35px 25px; border-radius: 30px;
            text-align: center; box-shadow: 0 15px 45px rgba(0,0,0,0.1);
            margin-bottom: 30px;
            border: 1px solid rgba(0,0,0,0.03);
        }
        .question-card h2 { margin: 0; font-size: 20px; font-weight: 800; line-height: 1.5; color: #333; }
        .options-container { width: 100%; max-width: 500px; display: flex; flex-direction: column; gap: 12px; }
        .option-item {
            background: var(--white);
            padding: 18px;
            border-radius: 18px; font-weight: 700;
            display: flex; align-items: center;
            cursor: pointer; transition: 0.2s;
            border: 2px solid #eee;
            font-size: 15px;
        }

        .option-item.correct { background: #d4edda; border-color: var(--correct); color: #155724; }
        .option-item.wrong { background: #f8d7da; border-color: var(--danger); color: #721c24; animation: shake 0.4s; }

        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-10px); } 75% { transform: translateX(10px); } }

        .info-box {
            background: #fff9e6;
            border-right: 5px solid var(--gold);
            padding: 15px; border-radius: 12px;
            margin-top: 25px; width: 100%; max-width: 500px;
            display: none; text-align: right; font-size: 14px;
        }

        .btn-next {
            background: var(--gold); color: var(--primary);
            border: none; padding: 15px; width: 100%; max-width: 500px;
            border-radius: 15px; font-weight: 800; font-size: 16px;
            margin-top: 20px; cursor: pointer; display: none;
        }

        .result-overlay {
            position: fixed; inset: 0; background: rgba(0,0,0,0.85);
            z-index: 300; display: none; justify-content: center; align-items: center;
            backdrop-filter: blur(8px);
        }
        .win-card {
            background: var(--white); padding: 40px; border-radius: 30px;
            text-align: center; max-width: 400px; width: 90%;
        }
        .win-card i { font-size: 70px; color: var(--gold); margin-bottom: 20px; }

        .footer-brand {
            position: fixed; bottom: 0; width: 100%;
            background: rgba(255,255,255,0.9);
            padding: 15px; text-align: center;
            border-top: 1px solid #eee; z-index: 50;
        }
        .footer-brand strong { color: var(--primary); }        
        /* 📱 تحسينات الجوال */
        @media (max-width: 480px) {            .game-header { height: 200px; }
            .stat-val { font-size: 14px; }
            .stat-label { font-size: 9px; }
            .rank-name { font-size: 13px; }
            .node-info h3 { font-size: 15px; }
            .question-card h2 { font-size: 18px; }
        }
    </style>
</head>
<body>

<div class="game-header">
    <div class="logo-container">
        <img src="https://i.postimg.cc/zGSvxgCn/1775323811617.png" alt="صفاء الروح">
    </div>
    <div class="stats-bar">
        <div class="stat-box lives">
            <i class="fas fa-heart"></i>
            <span class="stat-val" id="livesCont">20</span>
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
            <span class="stat-label">مرحلتك</span>
        </div>
    </div>
    <div class="rank-display">
        <span class="rank-name" id="rankDisplay">🌱 مبتدئ</span>
        <div class="rank-label">مرحلتك</div>
    </div>
</div>

<div class="map-container" id="gameMap"></div>

<div class="quiz-overlay" id="quizOverlay">
    <div class="quiz-header">
        <button onclick="confirmCloseQuiz()" style="background:none; border:none; color:white; font-size:22px;"><i class="fas fa-times"></i></button>
        <h2 id="stageTitle" style="margin:0; font-size:17px; font-weight:800;">اسم المرحلة</h2>
        <div style="width:22px;"></div>
    </div>
    <div class="quiz-body">
        <div class="question-card">
            <h2 id="questionText">السؤال يظهر هنا؟</h2>
        </div>        <div class="options-container" id="optionsCont"></div>
        <div id="infoBox" class="info-box">
            <strong>💡 فائدة:</strong> <span id="expText">الشرح يظهر هنا.</span>
        </div>
        <button id="nextBtn" class="btn-next" onclick="nextStep()">المتابعة <i class="fas fa-arrow-left"></i></button>
    </div>
</div>

<div id="resultOverlay" class="result-overlay">
    <div class="win-card">
        <i class="fas fa-crown"></i>
        <h1>مبارك الإنجاز!</h1>
        <p>لقد أتممت هذه المرحلة بنجاح واكتسبت علماً نافعاً.</p>
        <button class="btn-next" style="display:block" onclick="closeResult()">العودة للخريطة</button>
    </div>
</div>

<div class="footer-brand">
    <span>تطوير وإشراف </span><strong>sabriFX</strong>
</div>

<script>
    const stagesData = [
        {
            id: 0, 
            title: "المرحلة الأولى: فقه الطهارة", 
            icon: "fa-faucet",
            type: "fiqh",
            questions: [
                { q: "ما هو حكم السواك عند الوضوء؟", opts: ["واجب", "سنة مؤكدة", "مكروه"], ans: 1, exp: "السواك سنة مؤكدة ثبتت عن النبي ﷺ في أحاديث كثيرة." },
                { q: "كم عدد فروض الوضوء؟", opts: ["أربعة", "ستة", "ثمانية"], ans: 1, exp: "فروض الوضوء ستة: غسل الوجه، اليدين، مسح الرأس، غسل الرجلين، الترتيب، والموالاة." },
                { q: "الماء الذي خالطته نجاسة فغيرت طعمه أو لونه هو ماء:", opts: ["طهور", "طاهر", "نجس"], ans: 2, exp: "الإجماع على أن الماء إذا تغير بنجاسة أصبح نجساً." },
                { q: "ما هو الترتيب الصحيح في التيمم؟", opts: ["مسح الوجه ثم الكفين", "مسح الكفين ثم الوجه", "غسل اليدين"], ans: 0, exp: "التيمم ضربة واحدة يمسح بها الوجه ثم الكفين." },
                { q: "غسل أعضاء الوضوء أكثر من ثلاث مرات يعتبر:", opts: ["مستحب", "مباح", "مكروه"], ans: 2, exp: "الزيادة على ثلاث في الوضوء من الاعتداء والمكروهات." },
                { q: "ما الذي ينقض الوضوء من الأمور التالية؟", opts: ["مسح الرأس", "خروج ريح", "المس دون شهوة"], ans: 1, exp: "خروج الريح من أحد السبيلين من نواقض الوضوء المتفق عليها." },
                { q: "هل يشترط النية في الوضوء؟", opts: ["لا يشترط", "يشترط عند جمهور العلماء", "يشترط فقط في الغسل"], ans: 1, exp: "النية ركن في العبادات، والوضوء عبادة فلا يصح بدونها." },
                { q: "ما حكم المسح على الخفين؟", opts: ["حرام", "جائز بشروط", "واجب"], ans: 1, exp: "المسح على الخفين جائز بثبوت السنة الصحيحة وبشروط محددة." },
                { q: "كم مدة المسح على الخفين للمقيم؟", opts: ["ثلاثة أيام", "يوم وليلة", "أسبوع"], ans: 1, exp: "للمقيم يوم وليلة، وللمسافر ثلاثة أيام بلياليهن من أول مسح." },
                { q: "ما هو الماء الطهور؟", opts: ["الماء النقي فقط", "الماء الطاهر في نفسه المطهر لغيره", "مياه الأنهار فقط"], ans: 1, exp: "الماء الطهور هو الباقي على طهوريته الذي لم يخالطه ما يغيره." }
            ]
        },
        {
            id: 1, 
            title: "المرحلة الثانية: فقه الصلاة والصيام", 
            icon: "fa-mosque",
            type: "fiqh",
            questions: [
                { q: "أي مما يلي يعتبر من شروط صحة الصلاة وليس من أركانها؟", opts: ["الركوع", "استقبال القبلة", "السجود"], ans: 1, exp: "الشرط يسبق الصلاة (كالقبلة والوقت)، أما الركن ففي داخلها." },
                { q: "ما هي الصلاة التي ليس لها ركوع ولا سجود؟", opts: ["الكسوف", "الجنازة", "الاستسقاء"], ans: 1, exp: "صلاة الجنازة أربع تكبيرات فقط بدون ركوع أو سجود." },
                { q: "حكم قراءة الفاتحة للمأموم في الصلاة الجهرية؟", opts: ["واجبة", "سنة", "محل خلاف بين العلماء"], ans: 2, exp: "اختلف العلماء فيها، والبعض يرى أن قراءة الإمام قراءة له." },
                { q: "سجود السهو إذا كان عن نقص في الصلاة يكون:", opts: ["قبل السلام", "بعد السلام", "مخير"], ans: 0, exp: "السنة أن يكون سجود السهو لنقص الصلاة قبل السلام." },
                { q: "من نسي الركوع وتذكره وهو في السجود، ماذا يفعل؟", opts: ["يكمل صلاته ويسجد للسهو", "يرجع فوراً للركوع", "تبطل ركعته"], ans: 1, exp: "يجب العودة للركن الذي نسيه فوراً لأن الركن لا يسقط بالسهو." },
                { q: "كم عدد ركعات صلاة الفجر؟", opts: ["ثلاث", "أربع", "ركعتان"], ans: 2, exp: "صلاة الفجر ركعتان فرضاً، وهما من أثقل الصلوات على المنافقين." },
                { q: "ما هو وقت صلاة العصر؟", opts: ["من زوال الشمس", "من حين ظل كل شيء مثله", "بعد المغرب"], ans: 1, exp: "وقت العصر من حين ظل كل شيء مثله إلى اصفرار الشمس أو غروبها." },
                { q: "حكم ترك الصلاة عمداً؟", opts: ["معصية فقط", "كفر أكبر عند جمهور العلماء", "مكروه"], ans: 1, exp: "جمهور العلماء على أن تارك الصلاة عمداً كافر كفراً مخرجاً عن الملة." },
                { q: "متى يمسك الصائم عن الطعام؟", opts: ["أذان الفجر الأول", "أذان الفجر الصادق", "شروق الشمس"], ans: 1, exp: "الإمساك يبدأ مع طلوع الفجر الصادق المستطير في الأفق." },
                { q: "من أكل ناسياً في نهار رمضان فما حكمه؟", opts: ["عليه القضاء", "صيامه صحيح", "عليه الكفارة"], ans: 1, exp: "من أكل ناسياً فإنما أطعمه الله وسقاه، وصيامه صحيح ولا قضاء عليه." }
            ]
        },
        {
            id: 2, 
            title: "المرحلة الثالثة: السيرة النبوية", 
            icon: "fa-book-open",
            type: "islamic",
            questions: [
                { q: "في أي عام ولد النبي محمد ﷺ؟", opts: ["عام الفيل", "عام الحزن", "عام الهجرة"], ans: 0, exp: "وُلد النبي ﷺ في عام الفيل الموافق 571م تقريباً." },
                { q: "ما اسم والدة النبي ﷺ؟", opts: ["آمنة بنت وهب", "حليمة السعدية", "فاطمة بنت أسد"], ans: 0, exp: "والدة النبي ﷺ هي آمنة بنت وهب من بني زهرة." },
                { q: "ما اسم الغار الذي كان يتعبد فيه النبي ﷺ؟", opts: ["غار حراء", "غار ثور", "غار أحد"], ans: 0, exp: "غار حراء في جبل النور هو مكان تعبد النبي ﷺ قبل البعثة." },
                { q: "من أول من آمن من الرجال بالنبي ﷺ؟", opts: ["عمر بن الخطاب", "أبو بكر الصديق", "علي بن أبي طالب"], ans: 1, exp: "أبو بكر الصديق رضي الله عنه أول من آمن من الرجال البالغين." }
            ]
        },
        {
            id: 3, 
            title: "المرحلة الرابعة: الصحابة والسنة", 
            icon: "fa-users",
            type: "islamic",
            questions: [
                { q: "من هو خليفة النبي ﷺ الأول؟", opts: ["عمر", "عثمان", "أبو بكر"], ans: 2, exp: "أبو بكر الصديق رضي الله عنه أول خليفة للمسلمين بعد النبي ﷺ." },
                { q: "من هو صاحب سر النبي ﷺ؟", opts: ["علي", "حذيفة", "أبو بكر"], ans: 1, exp: "حذيفة بن اليمان رضي الله عنه كان صاحب سر النبي ﷺ في المنافقين." }
            ]
        },
        {
            id: 4, 
            title: "المرحلة الخامسة: الثقافة الإسلامية", 
            icon: "fa-graduation-cap",
            type: "islamic",
            questions: [
                { q: "كم عدد سور القرآن الكريم؟", opts: ["112", "114", "116"], ans: 1, exp: "عدد سور القرآن 114 سورة بالاتفاق." },
                { q: "ما هي أطول سورة في القرآن؟", opts: ["آل عمران", "البقرة", "النساء"], ans: 1, exp: "سورة البقرة هي أطول سورة في القرآن بـ 286 آية." }
            ]
        }
    ];

    // حالة اللعبة مع تحميل البيانات المحفوظة
    let gameState = {
        points: parseInt(localStorage.getItem('sabriFX_points')) || 0,
        lives: localStorage.getItem('sabriFX_lives') !== null ? parseInt(localStorage.getItem('sabriFX_lives')) : 20,
        unlockedStages: JSON.parse(localStorage.getItem('sabriFX_unlocked')) || [0],
        completedStages: JSON.parse(localStorage.getItem('sabriFX_completed')) || [],
        currentStageIndex: -1, 
        currentQIndex: 0, 
        isQuizActive: false
    };

    const ranks = [
        { name: "مبتدئ", minPoints: 0, icon: "🌱" },
        { name: "ملم", minPoints: 100, icon: "📖" },
        { name: "مثقف", minPoints: 300, icon: "🎓" },
        { name: "طالب علم", minPoints: 600, icon: "🕌" },
        { name: "شيخ", minPoints: 1000, icon: "👳" },
        { name: "دكتور", minPoints: 1500, icon: "👨‍🏫" }
    ];

    // وظيفة حفظ البيانات في ذاكرة المتصفح
    function saveGame() {
        localStorage.setItem('sabriFX_points', gameState.points);
        localStorage.setItem('sabriFX_lives', gameState.lives);
        localStorage.setItem('sabriFX_unlocked', JSON.stringify(gameState.unlockedStages));
        localStorage.setItem('sabriFX_completed', JSON.stringify(gameState.completedStages));
    }

    function init() {
        updateStats();
        renderMap();
    }

    function updateStats() {
        document.getElementById('pointsCont').innerText = gameState.points;
        document.getElementById('livesCont').innerText = gameState.lives;
        updateRank();
    }

    function updateRank() {
        let currentRank = ranks[0];
        for (let rank of ranks) {
            if (gameState.points >= rank.minPoints) {
                currentRank = rank;
            }
        }
        document.getElementById('rankName').innerText = currentRank.name;
        document.getElementById('rankDisplay').innerText = currentRank.icon + " " + currentRank.name;
    }

    function renderMap() {
        const map = document.getElementById('gameMap');
        map.innerHTML = '';
        
        stagesData.forEach((stage, index) => {
            const isLocked = !gameState.unlockedStages.includes(index);
            const isCompleted = gameState.completedStages.includes(index);
            const isActive = !isLocked && !isCompleted;

            const node = document.createElement('div');
            node.className = `level-node ${isLocked ? 'locked' : ''} ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
            if(!isLocked) node.onclick = () => startStage(index);

            node.innerHTML = `
                <div class="node-icon"><i class="fas ${stage.icon}"></i></div>
                <div class="node-info">
                    <h3>${stage.title}</h3>
                    <span>${stage.questions.length} أسئلة • ${stage.type === 'fiqh' ? 'فقه' : 'ثقافة إسلامية'}</span>
                </div>
                ${isLocked ? '<i class="fas fa-lock lock-icon"></i>' : (isCompleted ? '<i class="fas fa-check-circle completed-icon"></i>' : '<i class="fas fa-play lock-icon"></i>')}
            `;
            map.appendChild(node);
        });
    }

    function startStage(index) {
        if(gameState.lives <= 0) { 
            alert("انتهت محاولاتك! انتظر شحن القلوب ❤️"); 
            return; 
        }
        gameState.currentStageIndex = index;
        gameState.currentQIndex = 0;
        gameState.isQuizActive = true;
        document.getElementById('quizOverlay').style.display = 'flex';
        document.getElementById('stageTitle').innerText = stagesData[index].title;
        showQuestion();
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

        const shuffled = q.opts.map((opt, i) => ({ opt, i }))
            .sort(() => Math.random() - 0.5);

        shuffled.forEach(({ opt, i: originalIndex }) => {
            const div = document.createElement('div');
            div.className = 'option-item';
            div.dataset.originalIndex = originalIndex; 
            div.innerHTML = `<span style="margin-left:10px; color:var(--gold)">${originalIndex+1}.</span> ${opt}`;
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
        } else {
            el.classList.add('wrong');
            gameState.lives--;
            items.forEach(item => {
                if (parseInt(item.dataset.originalIndex) === correct) {
                    item.classList.add('correct');
                }
            });
        }
        
        updateStats();
        saveGame(); // حفظ البيانات بعد كل إجابة

        if(gameState.lives <= 0 && selected !== correct) {
            setTimeout(() => { 
                alert("انتهت القلوب! ركز في المرة القادمة ❤️"); 
                closeQuiz(); 
            }, 1000);
            return;
        }
        
        setTimeout(() => {
            document.getElementById('infoBox').style.display = 'block';
            document.getElementById('nextBtn').style.display = 'block';
        }, 300);
    }

    function nextStep() {
        gameState.currentQIndex++;
        const stage = stagesData[gameState.currentStageIndex];
        
        if(gameState.currentQIndex < stage.questions.length) {
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
            if(nextIdx < stagesData.length) {
                gameState.unlockedStages.push(nextIdx);
            }
        }
        
        gameState.points += 100;
        updateStats();
        saveGame(); // حفظ التقدم النهائي للمرحلة
        
        document.getElementById('quizOverlay').style.display = 'none';
        document.getElementById('resultOverlay').style.display = 'flex';
    }

    function closeResult() {
        document.getElementById('resultOverlay').style.display = 'none';
        renderMap();
    }

    function confirmCloseQuiz() {
        if(confirm("هل تريد الخروج؟ ستخسر تقدمك في هذه المرحلة")) {
            closeQuiz();
        }
    }

    function closeQuiz() {
        gameState.isQuizActive = false;
        document.getElementById('quizOverlay').style.display = 'none';
        renderMap();
    }

    window.addEventListener('load', init);
</script>
</body>
</html>
