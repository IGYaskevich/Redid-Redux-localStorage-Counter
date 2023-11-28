import {AppStateType} from "../bll/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counter-store')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)

    } catch (error) {
        console.log('Error loading state:', error)
        return undefined
    }
}


export const saveState = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state)
        const countValue = JSON.stringify(state.counter.value)

        localStorage.setItem('counter-store', serializedState)
        localStorage.setItem('counter', countValue)
    } catch (error) {
        console.log('Error saving state:', error)
    }

}