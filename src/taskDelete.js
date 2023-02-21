/* eslint-disable no-alert */

function taskDelete(e) {
    const targetID =
        e.target.parentElement.parentElement.parentElement.childNodes[0]
            .childNodes[0].firstChild.data

    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    const indexToDelete = collection.findIndex(
        (object) => object.title === targetID
    )
    if (collection.length <= 1) {
        alert('This is the last task - DO NOT TRY TO DELETE')

        // window.location.reload()
    } else {
        // eslint-disable-next-line no-restricted-globals
        const response = confirm('The deletion will be final: PROCEED?')
        if (response) {
            collection.splice(indexToDelete, 1)
            localStorage.setItem('ToDoList', JSON.stringify(collection))
            window.location.reload()
        } else {
            window.location.reload()
        }
    }
}

export default taskDelete
