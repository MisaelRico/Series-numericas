import React from "react";
import { Box, Typography } from '@mui/material';

//Recibe el resultado o error
const ResultDisplay = ({ result, error }) => { 
    return (
        <Box className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
            {result !== null && !error && (
                <div className="mt-4">
                    <Typography variant="h6" className="text-gray-400 mb-2">Resultado:</Typography>
                    <Typography variant="h4" className="font-bold text-indigo-500">{result}</Typography>
                </div>
            )}

            {error && (
                <div className="mt-4">
                    <Typography variant="h6" className="text-red-500 mb-2">Error:</Typography>
                    <Typography variant="body1" className="text-red-400">{error}</Typography>
                </div>
            )}
        </Box>
    );
};

export default ResultDisplay;