

class Przedmiot{
    constructor(cena, kolor, stan, marka, kategoria, opis, dostepnosc) {
        this.cena = cena; 
        this.kolor = kolor;
        this.stan = stan; 
        this.marka = marka; 
        this.kategoria = kategoria; 
        this.opis = opis; 
        this.dostepnosc = dostepnosc; 
    }

    // Metoda do aktualizacji dostępności
    aktualizujDostepnosc(nowaDostepnosc) {
        this.dostepnosc = nowaDostepnosc;
        console.log(`Dostępność zaktualizowana na: ${this.dostepnosc}`);
    }
}
class Koszyk{
    constructor(nazwaPrzedmiotu,cena,ilosc){
        this.nazwaPrzedmiotu=nazwaPrzedmiotu;
        this.cena=cena;
        this.ilosc=ilosc;
    }
    dodajDoKoszyka(){

    }
    obliczKoszyk(){

    }

}
class Zamowienie{
    zlozZamowienie(){

    }
}
class Platnosc{
    constructor(kwota,formaPlatnosci){
        this.kwota=kwota;
        this.formaPlatnosci=formaPlatnosci;
        }
        wybierzFormePlatnosci(){
        }
    }
class Blik{
    constructor(kodBlika){
        this.kodBlika=kodBlika;
    }
}
class Przelew{
    constructor(numerRachunkuOdbiorcy,imie,nazwisko){
        this.numerRachunkuOdbiorcy=numerRachunkuOdbiorcy;
        this.imie=imie;
        this.nazwisko=nazwisko;
    }
}
class Karta{
    constructor(numerKarty,CVV,dataWaznosci,imie,nazwisko){
        this.numerKarty=numerKarty;
        this.CVV=CVV;
        this.dataWaznosci=dataWaznosci;
        this.imie=imie;
        this.nazwisko=nazwisko;
    }
}
class FormaWysylki{
    constructor(kurier,paczkomaty,przesylkaPocztowa,punktyOdbioru){
        this.kurier=kurier;
        this.paczkomaty=paczkomaty;
        this.przesylkaPocztowa=przesylkaPocztowa;
        this.punktyOdbioru=punktyOdbioru;
}
}
class DaneDoWysylki {
    constructor(kraj, wojewodztwo, miasto, ulica, numerMieszkania, numerLokalu, kodPocztowy) {
        this.kraj = kraj; 
        this.wojewodztwo = wojewodztwo; 
        this.miasto = miasto; 
        this.ulica = ulica; 
        this.numerMieszkania = numerMieszkania; 
        this.numerLokalu = numerLokalu; 
        this.kodPocztowy = kodPocztowy; 
    }
}
class Konto {
    constructor(nazwaUzytkownika, haslo) {
        this.nazwaUzytkownika = nazwaUzytkownika; 
        this.haslo = haslo; 
    }
    zalogujSie() {
        console.log(`Użytkownik ${this.nazwaUzytkownika} zalogował się.`);
    }
    zarejestrujSie() {
        console.log(`Użytkownik ${this.nazwaUzytkownika} zarejestrował się.`);
    }
}
class Sprzedawca {
    constructor(nazwaUzytkownika, adres, wiek, numerTelefonu) {
        this.nazwaUzytkownika = nazwaUzytkownika; 
        this.adres = adres; 
        this.wiek = wiek; 
        this.numerTelefonu = numerTelefonu;
    }

    usunPrzedmiot(nazwaPrzedmiotu) {
        console.log(`Przedmiot ${nazwaPrzedmiotu} został usunięty przez sprzedawcę ${this.nazwaUzytkownika}.`);
    }

    edytujPrzedmiot(nazwaPrzedmiotu, noweDane) {
        console.log(`Przedmiot ${nazwaPrzedmiotu} został edytowany przez sprzedawcę ${this.nazwaUzytkownika}. Nowe dane: ${JSON.stringify(noweDane)}`); // tu nie wiem oco chodzi 
    }

    wystawPrzedmiot(nazwaPrzedmiotu) {
        console.log(`Sprzedawca ${this.nazwaUzytkownika} wystawił przedmiot: ${nazwaPrzedmiotu}.`);
    }
}
class Klient {
    constructor(nazwaUzytkownika, adres, wiek, numerTelefonu) {
        this.nazwaUzytkownika = nazwaUzytkownika; 
        this.adres = adres; 
        this.wiek = wiek; 
        this.numerTelefonu = numerTelefonu; 
    }

    wyszukajPrzedmiot(nazwaPrzedmiotu) {
        console.log(`Klient ${this.nazwaUzytkownika} wyszukuje przedmiot: ${nazwaPrzedmiotu}.`);
    }

    dodajPrzedmiotDoUlubionych(nazwaPrzedmiotu) {
        console.log(`Klient ${this.nazwaUzytkownika} dodał przedmiot ${nazwaPrzedmiotu} do ulubionych.`);
    }
}

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
