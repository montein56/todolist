/* eslint-disable no-alert */

// SORT BUTTON IN NAVBAR: SORT BY 5 THINGS
function sortBy(e) {
    const sortField = e.target.id
    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    if (sortField.includes('Date')) {
        collection.sort((a, b) => (a.deadline > b.deadline ? 1 : -1))
    } else if (sortField.includes('Title')) {
        collection.sort((a, b) => (a.title < b.title ? 1 : -1))
        // } else if (sortField.includes('Project')) {
        //     collection.sort((a, b) => (a.project < b.project ? 1 : -1))
    } else if (sortField.includes('Priority')) {
        collection.sort((a, b) => (a.priority > b.priority ? 1 : -1))
    } else if (sortField.includes('Done')) {
        collection.sort((a, b) => (a.completed > b.completed ? 1 : -1))
    }
    localStorage.setItem('ToDoList', JSON.stringify(collection))
    window.location.reload()
}

function taskSort() {
    const navSubMenu = document.getElementById('navSubMenu')
    navSubMenu.innerHTML = ''
    const br = document.createElement('br')

    const sortItems = [
        '<b>SORT BY:</b>',
        'Title',
        'Date',
        // 'Project',
        'Priority',
        'Done',
    ]
    let i = 0
    // eslint-disable-next-line no-plusplus
    for (i = 0; i <= sortItems.length - 1; i++) {
        const field = document.createElement('a')
        field.innerHTML = `${sortItems[i]}`
        field.id = `${sortItems[i]}`
        field.addEventListener('click', sortBy)
        navSubMenu.appendChild(field)
        navSubMenu.appendChild(br.cloneNode())
        navSubMenu.appendChild(br.cloneNode())
    }
    // sortBy()
}
export default taskSort
