// Funkcja ładująca dane z localStorage
function loadFromLocalStorage() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        return JSON.parse(savedProducts); // Przekonwertuj JSON na tablicę
    }
    return []; // Jeśli brak danych, zwróć pustą tablicę
}

// Funkcja zapisująca tablicę do localStorage
function saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products)); // Przekonwertuj tablicę na JSON i zapisz
}

// Ładowanie danych z localStorage
let products = loadFromLocalStorage(); // Tablica produktów z localStorage lub pusta tablica

function renderProducts() {
    const przedmiotyList = document.getElementById("przedmioty-list");
    przedmiotyList.innerHTML = ""; // Wyczyść listę przedmiotów

    // Dodaj każdy przedmiot do listy
    products.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${item.nazwa}</strong> - ${item.cena} PLN
            <br>Kolor: ${item.kolor}, Stan: ${item.stan}, Marka: ${item.marka}, Kategoria: ${item.kategoria}
            <br>${item.opis}
         ${item.zdjecie ? `<br><img src="${item.zdjecie}" alt="${item.nazwa}" style="max-width: 200px;">` : ""}`;
        przedmiotyList.appendChild(listItem);
    });
}
function deleteProduct(index) {
    // Usuwanie przedmiotu z tablicy
    products.splice(index, 1);

    // Zapisanie zaktualizowanej tablicy do localStorage
    saveToLocalStorage();

    // Ponowne renderowanie listy przedmiotów
    renderProducts();
}
// Funkcja obsługująca formularz dodawania przedmiotów
const form = document.getElementById("przedmiot-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();//Zapobiega odświeżaniu strony
    console.log("Formularz został wysłany.");

    // Pobieranie wartości z formularza
    const nazwa = document.getElementById("nazwa").value;
    const cena = parseFloat(document.getElementById("cena").value);
    const kolor = document.getElementById("kolor").value;
    const stan = document.getElementById("stan").value;
    const marka = document.getElementById("marka").value;
    const kategoria = document.getElementById("kategoria").value;
    const opis = document.getElementById("opis").value;
    const zdjecie = document.getElementById("zdjecie").value;



    // Tworzenie nowego przedmiotu
    const newProduct = {
        nazwa,
        cena,
        kolor,
        stan,
        marka,
        kategoria,
        opis,
        dostepnosc: true, // Domyślnie przedmiot jest dostępny
        zdjecie,
        
    };

    // Dodanie nowego przedmiotu do tablicy
    products.push(newProduct);

    // Czyszczenie formularza
    form.reset();

    // Zapisanie zaktualizowanej tablicy do localStorage
    saveToLocalStorage();

    // Renderowanie wszystkich przedmiotów po dodaniu nowego
    renderProducts();

    // Czyszczenie formularza
    form.reset();
});


