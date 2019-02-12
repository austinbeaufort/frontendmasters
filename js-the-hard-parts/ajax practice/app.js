let button = document.querySelector('.button');
let animalContainer = document.querySelector('.animal-info');
let counter = 1;

button.addEventListener('click', function() {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${counter}.json`);
    ourRequest.onload = function() {
        if(ourRequest.status >= 200 && ourRequest.status < 400) {
            let ourData = JSON.parse(ourRequest.responseText); // gets url data and puts into variable.
            renderHTML(ourData);
        } else {
            console.log('we connected to the server, but it returned an error');
        }


    };

    ourRequest.onerror = function() {
        console.log('connection error');
    };

    ourRequest.send();
    counter++;
    if (counter > 3) {
        button.style.display = 'none';
    }
});

function renderHTML(data) {
    let htmlString = '';

    for (let i = 0; i < data.length; i++) {
        htmlString += `<p>${data[i].name} is a ${data[i].species} that likes to eat</p>`;

        for(let j = 0; j < data[i].foods.likes.length; j++) {
            if(j == 0) {
                htmlString += `${data[i].foods.likes[j]}`;
            } else {
                htmlString += ` and ${data[i].foods.likes[j]}`;
            }
        }

        htmlString += ` and dislikes `;

        for(let j = 0; j < data[i].foods.dislikes.length; j++) {
            if(j == 0) {
                htmlString += `${data[i].foods.dislikes[j]}`;
            } else {
                htmlString += ` and ${data[i].foods.dislikes[j]}`;
            }
        }

        htmlString += `.</p>`;
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
