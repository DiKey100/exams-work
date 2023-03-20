export const changePrice = (price: number, factor: number) => {
    return Math.trunc(price * factor);
}