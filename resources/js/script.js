const progTimeField = document.getElementById("programming-time");

const progStart = new Date(2019, 1, 7);
const currentTime = new Date();

const t = new Date(currentTime - progStart);
const timeString = `${t.getFullYear() - 1970} years, ${t.getMonth() + 1} months, and ${t.getDate()} days.`

progTimeField.innerHTML = timeString;