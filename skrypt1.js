// Funkcja przełączająca formularze rejestracji i logowania
const wrapper = document.querySelector('.wrapper');
const goToRegister = document.getElementById('goToRegister');
const goToLogin = document.getElementById('goToLogin');

// Przełącz formularze
goToRegister.addEventListener('click', () => {
    wrapper.classList.add('active');
});
goToLogin.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Pobieramy formularze
const registerForm = document.querySelector('#registerForm');
const loginForm = document.querySelector('#loginForm');

// Funkcja zapisu nowego użytkownika do localStorage
function saveUserToLocalStorage(username, password, role) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { username, password, role };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}

// Funkcja do sprawdzenia poprawności logowania
function validateLogin(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        localStorage.setItem('userRole', user.role); // Zapisz rolę w localStorage
        localStorage.setItem('username', username); // Zapisz nazwę użytkownika w localStorage
        return true;
    }
    return false;
}

// Funkcja sprawdzająca, czy użytkownik jest zalogowany
function checkLoginStatus() {
    const userRole = localStorage.getItem('userRole');
    const username = localStorage.getItem('username');
    const loginForm = document.querySelector('.login');
    const accountForm = document.querySelector('.account');
    
    if (userRole && username) {
        // Jeśli użytkownik jest zalogowany, pokaż dane konta
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

// Obsługa formularza rejestracji
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = registerForm.querySelector('input[type="text"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;
    const role = registerForm.querySelector('#role').value;

    if (username && password) {
        saveUserToLocalStorage(username, password, role);
        alert('Rejestracja zakończona sukcesem!');
        registerForm.reset();
    } else {
        alert('Proszę wypełnić wszystkie pola!');
    }
});

// Obsługa formularza logowania
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    if (username && password) {
        const isValid = validateLogin(username, password);
        if (isValid) {
            alert('Zalogowano pomyślnie!');
            loginForm.reset();

            const userRole = localStorage.getItem('userRole');
            if (userRole === 'sprzedawca') {
                window.location.href = 'sprzedawca.html'; // Przekierowanie na stronę sprzedawcy
            } else {
                window.location.href = 'klient.html'; // Przekierowanie na stronę klienta
            }
        } else {
            alert('Błędne dane logowania!');
        }
    } else {
        alert('Proszę wypełnić wszystkie pola!');
    }
});

// Obsługa wylogowania
document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    checkLoginStatus(); // Zaktualizuj stan logowania
    alert('Wylogowano pomyślnie!');
});
