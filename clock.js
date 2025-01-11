console.log(`clock — loaded...`);

const hrs = document.querySelector(`#hrs`);
const min = document.querySelector(`#min`);
const sec = document.querySelector(`#sec`);

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = currentTime.getHours().toString().padStart(2, '0');
    min.innerHTML = currentTime.getMinutes().toString().padStart(2, '0');
    sec.innerHTML = currentTime.getSeconds().toString().padStart(2, '0');
}, 1000);

/* * * * * * * * * * * * * * * * * * * * * * * 
console.log(`currentTime: ${currentTime}`);
console.log(`currentTime: ${currentTime.getHours()}`);
console.log(`currentTime: ${currentTime.getMinutes()}`);
console.log(`currentTime: ${currentTime.getSeconds()}`);
* * * * * * * * * * * * * * * * * * * * * * */
