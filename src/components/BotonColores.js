import React from 'react'

const BotonColores = () => {
    return (
        <div className="flex justify-around mt-20" >
        <div className="grid justify-items-center">
            <p>Botón default</p>
            <button className="shadow-md bg-gray-200 px-4 py-2 rounded font-bold text-lg mt-4 ">Botón</button>
        </div>
        <div className="grid justify-items-center">
            <p>Botón Primary</p>
            <button className="shadow-md bg-blue-600 text-white px-4 py-2 rounded font-bold text-lg mt-4 ">Botón</button>
        </div>
        <div className="grid justify-items-center">
            <p>Botón Secondary</p>
            <button className="shadow-md bg-gray-600 text-white px-4 py-2 rounded font-bold text-lg mt-4 ">Botón</button>
        </div>
        <div className="grid justify-items-center">
            <p>Botón Danger</p>
            <button className="shadow-md bg-red-600 text-white px-4 py-2 rounded font-bold text-lg mt-4 ">Botón</button>
        </div>
    </div>
    )
}

export default BotonColores
