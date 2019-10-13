import { CommandReducer } from "$utils/useCommandReducer";
import { MainPageActions } from "./actions";
import { MainPageState } from "./state";
export type ReducerParams = {};

const reducer: CommandReducer<MainPageState, MainPageActions> = (state, action) => {
    switch (action.type) {
        case "fetch_cart_product": {
            return [
                {
                    ...state,
                },
            ];
        }
    }
};

export default reducer;
