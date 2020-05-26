/* Conversation Tracker aka where the variables is at */

let DHConvo1 = sessionStorage.getItem("DHConvo1");
let DHConvo2 = sessionStorage.getItem("DHConvo2");
let DHConvo3 = sessionStorage.getItem("DHConvo3");

let JMConvo1 = sessionStorage.getItem("JMConvo1");
let JMConvo2 = sessionStorage.getItem("JMConvo2");
let JMConvo3 = sessionStorage.getItem("JMConvo3");

let JNConvo1 = sessionStorage.getItem("JNConvo1");
let JNConvo2 = sessionStorage.getItem("JNConvo2");
let JNConvo3 = sessionStorage.getItem("JNConvo3");

let RJConvo1 = sessionStorage.getItem("RJConvo1");
let RJConvo2 = sessionStorage.getItem("RJConvo2");
let RJConvo3 = sessionStorage.getItem("RJConvo3");

let YYConvo1 = sessionStorage.getItem("YYConvo1");
let YYConvo2 = sessionStorage.getItem("YYConvo2");
let YYConvo3 = sessionStorage.getItem("YYConvo3");

/* Day Tracker aka where the other variable and a function is at */

let DayCounter = sessionStorage.getItem("DayTracker");

function DayAdder() {
    DayCounter = DayCounter + 'R';
    sessionStorage.setItem("DayTracker", DayCounter);
}

/* Special Trackers aka where the other other variables is at (for Suspect Selections later) */

let JMTrust = sessionStorage.getItem('JMTrust');
let JNJail = sessionStorage.getItem('JNJail');