"use strict";

console.log("hello world");

//events that require user input before submission

function getFirstName(event) {
  event.preventDefault();

  const value = event.target.value;

  console.log(value);
  console.log(event);
}

function getLastName(event) {
  event.preventDefault();

  const value = event.target.value;

  console.log(value);
}

//event countdown timer using object literal
const eventObject = {
  eventName: "Art Explosion 2023",
  eventDateAndTime: new Date("2023-10-31T13:30:00").getTime(),

  timerLapse: function () {
    const now = new Date().getTime();
    const distance = this.eventDateAndTime - now;

    if (distance < 0) {
      clearInterval(this.setTimer);
      document.getElementById("timer").innerHTML = "Event has started!";
      return;
    }

    // Calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML elements with the calculated values
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  },

  // Start the timer when the object is created
  setTimer: setInterval(function () {
    eventObject.timerLapse();
  }, 1000),
};

//constructor function for events
function EventDetails(name, date, time, location, briefDesc, imgPath) {
  this.name = name;
  this.date = date;
  this.time = time;
  this.location = location;
  this.briefDesc = briefDesc;
  this.imgPath  = imgPath;
  this.render = function(){
    //to-do dom manipulation to render all of this information
  }
}
//constructor function for instantiations (done)
function Events() {
  this.Events = [];

  this.addEvent = function (eventToAdd) {
    this.Events.push(eventToAdd);
  };
}

const events = new Events()

//add img path to each of these instantiations (done)
//to-do add brief description 

const artExplosion = new EventDetails(
  "Art Explosion",
  "2023-10-31",
  "13:30:00",
  "superdome",
  "Enjoy beautiful artwork and tasty food!",
"img/art stock photo 1.webp"
);

const colorJam = new EventDetails(
  "Color Jam",
  "2023-11-11",
  "12:00:00",
  "smoothie king center",
  "Watch as amazing artist perform body painting.",
  "img/art stock photo replace.webp"
);
const artBasel = new EventDetails(
  "Art Basel",
  "2024-12-08",
  "11:15:00",
  "Miami Beach Convention Center",
  "Annual art event featuring artist from all over the world",
  "img/art stock photo 3.jpg"
);

events.addEvent(artExplosion)
events.addEvent(colorJam)
events.addEvent(artBasel)

//filter method 

