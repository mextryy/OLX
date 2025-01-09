// Funkcja renderująca produkty
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
                </div>
                <p class="price">${item.cena} zł</p>
                <p class="description">${item.opis}</p>
            `;
            productsContainer.appendChild(productDiv);
        });
    }
}


// Funkcja ładująca dane z localStorage, jeśli są dostępne
function loadFromLocalStorage() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        return JSON.parse(savedProducts); // Przekonwertuj JSON na tablicę
    }
    return []; // Jeśli brak danych w localStorage, zwróć pustą tablicę
}

// Funkcja filtrująca produkty dla zalogowanego użytkownika po username
function getProductsForUser(username) {
    const products = loadFromLocalStorage(); // Załaduj produkty z localStorage
    return products.filter(product => product.username === username); // Filtruj produkty po username
}

document.addEventListener("DOMContentLoaded", () => {
    const currentUsername = localStorage.getItem('username'); // Pobierz nazwę użytkownika z localStorage

    // Jeśli użytkownik jest zalogowany (ma zapisane dane), załaduj jego produkty
    if (currentUsername) {
        const userProducts = getProductsForUser(currentUsername); // Filtruj produkty po username
        renderItems(userProducts); // Renderuj produkty przypisane do tego użytkownika
    } 
});



// // Ładowanie produktów z localStorage przy starcie strony
 const products = loadFromLocalStorage();

// // Początkowe renderowanie wszystkich produktów
// renderItems(products);
