import React from 'react';

export const BotonOutline = () => {
    return (
        <div className="flex justify-around mt-20" >
            <div className="grid justify-items-center">
                <p>Botón outline</p>
                <button className="border-2 border-blue-500 text-blue-700 px-4 py-2 rounded font-bold text-lg mt-4 ">Botón</button>
            </div>
            <div className="grid justify-items-center">
                <p>Botón outline Hover</p>
                <button className="border-2 border-blue-500 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded font-bold text-lg mt-4 ">Botón</button>
            </div>
        </div>

    )
}
