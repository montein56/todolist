/* eslint-disable no-plusplus */
/* eslint-disable no-alert */

function taskDetail(e) {
    const targetID1 =
        e.target.parentElement.parentElement.previousElementSibling
    const targetID2 =
        e.target.parentElement.parentElement.previousElementSibling
            .previousElementSibling
    const imgButton = e.target.parentElement

    if (!this.dataset.clicked) {
        imgButton.innerHTML = `<img src = 'images/slim.png' class = 'btnCard slim'>`
        this.setAttribute('data-clicked', 'true')
        targetID1.style.display = 'block'
        targetID2.style.display = 'block'
    } else {
        imgButton.innerHTML = `<img src = 'images/detail.png' class = 'btnCard detail'>`
        this.removeAttribute('data-clicked')
        targetID1.style.display = 'none'
        targetID2.style.display = 'none'
    }
}
export default taskDetail
