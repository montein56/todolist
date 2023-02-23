/* eslint-disable no-plusplus */
/* eslint-disable no-alert */

import createCard from './makeScreen'

// SORT BUTTON IN NAVBAR: SORT BY 4 THINGS
function sortBy(e) {
    const main = document.getElementById('main')
    main.innerHTML = ''
    const sortField = e.target.innerText
    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    if (sortField.includes('Date')) {
        collection.sort((a, b) => (a.deadline > b.deadline ? 1 : -1))
    } else if (sortField.includes('Title')) {
        collection.sort((a, b) => (a.title < b.title ? 1 : -1))
    } else if (sortField.includes('Priority')) {
        collection.sort((a, b) => (a.priority > b.priority ? 1 : -1))
    } else if (sortField.includes('Done')) {
        collection.sort((a, b) => (a.completed > b.completed ? 1 : -1))
    }
    localStorage.setItem('ToDoList', JSON.stringify(collection))
    const navSubMenu = document.querySelector('#navSubMenu')
    navSubMenu.style.visibility = 'hidden'
    const subMenuUL = document.querySelector('#subMenuUL')
    subMenuUL.innerText = ''
    createCard()
}

function taskSort() {
    const navSubMenuPara = document.querySelector('#subMenuTitle')
    navSubMenuPara.innerText = 'SORT BY:'
    const subMenuUL = document.querySelector('#subMenuUL')
    const sortList = ['Title', 'Date', 'Priority', 'Done']
    let i = 0
    for (i = 0; i <= sortList.length - 1; i++) {
        const li = document.createElement('li')
        li.classList.add('options')
        li.innerText = sortList[i]
        li.addEventListener('click', sortBy)
        subMenuUL.appendChild(li)
    }
    const navSubMenu = document.querySelector('#navSubMenu')
    navSubMenu.style.visibility = 'visible'
}
export { taskSort, sortBy }
