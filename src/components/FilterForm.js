'use client'
import React from 'react'

const FilterForm = () => {

    const handleSubmit = () => {
        console.log("print")
    }

    const resetHandler = () => {

    }

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex gap-4 items-center">
                <input type="text" placeholder="job title" className="border border-amber-50 px-3 py-1" />
                <input type="text" placeholder="Location" className="border border-amber-50 px-3 py-1" />
                <button className="border border-gray-300 rounded px-3 py-1">Submit</button>
                <button className="border border-gray-300 rounded px-3 py-1" onSubmit={resetHandler}>Reset</button>
            </form>
        </div>
    )
}

export default FilterForm
