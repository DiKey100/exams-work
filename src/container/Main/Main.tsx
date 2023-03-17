import First from 'components/FirstExercise/First'
import Second from 'components/SecondExercise/Second'
import { useState } from 'react'

type CountData = {
    countClick: number
}

const Main = () => {
    const [countData, setCountData] = useState<CountData>({
        countClick: 0,
    })
    const changeCountButton = (count: number) => {
        setCountData((prevState: CountData) => ({
            countClick: prevState.countClick + count,
        }))
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '25px',
            }}
        >
            <div
                style={{
                    margin: '20px',
                }}
            >
                First exercise
            </div>
            <First
                countData={countData}
                changeCountButton={changeCountButton}
            />
            <div
                style={{
                    marginBottom: '20px',
                }}
            >
                Second exercise
            </div>
            <Second />
        </div>
    )
}

export default Main
