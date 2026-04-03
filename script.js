const form = document.querySelector('#ticket-form');

const kmPercorsi = document.querySelector('#distance');
const rangeEta = document.querySelector('#age');

function submitHandler(event) {
    event.preventDefault();
    const kmValue = kmPercorsi.value;
    const etaValue = rangeEta.value;

    let prezzo = kmValue * 0.21;
    console.log(prezzo);


    //verifica scontistica
    if (etaValue === 'minorenne') {
        prezzo = prezzo - (prezzo * 20 / 100);
    } else if (etaValue === 'over') {
        prezzo = prezzo - (prezzo * 40 / 100);
    }
    console.log(prezzo.toFixed(2));

}

form.addEventListener('submit', submitHandler);