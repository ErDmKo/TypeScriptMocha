import { sum } from "@src/sum"
import { expect } from 'chai';

describe('sum module', () => {
    it ('it calculate 2 + 2 = 4', () => {
        const result = sum(2, 2);
        expect(result).to.be.eq(4);
    })
})