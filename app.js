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

//object literal for event name, date, and time

// const artEvents = () => {
    
//     eventName: "art explosion 2023",
//     const eventDate: new Date("2023-10-31T13:30:00").getTime(),
//     today:  new Date ().getTime(),
//     timeLapse = eventDate - today;
  

//   //properties
//   days: null,
//   hours: null,
//   minutes: null,
//   seconds: null,
//   //method
//   timerSet: function () {
// //     setInterval(() => {
// //       //do the math to update days, hours, minutes, and seconds
// //     let timeLapse = this.eventDate - this.today;
// //       //to do: write render method and call it here
// //       //   console.log(this.days, this.hours, this.minutes, this.seconds);
// //     }, 1000);
// //   },
//   };

// setInterval(,1000);
// //calculate and display a countdown timer that shows the time remaining until the event starts


//Object Literal for event name, date, and time
// const eventObject = {
//     eventName:"Art Explosion 2023",
//     eventDateAndTime: new Date("2023-10-31T13:30:00").getTime(),

    // timerLapse: function (){
    //     setInterval(() => { 
    //     },1000);
    // },

    const eventObject = {
        eventName: "Art Explosion 2023",
        eventDateAndTime: new Date("2023-10-31T13:30:00").getTime(),
       
        timerLapse: function (){
            const now = new Date().getTime();
            const distance = this.eventDateAndTime - now;
           
            if(distance < 0) {
                clearInterval(this.setTimer);
                document.getElementById("timer").innerHTML = "Event has started!";
                return;
            }
    
            // Calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
           
            // Update the HTML elements with the calculated values
            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;
        },
       
        // Start the timer when the object is created
        setTimer: setInterval(function() {
            eventObject.timerLapse();
        }, 1000)
    };

    
