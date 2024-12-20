


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("przedmiot-form");
    const przedmiotyList = document.getElementById("przedmioty-list");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Zapobiega odświeżeniu strony
        console.log("Formularz został wysłany.");

        // Pobieranie wartości z formularza
        const nazwa = document.getElementById("nazwa").value;
        const cena = document.getElementById("cena").value;
        const kolor = document.getElementById("kolor").value;
        const stan = document.getElementById("stan").value;
        const marka = document.getElementById("marka").value;
        const kategoria = document.getElementById("kategoria").value;
        const opis = document.getElementById("opis").value;
        const zdjecie = document.getElementById("zdjecie").value;

        // Tworzenie nowego elementu w liście
        const item = document.createElement("li");
        item.innerHTML = `
            <strong>${nazwa}</strong> - ${cena} PLN
            <br>Kolor: ${kolor}, Stan: ${stan}, Marka: ${marka}, Kategoria: ${kategoria}
            <br>${opis}
            ${zdjecie ? `<br><img src="${zdjecie}" alt="${nazwa}" style="max-width: 200px;">` : ""}
        `;

        // Dodanie elementu do listy
        przedmiotyList.appendChild(item);

        // Czyszczenie formularza
        form.reset();
    });
});
