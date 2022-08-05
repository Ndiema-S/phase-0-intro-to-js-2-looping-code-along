// Code your solutions in this file
function writeCards(listOfNames, event) {
    const messages = []
    for (let i = 0; i < listOfNames.length; i++) {
        const name = listOfNames[i];
        let message = `Thank you, ${name}, for the wonderful ${event} gift!`
        messages.push(message)
    }
    return messages
}
function countDown(n) {
    while (n >= 0) {
        console.log(n)
        --n
    }
}