/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies
import { addMinutes,addHours,addDays,addMonths,addYears,format } from 'date-fns'

function makeCalendar(){

    let a = new Date();
    let b = new Date("2023-01-22");
console.log(b - a); // this works
localStorage.a = a;
localStorage.b = b;
a = Date.parse(localStorage.a); // parse to date object
b = Date.parse(localStorage.b);
console.log(b - a); // now, this will work
    
    // function myFunction(item){ // FOR EACH TODO TASK CREATE A CARD
    //     const card = document.createElement("card"); // parent card element, one per book
    //     // card.setAttribute("id", item.title);
    //     card.classList.add("card")

    //     const date = new Date();
    //     const oneWeekLater = addDays(date, 7);
    //     card.innerHTML = format(oneWeekLater, 'EEE, dd MMM yyyy')
    //     card.innerHTML = item.deadline;

    //     const content = document.getElementById('content');
    //     content.appendChild(card);
    // } 
    // const collection = JSON.parse(window.localStorage.getItem('ToDoList'));   
    // collection.forEach(myFunction);
}

export default makeCalendar;