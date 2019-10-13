import React from "react";

class RawStyle {
    constructor(public className?: string) {
        this.className = className;
    }
}

type ParameterSimple<TKeys extends string> = RawStyle | TKeys | false | undefined;

type ParameterFunction<TKeys extends string, TStyledData> = (styledData: TStyledData) => ParameterSimple<TKeys>;

type ParameterType<TKeys extends string, TStyledData> = ParameterSimple<TKeys> | ParameterFunction<TKeys, TStyledData>;

function mkMapClassesToString<TKeys extends string, TProps>(styles: { [K in TKeys]: string }) {
    return (c: ParameterType<TKeys, TProps>) => {
        if (c instanceof RawStyle) {
            return c.className;
        }

        if (typeof c === "string") {
            return styles[c];
        }

        return undefined;
    };
}

type StyleDataProp<T> = false extends { [TKey in keyof T]: undefined extends T[TKey] ? true : false }[keyof T]
    ? { styleData: T }
    : { styleData?: T };

interface Styled<TKeys extends string, TInProps> {
    <TStyledData>(...classes: ParameterType<TKeys, TStyledData>[]): React.ComponentType<
        TInProps & StyleDataProp<TStyledData>
    >;
}

type CreateStyled<TKeys extends string> = {
    <Tag extends React.ComponentType<any>>(tag: Tag): Styled<TKeys, PropsOf<Tag>>;
    <Tag extends Intrinsics>(tag: Tag): Styled<TKeys, JSX.IntrinsicElements[Tag]>;
} & { [Tag in Intrinsics]: Styled<TKeys, JSX.IntrinsicElements[Tag]> };

const styledIntrinsics = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noindex",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "template",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "webview",
    "svg",
    "animate",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tspan",
    "use",
    "view",
] as const;

type StyledIntrincics = (typeof styledIntrinsics)[number];

type IntrinsicsEquity = AssertNever<UnionEqual<StyledIntrincics, Intrinsics>>;

export default function<TKeys extends string>(styles: { [K in TKeys]: string }): CreateStyled<TKeys> {
    const styled = <Tag extends React.ComponentType<any> | Intrinsics>(tag: Tag): Styled<TKeys, any> => {
        const addClasses: Styled<TKeys, any> = <TStyledData>(...classes: ParameterType<TKeys, TStyledData>[]) => {
            const mapClassesToString = mkMapClassesToString(styles);

            const parsedClasses = classes
                .map(mapClassesToString)
                .filter(Boolean)
                .join(" ");

            const parsedFunctions = classes.filter(
                (c): c is ParameterFunction<TKeys, TStyledData> => c instanceof Function,
            );

            const styledComponent: React.RefForwardingComponent<
                Tag,
                { styleData?: TStyledData; className?: string }
            > = (props, ref) => {
                const { styleData, ...elemProps } = props;

                const className = parsedFunctions
                    .map(c => c(styleData || ({} as any)))
                    .map(mapClassesToString)
                    .concat([elemProps.className, parsedClasses])
                    .filter(Boolean)
                    .join(" ");

                return React.createElement(tag, { ...elemProps, className, ref });
            };

            styledComponent.displayName = "Styled";
            return React.forwardRef(styledComponent) as any; // :(
        };

        return addClasses;
    };

    for (let styledIntrinsic of styledIntrinsics) {
        styled[styledIntrinsic] = styled(styledIntrinsic);
    }

    return styled as CreateStyled<TKeys>;
}
