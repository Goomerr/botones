import React from 'react'

const BotonText = () => {
    return (
        <div>
            <div className="flex justify-around mt-5" >
                <div className="grid justify-items-center">
                    <p>Botón Text</p>
                    <button className=" px-4 py-2 text-blue-700 rounded font-bold text-lg mt-4 ">Botón</button>
                </div>
                <div className="grid justify-items-center">
                    <p>Botón Text Hover</p>
                    <button className=" hover:bg-blue-200 px-4 py-2 text-blue-700 rounded font-bold text-lg mt-4 ">Botón</button>
                </div>
            </div>
        </div>
    )
}

export default BotonText
