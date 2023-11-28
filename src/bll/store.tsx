import {combineReducers} from "redux";
import {configureStore} from '@reduxjs/toolkit';
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadState()
})

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppsStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>
