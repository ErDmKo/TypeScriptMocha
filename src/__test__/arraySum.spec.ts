import { arraySum } from "@src/arraySum"
import { expect } from "chai";

describe('calc array sum', () => {
    it('calculate summ of array', () => {
        const result = arraySum([1,2,3]);
        expect(result).to.be.eq(6);
    })
})