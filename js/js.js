const button = document.querySelector(".button");
const info = document.querySelector(".info");

let counter = 0;
let danielInfo = ['Jag', 'är', 'en', 'sprutbög.'];

button.onclick = function () {
    info.innerHTML += `${danielInfo[counter]} `;
    counter++;
    if(counter >= danielInfo.length) {
        counter = 0;
    }
    
}
