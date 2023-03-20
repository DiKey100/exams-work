import { changePrice } from 'utils/currency'
import { ProductProps } from './ProductList'
import { CurrencyFactor } from './Second'
import { useCallback } from 'react'

type Props = {
    cartData: {
        products: ProductProps[]
    }
    currency: CurrencyFactor
}

const TotalPrice = ({ cartData, currency }: Props) => {
    const getTotalPrice = useCallback(() => {
        let totalPrice = 0
        cartData.products.forEach((product) => {
            totalPrice += changePrice(product.price, currency.factor)
        })
        return totalPrice
    }, [cartData, currency])

    return (
        <div
            style={{
                marginTop: '20px',
            }}
        >
            total: {getTotalPrice()}
        </div>
    )
}

export default TotalPrice
