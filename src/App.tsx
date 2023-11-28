import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {decValue, incValue, setValue} from "./bll/counter-reducer";
import {useCallback, useEffect} from "react";

function App() {
    const countValue = useSelector<AppStateType, number>(state => state.counter.value)

    const dispatch = useDispatch()

    const handleIncrement = useCallback(() => {
        dispatch(incValue())

    }, [])

    const handleDecrement = useCallback(() => {
        if (countValue) {
            dispatch(decValue())
        }
    }, [countValue])

    const handleReset = useCallback(() => {
        dispatch(setValue(0))
    }, [])

    useEffect(() => {
        const value = localStorage.getItem('counter')
        if (value) {
            dispatch(setValue(+value))
        }
    }, [])

    return (
        <div className="app">
            <div className={'counter'}>
                <div className={'wrapper window'}>
                    {countValue}
                </div>
                <div className={'wrapper'}>
                    <button onClick={handleIncrement}>Increment</button>
                    <button onClick={handleDecrement} disabled={!countValue}>Decrement</button>
                    <button onClick={handleReset} disabled={!countValue}>Reset</button>
                </div>
            </div>

        </div>
    );
}

export default App;
