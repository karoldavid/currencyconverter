import {
	AMOUNT_CHANGE,
	CURRENCY_CHANGE,
	CONVERT_CURRENCY,
	FETCH_CONVERSIONS,
	SET_CONVERSIONS
} from "../actions/types";

import { convertCurrency } from "../utils/helpers";

const INITIAL_STATE = {
	base: "",
	rates: [],
	time: "",
	amount: "0.00",
	fromCurrency: "EUR",
	toCurrency: "USD",
	convertedAmount: "",
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_CONVERSIONS:
			return {
				...state,
				loading: true
			};

		case SET_CONVERSIONS:
			const { base, time, rates } = action.payload;
			return {
				...state,
				loading: false,
				base: base,
				time: time,
				rates: [...rates, { currency: base, rate: "1.00" }]
			};
		case AMOUNT_CHANGE:
			return { ...state, amount: action.payload };
		case CURRENCY_CHANGE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case CONVERT_CURRENCY:
			return {
				...state,
				convertedAmount: convertCurrency(state)
			};
		default:
			return state;
	}
};
