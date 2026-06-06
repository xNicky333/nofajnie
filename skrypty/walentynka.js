const content = document.getElementById("content");
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

// --- LOGIKA PRZYCISKU NIE ---
let noCount = 0;
const noCounter = document.createElement("div");
noCounter.className = "counter-text";
content.appendChild(noCounter);

function moveNo() {
    noBtn.style.position = "fixed";

    const maxSzerokosc = window.innerWidth - noBtn.offsetWidth;
    const maxWysokosc = window.innerHeight - noBtn.offsetHeight;

    const losowyX = Math.max(0, Math.random() * maxSzerokosc);
    const losowyY = Math.max(0, Math.random() * maxWysokosc);

    noBtn.style.left = losowyX + "px";
    noBtn.style.top = losowyY + "px";
    noBtn.style.transform = "none";
}

noBtn.addEventListener("mouseover", moveNo);

noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault(); 
    moveNo();
    rejestrujKlikniecieNie(e.touches[0].clientX, e.touches[0].clientY);
}, {passive: false});

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