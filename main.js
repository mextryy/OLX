
// Inicjalizacja listy ulubionych z LocalStorage
let ulubione = JSON.parse(localStorage.getItem('ulubione')) || [];

// Funkcja dodająca produkt do ulubionych
function dodajDoUlubionych(nazwa, cena, opis, imgSrc) {
    // Sprawdzenie, czy produkt już istnieje
    const istnieje = ulubione.some(item => item.nazwa === nazwa);

    if (!istnieje) {
        const nowyProdukt = {
            nazwa: nazwa,
            cena: cena,
            opis: opis || "Brak opisu", // Domyślny opis
            imgSrc: imgSrc || "images/placeholder.png" // Domyślny obrazek
        };

        ulubione.push(nowyProdukt);
        localStorage.removeItem('ulubione'); // Wyczyść stare dane (ważne!)
        localStorage.setItem('ulubione', JSON.stringify(ulubione));
        console.log("Produkt dodany do ulubionych:", nowyProdukt);
    } else {
        console.log("Produkt już istnieje w ulubionych:", nazwa);
    }
}

// Obsługa kliknięć serduszka
document.addEventListener('DOMContentLoaded', () => {
    const serduszka = document.querySelectorAll('.add-to-favorites');

    serduszka.forEach((serce) => {
        serce.addEventListener('click', () => {
            const produkt = serce.closest('.product'); // Rodzic z klasą 'product'

            // Bezpieczne pobieranie danych z produktu
            const nazwa = produkt.querySelector('.name')?.innerText.trim() || "Nieznana nazwa";
            const cena = produkt.querySelector('.price')?.innerText.trim() || "Brak ceny";
            const opis = produkt.querySelector('.description')?.innerText.trim() || "Brak opisu";
            const imgSrc = produkt.querySelector('img')?.src || "images/placeholder.png";

            console.log("Zbierane dane produktu:", { nazwa, cena, opis, imgSrc });

            // Dodanie produktu do ulubionych
            dodajDoUlubionych(nazwa, cena, opis, imgSrc);

            // Zmiana serduszka na "kliknięte"
            const serceImg = serce.querySelector('img');
            if (serceImg) {
                serceImg.classList.add('clicked');
            }
        });
    });
});

let koszyk = JSON.parse(localStorage.getItem('koszyk')) || [];
function dodajDoKoszyka(nazwa, cena, opis, imgSrc) {
    const istnieje = koszyk.some(item => item.nazwa === nazwa);

    if (!istnieje) {
        const nowyProdukt = {
            nazwa: nazwa,
            cena: cena,
            opis: opis,
            imgSrc: imgSrc
        };

        koszyk.push(nowyProdukt);
        localStorage.setItem('koszyk', JSON.stringify(koszyk));
        console.log("Dodano do koszyka:", nowyProdukt);
    } else {
        console.log("Produkt już znajduje się w koszyku:", nazwa);
    }
}