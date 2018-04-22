import { StackNavigator } from "react-navigation";
import CurrencyConversionScreen from "../screens/CurrencyConversionScreen";

export const MainNavigator = StackNavigator(
	{
		CurrencyConversion: { screen: CurrencyConversionScreen }
	},
	{
		initialRouteName: "CurrencyConversion"
	}
);
