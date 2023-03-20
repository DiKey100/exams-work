type Props = {
    title: string
    price: number
    addProductToCart: () => void
    currencyFactor: {
        factor: number
        name: string
    }
}

const ProductListItem = ({
    title,
    price,
    addProductToCart,
    currencyFactor,
}: Props) => {
    const nextPrice = Math.trunc(price * currencyFactor.factor)

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '20px',
            }}
        >
            <div
                style={{
                    fontSize: '30px',
                    marginBottom: '15px',
                    fontWeight: 'bold',
                }}
            >
                {title}
            </div>
            <div
                style={{
                    fontSize: '21px',
                    marginBottom: '15px',
                }}
            >
                This is {title}
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    fontSize: '20px',
                }}
            >
                {currencyFactor.name} {nextPrice}
            </div>
            <button
                style={{
                    color: 'black',
                }}
                onClick={() => addProductToCart()}
            >
                Buy
            </button>
        </div>
    )
}

export default ProductListItem
