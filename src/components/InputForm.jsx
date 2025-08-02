import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material'; 


const InputForm = ({ onCalculate, initialValue = '' }) => {
    // Estado local para almacenar el valor actual del input del usuario
    const [nInput, setNInput] = useState(initialValue);

    // Maneja el cambio en el campo de texto, actualizando el estado 'nInput'
    const handleChange = (e) => {
        setNInput(e.target.value);
    };

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
        onCalculate(nInput); // Llama a la función 'onCalculate' que se pasa como prop desde el componente padre
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            className="mb-6 p-6 bg-gray-800 rounded-lg shadow-md"
        >
            <Typography variant="body1" component="label" htmlFor="n-input" className="block mb-3 text-gray-400 font-semibold">
                Ingresa un número natural:
            </Typography>
            <TextField
                id="n-input"
                type="text"
                value={nInput}
                onChange={handleChange}
                placeholder="Ej: 7"
                variant="outlined"
                size="small"
                fullWidth
                className="mb-4 text-white bg-gray-700 rounded-md border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                slotProps={{
                    input: {
                        'aria-label': 'Número natural para calcular la serie',
                    }
                }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-full py-2 text-lg font-semibold rounded-full bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-500"
            >
                Calcular
            </Button>
        </Box>
    );
};

export default InputForm;