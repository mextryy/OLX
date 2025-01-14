

function getFilters() {
    return {
        category: document.getElementById('category').value.trim(),
        priceMin: parseFloat(document.getElementById('priceMin').value) || 0,
        priceMax: parseFloat(document.getElementById('priceMax').value) || Infinity,
        color: document.getElementById('color').value.trim(),
        brand: document.getElementById('brand').value.trim(),
        condition: document.getElementById('condition').value.trim(), // Dodano stan
    };
}
//Funkcja renderuje produkty na stronie.
function wystawPrzedmiot(items) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; // Czyści obszar przed renderowaniem nowych produktów

    // Filtracja produktów tylko z dostępnością true
    const visibleItems = items.filter(item => item.available === true);

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
                </div>
                <p class="price">${item.cena} zł</p>
                <p class="description">${item.opis}</p>
              
            `;
            productsContainer.appendChild(productDiv);
        });
       
        // Obsługa usuwania przedmiotu
        document.querySelectorAll('.delete-item').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                usunPrzedmiot(index);
            });
        });
    }
}


// Funkcja ładująca dane z localStorage, jeśli są dostępne
function loadFromLocalStorage() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
       // return JSON.parse(savedProducts); // Przekonwertuj JSON na tablicę
       const allProducts = JSON.parse(savedProducts); // Wczytaj wszystkie produkty
        return allProducts.filter(product => product.dostepnosc === true); // Zwróć tylko dostępne produkty
    }
    return []; // Jeśli brak danych w localStorage, zwróć pustą tablicę
}

// Ładowanie produktów z localStorage przy starcie strony
const products = loadFromLocalStorage();

wystawPrzedmiot(products);
