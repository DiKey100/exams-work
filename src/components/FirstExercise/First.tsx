import { useState } from 'react'

type Props = {
    countData: {
        countClick: number
    }
    changeCountButton: (count: number) => void
}

const First = ({ countData, changeCountButton }: Props) => {
    const [count, setCount] = useState<number>(0)
    const changeCount = () => {
        setCount((prevState: number) => prevState + 1)
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '50px',
            }}
        >
            <button
                style={{
                    border: '1px solid black',
                    color: 'black',
                }}
                onClick={changeCount}
            >
                change count ({count})
            </button>
            <button
                style={{
                    border: '1px solid black',
                    color: 'black',
                }}
                onClick={changeCount}
            >
                change count ({count})
            </button>
            <button
                style={{
                    border: '1px solid black',
                    color: 'black',
                }}
                onClick={changeCount}
            >
                change count ({count})
            </button>
        </div>
    )
}

export default First
