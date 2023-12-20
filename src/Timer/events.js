import { controls, themes } from "./elements.js";
import * as actions from "./action.js"
import * as sounds from "./sound.js"

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }
        actions[action]()
        console.log(action)
        console.log(actions)
    })
}

export function registerThemes() {
    themes.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        const caracters = event.target.textContent
        const nameTheme = event.target.dataset.name
        if(typeof actions[action] != "function") {
            return
        }
        actions[action](caracters)
        sounds[nameTheme]()
        
    })
}
