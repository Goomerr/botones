import React from 'react';

export const Boton = () => {
    return (
        <div className="flex justify-around mt-5" >
            <div className="grid justify-items-center">
                <p>Botón default</p>
                <button className="shadow-md bg-gray-200 px-4 py-2 rounded font-bold text-lg mt-4 ">Botón</button>
            </div>
            <div className="grid justify-items-center">
                <p>Botón default Hover</p>
                <button className="shadow-md bg-gray-200 hover:bg-gray-500 px-4 py-2 rounded font-bold text-lg mt-4 ">Botón</button>
            </div>
        </div>
    )
}
