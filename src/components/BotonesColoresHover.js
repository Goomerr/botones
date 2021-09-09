import React from 'react'

const BotonesColoresHover = () => {
    return (
        <div className="flex justify-around mt-20 mb-40" >
        <div className="grid justify-items-center">
            <p>Botón default Hover</p>
            <button className="shadow-md bg-gray-200 hover:bg-gray-500 px-4 py-2 rounded font-bold text-lg mt-4 ">Botón</button>
        </div>
        <div className="grid justify-items-center">
            <p>Botón Primary Hover</p>
            <button className="shadow-md bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded font-bold text-lg mt-4 ">Botón</button>
        </div>
        <div className="grid justify-items-center">
            <p>Botón Secondary Hover</p>
            <button className="shadow-md bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded font-bold text-lg mt-4 ">Botón</button>
        </div>
        <div className="grid justify-items-center">
            <p>Botón Danger Hover</p>
            <button className="shadow-md bg-red-600  hover:bg-red-800 text-white px-4 py-2 rounded font-bold text-lg mt-4 ">Botón</button>
        </div>
    </div>
    )
}

export default BotonesColoresHover;
