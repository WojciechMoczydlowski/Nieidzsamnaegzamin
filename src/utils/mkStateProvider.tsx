import React, { useContext, useMemo } from "react";
import useCommandReducer, { CommandReducer } from "./useCommandReducer";

export default function<TState, TAction extends Action<any, any>>(
    useReducerFactory: () => CommandReducer<TState, TAction>,
    initialState: () => TState,
): [React.FunctionComponent, () => TState, () => React.Dispatch<TAction>] {
    const ContextData = React.createContext<TState>(initialState());
    const ContextSetter = React.createContext<React.Dispatch<TAction>>(() => {});

    function useData() {
        return useContext(ContextData);
    }

    function useDispatch() {
        return useContext(ContextSetter);
    }

    return [
        React.memo(props => {
            const reducer = useReducerFactory();

            const initialStateMemo = useMemo(initialState, [initialState]);

            const [state, dispatch] = useCommandReducer(reducer, initialStateMemo);

            return (
                <ContextData.Provider value={state}>
                    <ContextSetter.Provider value={dispatch}>{props.children}</ContextSetter.Provider>
                </ContextData.Provider>
            );
        }),
        useData,
        useDispatch,
    ];
}
