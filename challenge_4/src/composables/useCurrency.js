export default function useCurrency() {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 2,
        }).format(value);
    };
    return { formatCurrency };
}