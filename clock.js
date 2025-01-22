console.log(`clock — loaded...`);

const hrs = document.querySelector(`#hrs`);
const min = document.querySelector(`#min`);
const sec = document.querySelector(`#sec`);

/* * * * * * * * * * * * * * * * * * * * * * *
setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
* * * * * * * * * * * * * * * * * * * * * * */

// I learned how to calculate the current time in seconds returned from Date.now() from this GeeksForGeeks post: 
// https://www.geeksforgeeks.org/how-to-convert-seconds-to-time-string-format-hhmmss-using-javascript/

const updateTime = () => {
  let currentTime = Math.floor(Date.now() / 1000);
  hrs.innerHTML = Math.floor(((currentTime / 3600) % 24) < 0 
    ? (((currentTime / 3600) % 24) + 16).toString().padStart(2, '0')
    : (((currentTime / 3600) % 24) - 8).toString().padStart(2, '0'));
  min.innerHTML = Math.floor((currentTime / 60) % 60).toString().padStart(2, '0');
  sec.innerHTML = (currentTime % 60).toString().padStart(2, '0');
}

// Call updateTime once to set the initial time
updateTime();

// Set interval to update the time every second
setInterval(updateTime, 1000);

/* * * * * * * * * * * * * * * * * * * * * * * 
console.log(`currentTime: ${currentTime}`);
console.log(`currentTime: ${currentTime.getHours()}`);
console.log(`currentTime: ${currentTime.getMinutes()}`);
console.log(`currentTime: ${currentTime.getSeconds()}`);
* * * * * * * * * * * * * * * * * * * * * * */
