export default function unnulify<T>(val: T | null | undefined): T | undefined {
    return val === null ? undefined : val;
}
