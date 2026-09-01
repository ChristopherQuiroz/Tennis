import calculateScore from './showScore';

describe('calculateScore', () => {

    it("Deberia mostrar Love - Love si ambos estan en cero", () => {
        expect(calculateScore(0, 0)).toEqual("Love - Love");
    });
});