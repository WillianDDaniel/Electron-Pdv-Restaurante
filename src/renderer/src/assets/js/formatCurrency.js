function formatCurrency(value) {
    const currency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return currency.format(value);
}

export default formatCurrency