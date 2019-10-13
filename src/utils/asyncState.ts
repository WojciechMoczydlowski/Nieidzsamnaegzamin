export type AsyncState<Params, Result, Error> =
    | ({ status: "fetching" } & Params)
    | ({ status: "error" } & Params & Error)
    | ({ status: "fetched" } & Params & Result);

export type AsyncStateNamed<Params, Result, Error> =
    | { status: "fetching"; params: Params }
    | { status: "error"; params: Params; error: Error }
    | { status: "fetched"; params: Params; result: Result };

export type AsyncStateNamedProgressive<Params, ResultSummary, ResultDetails, Error> =
    | AsyncStateNamed<Params & { details: false }, ResultSummary, Error>
    | AsyncStateNamed<Params & { details: true }, ResultDetails, Error>;

export type AsyncStateInitial = { status: "initial" };

export const isInitial = <T extends AsyncStateInitial | AsyncStateNamed<any, any, any>>(
    value: T,
): value is Where<T, "status", "initial"> => value.status === "initial";

export const isFetching = <T extends AsyncStateInitial | AsyncStateNamed<any, any, any>>(
    value: T,
): value is Where<T, "status", "fetching"> => value.status === "fetching";

export const isFetched = <T extends AsyncStateInitial | AsyncStateNamed<any, any, any>>(
    value: T,
): value is Where<T, "status", "fetched"> => value.status === "fetched";

export const isFetchedWithDetails = <
    T extends (AsyncStateInitial & { params?: undefined }) | AsyncStateNamedProgressive<any, any, any, any>
>(
    value: T,
): value is Where<T, "status", "fetched"> => value.status === "fetched" && value.params.details === true;

export const isError = <T extends AsyncStateNamed<any, any, any>>(value: T): value is Where<T, "status", "error"> =>
    value.status === "error";
