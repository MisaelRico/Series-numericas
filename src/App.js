import useSeriesCalculator from "./hooks/useSeriesCalculation";
import ResultDisplay from "./components/ResultDisplay";
import InputForm from "./components/InputForm";

function App() {
    //Se guarda el resultado o el error según sea el caso
    const { result, error, calculateTerm } = useSeriesCalculator();
    
    return (
        <div className="bg-gray-900 min-h-screen py-10 px-6 flex flex-col items-center justify-center text-white">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-300">Calculadora de serie</h1>
            <div className="max-w-md w-full">
                <InputForm onCalculate={calculateTerm} />
                <ResultDisplay result={result} error={error} />
            </div>
        </div>
    );
}

export default App;
