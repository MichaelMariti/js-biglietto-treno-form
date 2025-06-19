console.log('biglietto del treno')

// recuperare il form dal DOM
const formElement = document.getElementById('form-biglietto')
const inputKM = formElement.querySelector('input[name="km"]')
const selectSconto = formElement.querySelector('#sconto')
const bigliettoCard = document.getElementById('biglietto')
console.log(inputKM, selectSconto)
// ascoltare l'evento submit e ad esso blocchiamo l'invio del form
formElement.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('submit del form', event) 

    // leggere il numero di km inseriti nell'input km (string)
    const kmValue = parseFloat(inputKM.value)

    // leggere il valore della select dello sconto ['', '1 o minorenni', '2 o Over 65']
    const scontoValue = selectSconto.value

    console.log(kmValue, scontoValue)

    // validazione (opzionale)
    // km deve essere maggiore di 0
    // km non dev'essere un NaN

    // scontoValue dev'essere uno di questi 3 valori ['', '1 o minorenni', '2 o Over 65']

    // calcolare il prezzo base
    const prezzoBase = kmValue * 0.21
    console.log ('prezzo base', prezzoBase)

    // calcoliamo lo sconto
    let percentualeSconto = 0

    if (scontoValue === '1') {
        // utente ha selezionato minorenni
        percentualeSconto = 20
    } else if (scontoValue === '2') {
        // utente ha selezionato Over 65
        percentualeSconto = 40
    }

    console.log ('percentuale sconto', percentualeSconto)

    const sconto = prezzoBase * percentualeSconto / 100
    console.log('sconto', sconto)

    // calcoliamo il prezzo finale
    const prezzoFinale = prezzoBase - sconto
    console.log('prezzo finale', prezzoFinale)

    // stampiamo nella card il prezzo formattato (con 2 cifre decimali)
    const prezzoOutputElement = bigliettoCard.querySelector('.prezzo')
    prezzoOutputElement.innerHTML = prezzoFinale.toFixed(2) + '&euro;'
})

