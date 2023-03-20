type Props = {
    changeCurrency: (id: number) => void
}

type CurrencyProps = {
    id: number
    name: string
    factor: number
}

export const currencyArray: CurrencyProps[] = [
    {
        id: 1,
        name: 'EUR',
        factor: 1,
    },
    {
        id: 2,
        name: 'USD',
        factor: 1.07,
    },
    {
        id: 3,
        name: 'UAH',
        factor: 39.34,
    },
    {
        id: 4,
        name: 'PLN',
        factor: 4.71,
    },
]
const Currency = ({ changeCurrency }: Props) => {
    return (
        <div>
            {currencyArray.map(({ id, name, factor }: CurrencyProps) => (
                <button key={id} onClick={() => changeCurrency(id)}>
                    {name}
                </button>
            ))}
        </div>
    )
}

export default Currency
