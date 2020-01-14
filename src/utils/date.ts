import { format } from "date-fns";
import { pl } from "date-fns/locale";

export const formatDateToddMMMMyyyy = (date: string) => format(new Date(date), "dd MMMM yyyy", { locale: pl });
export const formatDateToddMMMM = (date: string) => format(new Date(date), "dd MMMM", { locale: pl });
