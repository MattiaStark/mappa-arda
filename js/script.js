document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const popups = document.querySelectorAll('.popup');

    icons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.stopPropagation(); // Previene la chiusura immediata del popup

            const location = icon.getAttribute('data-location');
            const popup = document.getElementById(`popup-${location}`);

            // Chiudi tutti i popup aperti
            closeAllPopups();

            // Mostra il popup corrente
            if (popup) {
                popup.classList.add('show');
                popup.setAttribute('aria-hidden', 'false');
                console.log(`Popup mostrato: ${popup.id}`);
            }
        });
    });

    // Aggiungi evento di chiusura per il pulsante di chiusura
    const closeButtons = document.querySelectorAll('.close-popup');
    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Previene la chiusura automatica
            const popup = button.parentElement;
            popup.classList.remove('show');
            popup.setAttribute('aria-hidden', 'true');
            console.log(`Popup chiuso tramite pulsante: ${popup.id}`);
        });
    });

    // Chiudi i popup quando si clicca fuori
    document.addEventListener('click', () => {
        closeAllPopups();
        console.log("Popup chiusi perché cliccato fuori");
    });

    // Funzione per chiudere tutti i popup
    function closeAllPopups() {
        popups.forEach(popup => {
            popup.classList.remove('show');
            popup.setAttribute('aria-hidden', 'true');
            console.log(`Popup chiuso: ${popup.id}`);
        });
    }
});
