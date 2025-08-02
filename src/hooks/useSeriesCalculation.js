//Componente no visual 

import { useState, useCallback } from 'react';
import SerieCalculator from '../utils/SerieCalculator'; // Asegúrate de que la ruta sea correcta

const useSeriesCalculator = () => {
    const [result, setResult] = useState(null); // Almacena el resultado del cálculo
    const [error, setError] = useState(null);   // Almacena cualquier mensaje de error

    const calculateTerm = useCallback((nInput) => {
        // Se limpian los resultados y errores anteriores antes de cada nuevo cálculo.
        setResult(null);
        setError(null);

        const nAsNumber = Number(nInput);

        try {
            const calculatedResult = SerieCalculator.calculateSeriesTerm(nAsNumber); //logica de la clase SerieCalculator
            setResult(calculatedResult); //En dado caso no exista un error entonces se guarda el resultado
        } catch (err) {
            setError(err.message); // Si hay un error, se guarda para mostrarlo.
        }
    }, []); 

    // El hook devuelve el resultado, el error y la función para calcular.
    return {
        result,
        error,
        calculateTerm,
    };
};

export default useSeriesCalculator;