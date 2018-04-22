import {
	AMOUNT_CHANGE,
	CURRENCY_CHANGE,
	CONVERT_CURRENCY,
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
	convertedAmount: ""
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_CONVERSIONS:
			const { base, time, rates } = action.payload;
			return {
				...state,
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
