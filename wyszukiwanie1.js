

// function renderItems(items) {
//     const productsContainer = document.querySelector('.products');
//     productsContainer.innerHTML = ''; // Czyści obszar przed renderowaniem nowych produktów

//     // Renderowanie każdego przedmiotu w nowym divie
//     if (items.length === 0) {
//         productsContainer.innerHTML = '<p>Brak produktów do wyświetlenia.</p>';
//     } else {
//         items.forEach(item => {
//             const productDiv = document.createElement('div');
//             productDiv.classList.add('product');
//             productDiv.innerHTML = `
//                 <img src="${item.zdjecie}" width="200" height="230" alt="${item.nazwa}">
//                 <div class="name-basket-favorites">
//                     <p class="name">${item.nazwa}</p>
                   
//                 </div>
//                 <p class="price">${item.cena} zł</p>
//                 <p class="description">${item.opis}</p>
//             `;
//             productsContainer.appendChild(productDiv);
//         });
//     }
// }
// // Funkcja ładująca dane z localStorage, jeśli są dostępne
// function loadFromLocalStorage() {
//     const savedProducts = localStorage.getItem('products');
//     if (savedProducts) {
//         return JSON.parse(savedProducts); // Przekonwertuj JSON na tablicę
//     }
//     return []; // Jeśli brak danych w localStorage, zwróć pustą tablicę
// }

// // Ładowanie produktów z localStorage przy starcie strony
// const products = loadFromLocalStorage();

// // Początkowe renderowanie wszystkich produktów
// renderItems(products);

function loginUser(username, password) {
    const users = loadUsersFromLocalStorage();
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        alert('Nieprawidłowa nazwa użytkownika lub hasło.');
        return;
    }

    // Zapisz nazwę użytkownika w `localStorage`
    localStorage.setItem('currentSellerId', username);
    alert('Zalogowano pomyślnie.');

    // Załaduj produkty dla zalogowanego użytkownika
    const sellerProducts = getProductsForSeller(username);
    renderItems(sellerProducts);
}

function getProductsForSeller(username) {
    if (!username) {
        return []; // Brak zalogowanego użytkownika
    }
    return products.filter(product => product.sellerId === username);
}

function renderItems(items) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; // Czyści obszar przed renderowaniem nowych produktów

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

function loadFromLocalStorage() {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
}

const products = loadFromLocalStorage();

// Renderowanie produktów po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
    const currentSellerId = localStorage.getItem('currentSellerId');
    const sellerProducts = currentSellerId ? getProductsForSeller(currentSellerId) : [];
    renderItems(sellerProducts);
});

