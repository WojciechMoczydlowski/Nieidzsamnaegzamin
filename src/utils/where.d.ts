type Where<T, Key extends keyof T, Value extends T[Key]> = T extends {} ? (T[Key] extends Value ? T : never) : never;
