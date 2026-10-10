
 // ==========================================
 // منطقة المنهج: أحكام الهمز المفرد لأبي جعفر المدني
 // ==========================================

const syllabus = [
    {
        chapter: "أصول أبي جعفر المدني",
        branches: [
            {
                title: "1. مفهوم الهمز المفرد",
                lesson: "📜 خريطة الدرس:\nالهمز المفرد هو الهمز الذي لم يقترن بهمزة أخرى في الكلمة نفسها.\nمن أصول أبي جعفر في الهمز المفرد الإبدال في مواضع مخصوصة، وتُعرف التفاصيل من خلال القواعد والاستثناءات.",
                questions: [
                    {
                        q: "ما المقصود بالهمز المفرد؟",
                        options: [
                            "همزتان في كلمة واحدة",
                            "همز لم يقترن بهمزة أخرى",
                            "همزتان من كلمتين"
                        ],
                        a: "همز لم يقترن بهمزة أخرى"
                    },
                    {
                        q: "ما الأصل المشهور لأبي جعفر في الهمز المفرد الساكن؟",
                        options: [
                            "إبداله حرف مد من جنس حركة ما قبله",
                            "حذفه دائمًا",
                            "إمالته دائمًا"
                        ],
                        a: "إبداله حرف مد من جنس حركة ما قبله"
                    }
                ]
            },
            {
                title: "2. إبدال الهمز الساكن",
                lesson: "📜 خريطة الدرس:\nمن أصول أبي جعفر إبدال الهمز الساكن حرف مد من جنس حركة الحرف الذي قبله.\nإذا كان ما قبله مفتوحًا أبدل ألفًا، وإذا كان مضمومًا أبدل واوًا، وإذا كان مكسورًا أبدل ياءً.\nهذه قاعدة عامة، ولها مواضع مستثناة.",
                questions: [
                    {
                        q: "إذا سبق الهمز الساكن حرف مفتوح، فما حرف الإبدال؟",
                        options: ["الألف", "الواو", "الياء"],
                        a: "الألف"
                    },
                    {
                        q: "إذا سبق الهمز الساكن حرف مضموم، فما حرف الإبدال؟",
                        options: ["الألف", "الواو", "الياء"],
                        a: "الواو"
                    },
                    {
                        q: "إذا سبق الهمز الساكن حرف مكسور، فما حرف الإبدال؟",
                        options: ["الألف", "الواو", "الياء"],
                        a: "الياء"
                    }
                ]
            },
            {
                title: "3. الكلمات المستثناة",
                lesson: "📜 خريطة الدرس:\nمن المواضع المشهورة المستثناة من قاعدة إبدال الهمز الساكن:\n﴿أَنْبِئْهُمْ﴾ في البقرة، و﴿نَبِّئْهُمْ﴾ في الحجر والقمر.\nيقرأ أبو جعفر الهمزة فيهما بالتحقيق.\nاحفظ القاعدة مع استثناءاتها، ولا تعمم الحكم دون مراجعة موضعه.",
                questions: [
                    {
                        q: "كيف يقرأ أبو جعفر الهمزة في ﴿أَنْبِئْهُمْ﴾؟",
                        options: [
                            "بالتحقيق",
                            "بإبدالها ألفًا",
                            "بحذفها"
                        ],
                        a: "بالتحقيق"
                    },
                    {
                        q: "أي كلمة من الآتي تُعد من مواضع الاستثناء المشهورة؟",
                        options: [
                            "أَنْبِئْهُمْ",
                            "آمَنَ",
                            "مُؤْمِن"
                        ],
                        a: "أَنْبِئْهُمْ"
                    }
                ]
            },
            {
                title: "4. إبدال الهمز المتحرك",
                lesson: "📜 خريطة الدرس:\nلأبي جعفر أحكام أخرى في بعض الهمزات المتحركة، منها إبدال الهمزة واوًا مفتوحة إذا كانت مفتوحة وما قبلها مضمومًا، مثل مُؤَجَّلًا.\nومن أمثلة إبدال الهمزة ياءً في مواضع مخصوصة: مِائَة وفِئَة.\nتُضبط الأمثلة وتفاصيلها بحسب الرواية والطريق.",
                questions: [
                    {
                        q: "ما الحكم المشهور في همزة كلمة ﴿مُؤَجَّلًا﴾ عند أبي جعفر؟",
                        options: [
                            "إبدالها واوًا مفتوحة",
                            "حذف الكلمة",
                            "إبدالها ألفًا دائمًا"
                        ],
                        a: "إبدالها واوًا مفتوحة"
                    },
                    {
                        q: "أي كلمة من الآتي من أمثلة إبدال الهمزة ياءً في مواضع مخصوصة؟",
                        options: [
                            "مِائَة",
                            "قَالَ",
                            "يَقُولُ"
                        ],
                        a: "مِائَة"
                    }
                ]
            },
            {
                title: "5. الفروق بين الراويين",
                lesson: "📜 خريطة الدرس:\nروى قراءة أبي جعفر ابن وردان وابن جماز.\nقد يختلف الراويان في بعض الكلمات، لذلك يجب تحديد الراوي قبل تقرير الحكم.\nمن الأمثلة المشهورة كلمة ﴿يُؤَيِّدُ﴾؛ أبدل ابن جماز الهمزة، وحققها ابن وردان.\nالتلقي والمشافهة أساس إتقان الأداء.",
                questions: [
                    {
                        q: "من راويَا أبي جعفر المدني؟",
                        options: [
                            "حفص وشعبة",
                            "ابن وردان وابن جماز",
                            "قالون وورش"
                        ],
                        a: "ابن وردان وابن جماز"
                    },
                    {
                        q: "ما الفرق المشهور بين الراويين في ﴿يُؤَيِّدُ﴾؟",
                        options: [
                            "أبدلها ابن جماز وحققها ابن وردان",
                            "حققها ابن جماز وأبدلها ابن وردان",
                            "اتفقا على حذف الكلمة"
                        ],
                        a: "أبدلها ابن جماز وحققها ابن وردان"
                    }
                ]
            }
        ]
    }
    // يمكنك إضافة دروس أخرى هنا
];

// ==========================================
// نهاية منطقة المنهج
// ==========================================

let cIdx = 0;
let bIdx = 0;
let qIdx = 0;
let needsLesson = true;
let totalLocks = 0;
let locksBroken = 0;

window.onload = () => {
    populateIndex();
    setupDoorsAndLocks();
    drawQuestion();
};

function populateIndex() {
    const select = document.getElementById('lesson-index');
    select.innerHTML = '';

    syllabus.forEach((chap, cIndex) => {
        const optGroup = document.createElement('optgroup');
        optGroup.label = chap.chapter;

        chap.branches.forEach((branch, bIndex) => {
            const opt = document.createElement('option');
            opt.value = `${cIndex}-${bIndex}`;
            opt.innerText = branch.title;
            optGroup.appendChild(opt);
        });

        select.appendChild(optGroup);
    });
}

function setupDoorsAndLocks() {
    document.getElementById('left-door').classList.remove('open-left');
    document.getElementById('right-door').classList.remove('open-right');
    document.getElementById('next-room-bg').style.opacity = '0';

    totalLocks = syllabus[cIdx].branches[bIdx].questions.length;
    locksBroken = 0;

    document.getElementById('locks-left').innerText = totalLocks;

    const locksContainer = document.getElementById('locks-container');
    locksContainer.innerHTML = '';

    for (let i = 0; i < totalLocks; i++) {
        const lock = document.createElement('div');
        lock.className = 'padlock';
        lock.id = `lock-${i}`;
        lock.innerText = '🔒';
        locksContainer.appendChild(lock);
    }
}

function jumpToLesson() {
    const val = document.getElementById('lesson-index').value;
    if (!val) return;

    const [c, b] = val.split('-').map(Number);

    cIdx = c;
    bIdx = b;
    qIdx = 0;
    needsLesson = true;

    setupDoorsAndLocks();
    showFeedback("تم دخول غرفة جديدة! 🏰");
    drawQuestion();
}

function drawQuestion() {
    if (cIdx >= syllabus.length) {
        alert("🏆 مبروك! أتممت جميع دروس الهمز المفرد لأبي جعفر!");
        return;
    }

    document.getElementById('lesson-index').value = `${cIdx}-${bIdx}`;

    if (needsLesson) {
        showLessonUI(false);
    } else {
        showQuestion();
    }
}

function showLessonUI(isRetry) {
    const branchData = syllabus[cIdx].branches[bIdx];

    document.getElementById('lesson-title').innerText =
        isRetry ? "👻 ظهر شبح القلعة!" : branchData.title;

    let textToShow = branchData.lesson;

    if (isRetry) {
        textToShow =
            "إجابة غير صحيحة! اقرأ القاعدة مرة أخرى ثم حاول.\n\n" +
            textToShow;
    }

    document.getElementById('lesson-text').innerText = textToShow;
    document.getElementById('lesson-section').classList.remove('hidden');
    document.getElementById('question-section').classList.add('hidden');
    document.getElementById('quiz-modal').classList.remove('hidden');
}

function showQuestion() {
    const chapterData = syllabus[cIdx];
    const branchData = chapterData.branches[bIdx];
    const questionData = branchData.questions[qIdx];

    document.getElementById('chapter-branch-label').innerText =
        `${chapterData.chapter} - ${branchData.title}`;

    document.getElementById('question-counter').innerText =
        `البحث عن المفتاح ${qIdx + 1} من ${totalLocks}`;

    document.getElementById('question-text').innerText = questionData.q;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    questionData.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, questionData.a);
        optionsDiv.appendChild(btn);
    });

    document.getElementById('lesson-section').classList.add('hidden');
    document.getElementById('question-section').classList.remove('hidden');
    document.getElementById('quiz-modal').classList.remove('hidden');
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        document.getElementById('quiz-modal').classList.add('hidden');
        showFeedback("🗝️ إجابة صحيحة! تم كسر القفل.");

        const currentLock = document.getElementById(`lock-${locksBroken}`);

        if (currentLock) {
            currentLock.classList.add('broken-lock');
        }

        locksBroken++;
        document.getElementById('locks-left').innerText =
            totalLocks - locksBroken;

        if (locksBroken >= totalLocks) {
            setTimeout(() => {
                showFeedback("🌟 فُتح الباب!");

                document.getElementById('left-door').classList.add('open-left');
                document.getElementById('right-door').classList.add('open-right');
                document.getElementById('next-room-bg').style.opacity = '1';
                document.getElementById('locks-container').innerHTML = '';

                setTimeout(() => {
                    qIdx = 0;
                    bIdx++;
                    needsLesson = true;

                    if (bIdx >= syllabus[cIdx].branches.length) {
                        bIdx = 0;
                        cIdx++;
                    }

                    if (cIdx < syllabus.length) {
                        setupDoorsAndLocks();
                        showFeedback("دخلت الغرفة التالية! 🚪");
                        drawQuestion();
                    } else {
                        document.getElementById('quiz-modal').classList.add('hidden');
                        alert("🏆 مبروك! أكملت جميع الدروس بنجاح!");
                    }
                }, 2500);

            }, 1000);
        } else {
            qIdx++;
            needsLesson = false;
            setTimeout(() => drawQuestion(), 700);
        }
    } else {
        needsLesson = true;
        showLessonUI(true);
    }
}

function showFeedback(text) {
    const feedback = document.getElementById('feedback-message');

    feedback.innerText = text;
    feedback.classList.remove('hidden');
    feedback.style.animation = 'none';
    feedback.offsetHeight;
    feedback.style.animation = 'popIn 1.5s ease-out forwards';
}
