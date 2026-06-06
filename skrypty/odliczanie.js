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


const dzisiaj = new Date();
let rokDocelowy = dzisiaj.getFullYear();
let data_docelowa = new Date(rokDocelowy, 11, 13, 0, 0, 0).getTime();

if(dzisiaj.getTime() > data_docelowa + 86400000){
    rokDocelowy++;
    data_docelowa = new Date(rokDocelowy, 11, 13, 0, 0, 0).getTime();
}

const zegar = setInterval(function(){
    const teraz = new Date().getTime();
    const zostalo = data_docelowa - teraz;
    const pojemnik_na_zegar = document.getElementById("odliczanie");

    if (pojemnik_na_zegar){
        if (zostalo <= 0 && zostalo > -86400000){
            pojemnik_na_zegar.innerHTML = "Wszystkiego najlepszego!";
        } else {
            const dni = Math.floor(zostalo / (1000*60*60*24));
            const godziny = Math.floor((zostalo % (1000*60*60*24)) / (1000*60*60));
            const minuty = Math.floor((zostalo % (1000 * 60 * 60)) / (1000 * 60));
            const sekundy = Math.floor((zostalo % (1000 * 60)) / 1000);

            pojemnik_na_zegar.innerHTML = 
                dni + " dni " + godziny + " godz. " + minuty + " min. " + sekundy + " sek.";
        }
    }
}, 1000);