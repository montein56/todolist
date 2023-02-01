/* eslint-disable no-alert */
/* eslint-disable no-console */

// BRANCH MODULE:
// Reacts to button click on Add in Navbar and Edit in Edit form
// Generates Add and Edit forms
// Uses e to transmit LS array index number of task to edit

import makeForms from './formAddTask'
import taskSort from './sortTask'

function branchToForm(e) {
    if (typeof e === 'number') {
        // THIS IS FOR 'Edit' Task
        makeForms(e)
    } else if (e.target.className.includes('plus')) {
        //  THIS IS FOR 'Add' Task
        this.removeEventListener('click', branchToForm)
        makeForms()
    } else if (e.target.className.includes('sort')) {
        //  THIS IS FOR 'sorting' Tasks
        this.removeEventListener('click', branchToForm)
        taskSort()
    }
}

export default branchToForm
