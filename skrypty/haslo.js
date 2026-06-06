const hasloModal = document.getElementById("haslo-modal");
const hasloInput = document.getElementById("haslo-input");
const hasloBtn = document.getElementById("haslo-btn");
const hasloBlad = document.getElementById("haslo-blad");
const zawartoscStrony = document.getElementById("zawartosc-strony");

const poprawneHaslo = "kochamcie"; 

function sprawdzHaslo() {
    if (hasloInput.value === poprawneHaslo) {
        hasloModal.style.display = "none"; // Ukrywamy modal
        zawartoscStrony.style.display = "flex"; // Odkrywamy stronę
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