/* eslint-disable no-alert */

function taskDelete(e) {
    const targetID =
        e.target.parentElement.parentElement.parentElement.childNodes[0]
            .childNodes[0].firstChild.data

    const newCollection = JSON.parse(window.localStorage.getItem('ToDoList'))
    const indexToDelete = newCollection.findIndex(
        (object) => object.title === targetID
    )
    if (newCollection.length <= 1) {
        alert('This is the last task - DO NOT TRY TO DELETE')
    } else {
        // eslint-disable-next-line no-restricted-globals
        const response = confirm('The deletion will be final: PROCEED?')
        if (response) {
            newCollection.splice(indexToDelete, 1)
            localStorage.setItem('ToDoList', JSON.stringify(newCollection))

            e.target.parentElement.parentElement.parentElement.innerHTML = ''
        }
    }
}

export default taskDelete
