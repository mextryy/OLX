

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



