// Funkcja filtrująca przedmioty na podstawie wpisanego tekstu w wyszukiwarce
function searchItems(query) {
    // Filtrujemy produkty, sprawdzając czy nazwa lub opis zawierają tekst z pola wyszukiwania
    const filteredItems = products.filter(product => {
        const nameMatch = product.nazwa.toLowerCase().includes(query.toLowerCase());
        // const descriptionMatch = product.opis.toLowerCase().includes(query.toLowerCase());
        // return nameMatch || descriptionMatch;
        return nameMatch
    });
    
    // Renderowanie pasujących przedmiotów
    renderItems(filteredItems);
}

// Nasłuchiwanie na zmianę w polu wyszukiwania
const searchInput = document.querySelector('.search-bar-input');
searchInput.addEventListener('input', (event) => {
    const query = event.target.value;
    searchItems(query);
});

// Funkcja renderująca produkty na stronie (na podstawie tablicy przekazanej jako argument)
function renderItems(items) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; // Czyści obszar przed renderowaniem nowych produktów

    // Renderowanie każdego przedmiotu w nowym divie
    items.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${item.zdjecie}" width="200" height="230" alt="${item.nazwa}">
            <div class="name-basket-favorites">
                <p class="name">${item.nazwa}</p>
                <div> 
                    <button class="add-to-basket">
                        <img src="images/basket-svgrepo-com.png" alt="basket" width="30" height="25">
                    </button>
                    <button class="add-to-favorites">
                        <img src="images/heart-svgrepo-com.png" alt="heart" width="30" height="25">
                    </button>
                </div>
            </div>
            <p class="price">${item.cena} zł</p>
            <p class="description">${item.opis}</p>
            <button class="remove-btn" onclick="removeProduct('Krzesło')">Usuń</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Funkcja ładująca dane z localStorage, jeśli są dostępne
function loadFromLocalStorage() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        return JSON.parse(savedProducts); // Przekonwertuj JSON na tablicę
    }
    return []; // Jeśli brak danych w localStorage, zwróć pustą tablicę
}

// Ładowanie produktów z localStorage przy starcie strony
const products = loadFromLocalStorage();

// Początkowe renderowanie wszystkich produktów
renderItems(products);
