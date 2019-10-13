import { Dispatch, useCallback, useReducer } from "react";
export type CommandReducer<TState, TAction> = (state: TState, action: TAction) => [TState, Command<TAction>?];
export const dispatchCommand = <TAction>(dispatch: Dispatch<TAction>, command?: Command<TAction>) =>
    command && Promise.resolve(command()).then(action => action && dispatch(action));
export default function useCommandReducer<TState, TAction>(
    reducer: CommandReducer<TState, TAction>,
    initialState: TState,
) {
    const innerReducer: React.Reducer<TState, TAction> = useCallback(
        (state, action) => {
            const [newState, command] = reducer(state, action);

            command && setImmediate(() => dispatchCommand(dispatch, command));

            return newState;
        },
        [reducer],
    );
    const [state, dispatch] = useReducer(innerReducer, initialState);
    return [state, dispatch] as [TState, Dispatch<TAction>];
}
