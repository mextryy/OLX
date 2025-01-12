
 // Funkcja przełączająca formularze rejestracji i logowania
const wrapper = document.querySelector('.wrapper');
const goToRegister = document.getElementById('goToRegister');
const goToLogin = document.getElementById('goToLogin');

// Przełącz formularze na rejestrację
goToRegister.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Przełącz formularze na logowanie
goToLogin.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Pobieramy formularze rejestracji i logowania
const registerForm = document.querySelector('#registerForm');
const loginForm = document.querySelector('#loginForm');

// Funkcja zapisu nowego użytkownika do localStorage
function zarejestrujSie(username, password, role) {
    // Pobierz listę użytkowników z localStorage lub ustaw pustą tablicę
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Sprawdzenie, czy użytkownik o danej nazwie już istnieje
    const userExists = users.some(user => user.username === username);
    
    if (userExists) {
        alert('Użytkownik o tej nazwie już istnieje!');
        return false; // Zatrzymanie procesu rejestracji
    }
    
    // Tworzenie nowego użytkownika
    const newUser = { username, password, role };
    users.push(newUser);
    
    // Zapis nowej listy użytkowników do localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    return true; // Rejestracja zakończona sukcesem
}

// Funkcja do sprawdzenia poprawności logowania
function zalogujSie(username, password) {
    // Pobierz listę użytkowników z localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Znajdź użytkownika pasującego do podanej nazwy i hasła
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        // Zapisz dane użytkownika w localStorage
        localStorage.setItem('userRole', user.role); 
        localStorage.setItem('username', username);
        return true; // Logowanie poprawne
    }
    return false; // Błędne dane logowania
}

// Funkcja sprawdzająca, czy użytkownik jest zalogowany
function checkLoginStatus() {
    const userRole = localStorage.getItem('userRole'); // Pobierz rolę użytkownika
    const username = localStorage.getItem('username'); // Pobierz nazwę użytkownika
    const loginForm = document.querySelector('.login'); // Formularz logowania
    const accountForm = document.querySelector('.account'); // Sekcja konta
    
    if (userRole && username) {
        // Jeśli użytkownik jest zalogowany, pokaż sekcję konta
        loginForm.style.display = 'none';
        accountForm.style.display = 'block';
        document.querySelector('.welcome-message').innerText = `Witaj, ${username}!`;
    } else {
        // Jeśli użytkownik nie jest zalogowany, pokaż formularz logowania
        loginForm.style.display = 'block';
        accountForm.style.display = 'none';
    }
}

// Wywołaj funkcję sprawdzającą stan logowania po załadowaniu strony
document.addEventListener('DOMContentLoaded', checkLoginStatus);

// Obsługa rejestracji użytkownika
registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Zapobiegaj domyślnemu wysyłaniu formularza

    // Pobierz dane z formularza rejestracji
    const username = registerForm.querySelector('input[type="text"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;
    const role = registerForm.querySelector('#role').value;

    // Walidacja hasła
    if (!validatePassword(password)) {
        alert('Hasło musi mieć co najmniej 4 znaki i zawierać co najmniej jedną cyfrę!');
        return; // Zatrzymaj rejestrację, jeśli hasło jest niepoprawne
    }

    if (username && password) {
        const isSaved = zarejestrujSie(username, password, role);
        
        if (isSaved) {
            alert('Rejestracja zakończona sukcesem!');
            registerForm.reset(); // Wyczyść formularz
            
            // Przełącz formularz na logowanie po rejestracji
            wrapper.classList.remove('active');
        }
    } else {
        alert('Proszę wypełnić wszystkie pola!');
    }
});

// Obsługa logowania użytkownika
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Zapobiegaj domyślnemu wysyłaniu formularza

    // Pobierz dane z formularza logowania
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    if (username && password) {
        const isValid = zalogujSie(username, password);
        
        if (isValid) {
            alert('Zalogowano pomyślnie!');
            loginForm.reset(); // Wyczyść formularz logowania

            const userRole = localStorage.getItem('userRole');
            
            // Przekierowanie na odpowiednią stronę w zależności od roli użytkownika
            if (userRole === 'sprzedawca') {
                window.location.href = '/html/sprzedawca.html';
            } else {
                window.location.href = '/html/klient.html';
            }
        } else {
            alert('Błędne dane logowania!');
        }
    } else {
        alert('Proszę wypełnić wszystkie pola!');
    }
});

// Obsługa wylogowania użytkownika
document.getElementById('logout').addEventListener('click', () => {
    // Usuń dane logowania z localStorage
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    
    // Zaktualizuj interfejs na brak zalogowania
    checkLoginStatus();
    alert('Wylogowano pomyślnie!');
});

// Funkcja walidacji hasła
function validatePassword(password) {
    // Sprawdzenie, czy hasło ma co najmniej 4 znaki i zawiera przynajmniej jedną liczbę
    const passwordPattern = /^(?=.*\d).{4,}$/;
    return passwordPattern.test(password);
}





