import calculateScore from './showScore';

describe('calculateScore', () => {

    it("Deberia mostrar Love - Love si ambos estan en cero", () => {
        expect(calculateScore(0, 0)).toEqual("Love - Love");
    });

    it("Deberia mostrar 15 - Love si el jugador 1 anota una vez y el jugador 2 no anota", () => {
        expect(calculateScore(1, 0)).toEqual("15 - Love");
    });

    it("Deberia mostrar 15 - 15 si ambos jugadores anotan una vez", () => {
        expect(calculateScore(1, 1)).toEqual("15 - 15");
    });

    it('Deberia mostrar 30 - Love si el jugador 1 anota dos veces y el jugador 2 no anota', () => {
        expect(calculateScore(2, 0)).toEqual("30 - Love");
    });
});