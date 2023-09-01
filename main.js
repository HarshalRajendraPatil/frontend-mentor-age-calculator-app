const displayYears = document.querySelector(".age-years");
const displayMonths = document.querySelector(".age-months");
const displayDays = document.querySelector(".age-days");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let day = inputDay.value;
  let month = inputMonth.value;
  let year = inputYear.value;

  switch (month) {
    case 1:
      month = "January";
      break;

    case 2:
      month = "February";
      break;

    case 3:
      month = "March";
      break;

    case 4:
      month = "April";
      break;

    case 5:
      month = "May";
      break;

    case 6:
      month = "June";
      break;

    case 7:
      month = "July";
      break;

    case 8:
      month = "August";
      break;

    case 9:
      month = "September";
      break;

    case 10:
      month = "October";
      break;

    case 11:
      month = "November";
      break;

    case 12:
      month = "December";
      break;
  }

  const diff = Date.now() - Date.parse(`${month} ${day}, ${year}`);

  if (!diff) {
    return;
  }

  if (diff < 0) {
    return;
  }

  let seconds = Math.floor(diff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  let years = Math.floor(days / 365);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 30;
  months %= 12;

  displayDays.innerHTML = `<span>${days.toString().padStart(2, 0)}</span> days`;
  displayMonths.innerHTML = `<span>${months
    .toString()
    .padStart(2, 0)}</span> months`;
  displayYears.innerHTML = `<span>${years
    .toString()
    .padStart(2, 0)}</span> years`;

  inputDay.value = "";
  inputMonth.value = "";
  inputYear.value = "";
});
