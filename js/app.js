console.log('biglietto del treno')

// recuperare il form dal DOM
const formElement = document.getElementById('form-biglietto')
console.log(formElement)

// ascoltare l'evento submit e ad esso blocchiamo l'invio del form
formElement.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('submit del form', event) 

    // leggere il numero di km inseriti nell'input km (string)

    // leggere il valore della select dello sconto ['', '1 o minorenni', '2 o Over 65']

    // validazione (opzionale)

    // calcolare il prezzo base

    // calcoliamo lo sconto

    // calcoliamo il prezzo finale

    // stampiamo nella card il prezzo formattato (con 2 cifre decimali)
})

