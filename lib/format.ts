export function formatCurrency(amount: number) {
    // Ensure two decimal places for cents
    // Treat amount as a number in dollars (not cents)
        return amount.toLocaleString(undefined, {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
}
