import First from 'components/FirstExercise/First'
import Second from 'components/SecondExercise/Second'

const Main = () => {
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
            <First />
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
