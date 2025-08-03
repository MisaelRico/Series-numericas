

class SerieCalculator {

    //Calculo y validaciones para serie fibonacci
    static _getFibonacciSerie(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }

        return this._getFibonacciSerie(n-1) + this._getFibonacciSerie(n-2);
    }

    //Calculo y validaciones de serie Triangular
    static _getTriangularSerie(n) {
        //Formula para calcular serie triangular
        return n * ( n + 1) / 2;
    }

    //Funcion para conocer la posición del número primo
    static _isPrime(num) {
        
        //El numero 2 es el único número par primo
        if (num === 2) return true;
        
        //Cualquier numero menor o igual a 1, y todos los numeros pares NO son primos
        if (num <= 1 || num % 2 === 0) {
            return false;
        }

        //Busca si algún número impar es divisinle, si es divisible entonces no es primo
        for (let i = 3; i < num; i += 2) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }

    //Calculo y validaciones para número primo
    static _getPrimeSerie (n) {
        if (typeof n !== 'number' || !Number.isInteger(n)) {
            throw new Error("El valor ingresado debe ser un número entero.");            
        }
        if (n <= 0) {
            throw new Error("Para que pueda resolverse correctamente la serie principal el valor ingresado debe ser mayor o igual a 2");            
        }
        if (n === 0) {
            return 0;
        }

        let count = 0;
        let num = 1;

        //Calculo de serie primo
        while (count < n) {
            num++;
            if (this._isPrime(num)) {
                count++;
            }
        }
        return num;
    }


    //Método para el calculo de la serie principal
    static calculateSeriesTerm(n) {
        
        if (typeof n !== 'number' || !Number.isInteger(n)) {
            throw new Error("La entrada del numero natural (n) debe ser un número entero.");
        }

        //Validacion para primo (n-1)
        if (n < 0) {
            throw new Error("El valor del numero natural (n) no puede ser negativo.")
        }

        //Se guardan los resultados de las diferentes series
        const triangularSerieResult = this._getTriangularSerie(n + 2);
        const primeSerieResult = this._getPrimeSerie(n-1);
        const fibonacciSerieResult = this._getFibonacciSerie(n);

        //serie principal
        return (2 * triangularSerieResult) - (3 * primeSerieResult) - (7 * fibonacciSerieResult)
    }
}

export default SerieCalculator;