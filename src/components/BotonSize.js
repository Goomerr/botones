import React from 'react'

const BotonSize = () => {
    return (
        <div className="flex justify-around mt-20" >
            <div className="grid justify-items-center">
                <p>Botón Size sm</p>
                <button className="bg-blue-700 text-white px-4 py-2 rounded font-bold text-sm mt-4 ">Botón</button>
            </div>
            <div className="grid justify-items-center">
                <p>Botón Size md</p>
                <button className="bg-blue-700 text-white px-8 py-3 rounded font-bold text-md mt-4 ">Botón</button>
            </div>
            <div className="grid justify-items-center">
                <p>Botón Size lg</p>
                <button className="bg-blue-700 text-white px-10 py-4 rounded font-bold text-lg mt-4 ">Botón</button>
            </div>

        </div>
    )
}

export default BotonSize
