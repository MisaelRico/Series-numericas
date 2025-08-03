import SerieCalculator from "./SerieCalculator";

describe('Serie calculator', () => {

    //Casos de prueba con numeros naturales ( n = 1 a 10)
    test('debería devolver el término correcto de la serie para n = 1 a 10 (primeros 10 números naturales)', () => {
        expect(SerieCalculator.calculateSeriesTerm(2)).toBe(7);
        expect(SerieCalculator.calculateSeriesTerm(3)).toBe(7);
        expect(SerieCalculator.calculateSeriesTerm(4)).toBe(6);
        expect(SerieCalculator.calculateSeriesTerm(5)).toBe(0);
        expect(SerieCalculator.calculateSeriesTerm(6)).toBe(-17);
        expect(SerieCalculator.calculateSeriesTerm(7)).toBe(-40);
        expect(SerieCalculator.calculateSeriesTerm(8)).toBe(-88);
        expect(SerieCalculator.calculateSeriesTerm(9)).toBe(-163);
        expect(SerieCalculator.calculateSeriesTerm(10)).toBe(-298);
    });

    test('debería lanzar un error cuando n=1 debido a primo(0)', () => {
        expect(() => SerieCalculator.calculateSeriesTerm(1)).toThrow("Para que pueda resolverse correctamente la serie principal el valor ingresado debe ser mayor o igual a 2");   
    });

    //Pruebas de manejo de errores
    test('debería lanzar un error si n no es un número entero', () => {
        expect(() => SerieCalculator.calculateSeriesTerm(3.5)).toThrow("La entrada 'n' debe ser un número entero.");
    });

    //Test para datos que no sean numeros enteros
    test('debería lanzar un error para una entrada no numérica', () => {
        expect(() => SerieCalculator.calculateSeriesTerm("test")).toThrow("La entrada 'n' debe ser un número entero.");
    });

    //Test para numeros negativos
    test('debería lanzar un error para n negativo', () => {
        expect(() => SerieCalculator.calculateSeriesTerm(-5)).toThrow("El valor de 'n' no puede ser negativo.");
    });
});