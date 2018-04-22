export const convertCurrency = ({
	rates,
	amount,
	fromCurrency,
	toCurrency
}) => {
	const fromRate = rates.filter(rate => rate.currency === fromCurrency)[0]
		.rate;
	const toRate = rates.filter(rate => rate.currency === toCurrency)[0].rate;
	return amount * toRate / fromRate;
};
