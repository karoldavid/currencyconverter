import axios from "axios";
import { AsyncStorage } from "react-native";

const BASE_URL = "https://txf-ecb.glitch.me/";
const ENDPOINT = "rates/";

const CURRENCY_CONVERSIONS_STORAGE_KEY =
	"CURRENCY_CONVERSIONS_STORAGE_KEY:rates";

export const fetchCurrencyConversions = async () => {
	try {
		let result = await axios.get(`${BASE_URL}${ENDPOINT}`);
		return result;
	} catch (error) {
		console.log(error.response);
	}
};