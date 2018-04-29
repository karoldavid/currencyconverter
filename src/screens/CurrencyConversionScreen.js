import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Picker,
	TouchableWithoutFeedback,
	Keyboard,
	Dimensions,
	ActivityIndicator
} from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";
import * as actions from "../actions";

class CurrencyConversionScreen extends Component {
	static navigationOptions = {
		title: "Currency Converter"
	};

	componentDidMount() {
		this.props.getCurrencyConversions();
	}

	currencyPicker(prop) {
		return (
			<Picker
				selectedValue={this.props[prop]}
				style={{ height: 50, width: 100, marginTop: 0 }}
				onValueChange={value =>
					this.props.currencyChange({ prop: prop, value })
				}
			>
				{this.props.rates.map((rate, index) => (
					<Picker.Item
						key={index}
						label={rate.currency}
						value={rate.currency}
					/>
				))}
			</Picker>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				{this.props.loading ? (
					<View>
						<ActivityIndicator size="large" color="#0000ff" />
					</View>
				) : (
					<View>
						<View style={{ flexDirection: "row" }}>
							<Text style={{ marginTop: 15 }}>from</Text>
							{this.currencyPicker("fromCurrency")}
							<Text style={{ marginTop: 15 }}>to</Text>
							{this.currencyPicker("toCurrency")}
						</View>

						<TouchableWithoutFeedback
							onPress={Keyboard.dismiss}
							accessible={false}
						>
							<View style={styles.container}>
								<FormLabel>Amount</FormLabel>
								<FormInput
									containerStyle={{
										width:
											Dimensions.get("window").width * 0.4
									}}
									placeholder="Please Enter Amount"
									returnKeyType="done"
									keyboardType="numeric"
									maxLength={10}
									value={this.props.amount}
									onChangeText={amount =>
										this.props.amountChange(amount)
									}
								/>
							</View>
						</TouchableWithoutFeedback>

						<View style={{ flex: 1 }}>
							<Button
								title="CONVERT"
								onPress={() => {
									Keyboard.dismiss();
									this.props.convertCurrency();
								}}
							/>
						</View>
						<View style={{ flex: 1 }}>
							<Text>
								{`${this.props.amount} ${
									this.props.fromCurrency
								}`}{" "}
								is
								{` ${Number(this.props.convertedAmount).toFixed(
									2
								)}`}
								{` ${this.props.toCurrency}`}
							</Text>
						</View>
					</View>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});

const mapStateToProps = ({
	conversion: { rates, fromCurrency, toCurrency, amount, convertedAmount, loading }
}) => {
	return {
		rates: _.orderBy(rates, "currency", "asc"),
		fromCurrency,
		toCurrency,
		amount,
		convertedAmount,
		loading
	};
};

export default connect(mapStateToProps, actions)(CurrencyConversionScreen);
