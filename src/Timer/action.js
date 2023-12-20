import state from './state.js'
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sound.js"


export function toggleRunning() {
    state.isRunning = document.documentElement.
    classList.toggle('running')

    timer.countDown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')

    timer.updatingDisplay()
}

export function adjusterAdd() {
    let minutes = Number(el.minutes.textContent)
    if(minutes >= 60) {
        return
    }
    minutes = minutes + 5
    timer.updatingDisplay(minutes)
}

export function adjusterRemove() {
    let minutes = Number(el.minutes.textContent)
    if(minutes <= 0) {
        return
    }
    minutes = minutes - 5
    timer.updatingDisplay(minutes)
}

export function themes(choice) {
    const nameTheme = choice
    let themeElement = document.getElementsByClassName(`${choice}`)
    if (state.theme == undefined) {
        state.theme = choice
        themeElement[0].classList.add("active")    
        return
    } else if(state.theme == choice){
        state.theme = undefined
        themeElement[0].classList.remove("active")    
        return
    } 
    return
    
}
