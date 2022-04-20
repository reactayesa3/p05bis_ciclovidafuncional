import React, { useEffect, useState } from 'react'

export default function CodeCheck() {

    const [contador, setContador] = useState(10);
    const [codigo, setCodigo] = useState('');
    const [isShowInput, setIsShowInput] = useState(true);

    useEffect(() => {
        console.log('useEffect se ejecuta tras el montaje')
    }, []) // Si el array de dependencias está vacío solo se ejecutará una vez
           // cuando se monte el componente

    useEffect(() => {
        const timer = setInterval(() => {
            if(contador > 0) {
                setContador(prevContador => prevContador - 1);
            }
        }, 1000);
        return () => clearInterval(timer); // Callback opcional de limpieza
    }, [contador])

    const handleInputChange = e => {
        setCodigo(e.target.value);
    }

    useEffect(() => {
        if(codigo === '1234') {
            setIsShowInput(false);
        }
    }, [codigo])

    return (
        <>
            {isShowInput 
                ? 
                <>
                    <p>Introduzca el código recibido por SMS</p>
                    <input type="text" onChange={handleInputChange}/>
                    <p className="clock">{contador}</p>
                </>
                :
                <h1>Código correcto, bienvenid@</h1>
            }
        </>
    )
}


