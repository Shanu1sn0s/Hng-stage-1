
const dayOutput = document.getElementById("day");
const currentDate = new Date();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayIndex = currentDate.getDay();

const currentDayOfWeek = daysOfWeek[dayIndex];

dayOutput.innerText = `Day of the week : ${currentDayOfWeek}`;

// current time
const timeOutput = document.getElementById('time');
const currentTimeMillis = new Date().getTime();


timeOutput.innerText = `Time : ${currentTimeMillis}`;
