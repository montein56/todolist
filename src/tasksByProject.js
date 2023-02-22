/* eslint-disable no-alert */

import createCard from './makeScreen'
// CREATE LIST OF TASKS BY PROJECT
function projectTaskList(e) {
    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    // GET TASKS AS OBJECTS WHERE PROJECT NAME = THE ONE CLICKED IN DROPDOWN
    const newCollection = collection.filter(
        (item) => item.project === e.target.innerHTML
    )
    const navSubMenu = document.querySelector('#navSubMenu')
    const subMenuUL = document.querySelector('#subMenuUL')

    navSubMenu.style.visibility = 'hidden'
    subMenuUL.innerHTML = ''
    createCard(newCollection)
}
function getUniqueProjectNames() {
    // CREATE DROPDOWN- LIST OF UNIQUE PROJECTS
    const navSubMenuPara = document.querySelector('#subMenuTitle')
    navSubMenuPara.innerText = 'PROJECTS:'
    const subMenuUL = document.querySelector('#subMenuUL')
    const navSubMenu = document.getElementById('navSubMenu')
    const main = document.getElementById('main')
    main.innerHTML = ''

    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    const arrProjectNames = [...new Set(collection.map((item) => item.project))] // ARRAY OF UNIQUE PROJECT NAMES
    arrProjectNames.sort((a, b) => (a > b ? 1 : -1))

    let i = 0
    // eslint-disable-next-line no-plusplus
    for (i = 0; i <= arrProjectNames.length - 1; i++) {
        const li = document.createElement('li')
        li.classList.add('options')
        li.innerHTML = `${arrProjectNames[i]}`
        li.addEventListener('click', projectTaskList)
        subMenuUL.appendChild(li)
    }
    navSubMenu.style.visibility = 'visible'
}
export default getUniqueProjectNames
