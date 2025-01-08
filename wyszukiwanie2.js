function wyszukajPrzedmiot(query, filters) {
    const filteredItems = products.filter(product => {
        const nameMatch = product.nazwa.toLowerCase().includes(query.toLowerCase());
        
        // Dopasowanie kategorii (dla selecta)
        const categoryMatch = !filters.category || product.kategoria.toLowerCase().trim() === filters.category.toLowerCase().trim();

        // Dopasowanie ceny
        const priceMatch = product.cena >= filters.priceMin && product.cena <= filters.priceMax;

        // Dopasowanie koloru
        const colorMatch = !filters.color || product.kolor.toLowerCase().includes(filters.color.toLowerCase());

        // Dopasowanie marki
        const brandMatch = !filters.brand || product.marka.toLowerCase().includes(filters.brand.toLowerCase());

        // Dopasowanie dostępności (dla selecta)
        const availabilityMatch = !filters.availability || product.dostepnosc.toLowerCase() === filters.availability.toLowerCase();

        // Dopasowanie stanu (dla selecta)
        const conditionMatch = !filters.condition || product.stan.toLowerCase() === filters.condition.toLowerCase();

        return nameMatch && categoryMatch && priceMatch && colorMatch && brandMatch && availabilityMatch && conditionMatch;
    });

// Automatyczne przywracanie produktów po usunięciu tekstu
document.querySelector('.filters').addEventListener('input', (event) => {
    const query = event.target.value.trim();

    if (query === '') {
        renderItems(products); // Przywróć wszystkie produkty
    }
});
    // Jeżeli nie ma wyników i zapytanie jest puste, wyświetl komunikat
    if (query === '' && !Object.values(filters).some(filter => filter !== '' && filter !== 0 && filter !== Infinity)) {
        displayNoResultsMessage();
    } else {
        renderItems(filteredItems);
    }
}

function displayNoResultsMessage() {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '<p>Nie znaleziono żadnych wyników. Spróbuj zmienić filtry lub wyszukiwanie.</p>';
}

function getFilters() {
    return {
        category: document.getElementById('category').value.trim(),
        priceMin: parseFloat(document.getElementById('priceMin').value) || 0,
        priceMax: parseFloat(document.getElementById('priceMax').value) || Infinity,
        color: document.getElementById('color').value.trim(),
        brand: document.getElementById('brand').value.trim(),
        availability: document.getElementById('availability').value.trim(),
        condition: document.getElementById('condition').value.trim(), // Dodano stan
    };
}

function renderItems(items) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; // Czyści obszar przed renderowaniem nowych produktów

    // Renderowanie każdego przedmiotu w nowym divie
    if (items.length === 0) {
        productsContainer.innerHTML = '<p>Brak produktów do wyświetlenia.</p>';
    } else {
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
            `;
            productsContainer.appendChild(productDiv);
        });
    }
}

// Obsługa kliknięcia przycisku „Szukaj”
document.getElementById('search').addEventListener('click', () => {
    const query = document.querySelector('.search-bar-input').value.trim();
    const filters = getFilters();
   wyszukajPrzedmiot(query, filters);
});

// Automatyczne przywracanie produktów po usunięciu tekstu
document.querySelector('.search-bar-input').addEventListener('input', (event) => {
    const query = event.target.value.trim();

    if (query === '') {
        renderItems(products); // Przywróć wszystkie produkty
    }
});
function getFilters() {
    return {
        category: document.getElementById('category').value,
        priceMin: parseFloat(document.getElementById('priceMin').value) || 0,
        priceMax: parseFloat(document.getElementById('priceMax').value) || Infinity,
        color: document.getElementById('color').value,
        brand: document.getElementById('brand').value,
        availability: document.getElementById('availability').value
    };
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
