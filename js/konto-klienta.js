// Funkcja zapisu danych użytkownika (adres, wiek, telefon) do localStorage
function saveUserDataToLocalStorage(address, age, phone) {
    const username = localStorage.getItem('username'); // Pobierz nazwę użytkownika, który jest zalogowany
    const users = JSON.parse(localStorage.getItem('users')) || []; // Pobierz listę użytkowników z localStorage

    // Znajdź użytkownika, który jest aktualnie zalogowany
    const userIndex = users.findIndex(user => user.username === username);
    
    if (userIndex !== -1) {
        // Zaktualizuj dane użytkownika
        users[userIndex].address = address;
        users[userIndex].age = age;
        users[userIndex].phone = phone;
        localStorage.setItem('users', JSON.stringify(users)); // Zapisz zaktualizowaną tablicę użytkowników w localStorage
    }
}
// Funkcja do wyświetlania danych użytkownika
function displayUserData() {
    const username = localStorage.getItem('username'); // Pobierz nazwę użytkownika, który jest zalogowany
    const users = JSON.parse(localStorage.getItem('users')) || []; // Pobierz listę użytkowników z localStorage
    const user = users.find(user => user.username === username); // Znajdź użytkownika, który jest zalogowany
    
    if (user) {
        // Wyświetl dane użytkownika w odpowiednich elementach
        document.getElementById('address-value').innerText = user.address || 'Brak danych';
        document.getElementById('age-value').innerText = user.age || 'Brak danych';
        document.getElementById('phone-value').innerText = user.phone || 'Brak danych';
    }
}
// Obsługa formularza wprowadzania danych
document.getElementById('form-danych-klienta').addEventListener('submit', (event) => {
    event.preventDefault();

    const address = document.getElementById('adres').value;
    const age = document.getElementById('wiek').value;
    const phone = document.getElementById('telefon').value;

    // Sprawdź, czy wszystkie pola zostały wypełnione
    if (address && age && phone) {
        saveUserDataToLocalStorage(address, age, phone); // Zapisz dane do localStorage
        alert('Dane zostały zapisane!');
        displayUserData(); // Zaktualizuj wyświetlane dane
    } else {
        alert('Proszę wypełnić wszystkie pola!');
    }
});
// Wywołaj funkcję wyświetlającą dane użytkownika po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    // Sprawdź, czy użytkownik jest zalogowany
    const username = localStorage.getItem('username');
    if (username) {
        displayUserData(); // Jeśli użytkownik jest zalogowany, wyświetl jego dane
    }
});
