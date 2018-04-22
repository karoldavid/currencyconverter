import {
	AMOUNT_CHANGE,
	CURRENCY_CHANGE,
	CONVERT_CURRENCY,
	SET_CONVERSIONS
} from "./types";
import { fetchCurrencyConversions } from "../api/api";

export const getCurrencyConversions = () => async dispatch => {
	let data = await fetchCurrencyConversions();

	dispatch({
		type: SET_CONVERSIONS,
		payload: data
	});
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
