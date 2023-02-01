// eslint-disable-next-line import/no-cycle
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
        window.location.reload()
    } else {
        collection.splice(indexToDelete, 1)
        localStorage.setItem('ToDoList', JSON.stringify(collection))
        window.location.reload()
    }
}
export default taskDelete
