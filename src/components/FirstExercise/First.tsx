import CountBttn from './CountBttn/CountBttn'

const First = () => {
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
            <CountBttn />
            <CountBttn />
            <CountBttn />
        </div>
    )
}

export default First
