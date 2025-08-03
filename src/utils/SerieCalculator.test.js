import SerieCalculator from "./SerieCalculator";

describe('Serie Calculator', () => {

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

    // test('debería lanzar un error cuando n=1 debido a primo(0)', () => {
    //     expect(() => SerieCalculator.calculateSeriesTerm(1)).toThrow("Para que pueda resolverse correctamente la serie principal el valor ingresado debe ser mayor o igual a 2");   
    // });

    //Pruebas de manejo de errores
    test('debería lanzar un error si n no es un número entero', () => {
        expect(() => SerieCalculator.calculateSeriesTerm(3.5)).toThrow("La entrada del numero natural (n) debe ser un número entero.");
    });

    //Test para datos que no sean numeros enteros
    test('debería lanzar un error para una entrada no numérica', () => {
        expect(() => SerieCalculator.calculateSeriesTerm("test")).toThrow("La entrada del numero natural (n) debe ser un número entero.");
    });

    //Test para numeros negativos
    test('debería lanzar un error para n negativo', () => {
        expect(() => SerieCalculator.calculateSeriesTerm(-5)).toThrow("El valor del numero natural (n) no puede ser negativo.");
    });


    // Pruebas para las primeras 10 posiciones de números primos
    describe('SerieCalculator._getPrimeSerie', () => {
        test.each([
            [1, 2],   // 1er primo
            [2, 3],   // 2do primo
            [3, 5],   // 3er primo
            [4, 7],   // 4to primo
            [5, 11],  // 5to primo
            [6, 13],  // 6to primo
            [7, 17],  // 7mo primo
            [8, 19],  // 8vo primo
            [9, 23],  // 9no primo
            [10, 29], // 10mo primo
        ])('para la posición %i, debería devolver el primo %i', (position, expectedPrime) => {
            expect(SerieCalculator._getPrimeSerie(position)).toBe(expectedPrime);
        });
    });

    //Pruebas serie triangular
    describe('SerieCalculator._getTriangularSerie', () => {
        test.each([
            [1, 1],
            [2, 3],
            [3, 6],
            [4, 10],
            [5, 15],
            [10, 55],
        ])('para n = %i, debería devolver Triangular %i', (n, expected) => {
            expect(SerieCalculator._getTriangularSerie(n)).toBe(expected);
        });
    });

    //Pruebas fibonacci
    describe('SerieCalculator._getFibonacciSerie', () => {
        test.each([
            [0, 0],
            [1, 1],
            [2, 1],
            [3, 2],
            [4, 3],
            [5, 5],
            [6, 8],
            [7, 13],
            [8, 21],
            [9, 34],
            [10, 55],
        ])('para n = %i, debería devolver Fibonacci %i', (n, expected) => {
            expect(SerieCalculator._getFibonacciSerie(n)).toBe(expected);
        });
    });
});