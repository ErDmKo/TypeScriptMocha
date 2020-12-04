import { sum } from "@src/sum";

export const arraySum = (array: number[]) => {
    return array.reduce(sum);
}