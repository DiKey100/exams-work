import productsArray from 'utils/productsArray'
import ProductListItem from './ProductListItem'

export type ProductProps = {
    id: number
    title: string
    price: number
}
type Props = {
    addProductToCart: (product: ProductProps) => void
    currencyFactor: {
        factor: number
        name: string
    }
}

const ProductList = ({ addProductToCart, currencyFactor }: Props) => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                {productsArray.map(({ id, title, price }: ProductProps) => (
                    <div key={id}>
                        <ProductListItem
                            title={title}
                            price={price}
                            addProductToCart={() =>
                                addProductToCart({ id, title, price })
                            }
                            currencyFactor={currencyFactor}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductList
