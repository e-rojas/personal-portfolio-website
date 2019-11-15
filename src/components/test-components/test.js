import React from 'react'

export default function test() {
    return (
        <div>
            <h1>{process.env.GATSBY_API_KEY} </h1>
        </div>
    )
}
