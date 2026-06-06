const hasloModal = document.getElementById("haslo-modal");
const hasloInput = document.getElementById("haslo-input");
const hasloBtn = document.getElementById("haslo-btn");
const hasloBlad = document.getElementById("haslo-blad");
const zawartoscStrony = document.getElementById("zawartosc-strony");

const poprawneHaslo = "kochamcie"; 

// --- NOWE: 1. Sprawdzamy, czy przeglądarka "pamięta" logowanie ---
if (sessionStorage.getItem("odblokowane") === "tak") {
    // Jeśli tak, od razu ukrywamy okienko i pokazujemy stronę
    hasloModal.style.display = "none";
    zawartoscStrony.style.display = "flex";
}

// --- 2. Funkcja sprawdzająca wpisywane hasło ---
function sprawdzHaslo() {
    if (hasloInput.value === poprawneHaslo) {
        
        // --- NOWE: Zapisujemy w pamięci przeglądarki, że podano dobre hasło ---
        sessionStorage.setItem("odblokowane", "tak");
        
        hasloModal.style.display = "none"; 
        zawartoscStrony.style.display = "flex"; 
    } else {
        hasloBlad.style.display = "block"; 
        hasloInput.value = ""; 
    }
}

hasloBtn.addEventListener("click", sprawdzHaslo);

hasloInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sprawdzHaslo();
    }
});