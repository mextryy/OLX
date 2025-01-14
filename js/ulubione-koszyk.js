//DLA GŁÓWNEJ STRONY

// Inicjalizacja listy ulubionych z LocalStorage
let ulubione = JSON.parse(localStorage.getItem('ulubione')) || [];

// Funkcja dodająca produkt do ulubionych
function dodajDoUlubionych(nazwa, cena, opis, imgSrc, available) {
    // Sprawdzenie, czy produkt już istnieje w ulubionych
    const istnieje = ulubione.some(item => item.nazwa === nazwa);

    if (!istnieje) {
        // Tworzenie nowego obiektu produktu
        const nowyProdukt = {
            nazwa: nazwa,
            cena: cena,
            opis: opis || "Brak opisu", 
            imgSrc: imgSrc || "images/placeholder.png", 
            available: true 
        };

        // Dodanie nowego produktu do ulubionych
        ulubione.push(nowyProdukt);
        localStorage.removeItem('ulubione'); // Czyszczenie starego LocalStorage
        localStorage.setItem('ulubione', JSON.stringify(ulubione)); // Zapis nowej listy
        console.log("Produkt dodany do ulubionych:", nowyProdukt);
    } else {
        console.log("Produkt już istnieje w ulubionych:", nazwa);
    }
}

// Obsługa kliknięć przycisków dodawania do ulubionych
document.addEventListener('DOMContentLoaded', () => {
    const serduszka = document.querySelectorAll('.add-to-favorites');

    serduszka.forEach((serce) => {
        serce.addEventListener('click', () => {
            const produkt = serce.closest('.product'); 

            // Pobieranie danych produktu
            const nazwa = produkt.querySelector('.name')?.innerText.trim() || "Nieznana nazwa";
            const cena = produkt.querySelector('.price')?.innerText.trim() || "Brak ceny";
            const opis = produkt.querySelector('.description')?.innerText.trim() || "Brak opisu";
            const imgSrc = produkt.querySelector('img')?.src || "images/placeholder.png";
            const available = produkt.dataset.available ? produkt.dataset.available === "true" : true;

            console.log("Zbierane dane produktu:", { nazwa, cena, opis, imgSrc, available });

            // Dodanie produktu do ulubionych
            dodajDoUlubionych(nazwa, cena, opis, imgSrc, available);

            // Zmiana stylu serduszka po kliknięciu
            const serceImg = serce.querySelector('img');
            if (serceImg) {
                serceImg.classList.add('clicked');
            }
        });
    });
});


// Obsługa przycisku "Kup teraz"
document.addEventListener('DOMContentLoaded', () => {
    const kupTerazButton = document.getElementById('kup-teraz');

    kupTerazButton.addEventListener('click', () => {
        // Pobierz produkty z koszyka
        const koszykProdukty = JSON.parse(localStorage.getItem('koszyk')) || [];

        if (koszykProdukty.length === 0) {
            // Jeśli koszyk jest pusty, wyświetl komunikat
            alert("Twój koszyk jest pusty!");
        } else {
            // Jeśli koszyk zawiera produkty, wyświetl komunikat o zakupie
            alert("Dziękujemy za zakupy! Zostaniesz przekierowany na stronę płatności.");
        }
    });
});
