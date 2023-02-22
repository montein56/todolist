/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
import { addDays, format } from 'date-fns'
import makeForms from './formAddEdit'
import { taskSort } from './taskSort'
import getUniqueProjectNames from './tasksByProject'
import createCard from './makeScreen'
import taskEdit from './taskEdit'
import taskDetail from './cardToggleDetail'
import taskDone from './taskDone'
import taskDelete from './taskDelete'
import makeCalendar from './calendar'

function calcEndDate(targetDate) {
    // TAKES IN '20 FEB 23' & RETURNS IT AS A date-fns date "Tue Feb 20 2023..."
    let curDate = parseInt(targetDate.slice(0, 2), 10)
    curDate = curDate.toString()
    const curMonth = targetDate.slice(3, 6)
    const yearX = targetDate.slice(7, 9)
    const curYear = `20${yearX}`
    const endDate = new Date(`${curYear},${curMonth},${curDate}`)
    return endDate
}

function cardBtnListenerBranch(e) {
    if (e.target.className.includes('edit')) {
        taskEdit(e)
    } else if (e.target.className.includes('detail')) {
        taskDetail(e)
    } else if (e.target.className.includes('slim')) {
        taskDetail(e)
    } else if (e.target.className.includes('done')) {
        taskDone()
    } else if (e.target.className.includes('delete')) {
        taskDelete(e)
    }
}
function applyCardBtnListeners() {
    const cardBtns = document.getElementsByClassName('btnElement')
    let i = 0
    for (i = 0; i <= cardBtns.length - 1; i++) {
        cardBtns[i].addEventListener('click', cardBtnListenerBranch)
    }
}

function showTasksInCalendar(e) {
    const targetDate = e.target.innerText // 23 Feb 23
    const endDate = calcEndDate(targetDate)
    const dateToCompare = format(endDate, 'yyyy-MM-dd')
    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    const newCollection = collection.filter(
        (item) => item.deadline === dateToCompare
    )
    const main = document.getElementById('main')
    main.innerHTML = ''
    createCard(newCollection)
}
function applyCalendarListeners() {
    const dayPara = document.getElementsByClassName('paraDay')
    let x = 0
    for (x = 0; x <= dayPara.length - 1; x++) {
        dayPara[x].addEventListener('click', showTasksInCalendar)
    }
}

function lastWeek(e) {
    const targetDate = // 21 Feb 23
        e.target.parentElement.nextElementSibling.children[0].innerText
    let endDate = calcEndDate(targetDate)
    endDate = addDays(endDate, -7)
    makeCalendar(endDate)
    applyCalendarListeners()
}
function nextWeek(e) {
    const targetDate = // 28 Feb 23
        e.target.parentElement.previousElementSibling.children[0].innerText
    let endDate = calcEndDate(targetDate)
    endDate = addDays(endDate, 1)
    makeCalendar(endDate)
    applyCalendarListeners()
}
function applyCalendarRetardListener() {
    const arrowLeft = document.querySelector('#arrowLeft')
    arrowLeft.addEventListener('click', lastWeek)
}
function applyCalendarAdvanceListener() {
    const arrowRight = document.querySelector('#arrowRight')
    arrowRight.addEventListener('click', nextWeek)
}

function navListenerBranch(e) {
    if (e.target.className.includes('plus')) {
        makeForms()
    } else if (e.target.className.includes('sort')) {
        taskSort()
    } else if (e.target.className.includes('home')) {
        const main = document.querySelector('#main')
        main.innerHTML = ''
        const newCollection = JSON.parse(
            window.localStorage.getItem('ToDoList')
        )
        newCollection.sort((a, b) => (a.deadline > b.deadline ? 1 : -1))
        createCard(newCollection)
        makeCalendar()
        applyCardBtnListeners()
        applyCalendarListeners()
    } else if (e.target.className.includes('project')) {
        getUniqueProjectNames()
    }
}
function applyNavListeners() {
    const navbarItems = document.getElementsByClassName('menuItem')
    let i = 0
    for (i = 0; i <= navbarItems.length - 1; i++) {
        navbarItems[i].addEventListener('click', navListenerBranch)
    }
}
export default navListenerBranch
export {
    applyNavListeners,
    applyCalendarListeners,
    applyCardBtnListeners,
    applyCalendarAdvanceListener,
    applyCalendarRetardListener,
}
