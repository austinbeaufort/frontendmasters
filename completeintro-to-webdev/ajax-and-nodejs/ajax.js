const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector('.doggos');

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
    .then(function(response) {
        const processingPromise = response.json(); // parsed the data string into a javascript object.
        return processingPromise;
    })
    .then(function(processedResponse) { // takes in the return processingPromise from the previous '.then'
        const img = document.createElement('img');
        img.src = processedResponse.message; // grabs the message key from status object, which is the url for the doggo.
        img.alt = 'Cute doggo';
        doggos.appendChild(img); // append the image to the dom.
    });
}

document.querySelector('.add-doggo').addEventListener('click', addNewDoggo);