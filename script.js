// LIVE CLOCK

function updateClock() {
    let now = new Date();

    // 24-hour format logic: HH:MM:SS
    let hrs = String(now.getHours()).padStart(2, "0");
    let mins = String(now.getMinutes()).padStart(2, "0");
    let secs = String(now.getSeconds()).padStart(2, "0");
    
    document.getElementById("clock").innerText = `${hrs}:${mins}:${secs}`;

    // --- 2. DATE FORMAT (09/03/26 Monday) ---
    let day = String(now.getDate()).padStart(2, "0");
    let month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    let year = String(now.getFullYear()).slice(-2); // Get last two digits (26)
    let weekday = now.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("todayDate").innerText = `${day}/${month}/${year} ${weekday}`;
}

setInterval(updateClock, 1000);
updateClock();


// SESSION TIMER (total seconds)

let seconds = 0;

function updateSession() {
    seconds++;
    document.getElementById("sessionTimer").innerText = seconds;
}

setInterval(updateSession, 1000);

// CALENDAR

const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");

let date = new Date();

function renderCalendar(){

let year = date.getFullYear();
let month = date.getMonth();

let firstDay = new Date(year,month,1).getDay();
let lastDate = new Date(year,month+1,0).getDate();

monthYear.innerText =
date.toLocaleString("default",{month:"long"})+" "+year;

calendarDays.innerHTML="";

for(let i=0;i<firstDay;i++){
calendarDays.innerHTML += "<div></div>";
}

for(let d=1; d<=lastDate; d++){

let day=document.createElement("div");
day.innerText=d;

let today=new Date();

if(
d===today.getDate() &&
month===today.getMonth() &&
year===today.getFullYear()
){
day.classList.add("today");
}

calendarDays.appendChild(day);

}

}

renderCalendar();

document.getElementById("prevMonth").onclick=()=>{
date.setMonth(date.getMonth()-1);
renderCalendar();
}

document.getElementById("nextMonth").onclick=()=>{
date.setMonth(date.getMonth()+1);
renderCalendar();
}
document.getElementById("startTaskBtn").addEventListener("click", function() {
  window.location.href = "pomodoro.html";
});
document.getElementById("energy").addEventListener("click", function() {
  window.location.href = "Energy.html";
});
document.getElementById("rule").addEventListener("click", function() {
  window.location.href = "Your-rule.html";
});
document.getElementById("done").addEventListener("click", function() {
  window.location.href = "done.html";
});
