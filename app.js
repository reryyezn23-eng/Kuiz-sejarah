const quizData = [
    {
        q: "Apa konsekuensi ekonomi paling signifikan bagi bangsa Eropa akibat jatuhnya Konstantinopel ke tangan Turki Utsmani pada tahun 1453?",
        options: [
            "Terputusnya rantai pasokan komoditas Asia di pasar Eropa.",
            "Eropa mengalami surplus pangan karena berhentinya impor.",
            "Bangsa Eropa beralih mengonsumsi gandum alih-alih rempah.",
            "Harga rempah-rempah menjadi sangat murah di pasar Eropa."
        ],
        answer: 0,
        rationale: "Jatuhnya Konstantinopel menutup rute darat (Jalan Sutra) yang biasa digunakan pedagang Eropa. Akibatnya, pasokan rempah dari Asia terputus, menyebabkan kelangkaan dan harga meroket."
    },
    {
        q: "Semboyan 'Glory' dalam penjelajahan samudra bangsa Eropa tidak sekadar berarti kejayaan, melainkan diwujudkan dalam bentuk...",
        options: [
            "Menumpuk emas dan perak sebanyak mungkin.",
            "Penaklukan wilayah baru untuk memperluas hegemoni politik.",
            "Penyebaran ajaran agama Kristen ke benua baru.",
            "Membangun infrastruktur perdagangan modern di Eropa."
        ],
        answer: 1,
        rationale: "Glory berfokus pada kejayaan politik dan kebanggaan nasional melalui perluasan wilayah jajahan (koloni). Emas/Perak adalah 'Gold', sedangkan penyebaran agama adalah 'Gospel'."
    },
    {
        q: "Keberhasilan Vasco da Gama mencapai Calicut, India pada tahun 1498 memiliki arti penting bagi bangsa Portugis karena...",
        options: [
            "Menemukan rute laut alternatif yang menghindari jalur darat Timur Tengah.",
            "Membuktikan bahwa bumi itu bulat untuk pertama kalinya.",
            "Berhasil menaklukkan seluruh daratan India di bawah panji Portugis.",
            "Menemukan benua Amerika yang kaya akan sumber daya alam."
        ],
        answer: 0,
        rationale: "Vasco da Gama menemukan rute laut langsung ke India via Tanjung Harapan, memutus monopoli pedagang Arab/Timur Tengah."
    },
    {
        q: "Selain sebagai bumbu masakan, alasan utama tingginya permintaan rempah-rempah di Eropa pada abad ke-15 adalah fungsinya untuk...",
        options: [
            "Bahan bakar kapal laut mesin uap.",
            "Bahan pembuat senjata api dan bubuk mesiu.",
            "Bahan pengawet daging selama menghadapi musim dingin.",
            "Perhiasan dan simbol status sosial kaum bangsawan."
        ],
        answer: 2,
        rationale: "Di Eropa yang memiliki musim dingin ekstrem, daging hewan yang disembelih harus diawetkan agar tidak busuk. Rempah-rempah seperti lada dan cengkeh adalah bahan pengawet alami terbaik saat itu."
    },
    {
        q: "Salah satu tujuan utama pemerintah Belanda mendukung pembentukan kongsi dagang VOC pada tahun 1602 adalah untuk...",
        options: [
            "Menyebarkan agama Kristen Protestan di Nusantara.",
            "Membantu kerajaan lokal melawan penjajah Portugis.",
            "Mencegah persaingan harga yang merugikan antar sesama pedagang Belanda.",
            "Membuka jalur perdagangan bebas bagi seluruh negara Eropa di Nusantara."
        ],
        answer: 2,
        rationale: "Sebelum VOC berdiri, banyak pedagang Belanda yang saling bersaing banting harga, sehingga keuntungan merosot. Pemerintah Belanda menyatukan mereka ke dalam VOC untuk memonopoli pasar."
    },
    {
        q: "Pembangunan infrastruktur fisik seperti jalan raya Anyer-Panarukan merupakan warisan kolonial. Dampak negatif utama dari pembangunan ini bagi rakyat lokal adalah...",
        options: [
            "Rakyat lokal dilarang menggunakan jalan tersebut.",
            "Menimbulkan banyak korban jiwa akibat penerapan sistem kerja paksa (rodi).",
            "Jalan raya tersebut merusak kesuburan tanah pertanian.",
            "Pembangunan didanai dari pemotongan gaji pegawai lokal."
        ],
        answer: 1,
        rationale: "Jalan Raya Pos Anyer-Panarukan dibangun menggunakan tenaga rakyat lokal melalui sistem kerja paksa (Rodi) tanpa upah layak, yang menyebabkan ribuan rakyat tewas."
    },
    {
        q: "Faktor internal utama yang menjadi penyebab kebangkrutan dan dibubarkannya VOC pada akhir abad ke-18 adalah...",
        options: [
            "Tingkat korupsi yang sangat parah di kalangan pegawai kongsi.",
            "Berkurangnya permintaan rempah-rempah di Eropa.",
            "Serangan militer besar-besaran dari armada laut Inggris.",
            "Bencana alam letusan gunung berapi yang menghancurkan Batavia."
        ],
        answer: 0,
        rationale: "Korupsi merajalela dari tingkat pegawai rendah hingga Gubernur Jenderal. Pegawai VOC banyak memotong keuntungan untuk kekayaan pribadi, membuat kas VOC kosong."
    },
    {
        q: "Selain masalah birokrasi, faktor eksternal yang membebani kondisi finansial VOC hingga berujung pada keruntuhannya adalah...",
        options: [
            "Besarnya biaya militer untuk memadamkan perlawanan penguasa lokal Nusantara.",
            "Munculnya wabah penyakit mematikan di seluruh Eropa.",
            "Berhentinya produksi rempah di Maluku akibat kemarau panjang.",
            "Dilarangnya kapal Belanda melintasi Terusan Suez."
        ],
        answer: 0,
        rationale: "VOC menerapkan monopoli yang kejam, memicu perlawanan sengit dari penguasa lokal. Perang-perang ini memakan biaya militer yang sangat besar."
    },
    {
        q: "Kedatangan bangsa Eropa ke Nusantara mengubah dinamika sistem perekonomian lokal secara drastis, yang ditandai dengan...",
        options: [
            "Rakyat lokal bebas berdagang dengan pedagang asing mana pun.",
            "Penerapan sistem monopoli perdagangan yang mengikat petani lokal.",
            "Diperkenalkannya mata uang kertas digital.",
            "Dihapuskannya sistem pajak hasil bumi."
        ],
        answer: 1,
        rationale: "Bangsa Eropa memaksakan hak monopoli. Petani lokal dipaksa hanya boleh menjual hasil bumi kepada VOC dengan harga sangat murah yang ditentukan sepihak."
    },
    {
        q: "Wilayah Nusantara yang menjadi incaran utama bagi pelayaran penjelajah Eropa dan dijuluki secara internasional sebagai 'The Spice Islands' adalah...",
        options: [
            "Pulau Jawa.",
            "Pulau Sumatra.",
            "Kepulauan Maluku.",
            "Kepulauan Nusa Tenggara."
        ],
        answer: 2,
        rationale: "Kepulauan Maluku (terutama Ternate, Tidore, Banda) adalah habitat asli dan penghasil utama cengkeh dan pala kualitas terbaik di dunia, sehingga dijuluki 'The Spice Islands'."
    }
];

let userAnswers = new Array(quizData.length).fill(null);
let currentIndex = 0;

const screens = {
    setup: document.getElementById('screen-setup'),
    learning: document.getElementById('screen-learning'),
    quiz: document.getElementById('screen-quiz'),
    results: document.getElementById('screen-results')
};

const appBody = document.getElementById('app-body');
const qCounter = document.getElementById('q-counter');
const qText = document.getElementById('q-text');
const qOptions = document.getElementById('q-options');
const navContainer = document.getElementById('question-nav');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnFinish = document.getElementById('btn-finish');

function switchScreen(screenId) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens[screenId].classList.remove('hidden');
    if(screenId === 'quiz') screens.quiz.classList.add('flex');
    else screens.quiz.classList.remove('flex');
}

function applySettings() {
    const bgUrl = document.getElementById('bg-url').value.trim();
    if (bgUrl) {
        appBody.style.backgroundImage = `linear-gradient(rgba(22,12,39,.88), rgba(22,12,39,.94)), url(\"${bgUrl.replace(/\"/g, '')}\")`;
        appBody.style.backgroundSize = 'cover';
        appBody.style.backgroundAttachment = 'fixed';
    }
    switchScreen('learning');
    document.getElementById('quiz-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function startQuiz() {
    userAnswers = new Array(quizData.length).fill(null);
    currentIndex = 0;
    renderNav();
    loadQuestion();
    switchScreen('quiz');
    document.getElementById('quiz-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderNav() {
    navContainer.innerHTML = '';
    quizData.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = `border font-semibold nav-btn 
                         ${userAnswers[index] !== null ? 'answered' : 'border-gray-300 text-gray-600 hover:bg-gray-100'} 
                         ${index === currentIndex ? 'current' : ''}`;
        btn.innerText = index + 1;
        btn.onclick = () => {
            currentIndex = index;
            loadQuestion();
        };
        navContainer.appendChild(btn);
    });
}

function loadQuestion() {
    const q = quizData[currentIndex];
    qCounter.innerText = `Soal ${currentIndex + 1} dari ${quizData.length}`;
    qText.innerText = q.q;
    const answered = userAnswers.filter(a => a !== null).length;
    const percent = Math.round((answered / quizData.length) * 100);
    const progressBar = document.getElementById('progress-bar');
    const progressPercent = document.getElementById('progress-percent');
    const answeredCount = document.getElementById('answered-count');
    if (progressBar) progressBar.style.width = `${Math.round(((currentIndex + 1) / quizData.length) * 100)}%`;
    if (progressPercent) progressPercent.innerText = `${percent}%`;
    if (answeredCount) answeredCount.innerText = `${answered} / ${quizData.length}`;
    const progressRing = document.querySelector('.progress-ring');
    if (progressRing) progressRing.style.background = `radial-gradient(closest-side,#f5edff 82%,transparent 84% 100%), conic-gradient(#9c5cdb ${percent}%,#e0c7fa ${percent}%)`;
    
    qOptions.innerHTML = '';
    q.options.forEach((optText, i) => {
        const btn = document.createElement('button');
        btn.className = `option-btn w-full text-left p-4 border rounded-lg mb-2 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none
                         ${userAnswers[currentIndex] === i ? 'option-selected font-semibold' : 'border-gray-200'}`;
        btn.innerText = String.fromCharCode(65 + i) + ". " + optText;
        btn.onclick = () => selectOption(i);
        qOptions.appendChild(btn);
    });

    btnPrev.disabled = currentIndex === 0;
    
    const allAnswered = userAnswers.every(a => a !== null);
    
    if (currentIndex === quizData.length - 1) {
        btnNext.classList.add('hidden');
        btnFinish.classList.remove('hidden');
        if(!allAnswered) {
            btnFinish.innerText = "Selesaikan (Ada yg terlewat!)";
            btnFinish.className = "px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 font-bold shadow";
        } else {
            btnFinish.innerText = "Selesaikan Kuis";
            btnFinish.className = "px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-bold shadow";
        }
    } else {
        btnNext.classList.remove('hidden');
        btnFinish.classList.add('hidden');
        btnNext.innerText = userAnswers[currentIndex] !== null ? "Selanjutnya \u2192" : "Lewati & Lanjut \u2192";
    }
    
    renderNav();
}

function selectOption(index) {
    userAnswers[currentIndex] = index;
    loadQuestion();
}

function nextQuestion() {
    if (currentIndex < quizData.length - 1) {
        currentIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}

function finishQuiz() {
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        const confirmMsg = `Kamu masih memiliki ${unanswered} soal yang belum dijawab. Yakin ingin mengumpulkan?`;
        if (!confirm(confirmMsg)) return;
    }
    showResults();
}

function showResults() {
    let score = 0;
    const container = document.getElementById('review-container');
    container.innerHTML = '';

    quizData.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.answer;
        if (isCorrect) score += 10;

        const item = document.createElement('div');
        item.className = `p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`;
        
        const statusBadge = isCorrect 
            ? `<span class="bg-green-500 text-white text-xs px-2 py-1 rounded uppercase font-bold">Benar</span>`
            : `<span class="bg-red-500 text-white text-xs px-2 py-1 rounded uppercase font-bold">Salah</span>`;
        
        const userAnswerText = userAnswers[i] !== null ? q.options[userAnswers[i]] : "<em>Tidak dijawab</em>";
        
        item.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <h4 class="font-bold text-gray-800">Soal ${i + 1} ${statusBadge}</h4>
            </div>
            <p class="text-gray-700 mb-3 text-sm">${q.q}</p>
            <div class="text-sm mb-3">
                <p class="text-gray-600 mb-1"><strong>Jawabanmu:</strong> ${userAnswerText}</p>
                ${!isCorrect ? `<p class="text-green-700 font-semibold"><strong>Kunci Jawaban:</strong> ${q.options[q.answer]}</p>` : ''}
            </div>
            <div class="bg-white p-3 rounded text-sm text-gray-700 border-l-4 ${isCorrect ? 'border-green-400' : 'border-blue-400'} shadow-sm">
                <strong>💡 Penjelasan:</strong><br>
                ${q.rationale}
            </div>
        `;
        container.appendChild(item);
    });

    document.getElementById('final-score').innerText = score;
    const msgEl = document.getElementById('score-msg');
    if(score >= 80) msgEl.innerText = "Luar biasa! Kamu sudah sangat siap menghadapi UTS!";
    else if(score >= 50) msgEl.innerText = "Cukup baik, tapi yuk pelajari lagi bagian yang salah di bawah ini.";
    else msgEl.innerText = "Jangan menyerah! Gunakan evaluasi di bawah untuk belajar lagi.";

    switchScreen('results');
    document.getElementById('quiz-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetQuiz() {
    switchScreen('setup');
    document.getElementById('quiz-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
