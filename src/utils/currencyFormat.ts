export const formatCurrency = (price: number) => {
    return new Intl.NumberFormat('by', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
};
