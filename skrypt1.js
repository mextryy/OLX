// Przełączanie formularzy rejestracji i logowania
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

    console.log("Dodawanie nowego użytkownika:", newUser);
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    console.log("Zapisano do localStorage:", users);
}

// Funkcja do sprawdzenia poprawności logowania
function validateLogin(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        sessionStorage.setItem('userRole', user.role); // Zapisz rolę w sessionStorage
        return true;
    }
    return false;
}

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

            const userRole = sessionStorage.getItem('userRole');
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
