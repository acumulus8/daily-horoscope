import React from "react";
import { useMessageHandler } from "../contexts/MessageGenerator";
import { monthNames } from "../utils/month-names";

function Header() {
	const { handleSetDate } = useMessageHandler();

	const getDate = () => {
		const date = new Date();
		const month = monthNames[date.getMonth()];
		const day = date.getDate();
		const year = date.getFullYear();
		return handleSetDate(`${month} ${day}, ${year}`);
	};

	return (
		<>
			<section>
				<h1>Get Your Horoscrope!</h1>
				<p>use the date picker below to select your birthday and get your daily horoscope!</p>
				<p>Today's date is: {getDate()}</p>
			</section>
		</>
	);
}

export default Header;
