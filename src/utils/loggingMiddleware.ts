import { CommandReducer } from "./useCommandReducer";

const loggingMiddleware = <TState, TAction>(
    namespace: string,
    reducer: CommandReducer<TState, TAction>,
): CommandReducer<TState, TAction> => {
    return (state, action) => {
        const newState = reducer(state, action);

        console.group(
            `${namespace} %c${"type" in action && typeof action["type"] === "string" ? action["type"] : action}`,
            "color: green",
        );
        console.log("%cprev state", "color: #9E9E9E; font-weight: bold;", state);
        console.log("%caction    ", "color: #03A9F4; font-weight: bold;", action);
        console.log("%cnext state", "color: #4CAF50; font-weight: bold;", newState[0]);
        newState[1] && console.log("%ccommand   ", "color: #FF5032; font-weight: bold;", newState[1].name || "Yes");
        console.groupEnd();

        return newState;
    };
};

export default loggingMiddleware;
