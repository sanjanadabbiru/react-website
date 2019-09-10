import React from 'react'

export default function CustomButton({stle,heading,children}) {
    return (
        <div className={stle}>
            <h1>{heading}</h1>
            {children}
        </div>
    )
}

