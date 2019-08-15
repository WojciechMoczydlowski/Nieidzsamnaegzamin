import reversable from "$utils/reversable";

export default {
    index: reversable("/"),

    products: {
        details: reversable<{ productId: string }>("/products-details/:productId"),
    },

    categories: {
        list: reversable("/categories"),
        productsInCategory: reversable<{ categoryId: string }>("/categories/:categoryId"),
    },
};

export type RouteParamsFor<T extends (...args: any[]) => any> = Parameters<T>[0] extends undefined
    ? {}
    : Parameters<T>[0];
