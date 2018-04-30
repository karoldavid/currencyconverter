import {
	AMOUNT_CHANGE,
	CURRENCY_CHANGE,
	CONVERT_CURRENCY,
	SET_CONVERSIONS,
	FETCH_CONVERSIONS,
	FETCH_CONVERSIONS_ERROR
} from "./types";
import { fetchCurrencyConversions } from "../api/api";

export const getCurrencyConversions = () => async dispatch => {
	dispatch({
		type: FETCH_CONVERSIONS
	});
	let result = await fetchCurrencyConversions();

	console.log("result", result)

	if (result && result.status === 200) {
		dispatch({
			type: SET_CONVERSIONS,
			payload: result.data
		});
	} else {
		dispatch({
			type: FETCH_CONVERSIONS_ERROR
		});
	}
};

export const amountChange = amount => {
	return {
		type: AMOUNT_CHANGE,
		payload: amount
	};
};

export const currencyChange = currency => {
	return {
		type: CURRENCY_CHANGE,
		payload: currency
	};
};

export const convertCurrency = () => {
	return {
		type: CONVERT_CURRENCY
	};
};
