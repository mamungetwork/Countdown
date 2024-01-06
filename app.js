let myDate = "17 Jan 2024";
const submit = document.getElementById("submit");
const input = document.getElementById("input");
const error = document.getElementById("error");

submit.addEventListener("click", () => {
  let inputValue = undefined;
  inputValue = input.value;
  let inputDate = new Date(inputValue);
  const currentDate = new Date();

  if (!inputValue) {
    error.style.display = "block";
  }

  if (inputDate < currentDate) {
    error.style.display = "block";
    error.innerText = `Please select a date forword`;
  }
  if (inputValue && !(inputDate < currentDate)) {
    error.style.display = "block";
    error.innerText = `You have selected ${inputValue}`;
    myDate = inputDate;
    return myDate;
  }
});

function countDown() {
  const sourceDate = new Date(myDate);
  const currentDate = new Date();

  let totalSecond = Math.floor((sourceDate - currentDate) / 1000);
  let Seconds = Math.floor(totalSecond % 60);
  let Minutes = Math.floor((totalSecond % 3600) / 60);
  let Hours = Math.floor((totalSecond % (24 * 3600)) / 3600);
  let Days = Math.floor(totalSecond / (3600 * 24));

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  daysEl.innerHTML = formatTime(Days);
  hoursEl.innerHTML = formatTime(Hours);
  minutesEl.innerHTML = formatTime(Minutes);
  secondsEl.innerHTML = formatTime(Seconds);
}

function formatTime(time) {
  return time < 10 && time > 0 ? `0${time}` : time;
}

// countDown();
setInterval(countDown, 1000);
