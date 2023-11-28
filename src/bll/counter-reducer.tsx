const initialValue = {
    value: 0
}
type  InitialStateType = typeof initialValue


export const counterReducer = (state: InitialStateType = initialValue, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'INC-VALUE' :
            return {...state, value: state.value + 1}
        case 'DEC-VALUE' :
            return {...state, value: state.value - 1}
        case 'SET-VALUE' :
            return {...state, value: action.payload}

        default:
            return state
    }
}

export const incValue = () => ({type: 'INC-VALUE'} as const)
export const decValue = () => ({type: 'DEC-VALUE'} as const)
export const setValue = (payload: number) => ({type: 'SET-VALUE', payload} as const)


export type IncValueType = ReturnType<typeof incValue>
export type DecValueType = ReturnType<typeof decValue>
export type SetValueType = ReturnType<typeof setValue>

type ActionTypes = IncValueType | DecValueType | SetValueType