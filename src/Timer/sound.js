import state from "./state.js"

export const treeAudio = new Audio('./assets/Floresta.wav')

export const cloudAudio = new Audio('./assets/Chuva.wav')

export const coffeeAudio = new Audio('./assets/Cafeteria.wav')

export const fireAudio = new Audio('./assets/Lareira.wav')

treeAudio.loop = true
cloudAudio.loop = true
coffeeAudio.loop = true
fireAudio.loop = true

export function tree() {
    if(!state.themesOn) {
        treeAudio.play()
        state.themesOn = true
        return
    }
    treeAudio.pause()
    state.themesOn = false
    return
}

export function cloud() {
    if(!state.themesOn) {
        cloudAudio.play()
        state.themesOn = true
        return
    }
    cloudAudio.pause()
    state.themesOn = false
    return
}

export function coffee() {
    if(!state.themesOn) {
        coffeeAudio.play()
        state.themesOn = true
        return
    }
    coffeeAudio.pause()
    state.themesOn = false
    return
}

export function fire() {
    if(!state.themesOn) {
        fireAudio.play()
        state.themesOn = true
        return
    }
    fireAudio.pause()
    state.themesOn = false
    return
}