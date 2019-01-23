

const cats = document.querySelector('.cats');

function addKittens() {
    const CAT_URL = "https://api.thecatapi.com/v1/images/search";
    const promise = fetch(CAT_URL);
    promise
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            const img = document.createElement('img');
            img.src = processedResponse[0].url;
            img.alt = 'Cute cat!';
            cats.appendChild(img);
        });
}

document.querySelector('.addKittens').addEventListener('click', addKittens);