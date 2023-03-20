import { useState } from 'react'

const CountBttn = () => {
    const [count, setCount] = useState<number>(0)
    const changeCount = () => {
        setCount((prevState: number) => prevState + 1)
    }

    return (
        <>
            <button
                style={{
                    border: '1px solid black',
                    color: 'black',
                }}
                onClick={() => changeCount()}
            >
                change count ({count})
            </button>
        </>
    )
}

export default CountBttn
