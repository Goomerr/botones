import React from 'react'

const BotonDisabled = () => {
    return (
        <div className="flex justify-around mt-5" >
            <div className="grid justify-items-center">
                <p>Botón disabled</p>
                <button className="opacity-50 bg-gray-500 px-4 py-2 rounded font-bold text-lg mt-4 " disabled>Botón</button>
            </div>
            <div className="grid justify-items-center">
                <p>Botón disabled text</p>
                <button className=" px-4 py-2 opacity-50 rounded font-bold text-lg mt-4 " disabled>Botón</button>
            </div>
        </div>
    )
}

export default BotonDisabled;
