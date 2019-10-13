import isDebug from "$utils/isDebug";
import loggingMiddleware from "$utils/loggingMiddleware";
import mkStateProvider from "$utils/mkStateProvider";
import initialState from "./initialState";
import baseReducer from "./reducer";
const reducer = isDebug ? loggingMiddleware("Order", baseReducer) : baseReducer;

const [MainPageStateProvider, useMainPage, useMainPageDispatch] = mkStateProvider(() => reducer, initialState);

// export const useDeleteCustomizedLocation = () => {
//     const dispatch = useMainPageDispatch();
//     return useCallback(
//         () => {
//             dispatch({
//                 type: "delete_customized_location",
//                 locationType,
//             });
//         },
//         [dispatch],
//     );
// };

export { useMainPage };

export default MainPageStateProvider;
