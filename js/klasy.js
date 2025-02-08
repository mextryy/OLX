
// class Przedmiot{
//     constructor(cena, kolor, stan, marka, kategoria, opis, dostepnosc,nazwa,zdjecie) {
//         this.cena = cena; 
//         this.kolor = kolor;
//         this.stan = stan; 
//         this.marka = marka; 
//         this.kategoria = kategoria; 
//         this.opis = opis; 
//         this.dostepnosc = dostepnosc; 
//         this.nazwa = nazwa; 
//         this.zdjecie= zdjecie; 
//     }
//     dodajDoKoszyka(){
//         // Sprawdzenie, czy produkt już istnieje w koszyku
//    const istnieje = koszyk.some(item => item.nazwa === nazwa);

//    if (!istnieje) {
//        // Tworzenie nowego obiektu produktu
//        const nowyProdukt = {
//            nazwa: nazwa,
//            cena: cena,
//            opis: opis,
//            imgSrc: imgSrc
//        };

//        // Dodanie nowego produktu do koszyka
//        koszyk.push(nowyProdukt);
//        localStorage.setItem('koszyk', JSON.stringify(koszyk)); // Zapis koszyka do LocalStorage
//        console.log("Dodano do koszyka:", nowyProdukt);
//    } else {
//        console.log("Produkt już znajduje się w koszyku:", nazwa);
//    }

//    }
// }
// class Koszyk{
//     constructor(nazwaPrzedmiotu,cena,ilosc){
//         this.nazwaPrzedmiotu=nazwaPrzedmiotu;
//         this.cena=cena;
//         this.ilosc=ilosc;
//     }
   
//     obliczKoszyk(){
//         const suma = koszykProdukty.reduce((acc, produkt) => {
//             const cena = parseFloat(produkt.cena.replace(/[^0-9,.]/g, '').replace(',', '.')) || 0;
//             return acc + cena;
//         }, 0);
//         sumaCenElement.textContent = `${suma.toFixed(2)} zł`;
//         // Zapisz sumę w sessionStorage
//         localStorage.setItem('sumaKoszyka', suma.toFixed(2));

//     }

// }

// class Platnosc{
//     constructor(kwota,formaPlatnosci){
//         this.kwota=kwota;
//         this.formaPlatnosci=formaPlatnosci;
//         }
        
//     }
// class Blik{
//     constructor(kodBlika){
//         this.kodBlika=kodBlika;
//     }
// }
// class Przelew{
//     constructor(numerRachunkuOdbiorcy,imie,nazwisko){
//         this.numerRachunkuOdbiorcy=numerRachunkuOdbiorcy;
//         this.imie=imie;
//         this.nazwisko=nazwisko;
//     }
// }
// class Karta{
//     constructor(numerKarty,CVV,dataWaznosci,imie,nazwisko){
//         this.numerKarty=numerKarty;
//         this.CVV=CVV;
//         this.dataWaznosci=dataWaznosci;
//         this.imie=imie;
//         this.nazwisko=nazwisko;
//     }
// }
// class FormaWysylki{
//     constructor(kurier,paczkomaty,przesylkaPocztowa,punktyOdbioru){
//         this.kurier=kurier;
//         this.paczkomaty=paczkomaty;
//         this.przesylkaPocztowa=przesylkaPocztowa;
//         this.punktyOdbioru=punktyOdbioru;
// }
// }
// class DaneDoWysylki {
//     constructor(kraj, wojewodztwo, miasto, ulica, numerMieszkania, numerLokalu, kodPocztowy) {
//         this.kraj = kraj; 
//         this.wojewodztwo = wojewodztwo; 
//         this.miasto = miasto; 
//         this.ulica = ulica; 
//         this.numerMieszkania = numerMieszkania; 
//         this.numerLokalu = numerLokalu; 
//         this.kodPocztowy = kodPocztowy; 
//     }
// }
// class Konto {
//     constructor(nazwaUzytkownika, haslo) {
//         this.nazwaUzytkownika = nazwaUzytkownika; 
//         this.haslo = haslo; 
//     }
//     zalogujSie() {
//         // Pobierz listę użytkowników z localStorage
//     const users = JSON.parse(localStorage.getItem('users')) || [];
    
//     // Znajdź użytkownika pasującego do podanej nazwy i hasła
//     const user = users.find(user => user.username === username && user.password === password);
    
//     if (user) {
//         // Zapisz dane użytkownika w localStorage
//         localStorage.setItem('userRole', user.role); 
//         localStorage.setItem('username', username);
//         return true; // Logowanie poprawne
//     }
//     return false; // Błędne dane logowania
      
//     }
//     zarejestrujSie() {
//           // Pobierz listę użytkowników z localStorage lub ustaw pustą tablicę
//     const users = JSON.parse(localStorage.getItem('users')) || [];
    
//     // Sprawdzenie, czy użytkownik o danej nazwie już istnieje
//     const userExists = users.some(user => user.username === username);
    
//     if (userExists) {
//         alert('Użytkownik o tej nazwie już istnieje!');
//         return false; // Zatrzymanie procesu rejestracji
//     }
    
//     // Tworzenie nowego użytkownika
//     const newUser = { username, password, role };
//     users.push(newUser);
    
//     // Zapis nowej listy użytkowników do localStorage
//     localStorage.setItem('users', JSON.stringify(users));
    
//     return true; // Rejestracja zakończona sukcesem
//     }
// }
// class Sprzedawca {
//     constructor(nazwaUzytkownika, adres, wiek, numerTelefonu) {
//         this.nazwaUzytkownika = nazwaUzytkownika; 
//         this.adres = adres; 
//         this.wiek = wiek; 
//         this.numerTelefonu = numerTelefonu;
//     }

//     usunPrzedmiot(nazwaPrzedmiotu) {
//         const products = loadFromLocalStorage();
//         products.splice(index, 1); // Usuń przedmiot z tablicy

//         // Zapisz zmiany do localStorage
//         localStorage.setItem('products', JSON.stringify(products));
//         renderItems(products);
//     }
//     wystawPrzedmiot(nazwaPrzedmiotu) {
//         const productsContainer = document.querySelector('.products');
//         productsContainer.innerHTML = ''; // Czyści obszar przed renderowaniem nowych produktów
    
//         // Filtracja produktów tylko z dostępnością true
//         const visibleItems = items.filter(item => item.available === true);
    
//         // Renderowanie każdego przedmiotu w nowym divie
//         if (items.length === 0) {
//             productsContainer.innerHTML = '<p>Brak produktów do wyświetlenia.</p>';
//         } else {
//             items.forEach(item => {
//                 const productDiv = document.createElement('div');
//                 productDiv.classList.add('product');
//                 productDiv.innerHTML = `
//                     <img src="${item.zdjecie}" width="200" height="230" alt="${item.nazwa}">
//                     <div class="name-basket-favorites">
//                         <p class="name">${item.nazwa}</p>
//                     </div>
//                     <p class="price">${item.cena} zł</p>
//                     <p class="description">${item.opis}</p>
//                     <button class="delete-item" style="background-color: #ff00aa; color: white; padding: 10px 20px; border: none; cursor: pointer; border-radius: 5px; font-size: 16px;">Usuń</button>
    
//                 `;
//                 productsContainer.appendChild(productDiv);
//             });
           
//             // Obsługa usuwania przedmiotu
//             document.querySelectorAll('.delete-item').forEach(button => {
//                 button.addEventListener('click', (e) => {
//                     const index = e.target.getAttribute('data-index');
//                     usunPrzedmiot(index);
//                 });
//             });
//         }
//     }
// }
// class Klient {
// constructor(nazwaUzytkownika, adres, wiek, numerTelefonu) {
//     this.nazwaUzytkownika = nazwaUzytkownika; 
//     this.adres = adres; 
//     this.wiek = wiek; 
//     this.numerTelefonu = numerTelefonu; 
// }

// wyszukajPrzedmiot(nazwaPrzedmiotu) {
//     const filteredItems = products.filter(product => {
//         const nameMatch = product.nazwa.toLowerCase().includes(query.toLowerCase());
        
//         // Dopasowanie kategorii (dla selecta)
//         const categoryMatch = !filters.category || product.kategoria.toLowerCase().trim() === filters.category.toLowerCase().trim();

//         // Dopasowanie ceny
//         const priceMatch = product.cena >= filters.priceMin && product.cena <= filters.priceMax;

//         // Dopasowanie koloru
//         const colorMatch = !filters.color || product.kolor.toLowerCase().includes(filters.color.toLowerCase());

//         // Dopasowanie marki
//         const brandMatch = !filters.brand || product.marka.toLowerCase().includes(filters.brand.toLowerCase());

//         // Dopasowanie stanu (dla selecta)
//         const conditionMatch = !filters.condition || product.stan.toLowerCase().trim() === filters.condition.toLowerCase().trim();

//         return nameMatch && categoryMatch && priceMatch && colorMatch && brandMatch && conditionMatch;
//     });

// // Automatyczne przywracanie produktów po usunięciu tekstu
// document.querySelector('.filters').addEventListener('input', (event) => {
//     const query = event.target.value.trim();

//     if (query === '') {
//         renderItems(products); // Przywróć wszystkie produkty
//     }
// });
//     // Jeżeli nie ma wyników i zapytanie jest puste, wyświetl komunikat
//     if (query === '' && !Object.values(filters).some(filter => filter !== '' && filter !== 0 && filter !== Infinity)) {
//         displayNoResultsMessage();
//     } else {
//         renderItems(filteredItems);
//     }
// }

// dodajPrzedmiotDoUlubionych(nazwaPrzedmiotu) {
//    // Sprawdzenie, czy produkt już istnieje w ulubionych
//    const istnieje = ulubione.some(item => item.nazwa === nazwa);

//    if (!istnieje) {
//        // Tworzenie nowego obiektu produktu
//        const nowyProdukt = {
//            nazwa: nazwa,
//            cena: cena,
//            opis: opis || "Brak opisu", 
//            imgSrc: imgSrc || "images/placeholder.png", 
//            available: true 
//        };

//        // Dodanie nowego produktu do ulubionych
//        ulubione.push(nowyProdukt);
//        localStorage.removeItem('ulubione'); // Czyszczenie starego LocalStorage
//        localStorage.setItem('ulubione', JSON.stringify(ulubione)); // Zapis nowej listy
//        console.log("Produkt dodany do ulubionych:", nowyProdukt);
//    } else {
//        console.log("Produkt już istnieje w ulubionych:", nazwa);
//    }
// }
// }