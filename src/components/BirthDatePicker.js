import React from "react";
import { DatePicker } from "antd";

function BirthDatePicker() {
	const onDateChange = (date, dateString) => {
		console.log(date, dateString);
	};

	return (
		<div>
			<DatePicker onChange={onDateChange} />
		</div>
	);
}

export default BirthDatePicker;
