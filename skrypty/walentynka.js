// --- 1. OBSŁUGA HASŁA ---
const hasloModal = document.getElementById("haslo-modal");
const hasloInput = document.getElementById("haslo-input");
const hasloBtn = document.getElementById("haslo-btn");
const hasloBlad = document.getElementById("haslo-blad");
const content = document.getElementById("content");

const poprawneHaslo = "kochamcie"; 

function sprawdzHaslo() {
    if (hasloInput.value === poprawneHaslo) {
        hasloModal.style.display = "none"; // Ukrywamy okienko z hasłem
        content.style.display = "block"; // Pokazujemy walentynkę
    } else {
        hasloBlad.style.display = "block"; // Pokazujemy błąd
        hasloInput.value = ""; // Czyścimy pole
    }
}

// Sprawdzanie po kliknięciu przycisku "Wejdź"
hasloBtn.addEventListener("click", sprawdzHaslo);

// Sprawdzanie po wciśnięciu klawisza Enter
hasloInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sprawdzHaslo();
    }
});


// --- 2. RESZTA SKRYPTU (Przyciski i animacje) ---
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// --- KLIKNIĘCIE TAK ---
yesBtn.addEventListener("click", function() {
    content.innerHTML = `
        <h1>Kocham Cię Martynka ❤️</h1>
        <img src="piesek.jpg" alt="Nasze zdjęcie">
    `;
    launchFireworks();
});

// --- LOGIKA PRZYCISKU NIE (Uciekanie po całym ekranie) ---
let noCount = 0;

// Tworzymy element licznika i dodajemy do głównego diva
const noCounter = document.createElement("div");
noCounter.className = "counter-text";
content.appendChild(noCounter);

function moveNo() {
    // 1. Zmieniamy pozycję na "fixed", co uwalnia przycisk z białej karty
    noBtn.style.position = "fixed";

    // 2. Pobieramy aktualne wymiary całego okna przeglądarki
    // Odejmujemy szerokość/wysokość przycisku, żeby nie wyleciał za krawędź ekranu
    const maxSzerokosc = window.innerWidth - noBtn.offsetWidth;
    const maxWysokosc = window.innerHeight - noBtn.offsetHeight;

    // 3. Losujemy nowe miejsce na ekranie
    // Używamy Math.max(0, ...), żeby uniknąć wartości ujemnych
    const losowyX = Math.max(0, Math.random() * maxSzerokosc);
    const losowyY = Math.max(0, Math.random() * maxWysokosc);

    // 4. Przypisujemy nowe współrzędne do przycisku
    noBtn.style.left = losowyX + "px";
    noBtn.style.top = losowyY + "px";
    
    // Resetujemy ewentualne stare transformacje
    noBtn.style.transform = "none";
}

// Uruchomienie ucieczki przy najeździe myszką
noBtn.addEventListener("mouseover", moveNo);

// Uruchomienie ucieczki przy dotyku na telefonie
noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault(); 
    moveNo();
    rejestrujKlikniecieNie(e.touches[0].clientX, e.touches[0].clientY);
}, {passive: false});

// Rejestrowanie ewentualnego kliknięcia (gdyby komuś się udało)
noBtn.addEventListener("click", function(e) {
    rejestrujKlikniecieNie(e.clientX, e.clientY);
});

function rejestrujKlikniecieNie(x, y) {
    noCount++;
    noCounter.innerText = `Próby wciśnięcia NIE: ${noCount}`;
    showAha(x, y);
}

// --- NAPIS AHA ---
function showAha(x, y) {
    const aha = document.createElement("div");
    aha.innerText = "Aha.";
    aha.style.position = "fixed";
    aha.style.left = x + "px";
    aha.style.top = y + "px";
    aha.style.color = "#d81b60"; 
    aha.style.fontSize = "22px";
    aha.style.fontWeight = "bold";
    aha.style.opacity = 1;
    aha.style.transition = "all 1s ease-out";
    aha.style.zIndex = "1000";
    document.body.appendChild(aha);

    setTimeout(() => {
        aha.style.top = (y - 50) + "px";
        aha.style.opacity = 0;
    }, 50);

    setTimeout(() => aha.remove(), 1050);
}

// --- SPADAJĄCE SERDUSZKA W TLE ---
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// --- FAJERWERKI SERDUSZEK PO KLIKNIĘCIU "TAK" ---
function launchFireworks() {
    const count = 40; 
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.classList.add("firework-heart");
        heart.innerHTML = "❤️";

        const startX = window.innerWidth / 2;
        const startY = window.innerHeight / 2;

        heart.style.left = startX + "px";
        heart.style.top = startY + "px";
        document.body.appendChild(heart);

        const rozrzutX = (Math.random() - 0.5) * 600;
        const rozrzutY = (Math.random() - 0.5) * 600;

        setTimeout(() => {
            heart.style.transform = `translate(${rozrzutX}px, ${rozrzutY}px) scale(0)`;
            heart.style.opacity = 0;
        }, 50);

        setTimeout(() => heart.remove(), 1200);
    }
}