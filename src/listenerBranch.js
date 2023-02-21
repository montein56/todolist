/* eslint-disable no-alert */
/* eslint-disable no-plusplus */

import makeForms from './formAddEdit'
import { taskSort } from './taskSort'
import getUniqueProjectNames from './tasksByProject'
import createCard from './makeScreen'
import taskEdit from './taskEdit'
import taskDetail from './cardToggleDetail'
import taskDone from './taskDone'
import taskDelete from './taskDelete'

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
        applyCardBtnListeners()
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

function showTasksInCalendar(e) {
    const strObtained = e.target.innerText
    // var mys= str.substring(str.indexOf('#')+1,str.indexOf("_"));
    const taskTitle = strObtained.substring(
        strObtained.indexOf('1.'),
        strObtained.indexOf('<br><')
    )

    alert(strObtained)
}
function applyCalendarListeners() {
    const dayPara = document.getElementsByClassName('paraDay')
    let x = 0
    for (x = 0; x <= dayPara.length - 1; x++) {
        // const cardName = cards[x].title
        dayPara[x].addEventListener('click', showTasksInCalendar)
    }
}
export default navListenerBranch
export { applyNavListeners, applyCalendarListeners, applyCardBtnListeners }
