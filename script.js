//selezione form ed elementi
const form = document.querySelector('#ticket-form');
const card = document.querySelector('#ticket-card');

const kmPercorsi = document.querySelector('#distance');
const rangeEta = document.querySelector('#age');

const ticketPrice = document.querySelector('#ticket-price');

function submitHandler(event) {
    event.preventDefault();
    const kmValue = kmPercorsi.value;
    const etaValue = rangeEta.value;

    //calcolo prezzo base
    let prezzo = kmValue * 0.21;


    //verifica scontistica
    if (etaValue === 'minorenne') {
        prezzo = prezzo - (prezzo * 20 / 100);
    } else if (etaValue === 'over') {
        prezzo = prezzo - (prezzo * 40 / 100);
    }
    console.log(prezzo.toFixed(2));

    ticketPrice.innerHTML = prezzo.toFixed(2);
    card.classList.remove('d-none');
}

form.addEventListener('submit', submitHandler);