

class SerieCalculator {

    //Calculo y validaciones para serie fibonacci
    static _getFibonacciSerie(n) {
        if(n === 0) return 0;
        if(n === 1) return 1;

        let a= 0;
        let b = 1;

        //Calculo número Fibonacci
        for (let i = 2; i <= n; i++){
            let temp = a + b;
            a=b;
            b=temp;
        }
        return b;
    }

    //Calculo y validaciones de serie Triangular
    static _getTriangularSerie(n) {
        //Formula para calcular serie triangular
        return n * ( n + 1) / 2;
    }

    //verificar que el valor ingresado sea un número primo
    static _isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        //iteración para encontrar la posición del número primo
        for (let i = 5; i * i <= num; i = i + 6) {
            if (num % i === 0 || num % (i + 2) === 0) {
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
            if (SerieCalculator._isPrime(num)) {
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

        //Se guarda el resultado de los calculos de cada serie
        const triangularSerieResult = SerieCalculator._getTriangularSerie(n + 2);
        const primeSerieResult = SerieCalculator._getPrimeSerie(n-1);
        const fibonacciSerieResul = SerieCalculator._getFibonacciSerie(n);

        //serie principal
        return (2 * triangularSerieResult) - (3 * primeSerieResult) - (7 * fibonacciSerieResul)
    }
}

export default SerieCalculator;