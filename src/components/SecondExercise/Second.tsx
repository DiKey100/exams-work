import { useState } from 'react'
import Currency, { currencyArray } from './Currency'
import ProductList, { ProductProps } from './ProductList'
import TotalPrice from './TotalPrice'

type CartData = {
    products: ProductProps[]
}
export type CurrencyFactor = {
    factor: number
    name: string
}

const Second = () => {
    const [cartData, setCartData] = useState<CartData>({
        products: [],
    })
    const [currencyFactor, setCurrencyFactor] = useState<CurrencyFactor>({
        factor: currencyArray[0].factor,
        name: currencyArray[0].name,
    })
    const changeCurrency = (id: number) => {
        setCurrencyFactor(() => currencyArray[id - 1])
    }
    const addProductToCart = (product: ProductProps) => {
        setCartData((prevState: CartData) => ({
            products: [...prevState.products, product],
        }))
    }

    return (
        <>
            <Currency changeCurrency={changeCurrency} />
            <ProductList
                addProductToCart={addProductToCart}
                currencyFactor={currencyFactor}
            />
            <TotalPrice cartData={cartData} currency={currencyFactor} />
        </>
    )
}
export default Second
